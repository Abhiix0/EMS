"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginDialog } from "@/components/ui/login-dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/** Landing navbar component with CIE branding, navigation links, login/session controls, and MLR Official Season ribbon. */
export function LandingNavbar() {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || mobileMenuOpen
          ? "border-b border-black/5 bg-white/80 shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-[#0A0B1E]/80"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-8 sm:px-10">
        {/* Left: CIE Logo */}
        <Link href="/home" className="flex shrink-0 items-center">
          <Image
            src="/logos/cie.png"
            alt="CIE Logo"
            width={120}
            height={40}
            priority
            className="h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        {/* Center-Right: Desktop Nav Links & Session/Login */}
        <div className="hidden items-center gap-8 md:flex md:mr-8 lg:mr-10">
          <Link
            href="/events"
            className="group relative py-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Events
            <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/clubs"
            className="group relative py-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Clubs
            <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
          </Link>

          {session ? (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={session.user?.image ?? ""}
                    alt={session.user?.name ?? ""}
                  />
                  <AvatarFallback>
                    {session.user?.name?.[0] ?? "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <Link href="/user/profile">
                  <DropdownMenuItem className="cursor-pointer">
                    Profile
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer text-red-500 hover:text-red-600"
                  onClick={() => signOut()}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <LoginDialog>
              <Button
                variant="default"
                className="h-8 rounded-full px-4 text-sm font-medium"
              >
                Login
              </Button>
            </LoginDialog>
          )}
        </div>

        {/* Mobile: Hamburger Button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="grid h-10 w-10 place-items-center rounded-lg text-foreground/80 transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Far Right: Hanging Red MLR Official Season Ribbon (Desktop/Tablet) */}
      <a
        id="mlr-trust-badge"
        href="#mlr"
        aria-label="MLR 2027 Official Season Badge"
        className="group pointer-events-auto absolute right-4 top-0 z-50 hidden w-[62px] origin-top transition-all duration-300 ease-out hover:translate-y-1.5 sm:right-6 sm:w-[68px] md:right-8 lg:right-10 lg:w-[72px] md:block drop-shadow-[0_10px_20px_rgba(239,68,68,0.3)] hover:drop-shadow-[0_16px_28px_rgba(239,68,68,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] focus-visible:ring-offset-2"
      >
        <div className="animate-ribbon origin-top">
          <Image
            src="/badges/mlr-trust-badge-2027-red.svg"
            alt="MLR 2027 Official Season Badge"
            width={72}
            height={126}
            priority
            referrerPolicy="no-referrer"
            className="h-auto w-full select-none transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </a>

      {/* Mobile Slide-down Panel */}
      {mobileMenuOpen && (
        <div className="border-t border-black/5 bg-white/95 px-8 py-6 space-y-4 backdrop-blur-md animate-in slide-in-from-top-2 duration-200 dark:border-white/10 dark:bg-[#0A0B1E]/95 md:hidden">
          <div className="flex flex-col space-y-3">
            <Link
              href="/events"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Events
            </Link>
            <Link
              href="/clubs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Clubs
            </Link>
          </div>

          <div className="border-t border-border/60 pt-4">
            {session ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src={session.user?.image ?? ""}
                      alt={session.user?.name ?? ""}
                    />
                    <AvatarFallback>
                      {session.user?.name?.[0] ?? "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col overflow-hidden">
                    <span className="truncate text-sm font-medium text-foreground">
                      {session.user?.name}
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      {session.user?.email}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <Link
                    href="/user/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-foreground/80 hover:text-foreground"
                  >
                    Profile
                  </Link>
                  <span className="text-muted-foreground">·</span>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      signOut();
                    }}
                    className="text-sm font-medium text-red-500 hover:text-red-600"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <LoginDialog triggerClassName="w-full">
                <Button
                  variant="default"
                  className="h-9 w-full rounded-full text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Button>
              </LoginDialog>
            )}
          </div>

          {/* Mobile MLR Official Season Badge Link */}
          <div className="flex flex-col items-center justify-center border-t border-border/40 pt-4 text-center">
            <a
              href="#mlr"
              className="inline-flex items-center gap-2 rounded-full border border-[#EF4444]/30 bg-[#EF4444]/10 px-3.5 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#EF4444] hover:bg-[#EF4444]/20 transition-colors"
            >
              <span className="size-2 rounded-full bg-[#EF4444] animate-pulse" />
              <span>MLR · OFFICIAL 2027 SEASON</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

LandingNavbar.displayName = "LandingNavbar";

export default LandingNavbar;
