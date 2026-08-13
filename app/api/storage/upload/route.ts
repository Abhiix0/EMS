import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { supabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs"; // ensure Node runtime for Buffer

// Only these buckets may be written to through this generic upload endpoint.
// The event-blueprints bucket is intentionally excluded here — uploads to it
// go through /api/events/create which performs additional validation.
const ALLOWED_BUCKETS = new Set([
  "permission-letters",
  "event-reports",
  "profile-avatars",
]);

export async function POST(req: NextRequest) {
  // 1. Require a valid session.
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const form = await req.formData();

    const bucket = form.get("bucket");
    const path = form.get("path");
    const file = form.get("file");

    if (typeof bucket !== "string" || typeof path !== "string" || !(file instanceof Blob)) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    // 2. Reject requests targeting buckets not in the allowlist.
    if (!ALLOWED_BUCKETS.has(bucket)) {
      return NextResponse.json(
        { error: `Bucket '${bucket}' is not permitted via this endpoint` },
        { status: 403 }
      );
    }

    // 3. Enforce that the upload path is scoped to the authenticated user's ID
    //    so users cannot overwrite each other's files.
    //    Convention: paths must start with <userId>/
    //    (profile-avatars, permission-letters, and event-reports all follow this pattern)
    const userId = session.user.id as string;
    if (!path.startsWith(`${userId}/`)) {
      return NextResponse.json(
        { error: "Upload path must be scoped to your own user directory" },
        { status: 403 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { data, error } = await supabaseAdmin.storage
      .from(bucket)
      .upload(path, buffer, {
        cacheControl: "3600",
        upsert: false,
        contentType: (file as any).type || "application/octet-stream",
      });

    if (error) {
      console.error("[upload] Storage upload error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const { data: pub } = supabaseAdmin.storage.from(bucket).getPublicUrl(data.path);

    return NextResponse.json({ path: data.path, publicUrl: pub.publicUrl }, { status: 200 });
  } catch (err: any) {
    console.error("[upload] Unexpected error");
    return NextResponse.json({ error: err?.message ?? "Unknown error" }, { status: 500 });
  }
}
