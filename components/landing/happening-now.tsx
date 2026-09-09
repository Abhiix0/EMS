"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Tag,
  Sparkles,
} from "lucide-react";
import { TornPaperDivider, ScotchTape, DoodleStar } from "./doodles";

/**
 * HAPPENING NOW Section — Zine-Inspired Grunge Scrapbook / Volcanic Ash Edition
 *
 * Visual Language:
 * - Obsidian Charcoal (#212529) backdrop creating a high-contrast volcanic band.
 * - Ash Pale White (#E9ECEF) printed newsprint paper cards with hard ink borders.
 * - Lava Orange (#FB5607) & Electric Violet (#8338EC) neo-brutalist offset drop shadows.
 * - Scotch tape strips, registration crosshairs, and live status beacons.
 */

interface EventData {
  id: string;
  title: string;
  category: string;
  tag: string;
  club: string;
  date: string;
  time: string;
  location: string;
  status: "LIVE NOW" | "STARTING SOON" | "TOMORROW" | "UPCOMING";
  dateStamp: string;
  href: string;
}

const FEATURED_EVENT: EventData = {
  id: "evt-hackmlr-2026",
  title: "HackMLR 2026: 36H Flagship Sprint",
  category: "TECH // INNOVATION",
  tag: "#TECH SPRINT",
  club: "Centre for Innovation & Entrepreneurship (CIE)",
  date: "TONIGHT",
  time: "6:30 PM IST",
  location: "Innovation Hub • Central Labs",
  status: "LIVE NOW",
  dateStamp: "09.08",
  href: "/events",
};

const SUPPORTING_EVENTS: EventData[] = [
  {
    id: "evt-aerodesign-showcase",
    title: "Autonomous Drone & Aero Showcase",
    category: "ENGINEERING",
    tag: "#ROBOTICS",
    club: "Aero Club & Robotics Society",
    date: "TODAY",
    time: "2:00 PM IST",
    location: "Aeronautical Lab Grounds",
    status: "STARTING SOON",
    dateStamp: "TODAY",
    href: "/events",
  },
  {
    id: "evt-venture-pitch-mlrit",
    title: "Venture Pitch: Seed Capital Arena",
    category: "VENTURE & CAPITAL",
    tag: "#STARTUPS",
    club: "Institution's Innovation Council (IIC)",
    date: "TOMORROW",
    time: "10:30 AM IST",
    location: "Auditorium 1 • Executive Hall",
    status: "TOMORROW",
    dateStamp: "10.08",
    href: "/events",
  },
  {
    id: "evt-kalaotsav-gala",
    title: "Kalaotsav: Inter-College Gala",
    category: "CULTURE & ARTS",
    tag: "#CULTURAL",
    club: "Literary & Cultural Society",
    date: "FRIDAY",
    time: "5:30 PM IST",
    location: "Open Air Amphitheatre",
    status: "UPCOMING",
    dateStamp: "12.08",
    href: "/events",
  },
];

export default function HappeningNow() {
  return (
    <section
      id="happening-now"
      aria-labelledby="happening-now-heading"
      className="relative w-full py-24 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-10 bg-[#212529] text-[#E9ECEF] overflow-x-clip"
    >
      {/* Torn Paper Boundary at Top (transition from light hero canvas) */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%] overflow-hidden leading-none pointer-events-none z-20">
        <TornPaperDivider fill="#212529" flip />
      </div>

      {/* Subtle Halftone / Noise Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(233, 236, 239, 0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div
        id="happening-now-board-exit"
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {/* ========================================================================= */}
        {/* SECTION HEADER: BOLD EDITORIAL TITLE + MANDATORY SUPPORTING STATEMENT    */}
        {/* ========================================================================= */}
        <div id="happening-now-header" className="mb-14 sm:mb-18 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border-2 border-[#FB5607] bg-[#FB5607]/10 text-xs font-mono tracking-widest uppercase text-[#FB5607] font-black mb-3">
            <span className="animate-ping inline-block size-1.5 rounded-full bg-[#FB5607]" />
            <span>● LIVE CAMPUS EPHEMERA</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <h2
              id="happening-now-heading"
              className="text-4xl sm:text-5xl lg:text-7xl font-display uppercase tracking-tight text-[#E9ECEF] leading-none"
              style={{
                textShadow: "4px 4px 0 #FB5607",
              }}
            >
              HAPPENING NOW
            </h2>
            <DoodleStar className="size-8 text-[#FB5607] hidden sm:inline-block animate-pulse" />
          </div>
          {/* Mandatory exact supporting line with scrapbook script flair */}
          <p className="mt-4 text-xl sm:text-2xl text-[#E9ECEF]/90 font-script tracking-wide max-w-2xl">
            &ldquo;The campus doesn&apos;t really sit still.&rdquo;
          </p>
        </div>

        {/* ========================================================================= */}
        {/* ASYMMETRICAL COMPOSITION: DOMINANT FEATURED EVENT POSTER                  */}
        {/* ========================================================================= */}
        <div id="happening-now-featured" className="mb-10 sm:mb-14">
          <article
            id="happening-now-featured-article"
            className="group relative bg-[#E9ECEF] text-[#212529] border-2 border-[#212529] rounded-xl sm:rounded-2xl p-6 sm:p-9 lg:p-11 shadow-[8px_8px_0px_#212529,14px_14px_0px_#FB5607] hover:shadow-[4px_4px_0px_#212529,8px_8px_0px_#FB5607] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 overflow-hidden"
          >
            {/* Scrapbook Scotch Tape Accent */}
            <ScotchTape className="absolute -top-3 right-10 w-28 h-7 rotate-2 z-20 pointer-events-none" />

            {/* Top Registration Crosshairs (Printed Artifact Detail) */}
            <span className="absolute top-2 left-2 text-[11px] font-mono text-[#212529]/35 select-none font-bold">
              ⌖
            </span>
            <span className="absolute top-2 right-2 text-[11px] font-mono text-[#212529]/35 select-none font-bold">
              ⌖
            </span>

            {/* Featured Event Top Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b-2 border-[#212529]">
              <div className="flex items-center gap-3">
                {/* Date Stamp Fragment */}
                <div className="px-3 py-1 bg-[#212529] text-[#E9ECEF] rounded-sm font-mono font-black text-xs tracking-wider shadow-[2px_2px_0px_#FB5607]">
                  {FEATURED_EVENT.dateStamp}
                </div>
                {/* Category Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm border-2 border-[#212529] bg-white font-mono text-xs font-bold uppercase tracking-wider text-[#212529]">
                  <Tag className="size-3 text-[#FB5607]" />
                  <span>{FEATURED_EVENT.category}</span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FB5607] text-[#212529] border-2 border-[#212529] font-mono text-xs font-black tracking-wider uppercase shadow-[2px_2px_0px_#212529]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#212529]" />
                </span>
                <span>{FEATURED_EVENT.status}</span>
              </div>
            </div>

            {/* Featured Event Headline & Host */}
            <div className="max-w-4xl">
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#212529] leading-[0.98] group-hover:text-[#FB5607] transition-colors duration-150 font-sans">
                {FEATURED_EVENT.title}
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base font-mono font-bold text-neutral-700 flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#FB5607]" />
                <span>Organized by {FEATURED_EVENT.club}</span>
              </p>
            </div>

            {/* Event Metadata & Logistics Strip */}
            <div className="mt-8 pt-6 border-t-2 border-[#212529]/20 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs sm:text-sm text-[#212529]">
              <div className="flex items-center gap-2.5">
                <Clock className="size-4 text-[#FB5607] shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase text-neutral-600 font-bold">
                    Schedule
                  </span>
                  <span className="font-bold">
                    {FEATURED_EVENT.date} · {FEATURED_EVENT.time}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="size-4 text-[#8338EC] shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase text-neutral-600 font-bold">
                    Venue
                  </span>
                  <span className="font-bold">{FEATURED_EVENT.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="size-4 text-[#FB5607] shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase text-neutral-600 font-bold">
                    Access Pass
                  </span>
                  <span className="font-bold">
                    Open Entry • Check-in Active
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Perforated Line & Call to Action */}
            <div className="mt-8 pt-6 border-t-2 border-dashed border-[#212529]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Printed Barcode & Dispatch Code */}
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center gap-0.5 h-6 overflow-hidden opacity-85"
                  aria-hidden="true"
                >
                  <span className="w-1 h-full bg-[#212529]" />
                  <span className="w-0.5 h-full bg-[#212529]" />
                  <span className="w-1.5 h-full bg-[#212529]" />
                  <span className="w-1 h-full bg-[#212529]" />
                  <span className="w-2 h-full bg-[#212529]" />
                  <span className="w-0.5 h-full bg-[#212529]" />
                  <span className="w-1.5 h-full bg-[#212529]" />
                  <span className="w-0.5 h-full bg-[#212529]" />
                  <span className="w-2 h-full bg-[#212529]" />
                  <span className="w-1 h-full bg-[#212529]" />
                </div>
                <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider font-bold">
                  EMS // DISPATCH REF: 26-VOLCANIC-CIE
                </span>
              </div>

              {/* View Event Button */}
              <Link
                href={FEATURED_EVENT.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-black font-mono uppercase text-[#212529] bg-[#FB5607] border-2 border-[#212529] shadow-[4px_4px_0px_#212529] hover:shadow-[2px_2px_0px_#212529] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 group"
              >
                <span>View Event</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        </div>

        {/* ========================================================================= */}
        {/* ASYMMETRICAL COMPOSITION: STAGGERED SUPPORTING EVENTS                     */}
        {/* ========================================================================= */}
        <div
          id="happening-now-supporting"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
        >
          {/* Supporting Event 1: Left-aligned, slightly wider ticket-style card */}
          <div className="lg:col-span-5">
            <Link
              href={SUPPORTING_EVENTS[0].href}
              className="group block relative bg-[#2a2e33] border-2 border-[#E9ECEF]/30 rounded-xl p-5 sm:p-6 shadow-[6px_6px_0px_#8338EC] hover:shadow-[4px_4px_0px_#FB5607] hover:border-[#FB5607] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
            >
              {/* Ticket Notch on Left */}
              <span
                className="absolute -left-2.5 top-1/2 -translate-y-1/2 size-5 rounded-full bg-[#212529] border-r-2 border-[#E9ECEF]/30"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                <span className="text-[#FB5607] font-bold flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[#FB5607]" />
                  {SUPPORTING_EVENTS[0].status}
                </span>
                <span className="text-neutral-400 font-medium">
                  {SUPPORTING_EVENTS[0].date} · {SUPPORTING_EVENTS[0].time}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#E9ECEF] group-hover:text-[#FB5607] transition-colors leading-snug">
                {SUPPORTING_EVENTS[0].title}
              </h4>
              <p className="mt-2 text-xs font-mono text-neutral-400">
                {SUPPORTING_EVENTS[0].club}
              </p>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 truncate">
                  <MapPin className="size-3 text-[#FB5607] shrink-0" />
                  <span className="truncate">
                    {SUPPORTING_EVENTS[0].location}
                  </span>
                </span>
                <span className="text-[#FB5607] font-bold group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                  →
                </span>
              </div>
            </Link>
          </div>

          {/* Supporting Event 2: Center-indented cream paper dispatch card */}
          <div className="lg:col-span-4 lg:-mt-2">
            <Link
              href={SUPPORTING_EVENTS[1].href}
              className="group block relative bg-[#E9ECEF] text-[#212529] border-2 border-[#212529] rounded-xl p-5 sm:p-6 shadow-[6px_6px_0px_#212529,10px_10px_0px_#FB5607] hover:shadow-[4px_4px_0px_#212529,6px_6px_0px_#FB5607] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
            >
              <ScotchTape className="absolute -top-2 left-6 w-20 h-5 rotate-1 z-10 pointer-events-none" />

              {/* Corner Stamp */}
              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#212529]/20 text-xs font-mono">
                <span className="px-2 py-0.5 rounded-sm bg-[#FB5607] text-[#212529] font-black text-[10px] tracking-wider uppercase border border-[#212529]">
                  {SUPPORTING_EVENTS[1].status}
                </span>
                <span className="text-neutral-700 font-bold">
                  {SUPPORTING_EVENTS[1].date} · {SUPPORTING_EVENTS[1].time}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#212529] group-hover:text-[#FB5607] transition-colors leading-snug">
                {SUPPORTING_EVENTS[1].title}
              </h4>
              <p className="mt-2 text-xs font-mono text-neutral-700 font-medium">
                {SUPPORTING_EVENTS[1].club}
              </p>

              <div className="mt-4 pt-3 border-t border-[#212529]/20 flex items-center justify-between text-xs font-mono text-neutral-700">
                <span className="flex items-center gap-1.5 truncate">
                  <MapPin className="size-3 text-[#FB5607] shrink-0" />
                  <span className="truncate">
                    {SUPPORTING_EVENTS[1].location}
                  </span>
                </span>
                <span className="text-[#212529] font-black group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                  →
                </span>
              </div>
            </Link>
          </div>

          {/* Supporting Event 3: Right-aligned compact notice block with registration stamp */}
          <div className="lg:col-span-3 lg:mt-3">
            <Link
              href={SUPPORTING_EVENTS[2].href}
              className="group block relative bg-[#2a2e33] border-2 border-[#E9ECEF]/30 rounded-xl p-5 sm:p-6 shadow-[6px_6px_0px_#8338EC] hover:shadow-[4px_4px_0px_#8338EC] hover:border-[#8338EC] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
            >
              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                <span className="px-2 py-0.5 rounded-sm border-2 border-[#8338EC] text-[#E9ECEF] text-[10px] font-black uppercase bg-[#8338EC]/20">
                  {SUPPORTING_EVENTS[2].status}
                </span>
                <span className="text-neutral-400 font-medium">
                  {SUPPORTING_EVENTS[2].dateStamp}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-[#E9ECEF] group-hover:text-[#8338EC] transition-colors leading-snug">
                {SUPPORTING_EVENTS[2].title}
              </h4>
              <p className="mt-2 text-xs font-mono text-neutral-400">
                {SUPPORTING_EVENTS[2].club}
              </p>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 truncate">
                  <Calendar className="size-3 text-[#8338EC] shrink-0" />
                  <span className="truncate">{SUPPORTING_EVENTS[2].time}</span>
                </span>
                <span className="text-[#8338EC] font-bold group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                  →
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM ACTION: EDITORIAL VIEW ALL EVENTS CALLOUT                          */}
        {/* ========================================================================= */}
        <div
          id="happening-now-bottom"
          className="mt-14 sm:mt-18 pt-8 border-t-2 border-dashed border-[#E9ECEF]/20 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-xs font-mono text-[#E9ECEF]/70 uppercase tracking-widest text-center sm:text-left font-bold">
            [ ALL CLUBS · ALL DEPARTMENTS · VERIFIED CIE CALENDAR ]
          </div>
          <Link
            href="/events"
            id="view-all-events-cta"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-lg text-sm sm:text-base font-black font-mono uppercase text-[#212529] bg-[#E9ECEF] border-2 border-[#212529] shadow-[4px_4px_0px_#FB5607] hover:border-[#FB5607] hover:bg-[#FB5607] hover:text-[#212529] hover:shadow-[2px_2px_0px_#212529] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 group"
          >
            <span>View All Events</span>
            <span className="text-[#212529] group-hover:translate-x-1.5 transition-transform duration-150">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
