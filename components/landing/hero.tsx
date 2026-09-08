"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { motion } from "motion/react";
import { useHeroHappeningTransition } from "./use-hero-happening-transition";

/**
 * Hero Section — Dark Editorial Neo-Brutalism for CIE / EMS
 *
 * Implements an asymmetric split composition:
 * - Left: EMS status pill, bold physical headline ("Campus, in motion.") with crimson hard offset shadow,
 *         supporting tagline, and neo-brutalist tactile CTAs.
 * - Right: Stylized isometric campus event booklet / ticket dossier artifact with visible pages,
 *          event schedule agenda rows, barcode perforation, and restrained tactile stickers.
 *
 * Color Palette:
 * - Canvas: Deep dark navy (#050811 / #0A0F1D) with subtle architectural tactile grid
 * - Primary accent: Crimson (#C5283D)
 * - Secondary shadow: Dark Crimson (#8B1E2D)
 * - Mint accent: (#6EE7B7)
 * - Text / Card: Cream / off-white (#F8F9FA / #F4F3EE)
 * - Dark outlines: #050811 / #000000
 */
export default function Hero() {
  useHeroHappeningTransition();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full min-h-[calc(100vh-5rem)] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 flex items-center justify-center overflow-x-clip bg-[#050811]"
    >
      {/* Subtle Atmospheric Tactile Grid Background (Strictly no purple gradient / no gradient waves) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(248, 249, 250, 0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 45%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 45%, black 40%, transparent 100%)",
        }}
      />

      {/* Subtle Ambient Vignette Layer */}
      <div className="absolute inset-0 pointer-events-none bg-radial from-transparent via-[#050811]/40 to-[#050811]" />

      {/* Main Hero Container — Asymmetric Editorial Split (No vertical divider, continuous space) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
          {/* ========================================================================= */}
          {/* LEFT SIDE: EMS STATUS, EDITORIAL HEADLINE, TAGLINE, CALL TO ACTIONS      */}
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
              {/* 1. EMS Status Pill */}
              <div
                id="ems-status-pill"
                className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xs shadow-[2px_2px_0px_#000000] text-xs font-mono font-medium text-[#F8F9FA] tracking-wider select-none mb-6 sm:mb-8 transition-colors hover:border-white/30"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6EE7B7] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6EE7B7]" />
                </span>
                <span className="font-bold tracking-widest text-[11px] text-[#F8F9FA]">
                  EMS
                </span>
                <span className="text-white/30 text-[10px]">•</span>
                <span className="text-[#6EE7B7] text-[11px] uppercase tracking-wider font-semibold">
                  ACTIVE
                </span>
              </div>

              {/* 2. Primary Headline: Bold, Chunky, Display-Oriented Editorial with Hard Crimson Offset Shadow */}
              <h1
                id="hero-heading"
                className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] font-extrabold tracking-tight text-[#F8F9FA] leading-[0.94] uppercase select-none"
                style={{
                  textShadow: "4px 4px 0 #8B1E2D",
                }}
              >
                Campus,
                <br />
                <span className="inline-block mt-1 sm:mt-2">in motion.</span>
              </h1>

              {/* 3. Supporting Tagline: Clean Sans-Serif, High Contrast Off-White */}
              <p className="mt-5 sm:mt-7 text-lg sm:text-xl lg:text-2xl text-[#F8F9FA]/80 font-normal max-w-xl leading-relaxed tracking-normal">
                One place for what&apos;s happening.
              </p>

              {/* 4. Call To Actions: Tactile Neo-Brutalist Buttons with Clear Priority */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
                {/* Primary CTA: Cream Solid Fill + Dark Border + Hard Crimson Offset Shadow */}
                <Link
                  href="/events"
                  id="hero-primary-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg text-base font-bold text-[#050811] bg-[#F8F9FA] border-2 border-[#050811] shadow-[4px_4px_0px_#C5283D] hover:shadow-[2px_2px_0px_#C5283D] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 group"
                >
                  <span>Explore Events</span>
                  <ArrowRight className="size-4.5 transition-transform duration-150 group-hover:translate-x-1 text-[#050811]" />
                </Link>

                {/* Secondary CTA: Transparent Ghost + Thin Light Border + Subtle Tactile Surface */}
                <Link
                  href="/clubs"
                  id="hero-secondary-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-medium text-[#F8F9FA] bg-white/[0.03] hover:bg-white/[0.08] border border-white/20 hover:border-white/40 active:bg-white/[0.12] transition-all duration-150 backdrop-blur-xs"
                >
                  <Compass className="size-4 text-[#6EE7B7]" />
                  <span>Explore Clubs</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE: THE HERO CENTERPIECE (ISOMETRIC CAMPUS EVENT BOOKLET DOSSIER)  */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0"
          >
            {/* Isometric Perspective Container */}
            <div
              id="hero-booklet-lift"
              className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] mx-auto select-none"
              style={{
                perspective: "1200px",
              }}
            >
              {/* Floating Centerpiece Wrapper with 30-degree isometric tilt */}
              <div
                className="relative transition-transform duration-500 ease-out hover:rotate-x-[12deg] hover:-rotate-y-[14deg]"
                style={{
                  transformStyle: "preserve-3d",
                  transform:
                    "rotateX(14deg) rotateY(-18deg) rotateZ(5deg) translateZ(0)",
                }}
              >
                {/* ------------------------------------------------------------- */}
                {/* 1. Physical Dossier Backing Card / Folder                      */}
                {/* ------------------------------------------------------------- */}
                <div className="relative bg-[#0F172A] border-2 border-black rounded-xl p-3 sm:p-4 shadow-[10px_10px_0px_#000000,16px_16px_0px_#8B1E2D]">
                  {/* Top Folder Tab Header */}
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-block size-2 rounded-full bg-[#C5283D]" />
                      <span className="font-bold text-[#F8F9FA] tracking-wider">
                        EMS // DOSSIER NO. 26
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 tracking-widest">
                      [ + HYD CAMPUS + ]
                    </span>
                  </div>

                  {/* ----------------------------------------------------------- */}
                  {/* 2. Main Event Booklet / Printed Program Guide Leaflet       */}
                  {/* ----------------------------------------------------------- */}
                  <div className="relative bg-[#F4F3EE] border-2 border-[#0A0F1D] rounded-lg p-3.5 sm:p-4.5 text-[#0A0F1D] shadow-[3px_3px_0px_rgba(0,0,0,0.4)] overflow-hidden">
                    {/* Printed Registration Marks in corners */}
                    <div className="absolute top-1.5 left-1.5 text-[8px] font-mono text-[#0A0F1D]/40 leading-none">
                      ⌖
                    </div>
                    <div className="absolute top-1.5 right-1.5 text-[8px] font-mono text-[#0A0F1D]/40 leading-none">
                      ⌖
                    </div>

                    {/* Booklet Header Strip */}
                    <div className="flex items-center justify-between pb-2 border-b-2 border-[#0A0F1D]">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="px-1.5 py-0.5 rounded bg-[#C5283D] text-[#F8F9FA] text-[9px] font-mono font-bold tracking-wider uppercase">
                            LINEUP
                          </span>
                          <span className="text-xs font-black tracking-tight uppercase text-[#0A0F1D]">
                            CAMPUS SCHEDULE
                          </span>
                        </div>
                        <p className="text-[9px] font-mono text-neutral-600 mt-0.5">
                          VOL. 26 • ALL SESSIONS • ADMIT ALL
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-1.5 py-0.5 border border-[#0A0F1D] rounded text-[8px] font-mono font-bold bg-white">
                          CIE DISPATCH
                        </span>
                      </div>
                    </div>

                    {/* Event Category Agenda Rows */}
                    <div className="mt-3 space-y-2">
                      {/* Row 1: HACKATHON */}
                      <div className="flex items-center justify-between p-2 rounded bg-white border border-[#0A0F1D] shadow-[2px_2px_0px_#0A0F1D]">
                        <div className="flex items-center gap-2">
                          <span className="size-5 rounded bg-[#6EE7B7] text-[#0A0F1D] font-mono text-[10px] font-black flex items-center justify-center border border-[#0A0F1D]">
                            01
                          </span>
                          <div>
                            <div className="text-[11px] sm:text-xs font-black tracking-tight uppercase text-[#0A0F1D]">
                              HACKATHON
                            </div>
                            <div className="text-[9px] font-mono text-neutral-500">
                              48H CODE SPRINT • LABS
                            </div>
                          </div>
                        </div>
                        <span className="px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-[#6EE7B7]/30 text-[#0A0F1D] border border-[#6EE7B7]">
                          #TECH
                        </span>
                      </div>

                      {/* Row 2: ARTIST SHOWCASE */}
                      <div className="flex items-center justify-between p-2 rounded bg-white border border-[#0A0F1D] shadow-[2px_2px_0px_#0A0F1D]">
                        <div className="flex items-center gap-2">
                          <span className="size-5 rounded bg-[#F8F9FA] text-[#0A0F1D] font-mono text-[10px] font-black flex items-center justify-center border border-[#0A0F1D]">
                            02
                          </span>
                          <div>
                            <div className="text-[11px] sm:text-xs font-black tracking-tight uppercase text-[#0A0F1D]">
                              ARTIST SHOWCASE
                            </div>
                            <div className="text-[9px] font-mono text-neutral-500">
                              OPEN GALLERY & EXHIBITS
                            </div>
                          </div>
                        </div>
                        <span className="px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-amber-100 text-[#0A0F1D] border border-amber-300">
                          #ARTS
                        </span>
                      </div>

                      {/* Row 3: TECH FEST */}
                      <div className="flex items-center justify-between p-2 rounded bg-[#0A0F1D] text-[#F8F9FA] border border-[#0A0F1D] shadow-[2px_2px_0px_#8B1E2D]">
                        <div className="flex items-center gap-2">
                          <span className="size-5 rounded bg-[#C5283D] text-[#F8F9FA] font-mono text-[10px] font-black flex items-center justify-center border border-black">
                            03
                          </span>
                          <div>
                            <div className="text-[11px] sm:text-xs font-black tracking-tight uppercase text-[#F8F9FA]">
                              TECH FEST &apos;26
                            </div>
                            <div className="text-[9px] font-mono text-slate-300">
                              MAIN ARENA • KEYNOTE
                            </div>
                          </div>
                        </div>
                        <span className="px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-[#C5283D] text-white">
                          #FEATURED
                        </span>
                      </div>

                      {/* Row 4: CULTURAL NIGHT */}
                      <div className="flex items-center justify-between p-2 rounded bg-white border border-[#0A0F1D] shadow-[2px_2px_0px_#0A0F1D]">
                        <div className="flex items-center gap-2">
                          <span className="size-5 rounded bg-[#F8F9FA] text-[#0A0F1D] font-mono text-[10px] font-black flex items-center justify-center border border-[#0A0F1D]">
                            04
                          </span>
                          <div>
                            <div className="text-[11px] sm:text-xs font-black tracking-tight uppercase text-[#0A0F1D]">
                              CULTURAL NIGHT
                            </div>
                            <div className="text-[9px] font-mono text-neutral-500">
                              MUSIC &amp; DRAMA • LAWNS
                            </div>
                          </div>
                        </div>
                        <span className="px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-rose-100 text-[#0A0F1D] border border-rose-300">
                          #CULTURAL
                        </span>
                      </div>
                    </div>

                    {/* Perforated Ticket Divider & Barcode Strip */}
                    <div className="mt-3 pt-2.5 border-t-2 border-dashed border-[#0A0F1D]/40 flex items-center justify-between">
                      <div>
                        {/* Realistic Printed Barcode SVG Pattern */}
                        <div
                          className="flex items-center gap-0.5 h-6 overflow-hidden"
                          aria-label="Ticket Barcode"
                        >
                          <span className="w-1 h-full bg-[#0A0F1D]" />
                          <span className="w-0.5 h-full bg-[#0A0F1D]" />
                          <span className="w-1.5 h-full bg-[#0A0F1D]" />
                          <span className="w-0.5 h-full bg-transparent" />
                          <span className="w-1 h-full bg-[#0A0F1D]" />
                          <span className="w-2 h-full bg-[#0A0F1D]" />
                          <span className="w-0.5 h-full bg-transparent" />
                          <span className="w-1.5 h-full bg-[#0A0F1D]" />
                          <span className="w-0.5 h-full bg-[#0A0F1D]" />
                          <span className="w-1 h-full bg-[#0A0F1D]" />
                          <span className="w-2 h-full bg-[#0A0F1D]" />
                          <span className="w-0.5 h-full bg-[#0A0F1D]" />
                          <span className="w-1.5 h-full bg-[#0A0F1D]" />
                          <span className="w-1 h-full bg-[#0A0F1D]" />
                          <span className="w-0.5 h-full bg-[#0A0F1D]" />
                          <span className="w-2 h-full bg-[#0A0F1D]" />
                        </div>
                        <span className="text-[8px] font-mono text-neutral-600 block mt-0.5">
                          *EMS-2026-TIX-VALID*
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-[8px] font-mono font-bold text-[#0A0F1D]">
                          OCT 24—26
                        </div>
                        <div className="inline-block mt-0.5 px-1.5 py-0.5 bg-[#6EE7B7] text-[#0A0F1D] text-[8px] font-mono font-extrabold rounded border border-[#0A0F1D]">
                          VERIFIED PASS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ------------------------------------------------------------- */}
                {/* 3. Tucked Layered Physical Crimson Ticket Flap                */}
                {/* ------------------------------------------------------------- */}
                <div
                  className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 bg-[#C5283D] text-[#F8F9FA] border-2 border-black rounded-lg px-3 py-1.5 shadow-[4px_4px_0px_#000000] rotate-[8deg] z-20"
                  style={{
                    transform: "translateZ(30px) rotate(6deg)",
                  }}
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold">
                    <span className="text-[#6EE7B7]">●</span>
                    <span className="tracking-wider">ADMIT ALL</span>
                    <span className="text-white/40">|</span>
                    <span className="text-white/90">PASS #0492</span>
                  </div>
                </div>

                {/* ------------------------------------------------------------- */}
                {/* 4. Restrained Tactile Supporting Stickers / Artifacts         */}
                {/* ------------------------------------------------------------- */}
                {/* Sticker A: #TECH FEST Tactile Stamp (Top Left) */}
                <div
                  className="absolute -top-4 -left-3 sm:-left-6 bg-[#F4F3EE] text-[#0A0F1D] border-2 border-black px-2.5 py-1 rounded shadow-[3px_3px_0px_#000000] -rotate-6 z-20"
                  style={{
                    transform: "translateZ(25px) rotate(-8deg)",
                  }}
                >
                  <span className="text-[10px] font-mono font-black tracking-tight text-[#0A0F1D]">
                    #TECH FEST
                  </span>
                </div>

                {/* Sticker B: Crimson Circular Rubber Stamp (Bottom Left) */}
                <div
                  className="absolute -bottom-5 -left-3 sm:-left-5 size-16 sm:size-18 rounded-full border-2 border-dashed border-[#C5283D] bg-[#050811]/90 backdrop-blur-xs flex flex-col items-center justify-center text-center p-1 text-[#C5283D] shadow-[3px_3px_0px_#000000] rotate-[-14deg] z-20"
                  style={{
                    transform: "translateZ(35px) rotate(-14deg)",
                  }}
                >
                  <span className="text-[7px] font-mono font-black tracking-widest uppercase">
                    ★ CAMPUS ★
                  </span>
                  <span className="text-[9px] font-black tracking-tighter uppercase leading-none my-0.5 text-[#F8F9FA]">
                    ACTIVE
                  </span>
                  <span className="text-[7px] font-mono font-bold text-[#6EE7B7]">
                    2026
                  </span>
                </div>

                {/* Sticker C: Student Life Micro-Badge (Bottom Right) */}
                <div
                  className="absolute -bottom-3 -right-2 sm:-right-4 bg-[#0A0F1D] text-[#6EE7B7] border-2 border-black px-2.5 py-1 rounded shadow-[3px_3px_0px_#000000] rotate-3 z-20 flex items-center gap-1.5"
                  style={{
                    transform: "translateZ(20px) rotate(4deg)",
                  }}
                >
                  <span className="size-1.5 rounded-full bg-[#6EE7B7]" />
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#F8F9FA]">
                    #CULTURAL
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
