/**
 * lib/supabase/server.ts
 *
 * Server-side Supabase client factory using Next.js cookie storage. Manages session
 * cookies across Server Components, Server Actions, and API route handlers while enforcing
 * Row Level Security using the caller's authenticated session.
 */

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://placeholder-project.supabase.co";
  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      async get(name: string) {
        return (await cookieStore.get(name))?.value;
      },
      async set(name: string, value: string, options: CookieOptions) {
        cookieStore.set({ name, value, ...options });
      },
      async remove(name: string, options: CookieOptions) {
        cookieStore.set({ name, value: "", ...options, maxAge: 0 });
      },
    },
  });
}
