import React from "react";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function FinalCTA() {
  return (
    <section id="cta" className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
      <AnimateOnScroll direction="up">
        <div className="bg-alur-paper rounded-2xl p-8 sm:p-12 md:p-16 border border-alur-hairline flex flex-col items-center">
          <span className="text-xs font-bold text-alur-warm-gray uppercase tracking-widest mb-4">
            Mulai Hari Ini
          </span>

          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-[-0.03em] uppercase text-alur-charcoal mb-4 max-w-xl">
            Mulai jujur soal kapasitasmu.
          </h2>

          <p className="text-base sm:text-lg text-alur-warm-gray max-w-md mb-8 leading-relaxed">
            Satu tombol. Tanpa password. Langsung pakai dalam 10 detik.
          </p>

          <div className="flex flex-col items-center gap-4 mb-8">
            <Button href="#login">Mulai Gratis dengan Google</Button>
            <span className="text-xs text-alur-warm-gray font-normal">
              Gratis untuk penggunaan personal &bull; Tanpa kartu kredit
            </span>
          </div>

          <div className="pt-6 border-t border-alur-hairline/60 max-w-md">
            <p className="text-xs text-alur-warm-gray leading-relaxed flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4 text-alur-charcoal flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>
                Data kamu terenkripsi secara aman dan hanya bisa diakses olehmu.
                Sistem kami membersihkan riwayat obrolan secara otomatis.
              </span>
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
