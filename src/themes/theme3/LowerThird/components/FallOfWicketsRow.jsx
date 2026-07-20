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
    <div className="ctrl-gap-2 flex min-w-0 flex-col items-center justify-center text-center leading-none text-white">
      <span className="ctrl-t-fow-ordinal ctrl-tracking whitespace-nowrap uppercase">
        {ordinal}
      </span>
      <span
        key={score}
        className="ctrl-t-fow-score animate-score-pop whitespace-nowrap tabular-nums"
      >
        {score}
      </span>
      <span className="ctrl-t-fow-name ctrl-tracking block max-w-full truncate whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

/**
 * Fall of wickets stacks — centered group of ordinal / score / name columns.
 */
export default function FallOfWicketsRow({
  wickets = [],
  title = "Fall of Wickets",
  showTitle = true,
}) {
  if (!wickets.length) return null;

  return (
    <div className="ctrl-gap-112 flex items-center justify-center">
      {wickets.map((wicket) => (
        <FowEntry
          key={wicket.id ?? `${wicket.order}-${wicket.name}`}
          wicket={wicket}
        />
      ))}
      {showTitle ? (
        <span className="ctrl-t-fow-title ctrl-tracking shrink-0 whitespace-nowrap text-white">
          {title}
        </span>
      ) : null}
    </div>
  );
}
