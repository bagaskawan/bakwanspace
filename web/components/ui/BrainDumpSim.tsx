"use client";

import React, { useEffect, useRef, useState } from "react";

export function BrainDumpSim() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    let timer1: NodeJS.Timeout;
    let timer2: NodeJS.Timeout;
    let timer3: NodeJS.Timeout;
    let timer4: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger staged animation
          setStep(1); // AI bubble visible
          timer1 = setTimeout(() => setStep(2), 600); // User typing/message
          timer2 = setTimeout(() => setStep(3), 1400); // AI processing -> extracted tasks
          timer3 = setTimeout(() => setStep(4), 1800); // Task 1 appears
          timer4 = setTimeout(() => setStep(5), 2200); // Task 2 appears
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-lg mx-auto bg-alur-paper rounded-xl p-5 md:p-6 border border-alur-hairline flex flex-col gap-4 font-sans text-left transition-all duration-300"
    >
      {/* Simulation Header */}
      <div className="flex items-center justify-between border-b border-alur-hairline pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-alur-charcoal inline-block" />
          <span className="text-xs font-semibold uppercase tracking-wider text-alur-charcoal">
            ALUR Interactive Simulator
          </span>
        </div>
        <span className="text-[11px] text-alur-warm-gray font-medium">
          Brain Dump Mode
        </span>
      </div>

      {/* Bubble 1: AI Assistant */}
      <div
        className={`self-start max-w-[85%] bg-alur-off-white border border-alur-hairline p-3.5 rounded-lg text-sm text-alur-charcoal transition-all duration-500 ${
          step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <span className="text-[11px] font-semibold text-alur-warm-gray block mb-1 uppercase tracking-wide">
          ALUR Companion
        </span>
        Ada yang mau kamu pindahkan dari kepala ke jadwal hari ini?
      </div>

      {/* Bubble 2: User Message */}
      <div
        className={`self-end max-w-[85%] bg-alur-ink text-white p-3.5 rounded-lg text-sm transition-all duration-500 ${
          step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <span className="text-[11px] font-medium text-white/60 block mb-1 uppercase tracking-wide">
          Kamu
        </span>
        Besok harus kelarin laporan keuangan sama review presentasi
      </div>

      {/* Bubble 3: AI Output / Extracted Tasks */}
      <div
        className={`self-start w-full bg-alur-off-white border border-alur-hairline p-4 rounded-lg flex flex-col gap-3 mt-1 transition-all duration-500 ${
          step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <div className="flex items-center justify-between border-b border-alur-hairline/60 pb-2">
          <span className="text-[11px] font-bold text-alur-charcoal uppercase tracking-widest">
            Ekstraksi Otomatis & Estimasi Kapasitas
          </span>
          <span className="text-[10px] bg-alur-paper border border-alur-hairline px-2 py-0.5 rounded text-alur-charcoal font-medium">
            2 task terdeteksi
          </span>
        </div>

        {/* Task 1 */}
        <div
          className={`flex items-start gap-3 p-2.5 rounded-md bg-alur-paper/60 border border-alur-hairline/40 transition-all duration-300 ${
            step >= 4 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
          }`}
        >
          <div className="w-4 h-4 rounded border border-alur-charcoal/60 mt-0.5 flex-shrink-0" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-alur-charcoal">
              Selesaikan laporan keuangan
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-alur-warm-gray">Besok</span>
              <span className="text-xs text-alur-warm-gray">•</span>
              <span className="text-xs font-medium text-alur-charcoal">~60 mnt</span>
              <span className="text-[10px] text-alur-warm-gray bg-alur-off-white px-1.5 py-0.2 rounded border border-alur-hairline">
                Prioritas Tinggi
              </span>
            </div>
          </div>
        </div>

        {/* Task 2 */}
        <div
          className={`flex items-start gap-3 p-2.5 rounded-md bg-alur-paper/60 border border-alur-hairline/40 transition-all duration-300 ${
            step >= 5 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
          }`}
        >
          <div className="w-4 h-4 rounded border border-alur-charcoal/60 mt-0.5 flex-shrink-0" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-alur-charcoal">
              Review slide presentasi
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-alur-warm-gray">Besok</span>
              <span className="text-xs text-alur-warm-gray">•</span>
              <span className="text-xs font-medium text-alur-charcoal">~30 mnt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
