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

/**
 * HAPPENING NOW Section — Dark Editorial Neo-Brutalism for CIE / EMS
 *
 * Visual Language:
 * - Editorial event board + campus noticeboard + physical ephemera.
 * - Asymmetric composition: 1 dominant featured event poster + 3 staggered supporting event notices.
 * - Deep navy (#050811 / #0A0F1D) canvas, cream (#F4F3EE / #F8F9FA) printed surfaces,
 *   crisp crimson (#C5283D) accents, and muted mint (#6EE7B7) live status indicators.
 * - Hard borders, hard offset shadows, registration marks, and tactile press states.
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
      className="relative w-full py-24 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-10 bg-[#050811] text-[#F8F9FA] overflow-x-clip"
    >
      {/* Subtle Blueprint Dot Grid (Consistent with Hero aesthetic) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(248, 249, 250, 0.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* ========================================================================= */}
        {/* SECTION HEADER: BOLD EDITORIAL TITLE + MANDATORY SUPPORTING STATEMENT    */}
        {/* ========================================================================= */}
        <div id="happening-now-header" className="mb-14 sm:mb-18 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded border border-white/15 bg-white/[0.03] text-[11px] font-mono tracking-widest uppercase text-[#6EE7B7] mb-3">
            <span>●</span>
            <span>LIVE CAMPUS EPHEMERA</span>
          </div>
          <h2
            id="happening-now-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F8F9FA] leading-none"
            style={{
              textShadow: "3px 3px 0 #8B1E2D",
            }}
          >
            HAPPENING NOW
          </h2>
          {/* Mandatory exact supporting line */}
          <p className="mt-3 text-lg sm:text-xl text-[#F8F9FA]/80 font-normal tracking-normal max-w-2xl">
            The campus doesn&apos;t really sit still.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* ASYMMETRICAL COMPOSITION: DOMINANT FEATURED EVENT POSTER                  */}
        {/* ========================================================================= */}
        <div id="happening-now-featured" className="mb-10 sm:mb-14">
          <article
            id="featured-event-poster"
            className="group relative bg-[#F4F3EE] text-[#0A0F1D] border-2 border-black rounded-xl sm:rounded-2xl p-6 sm:p-9 lg:p-11 shadow-[8px_8px_0px_#000000,14px_14px_0px_#8B1E2D] hover:shadow-[6px_6px_0px_#000000,10px_10px_0px_#8B1E2D] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 overflow-hidden"
          >
            {/* Top Registration Crosshairs (Printed Artifact Detail) */}
            <span className="absolute top-2 left-2 text-[10px] font-mono text-[#0A0F1D]/30 select-none">
              ⌖
            </span>
            <span className="absolute top-2 right-2 text-[10px] font-mono text-[#0A0F1D]/30 select-none">
              ⌖
            </span>

            {/* Featured Event Top Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b-2 border-[#0A0F1D]">
              <div className="flex items-center gap-3">
                {/* Date Stamp Fragment */}
                <div className="px-2.5 py-1 bg-[#0A0F1D] text-[#F8F9FA] rounded font-mono font-black text-xs tracking-wider">
                  {FEATURED_EVENT.dateStamp}
                </div>
                {/* Category Pill */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-[#0A0F1D] bg-white font-mono text-xs font-bold uppercase tracking-wider text-[#0A0F1D]">
                  <Tag className="size-3 text-[#C5283D]" />
                  <span>{FEATURED_EVENT.category}</span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6EE7B7]/25 border border-[#6EE7B7] text-[#0A0F1D] font-mono text-xs font-bold tracking-wider uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6EE7B7] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6EE7B7]" />
                </span>
                <span>{FEATURED_EVENT.status}</span>
              </div>
            </div>

            {/* Featured Event Headline & Host */}
            <div className="max-w-4xl">
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0A0F1D] leading-[0.98] group-hover:text-[#C5283D] transition-colors duration-150">
                {FEATURED_EVENT.title}
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base font-mono font-medium text-neutral-600 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#C5283D]" />
                <span>Organized by {FEATURED_EVENT.club}</span>
              </p>
            </div>

            {/* Event Metadata & Logistics Strip */}
            <div className="mt-8 pt-6 border-t border-[#0A0F1D]/20 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs sm:text-sm text-neutral-800">
              <div className="flex items-center gap-2.5">
                <Clock className="size-4 text-[#C5283D] shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase text-neutral-500 font-bold">
                    Schedule
                  </span>
                  <span className="font-bold">
                    {FEATURED_EVENT.date} · {FEATURED_EVENT.time}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="size-4 text-[#C5283D] shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase text-neutral-500 font-bold">
                    Venue
                  </span>
                  <span className="font-bold">{FEATURED_EVENT.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="size-4 text-[#6EE7B7] shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase text-neutral-500 font-bold">
                    Access Pass
                  </span>
                  <span className="font-bold">
                    Open Entry • Check-in Active
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Perforated Line & Call to Action */}
            <div className="mt-8 pt-6 border-t-2 border-dashed border-[#0A0F1D]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Printed Barcode & Dispatch Code */}
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center gap-0.5 h-6 overflow-hidden opacity-80"
                  aria-hidden="true"
                >
                  <span className="w-1 h-full bg-[#0A0F1D]" />
                  <span className="w-0.5 h-full bg-[#0A0F1D]" />
                  <span className="w-1.5 h-full bg-[#0A0F1D]" />
                  <span className="w-1 h-full bg-[#0A0F1D]" />
                  <span className="w-2 h-full bg-[#0A0F1D]" />
                  <span className="w-0.5 h-full bg-[#0A0F1D]" />
                  <span className="w-1.5 h-full bg-[#0A0F1D]" />
                  <span className="w-0.5 h-full bg-[#0A0F1D]" />
                  <span className="w-2 h-full bg-[#0A0F1D]" />
                  <span className="w-1 h-full bg-[#0A0F1D]" />
                </div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  EMS // NOTICE NO. 26-CIE
                </span>
              </div>

              {/* View Event Button */}
              <Link
                href={FEATURED_EVENT.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold font-mono uppercase text-[#F8F9FA] bg-[#C5283D] border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 group"
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
              className="group block relative bg-[#0F172A] border-2 border-black rounded-xl p-5 sm:p-6 shadow-[6px_6px_0px_#000000] hover:shadow-[4px_4px_0px_#C5283D] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
            >
              {/* Ticket Notch on Left */}
              <span
                className="absolute -left-2.5 top-1/2 -translate-y-1/2 size-5 rounded-full bg-[#050811] border-r-2 border-black"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                <span className="text-[#6EE7B7] font-bold flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[#6EE7B7]" />
                  {SUPPORTING_EVENTS[0].status}
                </span>
                <span className="text-slate-400 font-medium">
                  {SUPPORTING_EVENTS[0].date} · {SUPPORTING_EVENTS[0].time}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#F8F9FA] group-hover:text-[#6EE7B7] transition-colors leading-snug">
                {SUPPORTING_EVENTS[0].title}
              </h4>
              <p className="mt-2 text-xs font-mono text-slate-400">
                {SUPPORTING_EVENTS[0].club}
              </p>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 truncate">
                  <MapPin className="size-3 text-[#C5283D] shrink-0" />
                  <span className="truncate">
                    {SUPPORTING_EVENTS[0].location}
                  </span>
                </span>
                <span className="text-white group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                  →
                </span>
              </div>
            </Link>
          </div>

          {/* Supporting Event 2: Center-indented cream paper dispatch card */}
          <div className="lg:col-span-4 lg:-mt-2">
            <Link
              href={SUPPORTING_EVENTS[1].href}
              className="group block relative bg-[#F4F3EE] text-[#0A0F1D] border-2 border-black rounded-xl p-5 sm:p-6 shadow-[6px_6px_0px_#000000] hover:shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
            >
              {/* Corner Stamp */}
              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#0A0F1D]/20 text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-[#C5283D] text-[#F8F9FA] font-bold text-[10px] tracking-wider uppercase">
                  {SUPPORTING_EVENTS[1].status}
                </span>
                <span className="text-neutral-600 font-bold">
                  {SUPPORTING_EVENTS[1].date} · {SUPPORTING_EVENTS[1].time}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#0A0F1D] group-hover:text-[#C5283D] transition-colors leading-snug">
                {SUPPORTING_EVENTS[1].title}
              </h4>
              <p className="mt-2 text-xs font-mono text-neutral-600">
                {SUPPORTING_EVENTS[1].club}
              </p>

              <div className="mt-4 pt-3 border-t border-[#0A0F1D]/20 flex items-center justify-between text-xs font-mono text-neutral-700">
                <span className="flex items-center gap-1.5 truncate">
                  <MapPin className="size-3 text-[#C5283D] shrink-0" />
                  <span className="truncate">
                    {SUPPORTING_EVENTS[1].location}
                  </span>
                </span>
                <span className="text-[#0A0F1D] font-bold group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                  →
                </span>
              </div>
            </Link>
          </div>

          {/* Supporting Event 3: Right-aligned compact notice block with registration stamp */}
          <div className="lg:col-span-3 lg:mt-3">
            <Link
              href={SUPPORTING_EVENTS[2].href}
              className="group block relative bg-[#111827] border-2 border-black rounded-xl p-5 sm:p-6 shadow-[6px_6px_0px_#000000] hover:shadow-[4px_4px_0px_#6EE7B7] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
            >
              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                <span className="px-2 py-0.5 rounded border border-white/20 text-[#F8F9FA] text-[10px] font-bold uppercase">
                  {SUPPORTING_EVENTS[2].status}
                </span>
                <span className="text-slate-400 font-medium">
                  {SUPPORTING_EVENTS[2].dateStamp}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-[#F8F9FA] group-hover:text-[#6EE7B7] transition-colors leading-snug">
                {SUPPORTING_EVENTS[2].title}
              </h4>
              <p className="mt-2 text-xs font-mono text-slate-400">
                {SUPPORTING_EVENTS[2].club}
              </p>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 truncate">
                  <Calendar className="size-3 text-[#6EE7B7] shrink-0" />
                  <span className="truncate">{SUPPORTING_EVENTS[2].time}</span>
                </span>
                <span className="text-white group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                  →
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM ACTION: EDITORIAL VIEW ALL EVENTS CALLOUT                          */}
        {/* ========================================================================= */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest text-center sm:text-left">
            [ ALL CLUBS · ALL DEPARTMENTS · VERIFIED CIE CALENDAR ]
          </div>
          <Link
            href="/events"
            id="view-all-events-cta"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-lg text-sm sm:text-base font-bold font-mono uppercase text-[#F8F9FA] bg-[#0A0F1D] border-2 border-white/30 shadow-[4px_4px_0px_#C5283D] hover:border-white hover:shadow-[2px_2px_0px_#C5283D] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 group"
          >
            <span>View All Events</span>
            <span className="text-[#C5283D] group-hover:translate-x-1.5 transition-transform duration-150">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
