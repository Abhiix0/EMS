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

export default function Footer() {
  return (
    <footer className="bg-black text-white font-figtree overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 py-8 sm:py-10">
          {/* Left: Logos */}
          <div className="flex flex-col items-start gap-4 sm:gap-6 shrink-0">
            <Image
              src="/logos/mlrit.svg"
              alt="MLRIT"
              width={160}
              height={64}
              className="h-auto w-32 sm:w-36"
            />
            <Image
              src="/logos/iic.png"
              alt="Institution's Innovation Council"
              width={180}
              height={80}
              className="h-auto w-36 sm:w-40"
            />
          </div>

          {/* Vertical Separator (shadcn) */}
          <Separator
            orientation="vertical"
            className="hidden md:block h-200 bg-white/10"
          />

          {/* Right: Link Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 w-full ml-0 md:ml-12 lg:ml-[200px]">
            {/* Quick Links */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 list-disc marker:text-white/70 pl-5 text-lg sm:text-xl">
                <li>
                  <Link
                    href="/"
                    className="inline-block py-0.5 hover:opacity-90 transition-opacity"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="inline-block py-0.5 hover:opacity-90 transition-opacity"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bookings"
                    className="inline-block py-0.5 hover:opacity-90 transition-opacity"
                  >
                    Bookings
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
                Socials
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-lg sm:text-xl">
                <li>
                  <a
                    href="https://www.instagram.com/mlritofficial?igsh=MXJnMnJlZGl4dHM3aw=="
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 py-0.5 hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="size-5 shrink-0" aria-hidden="true" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/mlritin?s=09"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 py-0.5 hover:opacity-90 transition-opacity"
                  >
                    <Twitter className="size-5 shrink-0" aria-hidden="true" />
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/school/mlr-institute-of-technology/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 py-0.5 hover:opacity-90 transition-opacity"
                  >
                    <Linkedin className="size-5 shrink-0" aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@MLRInstituteofTechnology"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 py-0.5 hover:opacity-90 transition-opacity"
                  >
                    <Youtube className="size-5 shrink-0" aria-hidden="true" />
                    <span>YouTube</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="ml-0 sm:-ml-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
                Contact Us
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-lg sm:text-xl">
                <li className="inline-flex items-start sm:items-center gap-3 py-0.5">
                  <Phone
                    className="size-5 shrink-0 mt-0.5 sm:mt-0"
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+919951312204"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-90 transition-opacity"
                  >
                    +91 99513 12204
                  </a>
                </li>
                <li className="inline-flex items-start sm:items-center gap-3 py-0.5">
                  <Mail
                    className="size-5 shrink-0 mt-0.5 sm:mt-0"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:ciemlrit@mlrit.ac.in"
                    className="hover:opacity-90 transition-opacity break-all sm:break-normal"
                  >
                    ciemlrit@mlrit.ac.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* subtle bottom line */}
        <div className="border-t border-white/10 py-6 text-xs sm:text-sm text-white/70">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} CIE, MLRIT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
