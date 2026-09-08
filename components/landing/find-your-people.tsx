/**
 * Find Your People section component for CIE Landing Page.
 * Phase 1 structural skeleton with heading "FIND YOUR PEOPLE",
 * subheading "CLUBS & COMMUNITIES", and structural club showcase cards.
 */
import React from "react";
import Link from "next/link";
import { ArrowUpRight, Users } from "lucide-react";

export interface ClubPlaceholder {
  id: string;
  name: string;
  category: string;
  description: string;
  membersCount: string;
}

const MOCK_CLUBS: ClubPlaceholder[] = [
  {
    id: "club-cie",
    name: "Centre for Innovation & Entrepreneurship",
    category: "Incubation & Startups",
    description:
      "Incubating student founders, IP filing, and supporting early-stage venture acceleration across campus.",
    membersCount: "250+ Innovators",
  },
  {
    id: "club-iic",
    name: "Institution's Innovation Council (IIC)",
    category: "National Mandate",
    description:
      "Driving hackathons, IPR seminars, and national innovation rankings under the MoE Innovation Cell.",
    membersCount: "400+ Members",
  },
  {
    id: "club-robotics",
    name: "Robotics & Automation Society",
    category: "Hardware & AI",
    description:
      "Hands-on building of autonomous mobile rovers, battlebots, industrial cobots, and computer vision systems.",
    membersCount: "180+ Engineers",
  },
  {
    id: "club-acm",
    name: "ACM Student Chapter",
    category: "Computing & Tech",
    description:
      "Deep diving into algorithmic problem solving, competitive coding, open-source cohorts, and peer tech talks.",
    membersCount: "320+ Coders",
  },
  {
    id: "club-aero",
    name: "Aero & Avionics Club",
    category: "Aerospace",
    description:
      "Designing fixed-wing RC crafts, quadcopters, rocketry telemetry, and competing in national aero-design challenges.",
    membersCount: "140+ Builders",
  },
  {
    id: "club-cultural",
    name: "Literary & Cultural Society",
    category: "Arts & Culture",
    description:
      "Fostering stagecraft, public speaking, model UNs, photography, and orchestrating the annual campus cultural festivals.",
    membersCount: "500+ Creators",
  },
];

export default function FindYourPeople() {
  return (
    <section
      id="find-your-people"
      aria-labelledby="find-your-people-heading"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
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
      {/* Section Header with Heading + Subheading */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-400 font-semibold block mb-2">
            CLUBS &amp; COMMUNITIES
          </span>
          <h2
            id="find-your-people-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
          >
            FIND YOUR PEOPLE
          </h2>
        </div>
        <Link
          href="/clubs"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
        >
          <span>Explore all clubs &amp; student chapters</span>
          <ArrowUpRight className="size-4" />
        </Link>
      </div>

      {/* Structural Area: Interactive Club Showcase Grid */}
      <div
        data-stage="club-showcase-stage"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {MOCK_CLUBS.map((club) => (
          <div
            key={club.id}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col justify-between hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono font-medium tracking-wide text-slate-400 uppercase">
                  {club.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-mono">
                  <Users className="size-3" />
                  {club.membersCount}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight group-hover:text-red-400 transition-colors">
                {club.name}
              </h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {club.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-white transition-colors">
              <span>View Club Profile</span>
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
