"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Compass } from "lucide-react";
import { motion } from "motion/react";
import { useHappeningPeopleTransition } from "./use-happening-people-transition";
import { ScotchTape, MarkerSquiggle, DoodleSparkle } from "./doodles";

/**
 * FIND YOUR PEOPLE Section — Zine-Inspired Grunge Scrapbook / Volcanic Ash Edition
 *
 * Visual Strategy:
 * - Ash Pale White (#E9ECEF) paper canvas creating tactile visual relief.
 * - Neo-brutalist indie zine cutout cards with 2px Obsidian Charcoal (#212529) ink borders.
 * - Volcanic hard offset shadows (Lava Orange #FB5607 & Electric Violet #8338EC).
 * - Authentic scrapbook details: scotch tape, stamp tags, and script handwriting.
 */

interface MainClub {
  id: string;
  code: string;
  name: string;
  tagline: string;
  catalog: string;
}

interface DeptClub {
  id: string;
  display: string;
  dept: string;
  name: string;
}

const MAIN_CLUBS: MainClub[] = [
  {
    id: "cie",
    code: "CIE",
    name: "Center for Innovation & Entrepreneurship",
    tagline: "Incubation, venture building & student founders",
    catalog: "№ 01 · INCUBATION & TECH",
  },
  {
    id: "came",
    code: "CAME",
    name: "Creative Arts & Media Endeavors",
    tagline: "Visual design, media production & storytelling",
    catalog: "№ 02 · ARTS & MEDIA",
  },
  {
    id: "scope",
    code: "SCOPE",
    name: "Student Community for Open Programming & Engineering",
    tagline: "Algorithmic thinking, open source & hackathons",
    catalog: "№ 03 · COMPUTING & OSS",
  },
  {
    id: "club-literati",
    code: "CLUB LITERATI",
    name: "Literary & Debating Society",
    tagline: "Oratory, parliamentary debate & model UN",
    catalog: "№ 04 · LITERARY GUILD",
  },
  {
    id: "apex",
    code: "APEX",
    name: "Experiential Learning & Leadership",
    tagline: "Campus initiatives, executive strategy & outreach",
    catalog: "№ 05 · LEADERSHIP",
  },
  {
    id: "ewb",
    code: "EWB",
    name: "Engineers Without Borders",
    tagline: "Humanitarian engineering & grassroots community impact",
    catalog: "№ 06 · HUMANITARIAN TECH",
  },
  {
    id: "csi",
    code: "CSI",
    name: "Computer Society of India",
    tagline: "Technical symposia, research papers & systems computing",
    catalog: "№ 07 · CHAPTER 8410",
  },
  {
    id: "nss",
    code: "NSS",
    name: "National Service Scheme",
    tagline: "Civic responsibility, youth leadership & community service",
    catalog: "№ 08 · CIVIC ACTION",
  },
];

const DEPT_CLUBS: DeptClub[] = [
  {
    id: "code-cse",
    display: "CODE · CSE",
    dept: "Computer Science & Engineering",
    name: "Core Systems & Competitive Coding",
  },
  {
    id: "aim-csm",
    display: "AIM · CSM",
    dept: "AI & Machine Learning",
    name: "Machine Learning & Neural Architectures",
  },
  {
    id: "squad-csd",
    display: "SQUAD · CSD",
    dept: "Data Science & Analytics",
    name: "Data Pipelines & Statistical Modeling",
  },
  {
    id: "aero-ece",
    display: "AERO · ECE",
    dept: "Electronics & Communication",
    name: "Avionics, Telemetry & Flight Dynamics",
  },
  {
    id: "robotics-ece",
    display: "ROBOTICS · ECE",
    dept: "Electronics & Robotics",
    name: "Cobots, Embedded Systems & Autonomous Rovers",
  },
];

export default function FindYourPeople() {
  useHappeningPeopleTransition();

  return (
    <section
      id="find-your-people"
      aria-labelledby="find-your-people-heading"
      className="relative bg-[#E9ECEF] text-[#212529] py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-10 border-y-2 border-[#212529] overflow-hidden"
    >
      {/* Target Anchor Hooks */}
      <div
        id="clubs"
        className="relative -top-24 invisible"
        aria-hidden="true"
      />
      <div
        id="communities"
        className="relative -top-24 invisible"
        aria-hidden="true"
      />

      {/* Subtle Paper Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#212529 1px, transparent 1px), linear-gradient(to right, #212529 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div
        id="find-your-people-board-exit"
        className="relative max-w-7xl mx-auto w-full"
      >
        {/* ========================================================
            1. SECTION HEADER
           ======================================================== */}
        <header id="find-your-people-header" className="mb-14 sm:mb-20">
          <div
            id="find-your-people-badge-strip"
            className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-[#212529]"
          >
            <div className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-[#FB5607] border-2 border-[#212529]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#212529]/80 font-black">
                CLUBS &amp; COMMUNITIES · SECTION 03
              </span>
            </div>
            <div className="font-mono text-xs tracking-wider text-[#212529]/60 uppercase font-bold hidden sm:block">
              CIE CAMPUS INDEX · 2026
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <div className="relative inline-block">
                <h2
                  id="find-your-people-heading"
                  className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-[#212529] leading-[0.95]"
                >
                  FIND YOUR PEOPLE
                </h2>
                <MarkerSquiggle className="w-full h-3 text-[#FB5607] -mt-1" />
              </div>
              <p
                id="find-your-people-quote"
                className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-script text-[#212529] font-bold"
              >
                &ldquo;There&apos;s probably a club for that.&rdquo;
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div
                id="find-your-people-mapping-card"
                className="relative border-2 border-[#212529] bg-white p-4 shadow-[4px_4px_0px_0px_#FB5607] max-w-xs"
              >
                <ScotchTape className="absolute -top-3 right-4 w-16 h-5 rotate-2 pointer-events-none" />
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#212529] uppercase tracking-wider mb-1 font-bold">
                  <Compass className="size-3.5 text-[#FB5607]" />
                  <span>COMMUNITY MAPPING</span>
                </div>
                <p className="text-xs text-[#212529]/80 leading-relaxed font-medium">
                  Broader campus initiatives and academic guilds where students
                  build, create, and organize.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* ========================================================
            2. MAIN CLUBS (Asymmetric Editorial Composition)
           ======================================================== */}
        <div className="mb-20 sm:mb-28">
          {/* Subheader Label */}
          <div
            id="find-your-people-main-subheader"
            className="flex items-baseline justify-between mb-8 pb-3 border-b-2 border-[#212529]/20"
          >
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs font-black uppercase tracking-[0.2em] px-3 py-1 bg-[#212529] text-[#E9ECEF] border border-[#212529] shadow-[2px_2px_0px_#FB5607]">
                MAIN CLUBS
              </span>
              <span className="text-xs font-mono text-[#212529]/70 uppercase tracking-wider hidden sm:inline font-bold">
                Campus-Wide Collectives
              </span>
            </div>
            <span className="font-mono text-xs text-[#212529]/60 font-bold">
              [ 08 GUILDS ]
            </span>
          </div>

          {/* Desktop Asymmetric Canvas / Mobile Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
            {/* 1. CIE — The Primary Anchor (Featured Large Display) */}
            <motion.div
              whileHover={{ y: -3, x: 2 }}
              transition={{ duration: 0.15 }}
              className="club-identity-card lg:col-span-7 bg-[#212529] text-[#E9ECEF] border-2 border-[#212529] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#FB5607] flex flex-col justify-between group relative overflow-hidden"
            >
              <ScotchTape className="absolute -top-3 left-8 w-24 h-6 -rotate-2 z-10 pointer-events-none" />

              <div
                className="pointer-events-none absolute right-4 -bottom-6 font-black text-[120px] sm:text-[140px] text-white/[0.05] select-none font-mono leading-none tracking-tighter"
                aria-hidden="true"
              >
                CIE
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="font-mono text-[11px] tracking-widest text-[#212529] uppercase font-black px-2.5 py-0.5 bg-[#FB5607] border border-[#212529]">
                    {MAIN_CLUBS[0].catalog}
                  </span>
                  <span className="font-mono text-xs text-[#E9ECEF]/50 tracking-wider font-bold">
                    EST. 2018
                  </span>
                </div>

                <div className="my-3">
                  <h3 className="text-5xl sm:text-7xl font-display tracking-tight text-white group-hover:text-[#FB5607] transition-colors">
                    {MAIN_CLUBS[0].code}
                  </h3>
                  <p className="font-mono text-sm uppercase tracking-wider text-[#E9ECEF]/80 mt-1 font-bold">
                    {MAIN_CLUBS[0].name}
                  </p>
                </div>

                <p className="mt-4 text-sm sm:text-base text-[#E9ECEF]/90 max-w-lg leading-relaxed font-medium">
                  {MAIN_CLUBS[0].tagline}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/20 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-[#FB5607] flex items-center gap-1.5 font-bold">
                  <span className="size-2 rounded-full bg-[#FB5607] animate-pulse" />
                  INCUBATION HUB
                </span>
                <Link
                  href="/clubs"
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-white hover:text-[#FB5607] transition-colors focus-visible:ring-2 focus-visible:ring-[#FB5607] p-1 rounded font-bold"
                >
                  <span>EXPLORE GUILD</span>
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* 2. CAME — Arts & Media (Distinct Cream Poster Treatment) */}
            <motion.div
              whileHover={{ y: -3, x: 2 }}
              transition={{ duration: 0.15 }}
              className="club-identity-card lg:col-span-5 bg-white border-2 border-[#212529] p-6 sm:p-7 shadow-[6px_6px_0px_0px_#8338EC] flex flex-col justify-between group relative"
            >
              <ScotchTape className="absolute -top-3 right-6 w-20 h-5 rotate-3 pointer-events-none" />
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[11px] tracking-widest text-[#8338EC] uppercase font-black">
                    {MAIN_CLUBS[1].catalog}
                  </span>
                  <DoodleSparkle className="size-4 text-[#8338EC]" />
                </div>

                <h3 className="text-4xl sm:text-5xl font-display tracking-tight text-[#212529] group-hover:text-[#8338EC] transition-colors">
                  {MAIN_CLUBS[1].code}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-[#212529]/70 mt-1 font-bold">
                  {MAIN_CLUBS[1].name}
                </p>

                <p className="mt-4 text-sm text-[#212529]/80 leading-relaxed font-medium">
                  {MAIN_CLUBS[1].tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#212529]/20 flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#212529]/70 uppercase font-bold">
                  MEDIA LAB
                </span>
                <Link
                  href="/clubs"
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase font-bold text-[#212529] hover:text-[#8338EC] transition-colors focus-visible:ring-2 focus-visible:ring-[#8338EC] p-1 rounded"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* 3. SCOPE — Open Programming (Terminal / Code Accent) */}
            <motion.div
              whileHover={{ y: -3, x: 2 }}
              transition={{ duration: 0.15 }}
              className="club-identity-card lg:col-span-4 bg-[#212529] text-[#E9ECEF] border-2 border-[#212529] p-6 shadow-[5px_5px_0px_0px_#212529] flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] tracking-wider text-[#FB5607] uppercase font-bold">
                    {MAIN_CLUBS[2].catalog}
                  </span>
                  <span className="font-mono text-xs text-[#FB5607] font-bold">
                    &gt;_
                  </span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-display tracking-tight text-white group-hover:text-[#FB5607] transition-colors">
                  {MAIN_CLUBS[2].code}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-white/70 mt-1 font-bold">
                  {MAIN_CLUBS[2].name}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  {MAIN_CLUBS[2].tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#FB5607] font-bold">
                  DEV GUILD
                </span>
                <Link
                  href="/clubs"
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase text-white hover:text-[#FB5607] transition-colors focus-visible:ring-2 focus-visible:ring-[#FB5607] p-1 rounded font-bold"
                >
                  <span>EXPLORE</span>
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* 4. CLUB LITERATI — Editorial Typographic Block */}
            <motion.div
              whileHover={{ y: -3, x: 2 }}
              transition={{ duration: 0.15 }}
              className="club-identity-card lg:col-span-4 bg-white border-2 border-[#212529] p-6 shadow-[5px_5px_0px_0px_#FB5607] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] tracking-widest text-[#212529]/70 uppercase font-bold">
                    {MAIN_CLUBS[3].catalog}
                  </span>
                  <span className="font-serif italic text-sm text-[#FB5607] font-bold">
                    §
                  </span>
                </div>

                <div className="border-l-4 border-[#FB5607] pl-3 my-1">
                  <h3 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-[#212529] leading-none group-hover:text-[#FB5607] transition-colors">
                    CLUB
                    <br />
                    LITERATI
                  </h3>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#212529]/80 leading-relaxed font-medium">
                  {MAIN_CLUBS[3].tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#212529]/20 flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#212529]/70 uppercase font-bold">
                  DEBATING &amp; MUN
                </span>
                <Link
                  href="/clubs"
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase font-bold text-[#212529] hover:text-[#FB5607] transition-colors focus-visible:ring-2 focus-visible:ring-[#FB5607] p-1 rounded"
                >
                  <span>VIEW</span>
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* 5. APEX — High-Energy Leadership Card */}
            <motion.div
              whileHover={{ y: -3, x: 2 }}
              transition={{ duration: 0.15 }}
              className="club-identity-card lg:col-span-4 bg-white border-2 border-[#212529] p-6 shadow-[5px_5px_0px_0px_#8338EC] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] tracking-widest text-[#212529]/70 uppercase font-bold">
                    {MAIN_CLUBS[4].catalog}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#8338EC]">
                    ▲
                  </span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-display tracking-tight text-[#212529] group-hover:text-[#8338EC] transition-colors">
                  {MAIN_CLUBS[4].code}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-[#212529]/70 mt-1 font-bold">
                  {MAIN_CLUBS[4].name}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#212529]/80 leading-relaxed font-medium">
                  {MAIN_CLUBS[4].tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#212529]/20 flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#212529]/70 uppercase font-bold">
                  LEADERSHIP
                </span>
                <Link
                  href="/clubs"
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase font-bold text-[#212529] hover:text-[#8338EC] transition-colors focus-visible:ring-2 focus-visible:ring-[#8338EC] p-1 rounded"
                >
                  <span>VIEW</span>
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* 6. EWB — Fieldwork & Humanitarian Tech */}
            <motion.div
              whileHover={{ y: -3, x: 2 }}
              transition={{ duration: 0.15 }}
              className="club-identity-card lg:col-span-4 bg-white border-2 border-[#212529] p-6 shadow-[5px_5px_0px_0px_#FB5607] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] tracking-widest text-[#212529]/70 uppercase font-bold">
                    {MAIN_CLUBS[5].catalog}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#FB5607]">
                    ⊕
                  </span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-display tracking-tight text-[#212529] group-hover:text-[#FB5607] transition-colors">
                  {MAIN_CLUBS[5].code}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-[#212529]/70 mt-1 font-bold">
                  {MAIN_CLUBS[5].name}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#212529]/80 leading-relaxed font-medium">
                  {MAIN_CLUBS[5].tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#212529]/20 flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#212529]/70 uppercase font-bold">
                  GRASSROOTS TECH
                </span>
                <Link
                  href="/clubs"
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase font-bold text-[#212529] hover:text-[#FB5607] transition-colors focus-visible:ring-2 focus-visible:ring-[#FB5607] p-1 rounded"
                >
                  <span>VIEW</span>
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* 7. CSI — Technical Standard Chapter */}
            <motion.div
              whileHover={{ y: -3, x: 2 }}
              transition={{ duration: 0.15 }}
              className="club-identity-card lg:col-span-4 bg-white border-2 border-[#212529] p-6 shadow-[5px_5px_0px_0px_#8338EC] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] tracking-widest text-[#212529]/70 uppercase font-bold">
                    {MAIN_CLUBS[6].catalog}
                  </span>
                  <span className="font-mono text-[11px] text-[#8338EC] font-bold">
                    STD
                  </span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-display tracking-tight text-[#212529] group-hover:text-[#8338EC] transition-colors">
                  {MAIN_CLUBS[6].code}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-[#212529]/70 mt-1 font-bold">
                  {MAIN_CLUBS[6].name}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#212529]/80 leading-relaxed font-medium">
                  {MAIN_CLUBS[6].tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#212529]/20 flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#212529]/70 uppercase font-bold">
                  SYSTEMS SOCIETY
                </span>
                <Link
                  href="/clubs"
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase font-bold text-[#212529] hover:text-[#8338EC] transition-colors focus-visible:ring-2 focus-visible:ring-[#8338EC] p-1 rounded"
                >
                  <span>VIEW</span>
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* 8. NSS — Civic Service Insignia Card */}
            <motion.div
              whileHover={{ y: -3, x: 2 }}
              transition={{ duration: 0.15 }}
              className="club-identity-card lg:col-span-4 bg-white border-2 border-[#212529] p-6 shadow-[5px_5px_0px_0px_#FB5607] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] tracking-widest text-[#FB5607] uppercase font-black">
                    {MAIN_CLUBS[7].catalog}
                  </span>
                  <span className="size-2 bg-[#FB5607] rounded-full" />
                </div>

                <h3 className="text-4xl sm:text-5xl font-display tracking-tight text-[#212529] group-hover:text-[#FB5607] transition-colors">
                  {MAIN_CLUBS[7].code}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-[#212529]/70 mt-1 font-bold">
                  {MAIN_CLUBS[7].name}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#212529]/80 leading-relaxed font-medium">
                  {MAIN_CLUBS[7].tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#212529]/20 flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#212529]/70 uppercase font-bold">
                  PUBLIC SERVICE
                </span>
                <Link
                  href="/clubs"
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase font-bold text-[#212529] hover:text-[#FB5607] transition-colors focus-visible:ring-2 focus-visible:ring-[#FB5607] p-1 rounded"
                >
                  <span>VIEW</span>
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========================================================
            3. DEPARTMENT CLUBS (Structured Academic Index)
           ======================================================== */}
        <div className="mb-16 sm:mb-20">
          {/* Subheader Label */}
          <div
            id="find-your-people-dept-subheader"
            className="flex items-baseline justify-between mb-8 pb-3 border-b-2 border-[#212529]/20"
          >
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs font-black uppercase tracking-[0.2em] px-3 py-1 bg-[#212529] text-[#E9ECEF] border border-[#212529] shadow-[2px_2px_0px_#8338EC]">
                DEPARTMENT CLUBS
              </span>
              <span className="text-xs font-mono text-[#212529]/70 uppercase tracking-wider hidden sm:inline font-bold">
                Specialized Academic Communities
              </span>
            </div>
            <span className="font-mono text-xs text-[#212529]/60 font-bold">
              [ 05 ACADEMIC CHAPTERS ]
            </span>
          </div>

          {/* Structured Classification Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {DEPT_CLUBS.map((club, index) => (
              <motion.div
                key={club.id}
                whileHover={{ y: -2, x: 1 }}
                transition={{ duration: 0.12 }}
                className="dept-identity-card bg-white border-2 border-[#212529] p-4 sm:p-5 shadow-[3px_3px_0px_0px_#212529] flex flex-col justify-between group hover:border-[#FB5607] hover:shadow-[3px_3px_0px_0px_#FB5607] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#212529]/60 font-bold">
                      DEPT 0{index + 1}
                    </span>
                    <span className="font-mono text-[10px] text-[#FB5607] font-black">
                      {club.display.split("·")[1]?.trim()}
                    </span>
                  </div>

                  <h4 className="font-mono text-lg sm:text-xl font-black text-[#212529] tracking-tight group-hover:text-[#FB5607] transition-colors">
                    {club.display}
                  </h4>

                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#212529]/70 mt-1 font-bold">
                    {club.dept}
                  </p>

                  <p className="mt-3 text-xs text-[#212529]/80 leading-normal font-medium">
                    {club.name}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#212529]/15 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#212529]/50 uppercase font-bold">
                    ACADEMIC
                  </span>
                  <Link
                    href="/clubs"
                    className="font-mono text-[11px] uppercase font-black text-[#212529] group-hover:text-[#FB5607] inline-flex items-center gap-0.5 focus-visible:ring-1 focus-visible:ring-[#FB5607] p-0.5 rounded"
                  >
                    <span>OPEN</span>
                    <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================
            4. SECTION FOOTER / CALL TO ACTION
           ======================================================== */}
        <div
          id="find-your-people-footer"
          className="pt-8 border-t-2 border-[#212529] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#212529]/70 block font-bold">
              EXPLORE THE COMPLETE GUILD DIRECTORY
            </span>
            <p className="text-sm text-[#212529]/90 mt-0.5 font-script text-base">
              Find leadership rosters, event calendars, and join cohorts for
              each student chapter.
            </p>
          </div>

          <Link
            href="/clubs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#212529] text-[#E9ECEF] font-mono text-sm uppercase tracking-widest font-black border-2 border-[#212529] shadow-[4px_4px_0px_0px_#FB5607] hover:bg-[#FB5607] hover:text-[#212529] hover:shadow-[6px_6px_0px_0px_#212529] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#212529]"
          >
            <span>EXPLORE ALL CLUBS</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
