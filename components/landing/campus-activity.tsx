"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { usePeopleIndexTransition } from "./use-people-index-transition";
import { TornPaperDivider, MarkerSquiggle } from "./doodles";

/**
 * YOUR CAMPUS HAS A LOT GOING ON — Section 04: The Campus Index
 *
 * Volcanic Ash & Zine Collage Edition:
 * - Obsidian Charcoal (#212529) backdrop creating a high-contrast volcanic band.
 * - Monolithic chapter heading in Permanent Marker display typography with Lava Orange (#FB5607) highlight.
 * - Three tactile neo-brutal index rows (EVENTS, CLUBS, EXPERIENCES) with tactile press feedback.
 * - Electric Violet (#8338EC) & Lava Orange (#FB5607) accent strips and arrow affordances.
 */

interface IndexRow {
  number: string;
  category: string;
  supporting: string;
  href: string;
  accentColor: "orange" | "violet";
  previewLabel: string;
  previewItems: string[];
}

const ROWS: IndexRow[] = [
  {
    number: "01",
    category: "EVENTS",
    supporting: "What's happening around campus?",
    href: "/events",
    accentColor: "orange",
    previewLabel: "CAMPUS CALENDAR",
    previewItems: ["EQUINOX", "HUSTLE MANIA", "WELCOME 2.0"],
  },
  {
    number: "02",
    category: "CLUBS",
    supporting: "Find your people.",
    href: "/clubs",
    accentColor: "violet",
    previewLabel: "STUDENT GUILDS",
    previewItems: ["CIE", "CAME", "SCOPE", "CSI", "NSS"],
  },
  {
    number: "03",
    category: "EXPERIENCES",
    supporting: "More ways to get involved.",
    href: "#get-involved",
    accentColor: "orange",
    previewLabel: "ACTIVE INITIATIVES",
    previewItems: ["INCUBATION", "HACKATHONS", "COHORTS"],
  },
];

export default function CampusActivity() {
  usePeopleIndexTransition();

  return (
    <section
      id="campus-activity"
      aria-labelledby="campus-index-heading"
      className="relative bg-[#212529] text-[#E9ECEF] py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-10 border-b-2 border-[#212529] overflow-hidden"
    >
      {/* Torn Paper Boundary at Top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%] overflow-hidden leading-none pointer-events-none z-20">
        <TornPaperDivider fill="#212529" flip />
      </div>

      {/* Anchor targets for direct navigation */}
      <div
        id="campus-index"
        className="relative -top-24 invisible"
        aria-hidden="true"
      />
      <div
        id="experiences"
        className="relative -top-24 invisible"
        aria-hidden="true"
      />

      {/* Subtle halftone dot matrix */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#E9ECEF 1px, transparent 1px), linear-gradient(to right, #E9ECEF 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* ========================================================
            PART A: LARGE EDITORIAL HEADING (CHAPTER DIVIDER)
           ======================================================== */}
        <header id="campus-index-header" className="mb-16 sm:mb-24 lg:mb-28">
          {/* Chapter Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-white/15">
            <div className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-[#FB5607] border border-white/40" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FB5607] font-black">
                THE CAMPUS INDEX · CHAPTER 04
              </span>
            </div>
            <span className="font-mono text-xs tracking-wider text-[#E9ECEF]/60 uppercase font-bold hidden sm:block">
              ECOSYSTEM DIRECTORY
            </span>
          </div>

          {/* Section Chapter Headline */}
          <div className="mt-10 sm:mt-12">
            <h2
              id="campus-index-heading"
              className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display uppercase tracking-tight text-[#E9ECEF] leading-[0.92]"
            >
              YOUR CAMPUS HAS
              <br />
              <span className="text-[#FB5607] inline-block relative">
                A LOT GOING ON.
                <MarkerSquiggle className="w-full h-3 sm:h-5 text-[#8338EC] -mt-1 sm:-mt-2" />
              </span>
            </h2>
          </div>
        </header>

        {/* ========================================================
            PART B: THREE LARGE EDITORIAL ROWS (THE INDEX)
           ======================================================== */}
        <div
          role="navigation"
          aria-label="Campus Ecosystem Index"
          className="border-t-2 border-white/20 divide-y-2 divide-white/10"
        >
          {ROWS.map((row) => {
            const isOrange = row.accentColor === "orange";

            return (
              <motion.div key={row.number} className="campus-index-row">
                <Link
                  href={row.href}
                  aria-label={`${row.category}: ${row.supporting}`}
                  className="group relative block py-8 sm:py-12 lg:py-14 px-4 sm:px-8 -mx-4 sm:-mx-8 rounded-none transition-all duration-200 hover:bg-white/[0.04] hover:translate-x-1 sm:hover:translate-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB5607] focus-visible:ring-offset-4 focus-visible:ring-offset-[#212529] motion-reduce:hover:translate-x-0"
                >
                  {/* Left Accent Stripe Indicator on Hover */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-2 transition-all duration-200 opacity-0 group-hover:opacity-100 ${
                      isOrange ? "bg-[#FB5607]" : "bg-[#8338EC]"
                    }`}
                    aria-hidden="true"
                  />

                  {/* Editorial Row Content Grid */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
                    {/* Left: Number + Dominant Category Title + Supporting Text */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6 lg:gap-8 min-w-0">
                      {/* Classification Number */}
                      <span className="font-mono text-base sm:text-lg font-black text-[#FB5607] tracking-widest shrink-0">
                        {row.number}
                      </span>

                      <div>
                        {/* Dominant Category Title */}
                        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#E9ECEF] group-hover:text-[#FB5607] transition-colors leading-none">
                          {row.category}
                        </h3>

                        {/* Short Supporting Statement in Script */}
                        <p className="mt-3 text-lg sm:text-xl lg:text-2xl text-[#E9ECEF]/80 group-hover:text-white transition-colors font-script font-bold">
                          &ldquo;{row.supporting}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Right: Subtle Index Preview Fragment + Tactile Navigation Arrow */}
                    <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-8 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10">
                      {/* Optional Tiny Restrained Preview Fragment */}
                      <div className="flex flex-col items-start lg:items-end">
                        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E9ECEF]/50 group-hover:text-[#E9ECEF]/80 transition-colors font-bold">
                          {row.previewLabel}
                        </span>
                        <div className="flex items-center gap-2 mt-1 font-mono text-xs text-[#E9ECEF]/70 group-hover:text-white transition-colors font-semibold">
                          <span
                            className={`inline-block size-2 rounded-full ${
                              isOrange ? "bg-[#FB5607]" : "bg-[#8338EC]"
                            }`}
                          />
                          <span className="truncate max-w-[220px] sm:max-w-[300px]">
                            {row.previewItems.join(" · ")}
                          </span>
                        </div>
                      </div>

                      {/* Tactile Neo-Brutal Arrow Affordance */}
                      <div className="size-12 sm:size-14 rounded-xl border-2 border-white/20 bg-white/[0.04] flex items-center justify-center text-[#E9ECEF] group-hover:text-[#212529] group-hover:border-[#FB5607] group-hover:bg-[#FB5607] group-hover:translate-x-1.5 transition-all duration-200 shrink-0 shadow-[3px_3px_0px_0px_#FB5607]">
                        <ArrowRight className="size-5 sm:size-6 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
