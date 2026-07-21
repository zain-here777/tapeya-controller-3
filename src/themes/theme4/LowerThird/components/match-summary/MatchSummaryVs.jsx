import React from "react";

const WHITE_PANEL =
  "bg-[linear-gradient(165deg,#ffffff_0%,#ffffff_58%,#f4f8fd_82%,#e3eef9_100%)]";

/**
 * White VS center panel between the two team halves.
 */
export default function MatchSummaryVs() {
  return (
    <div
      className={`flex h-full w-[calc(128px*var(--t4-scale))] shrink-0 items-center justify-center ${WHITE_PANEL}`}
    >
      <span className="text-[calc(36px*var(--t4-scale))] font-bold uppercase leading-none text-[var(--t4-surface)]">
        VS
      </span>
    </div>
  );
}
