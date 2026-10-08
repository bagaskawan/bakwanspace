import React from "react";
import { BrainDumpSim } from "@/components/ui/BrainDumpSim";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function FeaturesSection() {
  return (
    <section id="cara-kerja" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      {/* Section Header */}
      <AnimateOnScroll direction="up">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-extrabold text-2xl md:text-3xl leading-snug tracking-[-0.03em] uppercase text-alur-charcoal mb-3">
            Begini cara ALUR bekerja
          </h2>
          <p className="text-base md:text-lg text-alur-warm-gray font-normal">
            Sederhana di depan, cerdas dan teliti di belakang layar.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="space-y-24 md:space-y-32">
        {/* Feature 1: Brain Dump */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateOnScroll direction="left" className="order-2 lg:order-1">
            <span className="text-xs font-bold text-alur-warm-gray uppercase tracking-widest block mb-3">
              Tangkap Ide Secepat Pikiran
            </span>
            <h3 className="font-extrabold text-2xl sm:text-3xl text-alur-charcoal tracking-tight mb-5 uppercase leading-tight">
              Ketik Apapun. ALUR yang Merapikan.
            </h3>
            <p className="text-base text-alur-charcoal leading-relaxed mb-4">
              Ketik apapun yang ada di kepalamu. Satu baris. Tanpa format kaku.
              Tanpa pusing memilih kategori atau label.
            </p>
            <p className="text-sm text-alur-warm-gray leading-relaxed mb-6">
              AI ALUR langsung memilah secara otomatis: apakah ini task baru, refleksi
              pribadi, atau sekadar curhat. Yang menjadi task langsung dijadwalkan
              lengkap dengan estimasi durasi waktu.
            </p>
            <div className="p-4 rounded-lg bg-alur-paper border border-alur-hairline text-sm font-medium text-alur-charcoal">
              &ldquo;Kamu ngomong bebas. ALUR yang rapikan.&rdquo;
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" className="order-1 lg:order-2">
            <BrainDumpSim />
          </AnimateOnScroll>
        </div>

        {/* Feature 2: Morning Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Mockup: Morning Brief */}
          <AnimateOnScroll direction="left">
            <div className="w-full max-w-lg mx-auto bg-alur-paper rounded-xl p-6 border border-alur-hairline flex flex-col gap-5 text-left">
              <div className="flex items-center justify-between border-b border-alur-hairline pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-alur-charcoal">
                  Ringkasan Pagi
                </span>
                <span className="text-xs text-alur-warm-gray font-mono">
                  07:30 WIB
                </span>
              </div>

              <div className="bg-alur-off-white border border-alur-hairline rounded-lg p-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-alur-charcoal block mb-1">
                  Analisis Kapasitas Pagi
                </span>
                <p className="text-sm text-alur-charcoal leading-relaxed">
                  Total waktu tersedia: <strong>6.0 jam</strong>. ALUR memilihkan 3 task paling berdampak untuk hari ini:
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 rounded-lg bg-alur-off-white border border-alur-hairline flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-alur-ink text-white text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                    <span className="text-sm font-semibold text-alur-charcoal">
                      Deploy migrasi database Supabase
                    </span>
                  </div>
                  <span className="text-xs text-alur-warm-gray font-medium">
                    2.0 jam
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-alur-off-white border border-alur-hairline flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-alur-ink text-white text-xs font-bold flex items-center justify-center">
                      2
                    </span>
                    <span className="text-sm font-semibold text-alur-charcoal">
                      Implementasi landing page ALUR
                    </span>
                  </div>
                  <span className="text-xs text-alur-warm-gray font-medium">
                    2.5 jam
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-alur-off-white border border-alur-hairline flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-alur-ink text-white text-xs font-bold flex items-center justify-center">
                      3
                    </span>
                    <span className="text-sm font-semibold text-alur-charcoal">
                      Review feedback & QA testing
                    </span>
                  </div>
                  <span className="text-xs text-alur-warm-gray font-medium">
                    1.5 jam
                  </span>
                </div>
              </div>

              <div className="text-[11px] text-center text-alur-warm-gray pt-1">
                Total beban terpilih: 6.0 / 6.0 jam (100% pas kapasitas)
              </div>
            </div>
          </AnimateOnScroll>

          {/* Copy */}
          <AnimateOnScroll direction="right">
            <span className="text-xs font-bold text-alur-warm-gray uppercase tracking-widest block mb-3">
              Pagi Tanpa Bingung
            </span>
            <h3 className="font-extrabold text-2xl sm:text-3xl text-alur-charcoal tracking-tight mb-5 uppercase leading-tight">
              Buka App. Tiga Prioritas Siap Selesai.
            </h3>
            <p className="text-base text-alur-charcoal leading-relaxed mb-4">
              Setiap pagi, kamu tidak perlu membuang energi memikirkan harus mulai
              dari mana. AI menghitung total beban versus kapasitas energimu.
            </p>
            <p className="text-sm text-alur-warm-gray leading-relaxed mb-6">
              ALUR hanya memilih 3 task paling krusial yang realistis untuk
              diselesaikan sampai tuntas tanpa membuatmu burnout.
            </p>
            <div className="p-4 rounded-lg bg-alur-paper border border-alur-hairline text-sm font-medium text-alur-charcoal">
              &ldquo;Tidak ada 15-task wishlist. Yang ada: rencana yang muat.&rdquo;
            </div>
          </AnimateOnScroll>
        </div>

        {/* Feature 3: Capacity Warning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <AnimateOnScroll direction="left" className="order-2 lg:order-1">
            <span className="text-xs font-bold text-alur-warm-gray uppercase tracking-widest block mb-3">
              Jujur Soal Batasmu
            </span>
            <h3 className="font-extrabold text-2xl sm:text-3xl text-alur-charcoal tracking-tight mb-5 uppercase leading-tight">
              Peringatan Kapasitas Berlebih
            </h3>
            <p className="text-base text-alur-charcoal leading-relaxed mb-4">
              &ldquo;Beban hari ini: 9.5 jam. Kapasitasmu: 6 jam. Mau pindahkan 2 task ke besok?&rdquo;
            </p>
            <p className="text-sm text-alur-warm-gray leading-relaxed mb-6">
              ALUR menghitung secara objektif. ALUR bertanya terus terang. ALUR{" "}
              <strong>tidak pernah</strong> memindahkan atau menghapus task tanpa izinmu.
              Kamu tetap pemilik keputusan penuh &mdash; tapi berbasis data kapasitas nyata.
            </p>
            <div className="p-4 rounded-lg bg-alur-paper border border-alur-hairline text-sm font-medium text-alur-charcoal">
              &ldquo;Keputusan berbasis data kapasitas, bukan rasa bersalah.&rdquo;
            </div>
          </AnimateOnScroll>

          {/* Visual Mockup: Overload Warning Modal */}
          <AnimateOnScroll direction="right" className="order-1 lg:order-2">
            <div className="w-full max-w-lg mx-auto bg-alur-paper rounded-xl p-6 border border-alur-hairline flex flex-col gap-4 text-left">
              <div className="flex items-center gap-2 text-alur-charcoal font-semibold text-sm border-b border-alur-hairline pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-alur-charcoal" />
                <span>Peringatan Kapasitas ALUR</span>
              </div>

              {/* Capacity Bar Visual */}
              <div className="bg-alur-off-white border border-alur-hairline rounded-lg p-4 space-y-3">
                <div className="flex justify-between text-xs font-semibold text-alur-charcoal">
                  <span>Beban Direncanakan: 9.5 Jam</span>
                  <span className="text-alur-charcoal font-bold">Overload +3.5 Jam</span>
                </div>
                {/* Visual Bar */}
                <div className="w-full h-3 rounded-full bg-alur-paper overflow-hidden flex border border-alur-hairline">
                  <div className="h-full bg-alur-charcoal w-[63%]" title="Kapasitas Aman (6 Jam)" />
                  <div className="h-full bg-alur-warm-gray/60 w-[37%]" title="Overload (3.5 Jam)" />
                </div>
                <div className="flex justify-between text-[11px] text-alur-warm-gray">
                  <span>Batas Kapasitas: 6.0 Jam</span>
                  <span>Rencana Sekarang: 9.5 Jam</span>
                </div>
              </div>

              <p className="text-sm text-alur-charcoal leading-snug">
                Jadwal hari ini melebihi kapasitas kerja optimalmu. Rekomendasi ALUR:
              </p>

              <div className="space-y-2">
                <button
                  type="button"
                  className="w-full text-left p-3 rounded-lg border border-alur-charcoal bg-alur-off-white text-xs font-semibold text-alur-charcoal hover:bg-alur-paper transition-colors"
                >
                  ✓ Pindahkan 2 task berprioritas rendah ke besok
                </button>
                <button
                  type="button"
                  className="w-full text-left p-3 rounded-lg border border-alur-hairline bg-alur-off-white text-xs text-alur-warm-gray hover:text-alur-charcoal hover:border-alur-warm-gray transition-colors"
                >
                  Tetap simpan semua hari ini (saya siap lembur)
                </button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
