"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Transition 05: Get Involved -> Footer ("INVITATION -> SIGN-OFF")
 *
 * The quietest and most restrained transition of the landing page.
 * Allows the composition to gently come to rest as the user reaches the footer.
 *
 * Core Principles:
 * - Minimal, quiet motion — page gently comes to rest.
 * - Get Involved card lifts naturally without dramatic button scaling.
 * - Footer reveals with a barely perceptible upward delta (10px–12px) and opacity (0.9 -> 1).
 * - No column staggering, no link staggering.
 * - Full prefers-reduced-motion compliance and mobile optimization.
 */
export function useInvitationFooterTransition() {
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
      // 1. GET INVOLVED EXIT: Gentle upward exit
      const exitTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#get-involved",
          start: "bottom 95%",
          end: "bottom top",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      exitTl.to(
        "#get-involved-card",
        {
          y: -20,
          opacity: 0.95,
          ease: "power1.out",
        },
        0
      );

      // 2. FOOTER REVEAL: Quiet sign-off
      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#site-footer",
          start: "top 95%",
          end: "top 70%",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      entryTl.fromTo(
        "#site-footer-content",
        {
          y: 12,
          opacity: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.35,
        },
        0
      );
    });

    // MOBILE (< 768px)
    mm.add("(max-width: 767px)", () => {
      const exitTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#get-involved",
          start: "bottom 98%",
          end: "bottom top",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      exitTl.to(
        "#get-involved-card",
        {
          y: -10,
          opacity: 0.96,
          ease: "power1.out",
        },
        0
      );

      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#site-footer",
          start: "top 98%",
          end: "top 80%",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      entryTl.fromTo(
        "#site-footer-content",
        {
          y: 6,
          opacity: 0.94,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.3,
        },
        0
      );
    });

    return () => {
      mm.revert();
    };
  }, []);
}
