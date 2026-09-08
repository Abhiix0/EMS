"use client";
// components/providers.tsx

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/theme-provider";
import type { Session } from "next-auth";

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: Session | null;
}) {
  return (
    <SessionProvider
      session={session}
      refetchOnWindowFocus={false}
      refetchWhenOffline={false}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  );
}
