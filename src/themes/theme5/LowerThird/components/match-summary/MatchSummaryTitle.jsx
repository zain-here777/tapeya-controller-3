import React from "react";

/**
 * Title caption pill above the Match Summary bar.
 *
 * @param {Object} props
 * @param {string} props.title
 */
export default function MatchSummaryTitle({ title }) {
  if (!title) return null;

  return (
    <div className="flex shrink-0 items-center justify-center bg-[var(--t5-surface)] px-[calc(36px*var(--t5-scale))] py-[calc(10px*var(--t5-scale))]">
      <span className="text-[calc(22px*var(--t5-scale))] font-bold uppercase leading-tight tracking-[calc(2px*var(--t5-scale))] text-[var(--t5-text)]">
        {title}
      </span>
    </div>
  );
}
