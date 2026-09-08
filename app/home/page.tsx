/**
 * CIE Public Landing Page — Phase 1: Core Landing Page Structure.
 * Renders the structural skeleton sections in exact order:
 * Hero -> Happening Now -> Find Your People -> Campus Activity -> Get Involved.
 * Navbar is rendered by HomeLayout, and Footer is rendered by RootLayout.
 */
import React from "react";
import Hero from "@/components/landing/hero";
import HappeningNow from "@/components/landing/happening-now";
import FindYourPeople from "@/components/landing/find-your-people";
import CampusActivity from "@/components/landing/campus-activity";
import GetInvolved from "@/components/landing/get-involved";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#0A0B1E] text-white selection:bg-red-500/30 selection:text-white overflow-x-hidden">
      <Hero />
      <HappeningNow />
      <FindYourPeople />
      <CampusActivity />
      <GetInvolved />
    </div>
  );
}
