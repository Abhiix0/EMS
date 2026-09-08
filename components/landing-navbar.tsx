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

/** Landing navbar component with CIE branding, navigation links, login/session controls, and MLRIT ribbon. */
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
        <div className="hidden items-center gap-9 md:flex md:mr-[120px] sm:md:mr-[132px]">
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

        {/* Far Right: Hanging MLRIT Ribbon (desktop/tablet only) */}
        <div className="pointer-events-auto absolute right-6 top-0 z-10 hidden animate-in fade-in slide-in-from-top duration-700 delay-300 fill-mode-both drop-shadow-[0_12px_22px_rgba(0,0,0,0.55)] transition-[filter] hover:drop-shadow-[0_16px_28px_rgba(0,0,0,0.65)] sm:right-10 md:flex">
          <div
            className="relative flex h-[168px] w-[114px] flex-col items-center justify-start overflow-hidden pt-3.5 pb-4 text-white sm:h-[174px] sm:w-[122px]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 84%, 50% 100%, 0 84%)",
              background:
                "linear-gradient(180deg, #991B1B 0%, #EF4444 38%, #DC2626 72%, #991B1B 100%)",
            }}
          >
            {/* Top Satin Drapery / Fold Shadows */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(255,255,255,0.3)_0%,transparent_65%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-0 top-0 h-12 w-8 bg-[radial-gradient(ellipse_at_0%_0%,rgba(0,0,0,0.45)_0%,transparent_70%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute right-0 top-0 h-12 w-8 bg-[radial-gradient(ellipse_at_100%_0%,rgba(0,0,0,0.45)_0%,transparent_70%)]"
              aria-hidden="true"
            />

            {/* Inset Perimeter Border / Piping */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 145"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 5 0 L 5 120 L 50 141 L 95 120 L 95 0"
                stroke="rgba(255, 255, 255, 0.4)"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>

            {/* Center Vertical Crease / Fold Seam */}
            <div
              className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-black/25"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-1/2 w-px translate-x-[1px] bg-white/20"
              aria-hidden="true"
            />

            {/* Shield Crest Logo (Top) */}
            <div className="relative z-10 flex flex-col items-center">
              <svg
                width="54"
                height="46"
                viewBox="0 0 56 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]"
                aria-label="MLRIT Crest"
              >
                {/* Laurel Leaves (Left) */}
                <g fill="#FFFFFF" opacity="0.95">
                  <path d="M12 36C10 32 8 26 9 20C9.5 22 11 23 13 23C11 21 11 17 13 14C14 16 15 17 17 17C15 14 16 11 19 8C19.5 10 20.5 11 22 11C20.5 8 22 6 25 4C24 6.5 24 8.5 25 10C24 12 22 14 20 16C18 18 17 21 17 24C16 27 16 30 18 33C17 35 15 36 12 36Z" />
                  <path d="M14 38C16 37 18 35 19 33C17.5 33 16 34 15 35C14 36 13.5 37 14 38Z" />
                </g>
                {/* Laurel Leaves (Right) */}
                <g fill="#FFFFFF" opacity="0.95">
                  <path d="M44 36C46 32 48 26 47 20C46.5 22 45 23 43 23C45 21 45 17 43 14C42 16 41 17 39 17C41 14 40 11 37 8C36.5 10 35.5 11 34 11C35.5 8 34 6 31 4C32 6.5 32 8.5 31 10C32 12 34 14 36 16C38 18 39 21 39 24C40 27 40 30 38 33C39 35 41 36 44 36Z" />
                  <path d="M42 38C40 37 38 35 37 33C38.5 33 40 34 41 35C42 36 42.5 37 42 38Z" />
                </g>
                {/* Shield Border */}
                <path
                  d="M28 5L39 10V22C39 29 34 35 28 38C22 35 17 29 17 22V10L28 5Z"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                {/* Shield Left Half (#EF4444) */}
                <path
                  d="M28 6.5L18.5 10.8V22C18.5 28.2 22.8 33.7 28 36.5V6.5Z"
                  fill="#EF4444"
                />
                {/* Shield Right Half (#991B1B) */}
                <path
                  d="M28 6.5L37.5 10.8V22C37.5 28.2 33.2 33.7 28 36.5V6.5Z"
                  fill="#991B1B"
                />
                {/* Inner White 'M' */}
                <path
                  d="M22.5 27V15H24.5L28 21.5L31.5 15H33.5V27H31.5V18.5L28.8 23.5H27.2L24.5 18.5V27H22.5Z"
                  fill="#FFFFFF"
                />
                {/* Ribbon Tie */}
                <path
                  d="M26 40L28 42L30 40L28 41L26 40Z"
                  fill="#FFFFFF"
                  opacity="0.9"
                />
              </svg>

              {/* Brand Typography: MLRIT */}
              <span className="font-serif text-[21px] font-bold tracking-[0.08em] text-white select-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] sm:text-[23px] mt-1">
                MLRIT
              </span>

              {/* Sub-label: 🛡 OFFICIAL 🛡 */}
              <div className="flex items-center justify-center gap-1.5 mt-0.5">
                <svg
                  className="h-2.5 w-2.5 fill-white text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
                </svg>
                <span className="text-[10px] font-bold tracking-[0.14em] text-white uppercase select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] sm:text-[11px]">
                  OFFICIAL
                </span>
                <svg
                  className="h-2.5 w-2.5 fill-white text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
                </svg>
              </div>
            </div>
          </div>
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

          {/* Mobile MLRIT · OFFICIAL Text Mark */}
          <div className="flex flex-col items-center justify-center border-t border-border/40 pt-4 text-center">
            <span className="font-serif text-sm font-bold tracking-wider text-[#EF4444]">
              MLRIT
            </span>
            <div className="flex items-center justify-center gap-1 mt-0.5">
              <svg
                className="h-2 w-2 fill-[#EF4444] text-[#EF4444]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
              </svg>
              <span className="text-[9px] font-bold tracking-widest text-muted-foreground uppercase">
                OFFICIAL
              </span>
              <svg
                className="h-2 w-2 fill-[#EF4444] text-[#EF4444]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

LandingNavbar.displayName = "LandingNavbar";

export default LandingNavbar;
