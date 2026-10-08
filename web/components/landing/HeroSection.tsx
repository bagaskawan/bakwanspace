"use client";

import React from "react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-16 text-center flex flex-col items-center">
      {/* Studio Badge Pill */}
      <div className="mb-6 inline-flex items-center gap-2 border border-alur-hairline rounded-full px-4 py-1.5 text-xs font-medium text-alur-warm-gray tracking-widest uppercase bg-alur-paper/60 animate-[fadeDown_0.6s_ease-out_forwards]">
        <span className="w-1.5 h-1.5 rounded-full bg-alur-charcoal" />
        Built by BakwanSpace Labs
      </div>

      {/* Main Headline H1 */}
      <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.04em] uppercase text-alur-charcoal mb-6 max-w-4xl animate-[fadeUp_0.7s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]">
        Teman yang jujur <br className="hidden sm:inline" />
        soal kapasitasmu.
      </h1>

      {/* Sub-headline */}
      <p className="font-normal text-lg sm:text-xl text-alur-warm-gray max-w-2xl mb-10 leading-relaxed animate-[fadeUp_0.7s_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">
        Bukan to-do list yang bilang &ldquo;kamu pasti bisa&rdquo;. ALUR tahu
        kapan kamu sudah penuh &mdash; dan bilang terus terang.
      </p>

      {/* Call to Action Container */}
      <div className="flex flex-col items-center gap-3.5 mb-16 animate-[fadeUp_0.7s_cubic-bezier(0.16,1,0.3,1)_0.3s_both]">
        <Button href="#cta">Mulai Gratis dengan Google</Button>
        <span className="text-xs text-alur-warm-gray font-normal tracking-tight">
          Tanpa password. Tanpa kartu kredit. Langsung pakai.
        </span>
      </div>

      {/* Minimalist App Mockup (Daily Focus View - Zero Elevation, Flat Line Art) */}
      <div className="w-full max-w-3xl mx-auto border border-alur-hairline rounded-xl bg-alur-paper p-4 sm:p-6 md:p-8 text-left animate-[fadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.4s_both]">
        {/* Mockup Header Bar */}
        <div className="flex items-center justify-between border-b border-alur-hairline pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm uppercase tracking-wider text-alur-charcoal">
              ALUR Focus
            </span>
            <span className="text-xs text-alur-warm-gray">•</span>
            <span className="text-xs font-medium text-alur-warm-gray">
              Hari ini: 6.5 Jam Direncanakan (Kapasitas: 7.0 Jam)
            </span>
          </div>
          <span className="text-xs px-2.5 py-1 rounded border border-alur-hairline bg-alur-off-white font-medium text-alur-charcoal">
            Status: Seimbang ✓
          </span>
        </div>

        {/* Morning Brief Card inside Mockup */}
        <div className="bg-alur-off-white border border-alur-hairline rounded-lg p-5 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-4 h-4 text-alur-charcoal"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest text-alur-charcoal">
              Morning Brief AI
            </span>
          </div>
          <p className="text-sm text-alur-charcoal leading-relaxed">
            &ldquo;Pagi ini energimu optimal untuk deep work. Tuntaskan arsitektur API sebelum makan siang, lalu tutup hari dengan review tim. Jangan tambah meeting mendadak.&rdquo;
          </p>
        </div>

        {/* 3 Focused Tasks */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-alur-warm-gray mb-1">
            3 Prioritas Terpilih Hari Ini
          </div>

          {/* Task 1 */}
          <div className="flex items-center justify-between p-3.5 rounded-lg bg-alur-off-white border border-alur-hairline">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded border border-alur-charcoal flex items-center justify-center bg-alur-ink text-white text-xs font-bold">
                ✓
              </div>
              <span className="text-sm font-medium text-alur-charcoal line-through opacity-70">
                Finalisasi spesifikasi teknis Claude for Startups
              </span>
            </div>
            <span className="text-xs text-alur-warm-gray font-mono">1.5 jam</span>
          </div>

          {/* Task 2 */}
          <div className="flex items-center justify-between p-3.5 rounded-lg bg-alur-off-white border border-alur-hairline">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded border border-alur-hairline bg-alur-paper" />
              <span className="text-sm font-medium text-alur-charcoal">
                Refactor skema database Supabase & integrasi agent
              </span>
            </div>
            <span className="text-xs text-alur-warm-gray font-mono">3.0 jam</span>
          </div>

          {/* Task 3 */}
          <div className="flex items-center justify-between p-3.5 rounded-lg bg-alur-off-white border border-alur-hairline">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded border border-alur-hairline bg-alur-paper" />
              <span className="text-sm font-medium text-alur-charcoal">
                Evaluasi mingguan & sinkronisasi target sprint
              </span>
            </div>
            <span className="text-xs text-alur-warm-gray font-mono">2.0 jam</span>
          </div>
        </div>
      </div>
    </section>
  );
}
