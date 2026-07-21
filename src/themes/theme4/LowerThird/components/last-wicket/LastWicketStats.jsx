import React from "react";

/**
 * Bottom row — breakdown stats (label above value).
 *
 * @param {Object} props
 * @param {Array<{ label: string, value: string|number }>} [props.stats]
 */
export default function LastWicketStats({ stats = [] }) {
  if (!stats.length) return null;

  return (
    <div className="flex min-h-0 flex-1 items-center justify-center border-t border-white/25 px-[calc(28px*var(--t4-scale))]">
      <div className="flex items-end gap-[calc(36px*var(--t4-scale))]">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-[calc(6px*var(--t4-scale))] leading-none text-white"
          >
            <span className="whitespace-nowrap text-[calc(16px*var(--t4-scale))] font-bold uppercase tracking-wide">
              {stat.label}
            </span>
            <span
              key={`${stat.label}-${stat.value}`}
              className="animate-score-pop whitespace-nowrap text-[calc(32px*var(--t4-scale))] font-bold tabular-nums"
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
