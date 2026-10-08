import React from "react";

export function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 py-16 border-t border-alur-hairline mt-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
        {/* Brand & Studio Attribution */}
        <div className="flex flex-col gap-3 max-w-sm">
          <span className="font-black text-xl text-alur-charcoal tracking-tight uppercase">
            ALUR
          </span>
          <p className="text-sm text-alur-warm-gray leading-relaxed">
            ALUR is an intelligent product experiment designed to bring honest
            capacity planning to daily life.
          </p>
          <div className="mt-2 flex items-center gap-2 text-xs text-alur-warm-gray font-medium">
            <span>Built with care by</span>
            <a
              href="https://bakwanspace.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-alur-charcoal font-semibold hover:underline border border-alur-hairline px-2 py-0.5 rounded bg-alur-paper hover:bg-alur-hairline/40 transition-colors"
            >
              BakwanSpace Studio &rarr;
            </a>
          </div>
        </div>

        {/* Links Navigation */}
        <div className="flex flex-wrap gap-12 sm:gap-20">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-alur-charcoal uppercase tracking-widest">
              Produk
            </span>
            <a
              href="#masalah"
              className="text-sm text-alur-warm-gray hover:text-alur-charcoal transition-colors"
            >
              Kenapa ALUR
            </a>
            <a
              href="#cara-kerja"
              className="text-sm text-alur-warm-gray hover:text-alur-charcoal transition-colors"
            >
              Cara Kerja
            </a>
            <a
              href="#keunggulan"
              className="text-sm text-alur-warm-gray hover:text-alur-charcoal transition-colors"
            >
              Keunggulan
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-alur-charcoal uppercase tracking-widest">
              Ekosistem
            </span>
            <a
              href="https://bakwanspace.id"
              className="text-sm text-alur-warm-gray hover:text-alur-charcoal transition-colors"
            >
              BakwanSpace Labs
            </a>
            <a
              href="#portfolio"
              className="text-sm text-alur-warm-gray hover:text-alur-charcoal transition-colors"
            >
              Portofolio Produk
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-alur-charcoal uppercase tracking-widest">
              Legal
            </span>
            <a
              href="#privasi"
              className="text-sm text-alur-warm-gray hover:text-alur-charcoal transition-colors"
            >
              Kebijakan Privasi
            </a>
            <a
              href="#ketentuan"
              className="text-sm text-alur-warm-gray hover:text-alur-charcoal transition-colors"
            >
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full mt-12 pt-6 border-t border-alur-hairline/60 flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="text-xs text-alur-warm-gray">
          &copy; 2026 BakwanSpace Studio. All rights reserved.
        </span>
        <span className="text-xs text-alur-warm-gray">
          Designed with zero-elevation &amp; honest principles.
        </span>
      </div>
    </footer>
  );
}
