import React from "react";

/**
 * Zine-Inspired Grunge Scrapbook SVG Doodles & Motifs
 * Rendered in the Volcanic Ash color system:
 * - Lava Orange: #FB5607
 * - Electric Violet: #8338EC
 * - Obsidian Charcoal: #212529
 * - Ash Pale White: #E9ECEF
 */

export function CrownDoodle({
  className = "size-8 text-[#FB5607]",
  strokeWidth = 2.5,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 48 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 26L7 9L19 19L24 5L30 19L41 9L44 26H4Z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M4 26L7 9L19 19L24 5L30 19L41 9L44 26H4Z" />
      <circle cx="7" cy="8" r="1.5" fill="currentColor" />
      <circle cx="24" cy="4" r="1.5" fill="currentColor" />
      <circle cx="41" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function MarkerSquiggle({
  className = "w-36 h-3 text-[#FB5607]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 160 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 11C28 3 52 14 78 7C104 1 129 13 157 8" />
    </svg>
  );
}

export function MarkerUnderlineDouble({
  className = "w-44 h-4 text-[#FB5607]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 180 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 6C36 1 82 8 126 4C145 2 165 6 176 5" />
      <path d="M12 14C48 9 96 17 142 12C158 10 168 13 174 13" opacity="0.85" />
    </svg>
  );
}

export function DoodleStar({
  className = "size-5 text-[#FB5607]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z" />
    </svg>
  );
}

export function DoodleSparkle({
  className = "size-6 text-[#8338EC]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 3V29M3 16H29M6.5 6.5L25.5 25.5M25.5 6.5L6.5 25.5" />
    </svg>
  );
}

export function DoodleArrow({
  className = "w-12 h-10 text-[#8338EC]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 8C20 6 36 14 46 26" />
      <path d="M36 28L47 28L45 17" />
    </svg>
  );
}

export function DoodleSmiley({
  className = "size-7 text-[#212529]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="13" />
      <circle cx="11.5" cy="12.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="20.5" cy="12.5" r="1.5" fill="currentColor" stroke="none" />
      <path d="M10.5 19C12 22 20 22 21.5 19" />
    </svg>
  );
}

export function ScotchTape({
  className = "",
  color = "neutral",
}: {
  className?: string;
  color?: "neutral" | "orange" | "violet";
}) {
  const colorStyles = {
    neutral:
      "bg-white/65 border-y border-black/10 shadow-[0_1px_3px_rgba(33,37,41,0.08)]",
    orange:
      "bg-[#FB5607]/22 border-y border-[#FB5607]/25 shadow-[0_1px_3px_rgba(251,86,7,0.12)]",
    violet:
      "bg-[#8338EC]/22 border-y border-[#8338EC]/25 shadow-[0_1px_3px_rgba(131,56,236,0.12)]",
  };

  return (
    <div
      className={`h-5 sm:h-6 backdrop-blur-[2px] select-none pointer-events-none ${colorStyles[color]} ${className}`}
      style={{
        clipPath:
          "polygon(0% 15%, 3% 0%, 97% 0%, 100% 12%, 98% 88%, 100% 100%, 3% 98%, 0% 82%)",
      }}
      aria-hidden="true"
    />
  );
}

export function WashiTape({
  className = "",
  color = "violet",
}: {
  className?: string;
  color?: "neutral" | "orange" | "violet";
}) {
  const colorStyles = {
    neutral: "bg-white/60 border-x border-dashed border-black/15",
    orange: "bg-[#FB5607]/22 border-x border-dashed border-[#FB5607]/35",
    violet: "bg-[#8338EC]/22 border-x border-dashed border-[#8338EC]/35",
  };

  return (
    <div
      className={`h-4 sm:h-5 backdrop-blur-[2px] shadow-[0_1px_3px_rgba(33,37,41,0.06)] select-none pointer-events-none ${colorStyles[color]} ${className}`}
      style={{
        clipPath: "polygon(2% 0%, 98% 0%, 100% 50%, 98% 100%, 2% 100%, 0% 50%)",
      }}
      aria-hidden="true"
    />
  );
}

export function PencilAsterisk({
  className = "size-4 text-[#FB5607]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3V21M4.5 7.5L19.5 16.5M4.5 16.5L19.5 7.5" />
    </svg>
  );
}

export function CurlyBracket({
  className = "w-4 h-12 text-[#8338EC]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 4C10 4 8 8 8 16V24C8 28 4 30 2 30C4 30 8 32 8 36V44C8 52 10 56 16 56" />
    </svg>
  );
}

export function CircleHighlighter({
  className = "w-32 h-12 text-[#FB5607]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 140 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 25C15 12 45 6 82 7C118 8 135 18 132 30C128 42 98 46 58 45C22 44 4 36 8 22" />
    </svg>
  );
}

/**
 * Ragged Torn Paper SVG Divider
 * Generates an organic, rough zine-paper torn divider edge
 */
export function TornPaperDivider({
  fill = "#212529",
  flip = false,
  className = "w-full h-10 sm:h-14 block",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-full block"
        style={{ transform: flip ? "rotate(180deg)" : "none" }}
      >
        <path
          d="M0,0 L0,32 
             Q30,48 60,35 T120,44 T180,26 T240,40 T300,32 T360,46 T420,29 T480,42 T540,30 T600,45 
             T660,28 T720,40 T780,24 T840,42 T900,31 T960,45 T1020,28 T1080,41 T1140,25 T1200,38 
             L1200,60 L0,60 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
