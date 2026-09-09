"use client";

/**
 * Get Involved section component for CIE Landing Page.
 * Digital Scratchpad & Personal Sketchbook / Volcanic Ash Edition.
 */
import React from "react";
import Link from "next/link";
import { LogIn, Compass, ArrowRight } from "lucide-react";
import { LoginDialog } from "@/components/ui/login-dialog";
import { useIndexInvitationTransition } from "./use-index-invitation-transition";
import { WashiTape, MarkerSquiggle, DoodleSparkle } from "./doodles";

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
        className="relative rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-14 lg:p-18 paper-shadow-lift overflow-hidden"
      >
        {/* Washi Tape Accents on Corners */}
        <WashiTape
          color="orange"
          className="absolute -top-3 left-12 w-24 h-7 -rotate-2 z-20 pointer-events-none"
        />
        <WashiTape
          color="violet"
          className="absolute -top-3 right-12 w-24 h-7 rotate-3 z-20 pointer-events-none"
        />

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
              className="text-xs font-mono uppercase tracking-[0.25em] text-[#FB5607] font-semibold px-3.5 py-1 bg-[#FB5607]/10 border border-[#FB5607]/30 rounded-full"
            >
              PARTICIPATE &amp; LEAD · OFFICIAL PASS
            </span>
            <DoodleSparkle className="size-4 text-[#FB5607]" />
          </div>

          <div className="relative inline-block my-2">
            <h2
              id="get-involved-heading"
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-[#212529]"
            >
              GET INVOLVED
            </h2>
            <MarkerSquiggle className="w-full h-3 text-[#FB5607] -mt-1 opacity-80" />
          </div>

          <p className="mt-2 text-2xl sm:text-3xl font-script text-[#8338EC] font-bold">
            &ldquo;Don&apos;t just attend. Make it happen.&rdquo;
          </p>

          <p
            id="get-involved-copy"
            className="mt-4 text-base sm:text-lg text-[#212529]/80 max-w-xl font-sans font-normal leading-relaxed"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold font-mono uppercase text-white bg-[#212529] hover:bg-[#FB5607] paper-shadow-soft hover:shadow-[0_8px_20px_-4px_rgba(251,86,7,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <LogIn className="size-4" />
                <span>Sign In / Student Login</span>
              </button>
            </LoginDialog>

            {/* Explore CTA Area */}
            <Link
              href="/events"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold font-mono uppercase text-[#212529] bg-neutral-100 hover:bg-[#212529] hover:text-white border border-black/10 paper-shadow-soft hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
            >
              <Compass className="size-4 text-[#FB5607] group-hover:text-white" />
              <span>Explore Platform</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div
            id="get-involved-institutions"
            className="mt-12 pt-8 border-t border-dashed border-[#212529]/20 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-[#212529]/70 font-semibold uppercase tracking-wider"
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
