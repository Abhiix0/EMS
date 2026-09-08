/**
 * Happening Now section component for CIE Landing Page.
 * Phase 1 structural skeleton with section heading "HAPPENING NOW",
 * realistic placeholder event data, and card grid ready for future accordion/transition morphing.
 */
import React from "react";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowUpRight } from "lucide-react";

export interface EventPlaceholder {
  id: string;
  title: string;
  club: string;
  date: string;
  time: string;
  location: string;
  category: string;
  status: "LIVE" | "UPCOMING" | "TODAY";
}

const MOCK_EVENTS: EventPlaceholder[] = [
  {
    id: "evt-hackmlr-2026",
    title: "HackMLR 2026: 36-Hour Flagship Hackathon",
    club: "Centre for Innovation & Entrepreneurship",
    date: "Mar 15, 2026",
    time: "09:00 AM IST",
    location: "Innovation Hub, Central Complex",
    category: "Hackathon",
    status: "LIVE",
  },
  {
    id: "evt-aerodesign-challenge",
    title: "Autonomous Drone & AeroDesign Showcase",
    club: "Aero Club & Robotics Society",
    date: "Mar 18, 2026",
    time: "02:00 PM IST",
    location: "Aeronautical Lab & Grounds",
    category: "Engineering",
    status: "TODAY",
  },
  {
    id: "evt-venture-pitch-mlrit",
    title: "Venture Pitch MLRIT: Seed Capital Arena",
    club: "Institution's Innovation Council",
    date: "Mar 22, 2026",
    time: "10:30 AM IST",
    location: "Auditorium 1",
    category: "Pitch & Funding",
    status: "UPCOMING",
  },
  {
    id: "evt-kalaotsav-2026",
    title: "Kalaotsav: Inter-College Cultural Gala",
    club: "Literary & Cultural Society",
    date: "Mar 25, 2026",
    time: "05:30 PM IST",
    location: "Open Air Theatre",
    category: "Culture",
    status: "UPCOMING",
  },
];

export default function HappeningNow() {
  return (
    <section
      id="happening-now"
      aria-labelledby="happening-now-heading"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
      <div
        id="events"
        className="relative -top-24 invisible"
        aria-hidden="true"
      />
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-400 font-semibold">
            Real-time Campus Schedule
          </span>
          <h2
            id="happening-now-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2"
          >
            HAPPENING NOW
          </h2>
        </div>
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
        >
          <span>View all campus events</span>
          <ArrowUpRight className="size-4" />
        </Link>
      </div>

      {/* Structural Area: Event Cards / Future Accordion Gallery Area */}
      <div
        data-stage="happening-now-stage"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
      >
        {MOCK_EVENTS.map((event) => (
          <article
            key={event.id}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
          >
            <div>
              {/* Badge line */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-white/5 border border-white/10 text-slate-300">
                  {event.status === "LIVE" && (
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                  )}
                  {event.category}
                </span>
                <span className="text-xs font-mono text-slate-400 tracking-wider">
                  {event.status}
                </span>
              </div>

              {/* Title & Host */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-red-400 transition-colors">
                {event.title}
              </h3>
              <p className="text-sm text-slate-400 mt-2">{event.club}</p>
            </div>

            {/* Event Metadata */}
            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="size-3.5 text-slate-500 shrink-0" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-3.5 text-slate-500 shrink-0" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 truncate">
                <MapPin className="size-3.5 text-slate-500 shrink-0" />
                <span className="truncate">{event.location}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
