"use client";

import React, { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-alur-off-white/95 backdrop-blur-md border-b border-alur-hairline/50 transition-all duration-200">
      <div className="max-w-6xl mx-auto py-5 px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="#" className="flex items-baseline gap-2 group">
          <span className="font-black text-2xl tracking-[-0.04em] uppercase text-alur-charcoal">
            ALUR
          </span>
          <span className="hidden sm:inline-block text-[11px] font-medium text-alur-warm-gray uppercase tracking-widest pl-1 border-l border-alur-hairline">
            by BakwanSpace
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#masalah"
            className="font-medium text-sm text-alur-warm-gray hover:text-alur-charcoal transition-colors duration-200"
          >
            Kenapa ALUR
          </a>
          <a
            href="#cara-kerja"
            className="font-medium text-sm text-alur-warm-gray hover:text-alur-charcoal transition-colors duration-200"
          >
            Cara Kerja
          </a>
          <a
            href="#keunggulan"
            className="font-medium text-sm text-alur-warm-gray hover:text-alur-charcoal transition-colors duration-200"
          >
            Keunggulan
          </a>
        </nav>

        {/* Action Link & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#cta"
            className="font-semibold text-sm text-alur-charcoal hover:opacity-75 transition-opacity duration-200 flex items-center gap-1.5"
          >
            <span>Mulai Sekarang</span>
            <span aria-hidden="true">&rarr;</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-alur-charcoal hover:text-alur-warm-gray transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-alur-off-white border-b border-alur-hairline px-6 py-4 flex flex-col gap-4 animate-fadeIn">
          <a
            href="#masalah"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-alur-charcoal py-1"
          >
            Kenapa ALUR
          </a>
          <a
            href="#cara-kerja"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-alur-charcoal py-1"
          >
            Cara Kerja
          </a>
          <a
            href="#keunggulan"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-alur-charcoal py-1"
          >
            Keunggulan
          </a>
        </div>
      )}
    </header>
  );
}
