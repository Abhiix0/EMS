"use client";

/**
 * Get Involved section component for CIE Landing Page.
 * Phase 1 structural skeleton with section heading "GET INVOLVED"
 * and dedicated structural CTA areas for Login and Explore.
 */
import React from "react";
import Link from "next/link";
import { LogIn, Compass, ArrowRight } from "lucide-react";
import { LoginDialog } from "@/components/ui/login-dialog";
import { useIndexInvitationTransition } from "./use-index-invitation-transition";

export default function GetInvolved() {
  useIndexInvitationTransition();

  return (
    <section
      id="get-involved"
      aria-labelledby="get-involved-heading"
      className="relative py-24 sm:py-32 lg:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
      <div
        id="get-involved-card"
        className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 lg:p-16 overflow-hidden"
      >
        {/* Ambient subtle backlighting without hard gradient blobs */}
        <div className="absolute inset-0 bg-radial from-white/[0.03] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <span
            id="get-involved-badge"
            className="text-xs font-mono uppercase tracking-[0.25em] text-red-400 font-semibold mb-3"
          >
            Participate &amp; Lead
          </span>
          <h2
            id="get-involved-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            GET INVOLVED
          </h2>
          <p
            id="get-involved-copy"
            className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed"
          >
            Whether you are here to organize an event, join an innovation
            cohort, or participate in the next hackathon, jump right in.
          </p>

          {/* Structural CTA Areas: Login and Explore */}
          <div
            id="get-involved-actions"
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md"
          >
            {/* Login CTA Area */}
            <LoginDialog>
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 cursor-pointer shadow-lg shadow-black/20"
              >
                <LogIn className="size-4" />
                <span>Sign In / Student Login</span>
              </button>
            </LoginDialog>

            {/* Explore CTA Area */}
            <Link
              href="/events"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-medium text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition-all duration-200 group"
            >
              <Compass className="size-4 text-slate-400" />
              <span>Explore Platform</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div
            id="get-involved-institutions"
            className="mt-10 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400"
          >
            <span>MLR Institute of Technology</span>
            <span>•</span>
            <span>Centre for Innovation &amp; Entrepreneurship</span>
            <span>•</span>
            <span>Institution&apos;s Innovation Council</span>
          </div>
        </div>
      </div>
    </section>
  );
}
