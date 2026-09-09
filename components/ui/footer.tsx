"use client";
// app/components/Footer.tsx (or wherever you keep components)

import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";
import { useInvitationFooterTransition } from "@/components/landing/use-invitation-footer-transition";
import { TornPaperDivider } from "@/components/landing/doodles";

export default function Footer() {
  useInvitationFooterTransition();

  return (
    <footer
      id="site-footer"
      className="relative bg-[#212529] text-[#E9ECEF] font-sans overflow-hidden border-t-2 border-[#212529]"
    >
      {/* Torn Paper Boundary at Top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%] overflow-hidden leading-none pointer-events-none z-20">
        <TornPaperDivider fill="#212529" flip />
      </div>

      <div
        id="site-footer-content"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 py-10 sm:py-12">
          {/* Left: Logos with subtle border badge */}
          <div className="flex flex-col items-start gap-4 sm:gap-6 shrink-0">
            <div className="bg-white p-3 rounded-lg border-2 border-[#212529] shadow-[3px_3px_0px_#FB5607]">
              <Image
                src="/logos/mlrit.svg"
                alt="MLRIT"
                width={160}
                height={64}
                className="h-auto w-32 sm:w-36"
              />
            </div>
            <div className="bg-white p-3 rounded-lg border-2 border-[#212529] shadow-[3px_3px_0px_#8338EC]">
              <Image
                src="/logos/iic.png"
                alt="Institution's Innovation Council"
                width={180}
                height={80}
                className="h-auto w-36 sm:w-40"
              />
            </div>
          </div>

          {/* Vertical Separator */}
          <Separator
            orientation="vertical"
            className="hidden md:block h-200 bg-white/15"
          />

          {/* Right: Link Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 w-full ml-0 md:ml-12 lg:ml-[200px]">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wide text-[#E9ECEF] mb-3 sm:mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 list-disc marker:text-[#FB5607] pl-5 text-base sm:text-lg font-medium">
                <li>
                  <Link
                    href="/"
                    className="inline-block py-0.5 hover:text-[#FB5607] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="inline-block py-0.5 hover:text-[#FB5607] transition-colors"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bookings"
                    className="inline-block py-0.5 hover:text-[#FB5607] transition-colors"
                  >
                    Bookings
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wide text-[#E9ECEF] mb-3 sm:mb-4">
                Socials
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-base sm:text-lg font-medium">
                <li>
                  <a
                    href="https://www.instagram.com/mlritofficial?igsh=MXJnMnJlZGl4dHM3aw=="
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 py-0.5 hover:text-[#FB5607] transition-colors"
                  >
                    <Instagram
                      className="size-5 shrink-0 text-[#FB5607]"
                      aria-hidden="true"
                    />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/mlritin?s=09"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 py-0.5 hover:text-[#FB5607] transition-colors"
                  >
                    <Twitter
                      className="size-5 shrink-0 text-[#FB5607]"
                      aria-hidden="true"
                    />
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/school/mlr-institute-of-technology/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 py-0.5 hover:text-[#FB5607] transition-colors"
                  >
                    <Linkedin
                      className="size-5 shrink-0 text-[#FB5607]"
                      aria-hidden="true"
                    />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@MLRInstituteofTechnology"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 py-0.5 hover:text-[#FB5607] transition-colors"
                  >
                    <Youtube
                      className="size-5 shrink-0 text-[#FB5607]"
                      aria-hidden="true"
                    />
                    <span>YouTube</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="ml-0 sm:-ml-6">
              <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wide text-[#E9ECEF] mb-3 sm:mb-4">
                Contact Us
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-base sm:text-lg font-medium">
                <li className="inline-flex items-start sm:items-center gap-3 py-0.5">
                  <Phone
                    className="size-5 shrink-0 mt-0.5 sm:mt-0 text-[#8338EC]"
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+919951312204"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FB5607] transition-colors"
                  >
                    +91 99513 12204
                  </a>
                </li>
                <li className="inline-flex items-start sm:items-center gap-3 py-0.5">
                  <Mail
                    className="size-5 shrink-0 mt-0.5 sm:mt-0 text-[#8338EC]"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:ciemlrit@mlrit.ac.in"
                    className="hover:text-[#FB5607] transition-colors break-all sm:break-normal"
                  >
                    ciemlrit@mlrit.ac.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subtle bottom line */}
        <div className="border-t-2 border-dashed border-white/15 py-6 text-xs sm:text-sm font-mono text-[#E9ECEF]/70">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} CIE, MLRIT. All rights reserved. [
            VOLCANIC ASH PALETTE // EDITION 2026 ]
          </p>
        </div>
      </div>
    </footer>
  );
}
