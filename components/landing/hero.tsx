"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { motion } from "motion/react";
import { useHeroHappeningTransition } from "./use-hero-happening-transition";
import {
  CrownDoodle,
  MarkerSquiggle,
  DoodleStar,
  DoodleArrow,
  DoodleSmiley,
  WashiTape,
  PencilAsterisk,
} from "./doodles";

/**
 * Hero Section — Digital Scratchpad & Personal Sketchbook
 * with custom "Volcanic Ash" color system:
 * - Pale Ash Paper: #E9ECEF
 * - Soft Obsidian Ink: #212529
 * - Lava Orange Highlighter: #FB5607
 * - Electric Violet Felt Pen: #8338EC
 */
export default function Hero() {
  useHeroHappeningTransition();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full min-h-[calc(100vh-5rem)] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 flex items-center justify-center overflow-x-clip bg-[#E9ECEF] text-[#212529]"
    >
      {/* Subtle Graph / Grid Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(33, 37, 41, 0.035) 1px, transparent 1px), linear-gradient(to right, rgba(33, 37, 41, 0.035) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 45%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 45%, black 40%, transparent 100%)",
        }}
      />

      {/* Main Hero Container — Asymmetric Editorial Collage */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
          {/* ========================================================================= */}
          {/* LEFT SIDE: EMS STATUS, ZINE HEADLINE, SCRAPBOOK NOTE, CALL TO ACTIONS     */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left"
          >
            <div
              id="hero-editorial-lift"
              className="w-full flex flex-col items-start text-left"
            >
              {/* 1. EMS Status Badge with Washi Tape Accent */}
              <div className="relative mb-6 sm:mb-8">
                <WashiTape
                  color="orange"
                  className="absolute -top-2.5 -left-3 w-16 rotate-[-5deg] z-10"
                />
                <div
                  id="ems-status-pill"
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-black/10 bg-white/90 paper-shadow-soft text-xs font-mono font-medium text-[#212529] tracking-wider select-none"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB5607] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FB5607]" />
                  </span>
                  <span className="tracking-widest font-semibold">
                    EMS // CIE
                  </span>
                  <span className="text-[#212529]/30 text-[10px]">•</span>
                  <span className="text-[#FB5607] uppercase tracking-wider font-bold">
                    ACTIVE 2026
                  </span>
                </div>
              </div>

              {/* 2. Primary Headline: Clean Sans mixed with Organic Highlighter Script */}
              <div className="relative inline-block max-w-2xl">
                <CrownDoodle className="absolute -top-7 left-20 sm:left-28 size-9 sm:size-11 text-[#FB5607] -rotate-6 pointer-events-none opacity-90" />
                <h1
                  id="hero-heading"
                  className="text-[#212529] leading-[0.96] tracking-tight select-none"
                >
                  <span className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.25rem] block">
                    CAMPUS,
                  </span>
                  <span className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.75rem] text-[#FB5607] font-bold inline-block mt-1 -rotate-1 relative">
                    <span className="relative z-10">IN MOTION.</span>
                    <span
                      className="absolute inset-x-[-8px] bottom-2 top-3 -z-10 rounded-sm bg-[#FB5607]/15 -rotate-1"
                      aria-hidden="true"
                    />
                  </span>
                </h1>
                <MarkerSquiggle className="w-48 sm:w-64 h-3 text-[#FB5607] mt-2 opacity-80" />
              </div>

              {/* 3. Handwritten Scrapbook Accent Note */}
              <div className="mt-4 sm:mt-5 flex items-center gap-3 font-script text-2xl sm:text-3xl font-bold text-[#212529]/90 -rotate-1 select-none">
                <span>Same campus. Different perspective.</span>
                <DoodleStar className="size-4 text-[#8338EC] opacity-80" />
                <PencilAsterisk className="size-4 text-[#FB5607] hidden sm:block opacity-80" />
              </div>

              {/* 4. Supporting Tagline: Crisp Accessible Sans */}
              <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-[#212529]/75 font-body font-normal max-w-xl leading-relaxed">
                Discover. Register. Participate. Your personal campus sketchbook
                for all college events, hackathons, and student collectives.
              </p>

              {/* 5. Call To Actions: Organic Tactile Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
                {/* Primary CTA: Dark Obsidian Pill with Soft Lava Orange Ambient Glow */}
                <Link
                  href="/events"
                  id="hero-primary-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-[#E9ECEF] bg-[#212529] paper-shadow hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(251,86,7,0.35)] active:translate-y-0 transition-all duration-200 group cursor-pointer"
                >
                  <span>Explore Events</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1 text-[#FB5607]" />
                </Link>

                {/* Secondary CTA: Soft Outline Pill with Subtle Pencil Border */}
                <Link
                  href="/clubs"
                  id="hero-secondary-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-[#212529] bg-white/60 hover:bg-white hover:text-[#8338EC] border border-[#212529]/25 hover:border-[#8338EC]/50 paper-shadow-soft hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <Compass className="size-4 text-[#8338EC]" />
                  <span>Explore Clubs</span>
                </Link>

                <div className="hidden sm:flex items-center gap-1.5 ml-2 font-script text-xl text-[#8338EC]">
                  <DoodleArrow className="w-8 h-6 text-[#8338EC] -rotate-6" />
                  <span>jump in!</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE: SKETCHBOOK COLLAGE CENTERPIECE                               */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0"
          >
            {/* Scrapbook Container */}
            <div
              id="hero-booklet-lift"
              className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] mx-auto select-none"
            >
              {/* Washi Tape Anchors across top edges */}
              <WashiTape
                color="orange"
                className="absolute -top-2.5 left-8 w-24 rotate-[-4deg] z-30"
              />
              <WashiTape
                color="violet"
                className="absolute -top-2.5 right-10 w-20 rotate-[3deg] z-30"
              />

              {/* Floating Collage Wrapper with Organic Slanted Tilt */}
              <div
                className="relative transition-transform duration-300 ease-out hover:rotate-[-0.5deg]"
                style={{
                  transform: "rotate(1deg)",
                }}
              >
                {/* 1. Physical Dossier Backing Sheet */}
                <div className="relative bg-white/95 text-[#212529] border border-black/10 rounded-2xl p-4 sm:p-5 paper-shadow-lift">
                  {/* Top Header Strip */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#212529]/10 text-[11px] font-mono text-[#212529]/70">
                    <div className="flex items-center gap-2">
                      <span className="inline-block size-2 rounded-full bg-[#FB5607]" />
                      <span className="font-semibold text-[#212529] tracking-wider">
                        EMS // SKETCHBOOK № 26
                      </span>
                    </div>
                    <span className="text-[10px] text-[#8338EC] font-bold tracking-widest">
                      [ STUDIO DRAFT ]
                    </span>
                  </div>

                  {/* 2. Main Event Leaflet Sheet with Faint Ruling */}
                  <div className="relative bg-[#E9ECEF]/70 border border-[#212529]/10 rounded-xl p-3.5 sm:p-4 text-[#212529] paper-shadow-soft overflow-hidden">
                    {/* Faint pencil crop marks */}
                    <div className="absolute top-2 left-2 text-[9px] font-mono text-[#212529]/30 leading-none">
                      +
                    </div>
                    <div className="absolute top-2 right-2 text-[9px] font-mono text-[#212529]/30 leading-none">
                      +
                    </div>

                    {/* Booklet Header Strip */}
                    <div className="flex items-center justify-between pb-2 border-b border-[#212529]/10">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-sm bg-[#FB5607]/15 text-[#FB5607] text-[10px] font-mono font-bold tracking-wider uppercase">
                            LINEUP
                          </span>
                          <span className="text-xs font-bold tracking-tight uppercase text-[#212529]">
                            CAMPUS SCHEDULE
                          </span>
                        </div>
                        <p className="text-[10px] font-script text-[#212529]/70 mt-0.5 text-xs">
                          vol. 26 • open to all departments
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2 py-0.5 rounded text-[9px] font-mono font-semibold bg-white/80 border border-black/10 paper-shadow-soft">
                          VERIFIED
                        </span>
                      </div>
                    </div>

                    {/* Event Category Agenda Rows (Soft Paper Slips) */}
                    <div className="mt-3 space-y-2">
                      {/* Row 1: HACKATHON */}
                      <div className="flex items-center justify-between p-2 rounded-lg bg-white/90 border border-black/5 paper-shadow-soft">
                        <div className="flex items-center gap-2">
                          <span className="size-5 rounded-full bg-[#FB5607]/15 text-[#FB5607] font-mono text-[10px] font-bold flex items-center justify-center">
                            01
                          </span>
                          <div>
                            <div className="text-[11px] sm:text-xs font-bold tracking-tight uppercase text-[#212529]">
                              HACKATHON 2026
                            </div>
                            <div className="text-[9px] font-mono text-[#212529]/60">
                              48H CODE SPRINT • LABS
                            </div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono font-medium bg-[#FB5607]/12 text-[#FB5607]">
                          #TECH
                        </span>
                      </div>

                      {/* Row 2: ARTIST SHOWCASE */}
                      <div className="flex items-center justify-between p-2 rounded-lg bg-white/90 border border-black/5 paper-shadow-soft">
                        <div className="flex items-center gap-2">
                          <span className="size-5 rounded-full bg-[#8338EC]/15 text-[#8338EC] font-mono text-[10px] font-bold flex items-center justify-center">
                            02
                          </span>
                          <div>
                            <div className="text-[11px] sm:text-xs font-bold tracking-tight uppercase text-[#212529]">
                              ARTIST SHOWCASE
                            </div>
                            <div className="text-[9px] font-mono text-[#212529]/60">
                              OPEN GALLERY &amp; EXHIBITS
                            </div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono font-medium bg-[#8338EC]/12 text-[#8338EC]">
                          #ARTS
                        </span>
                      </div>

                      {/* Row 3: TECH FEST '26 (Soft obsidian highlight) */}
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#212529] text-[#E9ECEF] paper-shadow-soft">
                        <div className="flex items-center gap-2">
                          <span className="size-5 rounded-full bg-[#FB5607] text-white font-mono text-[10px] font-bold flex items-center justify-center">
                            03
                          </span>
                          <div>
                            <div className="text-[11px] sm:text-xs font-bold tracking-tight uppercase text-white">
                              TECH FEST &apos;26
                            </div>
                            <div className="text-[9px] font-mono text-[#E9ECEF]/70">
                              MAIN ARENA • KEYNOTE
                            </div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono font-medium bg-[#FB5607] text-white">
                          #FEATURED
                        </span>
                      </div>

                      {/* Row 4: CULTURAL NIGHT */}
                      <div className="flex items-center justify-between p-2 rounded-lg bg-white/90 border border-black/5 paper-shadow-soft">
                        <div className="flex items-center gap-2">
                          <span className="size-5 rounded-full bg-[#E9ECEF] text-[#212529] font-mono text-[10px] font-bold flex items-center justify-center">
                            04
                          </span>
                          <div>
                            <div className="text-[11px] sm:text-xs font-bold tracking-tight uppercase text-[#212529]">
                              CULTURAL NIGHT
                            </div>
                            <div className="text-[9px] font-mono text-[#212529]/60">
                              MUSIC &amp; DRAMA • LAWNS
                            </div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono font-medium bg-[#8338EC]/12 text-[#8338EC]">
                          #CULTURAL
                        </span>
                      </div>
                    </div>

                    {/* Perforated Receipt Line */}
                    <div className="mt-3 pt-2.5 border-t border-dashed border-[#212529]/20 flex items-center justify-between">
                      <div>
                        <div
                          className="flex items-center gap-0.5 h-5 overflow-hidden opacity-70"
                          aria-label="Ticket Barcode"
                        >
                          <span className="w-1 h-full bg-[#212529]" />
                          <span className="w-0.5 h-full bg-[#212529]" />
                          <span className="w-1.5 h-full bg-[#212529]" />
                          <span className="w-0.5 h-full bg-transparent" />
                          <span className="w-1 h-full bg-[#212529]" />
                          <span className="w-2 h-full bg-[#212529]" />
                          <span className="w-0.5 h-full bg-transparent" />
                          <span className="w-1.5 h-full bg-[#212529]" />
                          <span className="w-0.5 h-full bg-[#212529]" />
                          <span className="w-1 h-full bg-[#212529]" />
                        </div>
                        <span className="text-[8px] font-mono text-[#212529]/60 block mt-0.5">
                          *EMS-STUDIO-2026*
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-[9px] font-mono font-semibold text-[#212529]">
                          OCT 24—26
                        </div>
                        <div className="inline-block mt-0.5 px-2 py-0.5 bg-[#8338EC]/15 text-[#8338EC] text-[9px] font-mono font-bold rounded">
                          ALL ACCESS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Tucked Sticky Note Flap */}
                <div className="absolute -top-3 -right-3 bg-[#FB5607]/90 text-white rounded-md px-3 py-1.5 paper-shadow rotate-[6deg] z-20">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold">
                    <span className="size-1.5 rounded-full bg-white animate-pulse" />
                    <span className="tracking-wider">ADMIT ALL</span>
                    <span className="text-white/50">|</span>
                    <span className="font-bold">#0492</span>
                  </div>
                </div>

                {/* 4. Organic Sketchbook Marginalia Notes */}
                {/* Note A: Handwritten sticky note at bottom left */}
                <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white/95 text-[#212529] px-3 py-1.5 rounded-md paper-shadow -rotate-6 z-20 border border-black/5">
                  <span className="text-xs font-script font-bold text-[#FB5607] block">
                    bring a friend! ↗
                  </span>
                </div>

                {/* Note B: Doodle Smiley */}
                <div className="absolute -bottom-3 -right-2 z-20 rotate-6 bg-white/95 p-1.5 rounded-full paper-shadow border border-black/5">
                  <DoodleSmiley className="size-5 text-[#212529]/80" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
