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
          ? "border-b border-[#212529]/10 bg-[#E9ECEF]/90 paper-shadow backdrop-blur-md"
          : "border-b border-[#212529]/5 bg-[#E9ECEF]/75 backdrop-blur-xs"
      )}
    >
      <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 font-body">
        {/* Left: CIE Logo + Indie Star Motif */}
        <Link href="/home" className="flex shrink-0 items-center gap-2.5 group">
          <span className="text-[#FB5607] text-lg select-none group-hover:rotate-12 transition-transform duration-200">
            ★
          </span>
          <Image
            src="/logos/cie.png"
            alt="CIE Logo"
            width={120}
            height={40}
            priority
            className="h-8 sm:h-9 w-auto object-contain filter contrast-125"
          />
          <span className="font-display text-xs tracking-wider text-[#212529] hidden sm:inline-block px-2 py-0.5 rounded-md bg-white/70 border border-[#212529]/10 paper-shadow-soft">
            EMS
          </span>
        </Link>

        {/* Center-Right: Desktop Nav Links & Session/Login */}
        <div className="hidden items-center gap-8 md:flex md:mr-8 lg:mr-10">
          <Link
            href="/events"
            className="group relative py-1 text-sm font-semibold text-[#212529] uppercase tracking-wider transition-colors hover:text-[#FB5607]"
          >
            Events
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#FB5607] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/clubs"
            className="group relative py-1 text-sm font-semibold text-[#212529] uppercase tracking-wider transition-colors hover:text-[#8338EC]"
          >
            Clubs
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#8338EC] transition-all duration-300 group-hover:w-full" />
          </Link>

          {session ? (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB5607]">
                <Avatar className="h-8 w-8 border border-[#212529]/20 paper-shadow-soft">
                  <AvatarImage
                    src={session.user?.image ?? ""}
                    alt={session.user?.name ?? ""}
                  />
                  <AvatarFallback className="bg-[#212529] text-[#E9ECEF] font-bold">
                    {session.user?.name?.[0] ?? "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 bg-white/95 border border-[#212529]/10 paper-shadow-lift rounded-xl text-[#212529]"
                align="end"
              >
                <Link href="/user/profile">
                  <DropdownMenuItem className="cursor-pointer font-medium hover:bg-[#E9ECEF] focus:bg-[#E9ECEF]">
                    Profile
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator className="bg-[#212529]/10" />
                <DropdownMenuItem
                  className="cursor-pointer font-bold text-[#FB5607] hover:bg-[#E9ECEF] focus:bg-[#E9ECEF]"
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
                className="h-9 rounded-full px-5 text-xs font-bold uppercase tracking-widest bg-[#212529] text-[#E9ECEF] hover:bg-[#212529] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_-2px_rgba(251,86,7,0.35)] transition-all duration-200 cursor-pointer"
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
        href="https://mlrit.ac.in/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="MLR 2026 Official Season Badge"
        className="group pointer-events-auto absolute right-4 top-0 z-50 hidden w-[62px] origin-top transition-all duration-300 ease-out hover:translate-y-1.5 sm:right-6 sm:w-[68px] md:right-8 lg:right-10 lg:w-[72px] md:block drop-shadow-[0_10px_20px_rgba(239,68,68,0.3)] hover:drop-shadow-[0_16px_28px_rgba(239,68,68,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] focus-visible:ring-offset-2"
      >
        <div className="animate-ribbon origin-top">
          <Image
            src="/badges/mlr-trust-badge-2026-red.svg"
            alt="MLR 2026 Official Season Badge"
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
        <div className="border-t border-[#212529]/10 bg-[#E9ECEF]/95 backdrop-blur-md px-8 py-6 space-y-4 paper-shadow animate-in slide-in-from-top-2 duration-200 md:hidden">
          <div className="flex flex-col space-y-3 font-semibold uppercase tracking-wider text-sm">
            <Link
              href="/events"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#212529] transition-colors hover:text-[#FB5607]"
            >
              Events
            </Link>
            <Link
              href="/clubs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#212529] transition-colors hover:text-[#8338EC]"
            >
              Clubs
            </Link>
          </div>

          <div className="border-t border-[#212529]/10 pt-4">
            {session ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9 border border-[#212529]/15">
                    <AvatarImage
                      src={session.user?.image ?? ""}
                      alt={session.user?.name ?? ""}
                    />
                    <AvatarFallback className="bg-[#212529] text-[#E9ECEF] font-bold">
                      {session.user?.name?.[0] ?? "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col overflow-hidden">
                    <span className="truncate text-sm font-bold text-[#212529]">
                      {session.user?.name}
                    </span>
                    <span className="truncate text-xs text-[#212529]/60">
                      {session.user?.email}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <Link
                    href="/user/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-[#212529] hover:text-[#8338EC]"
                  >
                    Profile
                  </Link>
                  <span className="text-[#212529]/40">·</span>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      signOut();
                    }}
                    className="text-sm font-bold text-[#FB5607] hover:underline"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <LoginDialog triggerClassName="w-full">
                <Button
                  variant="default"
                  className="h-10 w-full rounded-full text-xs font-bold uppercase tracking-widest bg-[#212529] text-[#E9ECEF] hover:bg-[#212529]/90 hover:shadow-[0_6px_16px_-2px_rgba(251,86,7,0.35)]"
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
              href="https://mlrit.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#EF4444]/20 bg-[#EF4444]/10 px-3.5 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#EF4444] hover:bg-[#EF4444]/20 transition-colors"
            >
              <span className="size-2 rounded-full bg-[#EF4444] animate-pulse" />
              <span>MLR · OFFICIAL 2026 SEASON</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

LandingNavbar.displayName = "LandingNavbar";

export default LandingNavbar;
