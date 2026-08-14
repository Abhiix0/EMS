import { NextRequest } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { storageUploadSchema } from "@/lib/api/schemas";
import {
  forbidden,
  ok,
  serverError,
  unauthorized,
  validationError,
} from "@/lib/api/response";

// Node runtime required for Buffer.
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  // ── 1. Authentication ──────────────────────────────────────────────────────
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return unauthorized();

  const userId = session.user.id;

  try {
    const form = await req.formData();

    // ── 2. Validate text fields with Zod ───────────────────────────────────
    const parsed = storageUploadSchema.safeParse({
      bucket: form.get("bucket"),
      path: form.get("path"),
    });
    if (!parsed.success) return validationError(parsed.error.issues);

    const { bucket, path } = parsed.data;

    // ── 3. Verify the file is present ──────────────────────────────────────
    const file = form.get("file");
    if (!(file instanceof Blob)) {
      return validationError([
        { code: "custom", path: ["file"], message: "file is required" },
      ]);
    }

    // ── 4. Path ownership enforcement ─────────────────────────────────────
    // Paths must be scoped to the authenticated user's ID so users cannot
    // overwrite each other's files.
    if (!path.startsWith(`${userId}/`)) {
      return forbidden("Upload path must be scoped to your own user directory");
    }

    // ── 5. Upload ──────────────────────────────────────────────────────────
    const buffer = Buffer.from(await file.arrayBuffer());

    const { data, error } = await supabaseAdmin.storage
      .from(bucket)
      .upload(path, buffer, {
        cacheControl: "3600",
        upsert: false,
        contentType: file.type || "application/octet-stream",
      });

    if (error) {
      console.error("[upload] storage error:", error.message);
      return serverError(error.message);
    }

    const { data: pub } = supabaseAdmin.storage
      .from(bucket)
      .getPublicUrl(data.path);

    return ok({ path: data.path, publicUrl: pub.publicUrl });
  } catch (err: unknown) {
    console.error("[upload] unexpected error");
    return serverError(err instanceof Error ? err.message : "Unknown error");
  }
}
