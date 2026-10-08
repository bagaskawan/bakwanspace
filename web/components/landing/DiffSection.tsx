import React from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function DiffSection() {
  const differentiators = [
    {
      label: "Prinsip 01",
      tagline: "Honest Capacity",
      title: "AI yang meragukan komitmenmu.",
      description:
        "Aplikasi to-do konvensional selalu bilang \"Kamu pasti bisa!\" — lalu diam saat kamu gagal menuntaskannya. ALUR bilang terus terang: \"Ini terlalu banyak untuk satu hari.\" Kami mengutamakan kejujuran objektif, bukan motivasi kosong yang bikin burnout.",
    },
    {
      label: "Prinsip 02",
      tagline: "Data Non-Judgmental",
      title: "Lupa ≠ Sengaja skip.",
      description:
        "ALUR tidak pernah menghakimi produktivitasmu. Lupa mencentang adalah data kebiasaan, sedangkan sengaja skip adalah keputusan sadar. ALUR belajar memetakan kedua hal ini tanpa pernah memberi label gagal kepada penggunanya.",
    },
    {
      label: "Prinsip 03",
      tagline: "Invisible Complexity",
      title: "Sesederhana kertas. Secerdas asisten.",
      description:
        "Di hadapanmu: checklist bersih, tenang, tanpa grafik warna-warni yang melelahkan mata. Di balik layar: multi-agent AI menganalisis estimasi waktu dan riwayat kapasitasmu — tanpa kamu perlu pusing memikirkan cara kerjanya.",
    },
  ];

  return (
    <section
      id="keunggulan"
      className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-alur-hairline/60"
    >
      {/* Section Header */}
      <AnimateOnScroll direction="up">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-extrabold text-2xl md:text-3xl leading-snug tracking-[-0.03em] uppercase text-alur-charcoal mb-3">
            Bukan productivity app biasa
          </h2>
          <p className="text-base md:text-lg text-alur-warm-gray font-normal">
            Dibangun dengan filosofi radikal tentang arti kapasitas manusia.
          </p>
        </div>
      </AnimateOnScroll>

      {/* 3 Differential Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {differentiators.map((diff, index) => (
          <AnimateOnScroll
            key={diff.tagline}
            direction="up"
            delay={index * 150}
            className="h-full"
          >
            <div className="bg-alur-paper p-8 rounded-xl border border-transparent hover:border-alur-hairline transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-alur-warm-gray">
                    {diff.label}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-alur-charcoal bg-alur-off-white border border-alur-hairline px-2.5 py-0.5 rounded">
                    {diff.tagline}
                  </span>
                </div>

                <h3 className="font-bold text-xl text-alur-charcoal tracking-tight mb-4 leading-snug">
                  {diff.title}
                </h3>

                <p className="text-sm text-alur-warm-gray leading-relaxed font-normal">
                  {diff.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-alur-hairline/40 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-alur-ink" />
                <span className="text-xs font-medium text-alur-charcoal uppercase tracking-wider">
                  BakwanSpace Principle
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
