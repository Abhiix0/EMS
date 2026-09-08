"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Transition 04: Campus Activity -> Get Involved ("INDEX -> INVITATION")
 *
 * The conversion moment of the landing page.
 * Shifts from "What does campus offer?" to "What are YOU going to do?"
 *
 * Core Principles:
 * - Most decisive and intentional transition, yet physical and restrained.
 * - Horizontal index rules provide visual continuity as the index exits.
 * - "GET INVOLVED." enters with dominant presence (28px delta, opacity 0.75 -> 1).
 * - Supporting copy settles shortly after, followed by the CTA actions.
 * - Leaves Get Involved completely static once in view.
 * - Full prefers-reduced-motion compliance and mobile optimization.
 */
export function useIndexInvitationTransition() {
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
      // 1. CAMPUS INDEX EXIT: Coherent upward lift with dividing rules
      const exitTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#campus-activity",
          start: "bottom 95%",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      exitTl.to(
        "#campus-index-header",
        {
          y: -35,
          opacity: 0.9,
          ease: "power1.out",
        },
        0
      );

      exitTl.to(
        ".campus-index-row",
        {
          y: -40,
          opacity: 0.9,
          ease: "power1.out",
          stagger: 0.02,
        },
        0
      );

      // 2. GET INVOLVED ENTRY: Decisive arrival of invitation & CTAs
      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#get-involved",
          start: "top 80%",
          end: "top 18%",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      // Stage 1: Category badge & dominant heading
      entryTl.fromTo(
        "#get-involved-badge",
        {
          y: 16,
          opacity: 0.75,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.25,
        },
        0
      );

      entryTl.fromTo(
        "#get-involved-heading",
        {
          y: 28,
          opacity: 0.75,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.35,
        },
        0
      );

      // Stage 2: Supporting copy settles shortly after
      entryTl.fromTo(
        "#get-involved-copy",
        {
          y: 16,
          opacity: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.3,
        },
        0.12
      );

      // Stage 3: CTA buttons arrive with subtle lift (12px)
      entryTl.fromTo(
        "#get-involved-actions",
        {
          y: 14,
          opacity: 0.85,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.3,
        },
        0.22
      );

      // Stage 4: Institutional metadata
      entryTl.fromTo(
        "#get-involved-institutions",
        {
          y: 10,
          opacity: 0.85,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.25,
        },
        0.32
      );
    });

    // MOBILE (< 768px)
    mm.add("(max-width: 767px)", () => {
      const exitTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#campus-activity",
          start: "bottom 98%",
          end: "bottom top",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      exitTl.to(
        "#campus-index-header",
        {
          y: -18,
          opacity: 0.92,
          ease: "power1.out",
        },
        0
      );

      exitTl.to(
        ".campus-index-row",
        {
          y: -20,
          opacity: 0.92,
          ease: "power1.out",
        },
        0
      );

      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#get-involved",
          start: "top 95%",
          end: "top 15%",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      entryTl.fromTo(
        "#get-involved-heading",
        {
          y: 16,
          opacity: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.3,
        },
        0
      );

      entryTl.fromTo(
        "#get-involved-copy",
        {
          y: 10,
          opacity: 0.85,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.3,
        },
        0.1
      );

      entryTl.fromTo(
        "#get-involved-actions",
        {
          y: 8,
          opacity: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.3,
        },
        0.18
      );
    });

    return () => {
      mm.revert();
    };
  }, []);
}
