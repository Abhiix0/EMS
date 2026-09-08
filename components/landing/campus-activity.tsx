"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { usePeopleIndexTransition } from "./use-people-index-transition";

/**
 * YOUR CAMPUS HAS A LOT GOING ON — Section 04: The Campus Index
 *
 * Editorial Directory & Chapter Divider for CIE / EMS.
 * Visual concept:
 * - Deep navy (#0A0F1D) canvas providing a strong tonal shift after the light cream Find Your People section.
 * - Monolithic chapter heading: "YOUR CAMPUS HAS A LOT GOING ON."
 * - Three large, tactile editorial navigational rows (EVENTS, CLUBS, EXPERIENCES),
 *   categorized by editorial classification numbers (01, 02, 03).
 * - Real routes: /events, /clubs, and grounded in-app anchor #get-involved.
 * - Zero fake metrics, counts, or synthetic statistics.
 * - Restrained neo-brutalist craftsmanship: thin rules, monospace coordinates,
 *   subtle crimson (#C5283D) and mint (#6EE7B7) accents, and graceful hover states.
 */

interface IndexRow {
  number: string;
  category: string;
  supporting: string;
  href: string;
  accentColor: "crimson" | "mint";
  previewLabel: string;
  previewItems: string[];
}

const ROWS: IndexRow[] = [
  {
    number: "01",
    category: "EVENTS",
    supporting: "What's happening around campus?",
    href: "/events",
    accentColor: "crimson",
    previewLabel: "CAMPUS CALENDAR",
    previewItems: ["EQUINOX", "HUSTLE MANIA", "WELCOME 2.0"],
  },
  {
    number: "02",
    category: "CLUBS",
    supporting: "Find your people.",
    href: "/clubs",
    accentColor: "mint",
    previewLabel: "STUDENT GUILDS",
    previewItems: ["CIE", "CAME", "SCOPE", "CSI", "NSS"],
  },
  {
    number: "03",
    category: "EXPERIENCES",
    supporting: "More ways to get involved.",
    href: "#get-involved",
    accentColor: "crimson",
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
      className="relative bg-[#0A0F1D] text-[#F8F9FA] py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-10 border-b-2 border-white/10 overflow-hidden"
    >
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

      {/* Subtle background coordinate grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#F8F9FA 1px, transparent 1px), linear-gradient(to right, #F8F9FA 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* ========================================================
            PART A: LARGE EDITORIAL HEADING (CHAPTER DIVIDER)
           ======================================================== */}
        <header id="campus-index-header" className="mb-16 sm:mb-24 lg:mb-28">
          {/* Chapter Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/15">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2.5 h-2.5 bg-[#C5283D] border border-white/30" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6EE7B7] font-semibold">
                THE CAMPUS INDEX · CHAPTER 04
              </span>
            </div>
            <span className="font-mono text-xs tracking-wider text-slate-400 uppercase hidden sm:block">
              ECOSYSTEM DIRECTORY
            </span>
          </div>

          {/* Section Chapter Headline */}
          <div className="mt-10 sm:mt-12">
            <h2
              id="campus-index-heading"
              className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#F8F9FA] leading-[0.92]"
            >
              YOUR CAMPUS HAS
              <br />A LOT GOING ON.
            </h2>
          </div>
        </header>

        {/* ========================================================
            PART B: THREE LARGE EDITORIAL ROWS (THE INDEX)
           ======================================================== */}
        <div
          role="navigation"
          aria-label="Campus Ecosystem Index"
          className="border-t-2 border-white/15 divide-y divide-white/10"
        >
          {ROWS.map((row) => {
            const isCrimson = row.accentColor === "crimson";

            return (
              <motion.div key={row.number} className="campus-index-row">
                <Link
                  href={row.href}
                  aria-label={`${row.category}: ${row.supporting}`}
                  className="group relative block py-8 sm:py-12 lg:py-14 px-4 sm:px-8 -mx-4 sm:-mx-8 rounded-none transition-all duration-200 hover:bg-white/[0.03] hover:translate-x-1 sm:hover:translate-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5283D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0A0F1D] motion-reduce:hover:translate-x-0"
                >
                  {/* Left Accent Stripe Indicator on Hover */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-200 opacity-0 group-hover:opacity-100 ${
                      isCrimson ? "bg-[#C5283D]" : "bg-[#6EE7B7]"
                    }`}
                    aria-hidden="true"
                  />

                  {/* Editorial Row Content Grid */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
                    {/* Left: Number + Dominant Category Title + Supporting Text */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6 lg:gap-8 min-w-0">
                      {/* Classification Number */}
                      <span className="font-mono text-sm sm:text-base font-bold text-slate-500 group-hover:text-white transition-colors tracking-widest shrink-0">
                        {row.number}
                      </span>

                      <div>
                        {/* Dominant Category Title */}
                        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F8F9FA] group-hover:text-white transition-colors leading-none">
                          {row.category}
                        </h3>

                        {/* Short Supporting Statement */}
                        <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-400 group-hover:text-slate-200 transition-colors font-serif italic sm:not-italic sm:font-sans">
                          &ldquo;{row.supporting}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Right: Subtle Index Preview Fragment + Tactile Navigation Arrow */}
                    <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-8 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/5">
                      {/* Optional Tiny Restrained Preview Fragment */}
                      <div className="flex flex-col items-start lg:items-end">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-400 transition-colors">
                          {row.previewLabel}
                        </span>
                        <div className="flex items-center gap-1.5 mt-1 font-mono text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                          <span
                            className={`inline-block size-1.5 rounded-full ${
                              isCrimson ? "bg-[#C5283D]" : "bg-[#6EE7B7]"
                            }`}
                          />
                          <span className="truncate max-w-[220px] sm:max-w-[300px]">
                            {row.previewItems.join(" · ")}
                          </span>
                        </div>
                      </div>

                      {/* Tactile Arrow Affordance */}
                      <div className="size-11 sm:size-14 rounded-full border border-white/20 bg-white/[0.02] flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/50 group-hover:bg-white/10 group-hover:translate-x-1.5 transition-all duration-200 shrink-0 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.05)]">
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
