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
    <div className="flex shrink-0 items-center justify-center bg-[var(--t4-surface)] px-[calc(36px*var(--t4-scale))] py-[calc(10px*var(--t4-scale))]">
      <span className="text-[calc(22px*var(--t4-scale))] font-bold uppercase leading-tight tracking-[calc(2px*var(--t4-scale))] text-[var(--t4-text)]">
        {title}
      </span>
    </div>
  );
}
