/**
 * lib/supabase/admin.ts
 *
 * Server-only Supabase client initialized with the service role key. Bypasses Row Level
 * Security (RLS) for privileged backend operations such as user management, storage admin,
 * and event approvals. Must never be imported or exposed to client-side code.
 */

import { createClient } from "@supabase/supabase-js";
import logger from "@/lib/logger";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://placeholder-project.supabase.co";
const serviceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder-service-role-key";

if (
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.SUPABASE_SERVICE_ROLE_KEY
) {
  logger.warn(
    "[Supabase Admin] NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not set. " +
      "Database operations will fail until credentials are provided in settings."
  );
}

export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
