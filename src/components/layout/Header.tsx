"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clinicData } from "@/data/clinic";
import { Button } from "@/components/ui/Button";
import { Menu, X, Calendar, Phone, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu when pathname changes during render (recommended React pattern)
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
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur-md",
        isScrolled
          ? "bg-white/95 shadow-sm border-b border-slate-200/80 py-2.5"
          : "bg-white/80 border-b border-slate-100 py-3.5 sm:py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center font-bold tracking-wider shadow-sm group-hover:bg-teal-900 transition-colors">
              <Activity className="w-5 h-5 text-teal-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-teal-800 transition-colors">
                {clinicData.clinicName}
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-teal-700 tracking-wide">
                {clinicData.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-teal-800 hover:bg-teal-50/60 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${clinicData.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-teal-800 rounded-lg hover:bg-slate-100 transition-colors"
              title="Call Clinic"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>Call Clinic</span>
            </a>
            <Link href="/appointment">
              <Button
                variant="primary"
                size="sm"
                icon={<Calendar className="w-4 h-4" />}
                className="shadow-sm hover:shadow"
              >
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Right Icons & Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link href="/appointment">
              <Button
                variant="primary"
                size="sm"
                className="px-3 py-1.5 text-xs font-medium"
              >
                Book
              </Button>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-colors"
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
                className="block px-4 py-2.5 text-base font-medium text-slate-700 hover:text-teal-800 hover:bg-teal-50 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2.5 px-2">
              <a
                href={`tel:${clinicData.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call: {clinicData.phone}</span>
              </a>
              <Link
                href="/appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              >
                <Button
                  variant="primary"
                  size="md"
                  icon={<Calendar className="w-4 h-4" />}
                  className="w-full justify-center"
                >
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
