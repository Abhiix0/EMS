"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Transition 03: Find Your People -> Campus Activity ("SCATTER -> INDEX")
 *
 * Choreographs the shift from expressive club identities to structured editorial rows.
 *
 * Core Principles:
 * - Expressive scattered identities settle as structured horizontal index rows emerge.
 * - Subtle movement (8px-20px max) on club identities.
 * - 01/02/03 index rows reveal in orderly succession.
 * - Leaves Campus Activity completely static once in view.
 * - Full prefers-reduced-motion compliance and mobile optimization.
 */
export function usePeopleIndexTransition() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // DESKTOP / TABLET (>= 768px)
    mm.add("(min-width: 768px)", () => {
      // 1. FIND YOUR PEOPLE EXIT: Subtle upward passing & settling
      const exitTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#find-your-people",
          start: "bottom 95%",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      exitTl.to(
        "#find-your-people-board-exit",
        {
          y: -35,
          opacity: 0.9,
          ease: "power1.out",
        },
        0
      );

      // Club identities subtle settling (8px-15px range)
      exitTl.to(
        ".club-identity-card",
        {
          y: -12,
          x: -2,
          opacity: 0.88,
          ease: "power1.out",
        },
        0
      );

      // 2. CAMPUS ACTIVITY ENTRY: Structured editorial index reveal
      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#campus-activity",
          start: "top 85%",
          end: "top 18%",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      // Chapter header reveals first
      entryTl.fromTo(
        "#campus-index-header",
        {
          y: 24,
          opacity: 0.3,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.35,
        },
        0
      );

      // Structured rows (01/02/03) settle in disciplined succession
      entryTl.fromTo(
        ".campus-index-row",
        {
          y: 18,
          opacity: 0.35,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          stagger: 0.05,
          duration: 0.45,
        },
        0.18
      );
    });

    // MOBILE (< 768px)
    mm.add("(max-width: 767px)", () => {
      const exitTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#find-your-people",
          start: "bottom 98%",
          end: "bottom top",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      exitTl.to(
        "#find-your-people-board-exit",
        {
          y: -16,
          opacity: 0.92,
          ease: "power1.out",
        },
        0
      );

      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#campus-activity",
          start: "top 95%",
          end: "top 12%",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      entryTl.fromTo(
        "#campus-index-header",
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
        ".campus-index-row",
        {
          y: 10,
          opacity: 0.45,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          stagger: 0.03,
          duration: 0.35,
        },
        0.15
      );
    });

    return () => {
      mm.revert();
    };
  }, []);
}
