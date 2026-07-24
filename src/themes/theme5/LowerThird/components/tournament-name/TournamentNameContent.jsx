import React from "react";

/**
 * Theme 5 Tournament Name center — tournament title + optional venue row.
 *
 * @param {Object} props
 * @param {string} props.tournament
 * @param {string} [props.venue]
 */
export default function TournamentNameContent({ tournament, venue }) {
  return (
    <div className="relative z-[1] flex min-w-0 flex-1 flex-col">
      <div className="flex min-h-0 flex-1 items-center justify-center px-[calc(28px*var(--t5-scale))]">
        <span className="text-center text-[calc(36px*var(--t5-scale))] font-bold uppercase leading-none tracking-[calc(2px*var(--t5-scale))] text-white">
          {tournament}
        </span>
      </div>

      {venue ? (
        <div className="flex h-[var(--t5-bar-row-short)] shrink-0 items-center justify-center border-t border-white/25 px-[calc(28px*var(--t5-scale))]">
          <span className="text-center text-[calc(22px*var(--t5-scale))] font-bold uppercase leading-tight tracking-[calc(2px*var(--t5-scale))] text-white">
            {venue}
          </span>
        </div>
      ) : null}
    </div>
  );
}
