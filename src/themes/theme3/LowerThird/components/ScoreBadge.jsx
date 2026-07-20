import React from "react";

/**
 * ScoreBadge
 * Small square badge for innings labels (P1 / P2).
 */
export default function ScoreBadge({ label, tone = "red" }) {
  if (!label) return null;

  const toneMap = {
    red: "bg-[#e60000] text-white",
    gold: "bg-amber-500 text-black",
    neutral: "bg-white/15 text-white",
  };

  return (
    <span
      className={`ctrl-badge-min ctrl-badge-px ctrl-badge-py ctrl-t-badge ctrl-tracking inline-flex items-center justify-center font-medium leading-none text-white ${toneMap[tone] || toneMap.red}`}
    >
      {label}
    </span>
  );
}
