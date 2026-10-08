import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  problem: string;
  context: string;
  solution: string;
}

export function FeatureCard({
  icon,
  title,
  problem,
  context,
  solution,
}: FeatureCardProps) {
  return (
    <div className="bg-alur-paper p-8 rounded-xl border border-transparent hover:border-alur-hairline transition-all duration-300 flex flex-col justify-between h-full group">
      <div>
        <div className="w-12 h-12 flex items-center justify-center border border-alur-hairline rounded-lg bg-alur-off-white mb-6 text-alur-charcoal group-hover:scale-105 transition-transform duration-200">
          {icon}
        </div>

        <h3 className="font-bold text-xl text-alur-charcoal tracking-tight mb-3">
          {title}
        </h3>

        <div className="space-y-3 mb-6">
          <p className="text-sm font-semibold text-alur-charcoal leading-snug">
            {problem}
          </p>
          <p className="text-sm text-alur-warm-gray leading-relaxed">
            {context}
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-alur-hairline/60">
        <span className="text-xs uppercase tracking-wider font-semibold text-alur-charcoal block mb-1">
          Solusi ALUR
        </span>
        <p className="text-sm text-alur-charcoal leading-relaxed font-normal">
          {solution}
        </p>
      </div>
    </div>
  );
}
