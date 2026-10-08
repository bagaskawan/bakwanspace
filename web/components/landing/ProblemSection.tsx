import React from "react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function ProblemSection() {
  const problems = [
    {
      title: "Pagi yang Bingung",
      problem: "Setiap pagi, bingung mau mulai dari mana.",
      context:
        "15 task di daftar. Tidak ada yang terasa urgent, tapi semuanya terasa penting. Akhirnya? Scroll HP dulu 30 menit tanpa kejelasan arah.",
      solution:
        "Setiap pagi, AI menyusun 3 prioritas utama yang muat di kapasitasmu hari ini — lengkap dengan alasannya. Bukan kamu yang memilah. ALUR yang hitung.",
      icon: (
        <svg
          className="w-6 h-6 stroke-[1.5]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Penumpukan Tugas",
      problem: "To-do list yang tidak pernah selesai 100%.",
      context:
        "Kemarin ada 3 task yang belum selesai. Hari ini ditambah 4 baru. Besok? Lebih banyak lagi. Pura-pura tidak lihat sampai menumpuk.",
      solution:
        "Task yang terlewat tidak hilang diam-diam. ALUR otomatis menyarankan hari baru — kamu tinggal setuju 1 tap. Dan ALUR membedakan: kamu lupa, atau memang sengaja skip?",
      icon: (
        <svg
          className="w-6 h-6 stroke-[1.5]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Kerja Buta Arah",
      problem: "Tidak tahu kenapa minggu ini terasa berat.",
      context:
        "Kamu merasa lelah dan tidak produktif, tapi tidak bisa menjelaskan kenapa. Tidak ada data faktual. Tidak ada umpan balik. Cuma perasaan lelah.",
      solution:
        "Setiap Minggu malam, AI menganalisis pola kerjamu selama seminggu — jam paling produktif, tugas terberat, dan batas bebanmu. Disajikan sebagai cerita singkat, bukan grafik rumit.",
      icon: (
        <svg
          className="w-6 h-6 stroke-[1.5]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="masalah" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      {/* Section Header */}
      <AnimateOnScroll direction="up" delay={0}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-extrabold text-2xl md:text-3xl leading-snug tracking-[-0.03em] uppercase text-alur-charcoal mb-3">
            Kenapa kamu butuh ALUR
          </h2>
          <p className="text-base md:text-lg text-alur-warm-gray font-normal">
            Tiga masalah yang sama, terjadi setiap hari.
          </p>
        </div>
      </AnimateOnScroll>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {problems.map((item, idx) => (
          <AnimateOnScroll
            key={item.title}
            direction="up"
            delay={idx * 150}
            className="h-full"
          >
            <FeatureCard
              title={item.title}
              problem={item.problem}
              context={item.context}
              solution={item.solution}
              icon={item.icon}
            />
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
