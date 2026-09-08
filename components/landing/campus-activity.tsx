/**
 * Campus Activity section component for CIE Landing Page.
 * Phase 1 structural skeleton representing the 3 core pillars:
 * Events, Clubs, and Experiences with structural metrics placeholders.
 */
import React from "react";
import { Sparkles, CalendarDays, Users2 } from "lucide-react";

export interface ConceptPillar {
  title: "Events" | "Clubs" | "Experiences";
  tagline: string;
  metric: string;
  metricLabel: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PILLARS: ConceptPillar[] = [
  {
    title: "Events",
    tagline: "Live Energy",
    metric: "120+",
    metricLabel: "Annual Campus Events",
    description:
      "Hackathons, technical symposiums, research symposiums, and cultural milestones orchestrated across all college departments.",
    icon: CalendarDays,
  },
  {
    title: "Clubs",
    tagline: "Shared Passion",
    metric: "35+",
    metricLabel: "Active Communities",
    description:
      "Student-governed technical chapters, cultural guilds, athletic clubs, and dedicated incubation working groups.",
    icon: Users2,
  },
  {
    title: "Experiences",
    tagline: "Transformative Growth",
    metric: "10K+",
    metricLabel: "Engaged Participants",
    description:
      "Hands-on maker labs, venture funding pitches, industry mentorship fellowships, and inter-collegiate championships.",
    icon: Sparkles,
  },
];

export default function CampusActivity() {
  return (
    <section
      id="campus-activity"
      aria-labelledby="campus-activity-heading"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-400 font-semibold block mb-3">
          Campus Ecosystem
        </span>
        <h2
          id="campus-activity-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase"
        >
          YOUR CAMPUS HAS A LOT GOING ON
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal">
          Three vital pillars continuously powering collaboration, innovation,
          and leadership at MLRIT.
        </p>
      </div>

      {/* 3 Core Concepts: Events, Clubs, Experiences */}
      <div
        data-stage="campus-activity-pillars"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 flex flex-col justify-between hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    {pillar.tagline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {pillar.title}
                </h3>

                {/* Metric placeholder for Phase 5 animated statistical treatment */}
                <div className="mt-6 mb-4">
                  <div className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-white">
                    {pillar.metric}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-mono mt-1">
                    {pillar.metricLabel}
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Structural telemetry slot for future animation */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Pillar 0{PILLARS.indexOf(pillar) + 1}</span>
                <span>Telemetry Active</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
