"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Transition 02: Happening Now -> Find Your People ("THE BOARD TURNS")
 *
 * Choreographs the physical section reveal of the cream/off-white Find Your People
 * noticeboard as the navy Happening Now event board naturally passes upward out of view.
 *
 * Core Principles:
 * - Movement from EVENTS -> PEOPLE represents DISCOVERY.
 * - Physical paper/board reveal without color gradients or color tweens.
 * - Happening Now event board gently lifts upward and exits without spinning or morphing.
 * - Find Your People header establishes first ("FIND YOUR PEOPLE" -> "There's probably a club for that.").
 * - Club identities settle into place with restrained editorial stagger (8px-20px range).
 * - Leaves Find Your People as a completely normal, static section once revealed.
 * - No scroll hijacking or permanent pinning.
 * - Full prefers-reduced-motion compliance and responsive adjustments on mobile.
 */
export function useHappeningPeopleTransition() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect user reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // DESKTOP / TABLET (>= 768px)
    mm.add("(min-width: 768px)", () => {
      // 1. HAPPENING NOW EXIT: Physical upward passing of the event board
      const exitTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#happening-now",
          start: "bottom 95%",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      // The overall board composition gently moves upward
      exitTl.to(
        "#happening-now-board-exit",
        {
          y: -40,
          opacity: 0.9,
          ease: "power1.out",
        },
        0
      );

      // Featured event artifact leaves visual focus slightly ahead
      exitTl.to(
        "#happening-now-featured-article",
        {
          y: -20,
          opacity: 0.92,
          ease: "power1.out",
        },
        0
      );

      // Supporting details and bottom dispatch exit naturally
      exitTl.to(
        "#happening-now-bottom",
        {
          y: -25,
          opacity: 0.92,
          ease: "power1.out",
        },
        0
      );

      // 2. FIND YOUR PEOPLE ENTRY: Natural reveal of the people behind the board
      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#find-your-people",
          start: "top 85%",
          end: "top 18%",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      // Priority 1: Establish section heading and catalog index
      entryTl.fromTo(
        "#find-your-people-heading",
        {
          y: 22,
          opacity: 0.25,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.35,
        },
        0
      );

      entryTl.fromTo(
        "#find-your-people-badge-strip",
        {
          y: 16,
          opacity: 0.3,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.3,
        },
        0
      );

      // Priority 2: Establish the core narrative quote
      entryTl.fromTo(
        "#find-your-people-quote",
        {
          y: 18,
          opacity: 0.25,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.35,
        },
        0.12
      );

      entryTl.fromTo(
        "#find-your-people-mapping-card",
        {
          y: 16,
          opacity: 0.3,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.35,
        },
        0.15
      );

      // Priority 3: Main Club Identities subtle editorial stagger (14px translation)
      entryTl.fromTo(
        "#find-your-people-main-subheader",
        {
          y: 14,
          opacity: 0.35,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.3,
        },
        0.22
      );

      entryTl.fromTo(
        ".club-identity-card",
        {
          y: 16,
          x: 2,
          opacity: 0.35,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          ease: "power1.out",
          stagger: 0.04,
          duration: 0.45,
        },
        0.28
      );

      // Priority 4: Department chapters settle into position
      entryTl.fromTo(
        "#find-your-people-dept-subheader",
        {
          y: 12,
          opacity: 0.4,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.3,
        },
        0.5
      );

      entryTl.fromTo(
        ".dept-identity-card",
        {
          y: 12,
          opacity: 0.4,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          stagger: 0.03,
          duration: 0.35,
        },
        0.55
      );

      // Priority 5: Section footer settle
      entryTl.fromTo(
        "#find-your-people-footer",
        {
          y: 12,
          opacity: 0.4,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.25,
        },
        0.75
      );
    });

    // MOBILE (< 768px)
    mm.add("(max-width: 767px)", () => {
      // 1. HAPPENING NOW EXIT: Reduced vertical delta, zero rotation or lateral shift
      const exitTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#happening-now",
          start: "bottom 98%",
          end: "bottom top",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      exitTl.to(
        "#happening-now-board-exit",
        {
          y: -18,
          opacity: 0.92,
          ease: "power1.out",
        },
        0
      );

      // 2. FIND YOUR PEOPLE ENTRY: Natural, readable reveal on narrow screens
      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#find-your-people",
          start: "top 95%",
          end: "top 12%",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      // Heading establishes cleanly with higher initial contrast
      entryTl.fromTo(
        "#find-your-people-heading",
        {
          y: 12,
          opacity: 0.45,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.35,
        },
        0
      );

      entryTl.fromTo(
        "#find-your-people-quote",
        {
          y: 10,
          opacity: 0.45,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.35,
        },
        0.12
      );

      // Club cards: strict vertical delta (8px), x: 0 (preventing any horizontal overflow)
      entryTl.fromTo(
        ".club-identity-card",
        {
          y: 10,
          x: 0,
          opacity: 0.45,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          ease: "power1.out",
          stagger: 0.025,
          duration: 0.4,
        },
        0.25
      );

      entryTl.fromTo(
        ".dept-identity-card",
        {
          y: 8,
          opacity: 0.5,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          stagger: 0.02,
          duration: 0.3,
        },
        0.5
      );
    });

    return () => {
      mm.revert();
    };
  }, []);
}
