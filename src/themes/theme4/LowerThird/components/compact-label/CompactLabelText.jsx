import React from "react";

/**
 * Uppercase label for Theme 4 compact MiniScorecard-style bars
 * (Umpires / Scorers / Commentators).
 *
 * @param {Object} props
 * @param {string} props.label
 */
export default function CompactLabelText({ label }) {
  return (
    <span className="shrink-0 text-[calc(36px*var(--t4-scale))] font-bold uppercase leading-none tracking-tight text-white">
      {label}
    </span>
  );
}
