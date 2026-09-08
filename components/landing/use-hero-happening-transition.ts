"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Transition 01: Hero -> Happening Now (LIFT + REVEAL)
 *
 * Choreographs the editorial lift of Hero (content and booklet) and the natural
 * reveal of Happening Now from underneath, scrubbed directly to scroll progress.
 *
 * Core Principles:
 * - Subtle, physical, editorial movement.
 * - No scroll hijacking or permanent pinning.
 * - Prioritized reveal: 1. Header -> 2. Featured Poster -> 3. Supporting Notices.
 * - Restrained motion on mobile (< 768px).
 * - Full prefers-reduced-motion compliance.
 */
export function useHeroHappeningTransition() {
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
      // 1. HERO LIFT: Subtle upward lift of editorial composition & booklet
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      heroTl.to(
        "#hero-editorial-lift",
        {
          y: -55,
          opacity: 0.88,
          ease: "power1.out",
        },
        0
      );

      heroTl.to(
        "#hero-booklet-lift",
        {
          y: -85,
          opacity: 0.92,
          ease: "power1.out",
        },
        0
      );

      // 2. HAPPENING NOW REVEAL: Natural unmasking from underneath
      const happeningTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#happening-now",
          start: "top 85%",
          end: "top 15%",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      // Priority 1: Section heading & supporting line
      happeningTl.fromTo(
        "#happening-now-header",
        {
          y: 32,
          opacity: 0.25,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.45,
        },
        0
      );

      // Priority 2: Dominant featured event poster
      happeningTl.fromTo(
        "#happening-now-featured",
        {
          y: 48,
          opacity: 0.2,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.55,
        },
        0.18
      );

      // Priority 3: Supporting event elements as a unified group
      happeningTl.fromTo(
        "#happening-now-supporting",
        {
          y: 35,
          opacity: 0.3,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.45,
        },
        0.35
      );
    });

    // MOBILE (< 768px)
    mm.add("(max-width: 767px)", () => {
      // 1. HERO LIFT: Reduced distance, no rotation, comfortable scrolling
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      heroTl.to(
        "#hero-editorial-lift",
        {
          y: -25,
          opacity: 0.9,
          ease: "power1.out",
        },
        0
      );

      heroTl.to(
        "#hero-booklet-lift",
        {
          y: -35,
          opacity: 0.92,
          ease: "power1.out",
        },
        0
      );

      // 2. HAPPENING NOW REVEAL: Lightweight reveal with reduced vertical delta
      const happeningTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#happening-now",
          start: "top 95%",
          end: "top 10%",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      happeningTl.fromTo(
        "#happening-now-header",
        {
          y: 18,
          opacity: 0.35,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.4,
        },
        0
      );

      happeningTl.fromTo(
        "#happening-now-featured",
        {
          y: 25,
          opacity: 0.3,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.5,
        },
        0.15
      );

      happeningTl.fromTo(
        "#happening-now-supporting",
        {
          y: 20,
          opacity: 0.35,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.4,
        },
        0.3
      );
    });

    return () => {
      mm.revert();
    };
  }, []);
}
