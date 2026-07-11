import React, { useEffect, useState } from "react";

/**
 * Format remaining seconds as M:SS / MM:SS.
 * @param {number} totalSeconds
 */
function formatTimer(totalSeconds) {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

/**
 * Break center badge — "VS" or a live countdown timer.
 *
 * @param {Object} props
 * @param {boolean} [props.showTimer]
 * @param {number} [props.timerSeconds] - Countdown start (default 300 = 5 min)
 */
export default function BreakCenterBadge({
  showTimer = false,
  timerSeconds = 300,
}) {
  const initial = Math.max(0, Number(timerSeconds) || 0);
  const [remaining, setRemaining] = useState(initial);

  useEffect(() => {
    setRemaining(Math.max(0, Number(timerSeconds) || 0));
  }, [timerSeconds]);

  useEffect(() => {
    if (!showTimer) return undefined;

    const id = window.setInterval(() => {
      setRemaining((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);

    return () => window.clearInterval(id);
  }, [showTimer, timerSeconds]);

  if (showTimer) {
    return (
      <div className="break-vs break-vs-timer" aria-live="polite">
        <span className="ctrl-t-break-timer tabular-nums text-white">
          {formatTimer(remaining)}
        </span>
      </div>
    );
  }

  return (
    <div className="break-vs" aria-hidden="true">
      <span className="ctrl-t-break-vs uppercase text-white">VS</span>
    </div>
  );
}
