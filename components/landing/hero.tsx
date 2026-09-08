/**
 * Hero section component for CIE Landing Page.
 * Phase 1 structural skeleton with editorial headline, primary/secondary CTAs,
 * and a visual placeholder for the Phase 2 activity visual canvas.
 */
import React from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-36 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
      {/* Editorial Headline */}
      <h1
        id="hero-heading"
        className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white max-w-5xl leading-[1.08]"
      >
        Campus, in motion.
      </h1>

      {/* Supporting Copy */}
      <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl font-normal tracking-wide">
        One place for what&apos;s happening.
      </p>

      {/* Action CTAs */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md">
        <Link
          href="/events"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 backdrop-blur-xs group shadow-lg shadow-black/20"
        >
          <span>Explore Events</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href="/clubs"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-medium text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition-all duration-200"
        >
          <Compass className="size-4 text-slate-400" />
          <span>Explore Clubs</span>
        </Link>
      </div>

      {/* Structural Placeholder: Future Animated Activity Visual (Phase 2) */}
      <div
        data-placeholder="hero-activity-visual"
        className="mt-16 sm:mt-20 w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] flex items-center justify-center p-8 transition-colors"
      >
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <div className="size-3 rounded-full bg-red-500/80 animate-pulse" />
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-mono">
            Live Activity Stage • In Motion
          </p>
          <p className="text-xs text-slate-500 max-w-md hidden sm:block">
            Placeholder for future interactive event &amp; activity canvas
            handoff
          </p>
        </div>
      </div>
    </section>
  );
}
