import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createOrUpdateUser } from "@/app/actions/auth";
import { googleSubToUuid } from "@/lib/utils/id";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || "ems_nextauth_secret_key_8923471092384",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email) {
          return null;
        }
        const email = credentials.email.trim();
        if (!email) return null;

        const id = googleSubToUuid(email);
        const name = email.split("@")[0] || "User";

        return {
          id,
          name,
          email,
          image: null,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log(
        "[NextAuth] signIn callback. User:",
        user,
        "Account:",
        account
      );
      if (user && user.id && user.email) {
        try {
          const result = await createOrUpdateUser({
            id: user.id,
            email: user.email,
            name: user.name || user.email.split("@")[0] || "User",
            image: user.image,
          });
          console.log("[NextAuth] createOrUpdateUser result:", result);
        } catch (err) {
          console.error("[NextAuth] createOrUpdateUser error:", err);
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        console.log("[NextAuth] jwt attaching user.id:", user.id);
        token.sub = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.sub;
        console.log("[NextAuth] session:", session);
      }
      return session;
    },
  },
  session: { strategy: "jwt" },
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
