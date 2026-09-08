/**
 * app/api/auth/[...nextauth]/route.ts
 *
 * NextAuth.js catch-all API route handler. Configures the authentication provider,
 * JWT callbacks, and session handling. Validates allowable email domains (gmail.com,
 * mlrit.ac.in), creates/updates the user in Supabase upon successful sign-in, and embeds
 * the user's stable UUID in the session token.
 */

import logger from "@/lib/logger";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createOrUpdateUser } from "@/app/actions/auth";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { NextRequest } from "next/server";

const nextAuthSecret =
  process.env.NEXTAUTH_SECRET ||
  "development-fallback-secret-for-ai-studio-32-chars-minimum";

if (!process.env.NEXTAUTH_SECRET) {
  logger.warn(
    "[NextAuth] NEXTAUTH_SECRET is not set. Using development fallback secret."
  );
}

export const authOptions: NextAuthOptions = {
  secret: nextAuthSecret,

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "user@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Both fields are required.
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const email = credentials.email.trim().toLowerCase();
        if (!email) return null;

        // Allowed email domains — users with these domains are signed in
        // directly without a DB password check.
        const ALLOWED_DOMAINS = ["gmail.com", "mlrit.ac.in"];
        const emailDomain = email.split("@")[1] ?? "";
        const isAllowedDomain = ALLOWED_DOMAINS.includes(emailDomain);

        if (isAllowedDomain) {
          // Derive a stable UUID from the email so the same user always gets
          // the same ID (mirrors what the register route does).
          const { googleSubToUuid } = await import("@/lib/utils/id");
          const id = googleSubToUuid(email);
          return {
            id,
            name: email.split("@")[0],
            email,
            image: null,
          };
        }

        // Look up the user by email using the admin client (bypasses RLS so
        // this works even before the user has an active session).
        const { data: user, error } = await supabaseAdmin
          .from("users")
          .select("id, email, full_name, avatar_url")
          .eq("email", email)
          .maybeSingle();

        if (error) {
          logger.error("[NextAuth] DB lookup error during authorize");
          return null;
        }

        // No user found with this email.
        if (!user) return null;

        // The users table has no password_hash column — non-allowed-domain
        // accounts cannot authenticate via credentials.
        return null;
      },
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      // Upsert the user profile into our own users table.
      // We intentionally do NOT log the full user/account objects here
      // as they contain PII (email, name, avatar URL).
      if (user?.id && user?.email) {
        try {
          const result = await createOrUpdateUser({
            id: user.id,
            email: user.email,
            name: user.name ?? user.email.split("@")[0] ?? "User",
            image: user.image,
          });
          if (!result.success) {
            logger.warn(
              `[NextAuth] createOrUpdateUser failed for user ${user.id}: ${result.error}. Continuing sign-in.`
            );
          }
        } catch (err) {
          logger.warn(
            `[NextAuth] createOrUpdateUser threw an unexpected error for user ${user.id}. Continuing sign-in.`,
            err
          );
          // Returning false would block sign-in; log and continue so the
          // user is not silently locked out by a transient DB error.
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      // Attach the user's stable ID to the token on first sign-in only.
      if (user) {
        token.sub = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      // Expose the stable ID on the session object for use in API routes.
      if (session.user) {
        session.user.id = token.sub ?? "";
      }
      // Do NOT log session here — it contains email and other PII.
      return session;
    },
  },

  session: { strategy: "jwt" },

  useSecureCookies:
    process.env.NODE_ENV === "production" ||
    (typeof process.env.NEXTAUTH_URL === "string" &&
      process.env.NEXTAUTH_URL.startsWith("https://")),

  // Only enable NextAuth's verbose debug output in local development.
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

async function authHandler(
  req: NextRequest,
  ctx: { params: Promise<{ nextauth: string[] }> | { nextauth: string[] } }
) {
  try {
    const host =
      req?.headers?.get?.("x-forwarded-host") ||
      req?.headers?.get?.("host") ||
      "";
    const proto = req?.headers?.get?.("x-forwarded-proto") || "https";

    if (host && !host.includes("localhost")) {
      process.env.NEXTAUTH_URL = `${proto}://${host}`;
    }
  } catch {
    // Ignore header inspection failures
  }

  // NextAuth v4 returns a handler accepting NextRequest and context
  return (
    handler as (request: NextRequest, context: typeof ctx) => Promise<Response>
  )(req, ctx);
}

export { authHandler as GET, authHandler as POST };
