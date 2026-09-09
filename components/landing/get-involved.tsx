"use client";

/**
 * Get Involved section component for CIE Landing Page.
 * Volcanic Ash & Zine Scrapbook Edition.
 */
import React from "react";
import Link from "next/link";
import { LogIn, Compass, ArrowRight } from "lucide-react";
import { LoginDialog } from "@/components/ui/login-dialog";
import { useIndexInvitationTransition } from "./use-index-invitation-transition";
import { ScotchTape, MarkerSquiggle, DoodleSparkle } from "./doodles";

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
        className="relative rounded-2xl sm:rounded-3xl border-2 border-[#212529] bg-white p-8 sm:p-14 lg:p-18 shadow-[8px_8px_0px_#212529,14px_14px_0px_#FB5607] overflow-hidden"
      >
        {/* Scotch Tape Accents on Corners */}
        <ScotchTape className="absolute -top-3 left-10 w-24 h-7 -rotate-2 z-20 pointer-events-none" />
        <ScotchTape className="absolute -top-3 right-10 w-24 h-7 rotate-3 z-20 pointer-events-none" />

        {/* Subtle grid pattern background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#212529 1px, transparent 1px), linear-gradient(to right, #212529 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span
              id="get-involved-badge"
              className="text-xs font-mono uppercase tracking-[0.25em] text-[#FB5607] font-black px-3 py-1 bg-[#FB5607]/10 border-2 border-[#FB5607] rounded-sm"
            >
              PARTICIPATE &amp; LEAD · OFFICIAL PASS
            </span>
            <DoodleSparkle className="size-4 text-[#FB5607]" />
          </div>

          <div className="relative inline-block my-2">
            <h2
              id="get-involved-heading"
              className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-[#212529]"
            >
              GET INVOLVED
            </h2>
            <MarkerSquiggle className="w-full h-3 text-[#FB5607] -mt-1" />
          </div>

          <p className="mt-2 text-2xl sm:text-3xl font-script text-[#8338EC] font-bold">
            &ldquo;Don&apos;t just attend. Make it happen.&rdquo;
          </p>

          <p
            id="get-involved-copy"
            className="mt-4 text-base sm:text-lg text-[#212529]/80 max-w-xl font-medium leading-relaxed"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg text-sm font-black font-mono uppercase text-[#212529] bg-[#FB5607] border-2 border-[#212529] shadow-[4px_4px_0px_#212529] hover:shadow-[2px_2px_0px_#212529] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 cursor-pointer"
              >
                <LogIn className="size-4" />
                <span>Sign In / Student Login</span>
              </button>
            </LoginDialog>

            {/* Explore CTA Area */}
            <Link
              href="/events"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg text-sm font-bold font-mono uppercase text-[#212529] bg-white hover:bg-[#212529] hover:text-[#E9ECEF] border-2 border-[#212529] shadow-[4px_4px_0px_#212529] hover:shadow-[2px_2px_0px_#212529] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 group"
            >
              <Compass className="size-4 text-[#FB5607] group-hover:text-white" />
              <span>Explore Platform</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div
            id="get-involved-institutions"
            className="mt-12 pt-8 border-t-2 border-dashed border-[#212529]/20 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-[#212529]/70 font-bold uppercase tracking-wider"
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
