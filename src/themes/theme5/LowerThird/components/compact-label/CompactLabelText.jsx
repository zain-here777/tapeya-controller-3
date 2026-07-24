import React from "react";

/**
 * Uppercase label for Theme 5 compact MiniScorecard-style bars
 * (Umpires / Scorers / Commentators).
 *
 * @param {Object} props
 * @param {string} props.label
 */
export default function CompactLabelText({ label }) {
  return (
    <span className="shrink-0 text-[calc(36px*var(--t5-scale))] font-bold uppercase leading-none tracking-tight text-white">
      {label}
    </span>
  );
}
