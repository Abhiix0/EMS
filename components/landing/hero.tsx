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
  DoodleSparkle,
  DoodleSmiley,
  ScotchTape,
} from "./doodles";

/**
 * Hero Section — Zine-Inspired Grunge Scrapbook / Indie Collage
 * with custom "Volcanic Ash" color system:
 * - Lava Orange: #FB5607
 * - Electric Violet: #8338EC
 * - Obsidian Charcoal: #212529
 * - Ash Pale White: #E9ECEF
 */
export default function Hero() {
  useHeroHappeningTransition();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full min-h-[calc(100vh-5rem)] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 flex items-center justify-center overflow-x-clip bg-[#E9ECEF] bg-paper-grain text-[#212529]"
    >
      {/* Subtle Grain & Graph Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(33, 37, 41, 0.12) 1px, transparent 1px)",
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
              {/* 1. EMS Status Badge with Tape Accent */}
              <div className="relative mb-6 sm:mb-8">
                <ScotchTape
                  color="orange"
                  className="absolute -top-3 -left-3 w-16 rotate-[-6deg] z-10"
                />
                <div
                  id="ems-status-pill"
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border-1.5 border-[#212529] bg-white shadow-[2px_2px_0px_#212529] text-xs font-mono font-bold text-[#212529] tracking-wider select-none"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB5607] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FB5607]" />
                  </span>
                  <span className="tracking-widest">EMS // CIE</span>
                  <span className="text-[#212529]/30 text-[10px]">•</span>
                  <span className="text-[#FB5607] uppercase tracking-wider font-extrabold">
                    ACTIVE 2026
                  </span>
                </div>
              </div>

              {/* 2. Primary Headline: Distressed Brutalist Display Font with Crown & Marker Squiggle */}
              <div className="relative inline-block max-w-2xl">
                <CrownDoodle className="absolute -top-7 left-20 sm:left-28 size-9 sm:size-11 text-[#FB5607] -rotate-6 pointer-events-none" />
                <h1
                  id="hero-heading"
                  className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] text-[#212529] leading-[0.94] tracking-tight -rotate-1 select-none"
                >
                  CAMPUS,
                  <br />
                  <span className="text-[#FB5607] inline-block mt-1">
                    IN MOTION.
                  </span>
                </h1>
                <MarkerSquiggle className="w-56 sm:w-80 h-4 text-[#FB5607] mt-2" />
              </div>

              {/* 3. Handwritten Scrapbook Accent Note */}
              <div className="mt-4 sm:mt-5 flex items-center gap-3 font-script text-2xl sm:text-3xl font-bold text-[#212529] -rotate-1.5 select-none">
                <span>Same campus. Different perspective.</span>
                <DoodleStar className="size-4 text-[#8338EC]" />
                <DoodleSparkle className="size-5 text-[#FB5607] hidden sm:block" />
              </div>

              {/* 4. Supporting Tagline: Clean Grotesque Sans */}
              <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-[#212529]/80 font-body font-normal max-w-xl leading-relaxed">
                Discover. Register. Participate. Your one-stop zine platform for
                all college events, hackathons, and student collectives.
              </p>

              {/* 5. Call To Actions: Tactile Volcanic Brutalist Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
                {/* Primary CTA: Rounded Pill in Obsidian Charcoal with Lava Orange Drop-Shadow */}
                <Link
                  href="/events"
                  id="hero-primary-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-black uppercase tracking-wider text-[#E9ECEF] bg-[#212529] border-2 border-[#212529] shadow-[4px_4px_0px_#FB5607] hover:shadow-[2px_2px_0px_#FB5607] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 group cursor-pointer"
                >
                  <span>Explore Events</span>
                  <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-1 text-[#FB5607]" />
                </Link>

                {/* Secondary CTA: Outline Pill in #212529 with Electric Violet Hover */}
                <Link
                  href="/clubs"
                  id="hero-secondary-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-[#212529] bg-white/70 hover:bg-white hover:text-[#8338EC] border-2 border-[#212529] hover:border-[#8338EC] shadow-[3px_3px_0px_#212529] hover:shadow-[3px_3px_0px_#8338EC] transition-all duration-150 cursor-pointer"
                >
                  <Compass className="size-4 text-[#8338EC]" />
                  <span>Explore Clubs</span>
                </Link>

                <div className="hidden sm:flex items-center gap-1.5 ml-2 font-script text-lg text-[#8338EC]">
                  <DoodleArrow className="w-8 h-6 text-[#8338EC] -rotate-6" />
                  <span>jump in!</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE: SCRAPBOOK COLLAGE CENTERPIECE                                */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0"
          >
            {/* Scrapbook Container */}
            <div
              id="hero-booklet-lift"
              className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] mx-auto select-none"
            >
              {/* Scotch Tape across top-left */}
              <ScotchTape
                color="orange"
                className="absolute -top-3 left-6 w-24 rotate-[-6deg] z-30"
              />
              <ScotchTape
                color="violet"
                className="absolute -top-3 right-8 w-20 rotate-[4deg] z-30"
              />

              {/* Floating Collage Wrapper with Subtle Tilt */}
              <div
                className="relative transition-transform duration-300 ease-out hover:rotate-[-0.5deg]"
                style={{
                  transform: "rotate(1.5deg)",
                }}
              >
                {/* 1. Physical Dossier Backing Card */}
                <div className="relative bg-[#212529] text-[#E9ECEF] border-2 border-[#212529] rounded-2xl p-3 sm:p-4.5 shadow-[8px_8px_0px_#212529,14px_14px_0px_#FB5607]">
                  {/* Top Header Strip */}
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/15 text-[11px] font-mono text-[#E9ECEF]/70">
                    <div className="flex items-center gap-2">
                      <span className="inline-block size-2 rounded-full bg-[#FB5607]" />
                      <span className="font-bold text-white tracking-wider">
                        EMS // DOSSIER NO. 26
                      </span>
                    </div>
                    <span className="text-[10px] text-[#8338EC] font-bold tracking-widest">
                      [ ★ VOLCANIC ASH ★ ]
                    </span>
                  </div>

                  {/* 2. Main Event Booklet / Printed Program Guide Leaflet */}
                  <div className="relative bg-[#E9ECEF] border-2 border-[#212529] rounded-xl p-3.5 sm:p-4 text-[#212529] shadow-[2px_2px_0px_rgba(0,0,0,0.15)] overflow-hidden">
                    {/* Printed Registration Marks in corners */}
                    <div className="absolute top-1.5 left-1.5 text-[8px] font-mono text-[#212529]/40 leading-none">
                      ⌖
                    </div>
                    <div className="absolute top-1.5 right-1.5 text-[8px] font-mono text-[#212529]/40 leading-none">
                      ⌖
                    </div>

                    {/* Booklet Header Strip */}
                    <div className="flex items-center justify-between pb-2 border-b-2 border-[#212529]">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-[#FB5607] text-white text-[9px] font-mono font-bold tracking-wider uppercase">
                            LINEUP
                          </span>
                          <span className="text-xs font-black tracking-tight uppercase text-[#212529]">
                            CAMPUS SCHEDULE
                          </span>
                        </div>
                        <p className="text-[9px] font-mono text-[#212529]/60 mt-0.5">
                          VOL. 26 • ALL SESSIONS • ADMIT ALL
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-1.5 py-0.5 border border-[#212529] rounded text-[8px] font-mono font-bold bg-white shadow-[1px_1px_0px_#212529]">
                          CIE DISPATCH
                        </span>
                      </div>
                    </div>

                    {/* Event Category Agenda Rows */}
                    <div className="mt-3 space-y-2">
                      {/* Row 1: HACKATHON (Orange highlight) */}
                      <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#212529] shadow-[2px_2px_0px_#212529]">
                        <div className="flex items-center gap-2">
                          <span className="size-5 rounded bg-[#FB5607] text-white font-mono text-[10px] font-black flex items-center justify-center border border-[#212529]">
                            01
                          </span>
                          <div>
                            <div className="text-[11px] sm:text-xs font-black tracking-tight uppercase text-[#212529]">
                              HACKATHON
                            </div>
                            <div className="text-[9px] font-mono text-[#212529]/60">
                              48H CODE SPRINT • LABS
                            </div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[8px] font-mono font-bold bg-[rgba(251,86,7,0.12)] text-[#FB5607] border border-[#FB5607]/40">
                          #TECH
                        </span>
                      </div>

                      {/* Row 2: ARTIST SHOWCASE (Violet highlight) */}
                      <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#212529] shadow-[2px_2px_0px_#212529]">
                        <div className="flex items-center gap-2">
                          <span className="size-5 rounded bg-[#8338EC] text-white font-mono text-[10px] font-black flex items-center justify-center border border-[#212529]">
                            02
                          </span>
                          <div>
                            <div className="text-[11px] sm:text-xs font-black tracking-tight uppercase text-[#212529]">
                              ARTIST SHOWCASE
                            </div>
                            <div className="text-[9px] font-mono text-[#212529]/60">
                              OPEN GALLERY &amp; EXHIBITS
                            </div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[8px] font-mono font-bold bg-[rgba(131,56,236,0.12)] text-[#8338EC] border border-[#8338EC]/40">
                          #ARTS
                        </span>
                      </div>

                      {/* Row 3: TECH FEST '26 (Dark highlight) */}
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#212529] text-[#E9ECEF] border border-[#212529] shadow-[2px_2px_0px_#FB5607]">
                        <div className="flex items-center gap-2">
                          <span className="size-5 rounded bg-[#FB5607] text-white font-mono text-[10px] font-black flex items-center justify-center border border-[#212529]">
                            03
                          </span>
                          <div>
                            <div className="text-[11px] sm:text-xs font-black tracking-tight uppercase text-white">
                              TECH FEST &apos;26
                            </div>
                            <div className="text-[9px] font-mono text-[#E9ECEF]/70">
                              MAIN ARENA • KEYNOTE
                            </div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[8px] font-mono font-bold bg-[#FB5607] text-white">
                          #FEATURED
                        </span>
                      </div>

                      {/* Row 4: CULTURAL NIGHT */}
                      <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#212529] shadow-[2px_2px_0px_#212529]">
                        <div className="flex items-center gap-2">
                          <span className="size-5 rounded bg-[#E9ECEF] text-[#212529] font-mono text-[10px] font-black flex items-center justify-center border border-[#212529]">
                            04
                          </span>
                          <div>
                            <div className="text-[11px] sm:text-xs font-black tracking-tight uppercase text-[#212529]">
                              CULTURAL NIGHT
                            </div>
                            <div className="text-[9px] font-mono text-[#212529]/60">
                              MUSIC &amp; DRAMA • LAWNS
                            </div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[8px] font-mono font-bold bg-[rgba(131,56,236,0.12)] text-[#8338EC] border border-[#8338EC]/40">
                          #CULTURAL
                        </span>
                      </div>
                    </div>

                    {/* Perforated Barcode Strip */}
                    <div className="mt-3 pt-2.5 border-t-2 border-dashed border-[#212529]/30 flex items-center justify-between">
                      <div>
                        <div
                          className="flex items-center gap-0.5 h-6 overflow-hidden"
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
                          <span className="w-2 h-full bg-[#212529]" />
                        </div>
                        <span className="text-[8px] font-mono text-[#212529]/60 block mt-0.5 font-bold">
                          *EMS-VOLCANIC-2026*
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-[8px] font-mono font-bold text-[#212529]">
                          OCT 24—26
                        </div>
                        <div className="inline-block mt-0.5 px-2 py-0.5 bg-[#8338EC] text-white text-[8px] font-mono font-extrabold rounded border border-[#212529]">
                          VERIFIED PASS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Tucked Layered Physical Lava Orange Ticket Flap */}
                <div className="absolute -top-4 -right-4 bg-[#FB5607] text-white border-2 border-[#212529] rounded-lg px-3 py-1.5 shadow-[4px_4px_0px_#212529] rotate-[8deg] z-20">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold">
                    <span className="size-1.5 rounded-full bg-white animate-pulse" />
                    <span className="tracking-wider">ADMIT ALL</span>
                    <span className="text-white/40">|</span>
                    <span className="text-white font-extrabold">#0492</span>
                  </div>
                </div>

                {/* 4. Scrapbook Stickers & Doodles */}
                {/* Sticker A: #TECH FEST Tactile Stamp (Top Left) */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white text-[#212529] border-2 border-[#212529] px-2.5 py-1 rounded-md shadow-[3px_3px_0px_#212529] -rotate-6 z-20">
                  <span className="text-[10px] font-mono font-black tracking-tight">
                    #TECH FEST
                  </span>
                </div>

                {/* Sticker B: Violet Circular Rubber Stamp (Bottom Left) */}
                <div className="absolute -bottom-5 -left-3 sm:-left-5 size-16 sm:size-18 rounded-full border-2 border-dashed border-[#8338EC] bg-[#E9ECEF] flex flex-col items-center justify-center text-center p-1 text-[#8338EC] shadow-[3px_3px_0px_#212529] rotate-[-12deg] z-20">
                  <span className="text-[7px] font-mono font-black tracking-widest uppercase">
                    ★ CAMPUS ★
                  </span>
                  <span className="text-[9px] font-display uppercase leading-none my-0.5 text-[#212529]">
                    ACTIVE
                  </span>
                  <span className="text-[7px] font-mono font-bold text-[#FB5607]">
                    2026
                  </span>
                </div>

                {/* Sticker C: Doodle Smiley (Bottom Right) */}
                <div className="absolute -bottom-4 -right-3 z-20 rotate-6 bg-white/90 p-1.5 rounded-full border-2 border-[#212529] shadow-[3px_3px_0px_#212529]">
                  <DoodleSmiley className="size-6 text-[#212529]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
