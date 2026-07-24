import React from "react";

/**
 * Theme 5 tournament leaderboard row — rank, value, name.
 * Static layout: Tailwind. Cascade: t5-tlb-row-anim (motion.css).
 */
export default function TournamentLeaderboardRow({
  rank,
  name,
  value,
  active = false,
  index = 0,
}) {
  const rankLabel = String(rank).padStart(2, "0");

  return (
    <div
      className={`t5-tlb-row-anim flex w-full min-h-[calc(72px*var(--t5-scale))] items-center gap-[calc(20px*var(--t5-scale))] rounded-[calc(6px*var(--t5-scale))] bg-[var(--t5-panel-primary)] py-0 pl-[calc(10px*var(--t5-scale))] pr-[calc(24px*var(--t5-scale))] shadow-[0_calc(4px*var(--t5-scale))_calc(16px*var(--t5-scale))_rgba(0,0,0,0.2)] ${
        active
          ? "outline outline-1 outline-[rgba(14,165,233,0.45)] shadow-[0_0_0_1px_rgba(14,165,233,0.2),0_calc(6px*var(--t5-scale))_calc(20px*var(--t5-scale))_rgba(14,165,233,0.15)]"
          : ""
      }`}
      style={{ "--t5-tlb-stagger": index }}
    >
      <div className="flex h-[calc(52px*var(--t5-scale))] w-[calc(64px*var(--t5-scale))] shrink-0 items-center justify-center rounded-[calc(4px*var(--t5-scale))] bg-gradient-to-br from-[#0ea5e9] to-[#0369a1] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
        <span className="text-[calc(22px*var(--t5-scale))] font-bold tabular-nums leading-none tracking-[calc(1px*var(--t5-scale))] text-white">
          {rankLabel}
        </span>
      </div>
      <span className="min-w-[calc(64px*var(--t5-scale))] text-[calc(36px*var(--t5-scale))] font-bold tabular-nums leading-none text-[#f8fafc]">
        {value}
      </span>
      <span className="min-w-0 truncate text-[calc(26px*var(--t5-scale))] font-bold uppercase leading-[1.1] tracking-[calc(1px*var(--t5-scale))] text-[#f8fafc]">
        {name}
      </span>
    </div>
  );
}
