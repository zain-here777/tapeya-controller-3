import React from "react";

function BallBox({ result }) {
  if (result == null || result === "") {
    return (
      <div className="ctrl-ball flex items-center justify-center border border-white/25 bg-black/20" />
    );
  }

  const normalized =
    result === 0 || result === "0" || result === "dot" ? "dot" : String(result).toUpperCase();

  if (normalized === "4") {
    return (
      <div className="ctrl-ball ctrl-t-ball flex items-center justify-center bg-broadcast-boundary font-bold leading-none text-white">
        4
      </div>
    );
  }

  if (normalized === "6") {
    return (
      <div className="ctrl-ball ctrl-t-ball flex items-center justify-center bg-broadcast-six font-bold leading-none text-white">
        6
      </div>
    );
  }

  if (normalized === "W" || normalized === "WK" || normalized === "WICKET") {
    return (
      <div className="ctrl-ball ctrl-t-ball-w flex items-center justify-center bg-broadcast-wicket font-bold leading-none text-white">
        W
      </div>
    );
  }

  if (normalized === "dot") {
    return (
      <div className="ctrl-ball flex items-center justify-center border border-white/35 bg-[#7a0020]/60">
        <span className="ctrl-ball-dot rounded-full bg-white" />
      </div>
    );
  }

  return (
    <div className="ctrl-ball ctrl-t-ball flex items-center justify-center border border-white/35 bg-[#7a0020]/60 font-bold leading-none text-white">
      {normalized}
    </div>
  );
}

/**
 * OverBalls
 * Current-over strip (dots, runs, boundaries, wickets).
 * Pads to at least `minSlots` (default 6); shows every ball when the over runs long.
 */
export default function OverBalls({ balls = [], minSlots = 6 }) {
  const count = Math.max(minSlots, balls.length);
  const slots = Array.from({ length: count }, (_, i) => balls[i] ?? null);

  return (
    <div className="ctrl-gap-4 flex items-center">
      {slots.map((result, i) => (
        <BallBox key={i} result={result} />
      ))}
    </div>
  );
}
