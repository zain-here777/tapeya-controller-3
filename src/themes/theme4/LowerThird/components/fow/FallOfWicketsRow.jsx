import React from "react";

function toOrdinal(n) {
  const value = Number(n);
  if (!Number.isFinite(value)) return String(n ?? "");
  const suffixes = ["th", "st", "nd", "rd"];
  const v = value % 100;
  return `${value}${suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]}`;
}

/**
 * Single fall-of-wicket stack: ordinal, score at fall, batsman name.
 */
function FowEntry({ wicket }) {
  if (!wicket) return null;
  const { order, label, score, name } = wicket;
  const ordinal = label || toOrdinal(order);

  return (
    <div className="flex min-w-0 flex-col items-center justify-center gap-[calc(4px*var(--t4-scale))] text-center leading-none text-white">
      <span className="whitespace-nowrap text-[calc(20px*var(--t4-scale))] font-bold uppercase tracking-wide">
        {ordinal}
      </span>
      <span
        key={score}
        className="animate-score-pop whitespace-nowrap text-[calc(40px*var(--t4-scale))] font-bold tabular-nums"
      >
        {score}
      </span>
      <span className="block max-w-full truncate whitespace-nowrap text-[calc(24px*var(--t4-scale))] font-bold tracking-wide">
        {name}
      </span>
    </div>
  );
}

/**
 * Fall of wickets stacks — centered group of ordinal / score / name columns.
 *
 * @param {Object} props
 * @param {Array<{ id?: string, order?: number, label?: string, score?: string|number, name?: string }>} [props.wickets]
 * @param {string} [props.title]
 * @param {boolean} [props.showTitle]
 */
export default function FallOfWicketsRow({
  wickets = [],
  title = "Fall of Wickets",
  showTitle = true,
}) {
  if (!wickets.length) return null;

  return (
    <div className="flex items-center justify-center gap-[calc(64px*var(--t4-scale))]">
      {wickets.map((wicket) => (
        <FowEntry
          key={wicket.id ?? `${wicket.order}-${wicket.name}`}
          wicket={wicket}
        />
      ))}
      {showTitle ? (
        <span className="shrink-0 whitespace-nowrap text-[calc(28px*var(--t4-scale))] font-bold tracking-wide text-white">
          {title}
        </span>
      ) : null}
    </div>
  );
}
