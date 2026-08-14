import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { supabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs"; // ensure Node runtime

// Only these buckets may be deleted from through this generic delete endpoint.
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
    const body = await req.json();
    const { bucket, path } = body || {};

    if (typeof bucket !== "string" || typeof path !== "string") {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    // 2. Reject requests targeting buckets not in the allowlist.
    if (!ALLOWED_BUCKETS.has(bucket)) {
      return NextResponse.json(
        { error: `Bucket '${bucket}' is not permitted via this endpoint` },
        { status: 403 }
      );
    }

    // 3. Enforce that the path being deleted belongs to the authenticated user.
    //    Paths must start with <userId>/ so a user can only delete their own files.
    const userId = session.user.id as string;
    if (!path.startsWith(`${userId}/`)) {
      return NextResponse.json(
        { error: "You may only delete files within your own user directory" },
        { status: 403 }
      );
    }

    const { data, error } = await supabaseAdmin.storage.from(bucket).remove([path]);
    if (error) {
      console.error("[delete] Storage delete error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[delete] Unexpected error");
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
