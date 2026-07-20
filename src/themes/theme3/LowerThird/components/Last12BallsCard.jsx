import React from "react";

function normalizeBall(result) {
  if (result == null || result === "") return null;
  if (result === 0 || result === "0" || result === "dot") return "dot";
  return String(result).toUpperCase();
}

/**
 * Circular ball outcome for the Last 12 Balls strip.
 */
function Last12Ball({ result }) {
  const normalized = normalizeBall(result);
  if (!normalized) return null;

  const base =
    "ctrl-last12-ball ctrl-t-ball flex shrink-0 items-center justify-center rounded-full font-bold leading-none text-white";

  if (normalized === "4") {
    return <div className={`${base} bg-broadcast-boundary`}>4</div>;
  }
  if (normalized === "6") {
    return <div className={`${base} bg-broadcast-six`}>6</div>;
  }
  if (normalized === "W" || normalized === "WK" || normalized === "WICKET") {
    return (
      <div className={`${base} ctrl-t-ball-w bg-broadcast-wicket`}>W</div>
    );
  }
  if (normalized === "dot") {
    return (
      <div className={`${base} border border-white/35 bg-white/10`}>
        <span className="ctrl-ball-dot rounded-full bg-white" />
      </div>
    );
  }

  return (
    <div className={`${base} border border-white/35 bg-white/10`}>
      {normalized}
    </div>
  );
}

/**
 * Bowler-side Last 12 Balls block — title, total runs, circular ball strip.
 */
export default function Last12BallsCard({
  title = "LAST 12 BALLS",
  runs = 0,
  balls = [],
}) {
  return (
    <div className="ctrl-gap-8 ctrl-px-16 flex min-w-0 flex-1 flex-col justify-center">
      <span className="ctrl-t-last12-title ctrl-tracking whitespace-nowrap uppercase text-white">
        {title}
      </span>

      <div className="ctrl-gap-16 flex min-w-0 items-center">
        <span
          key={runs}
          className="ctrl-t-last12-runs animate-score-pop shrink-0 tabular-nums text-white"
        >
          {runs}
        </span>

        <div className="ctrl-gap-6 flex min-w-0 flex-wrap items-center">
          {balls.map((result, i) => (
            <Last12Ball key={i} result={result} />
          ))}
        </div>
      </div>
    </div>
  );
}
