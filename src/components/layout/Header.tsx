"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clinicData } from "@/data/clinic";
import { Menu, X, Calendar, Phone, Plus, HeartPulse } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Doctors", href: "/#doctors" },
    { label: "About", href: "/#about" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur-md",
        isScrolled
          ? "bg-white/95 shadow-sm border-b border-slate-200/80 py-2.5"
          : "bg-white/85 border-b border-slate-100 py-3.5 sm:py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Wordmark matching Reference Image */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-blue-600 text-white flex items-center justify-center font-bold tracking-wider shadow-md group-hover:scale-105 transition-transform">
              <Plus className="w-6 h-6 stroke-[3] text-white" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {clinicData.clinicName}
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-teal-600 tracking-wide">
                Multispeciality Hospital &bull; 24/7 Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/70 rounded-full transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Hotline & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${clinicData.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-blue-600 rounded-full hover:bg-slate-100 transition-colors border border-slate-200"
              title="Call Emergency Hotline"
            >
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{clinicData.phone}</span>
            </a>

            <Link href="/#appointment">
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-semibold shadow-md shadow-blue-500/20 transition-all duration-200">
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </Link>
          </div>

          {/* Mobile Right Icons & Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${clinicData.phoneRaw}`}
              className="p-2 rounded-full bg-blue-50 text-blue-600 border border-blue-200"
              aria-label="Call Hospital"
            >
              <Phone className="w-4 h-4" />
            </a>

            <Link href="/#appointment">
              <button className="px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-sm">
                Book
              </button>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 mt-3 pt-3 pb-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2.5 px-2">
              <a
                href={`tel:${clinicData.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-blue-300 text-blue-700 font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call Emergency: {clinicData.phone}</span>
              </a>

              <Link
                href="/#appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              >
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-blue-600 text-white font-semibold text-sm shadow-md">
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
