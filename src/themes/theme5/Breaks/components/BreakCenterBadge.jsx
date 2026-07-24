import React, { useEffect, useState } from "react";

/** @param {number} totalSeconds */
function formatTimer(totalSeconds) {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

/**
 * Center badge — VS or countdown timer (Tailwind).
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

  const shell =
    "flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#0369a1] shadow-[0_calc(8px*var(--t5-scale))_calc(28px*var(--t5-scale))_rgba(14,165,233,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]";

  if (showTimer) {
    return (
      <div
        className={`${shell} h-[calc(148px*var(--t5-scale))] w-[calc(148px*var(--t5-scale))]`}
        aria-live="polite"
      >
        <span className="text-[calc(48px*var(--t5-scale))] font-bold tabular-nums leading-none tracking-[calc(1px*var(--t5-scale))] text-white">
          {formatTimer(remaining)}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`${shell} h-[calc(88px*var(--t5-scale))] w-[calc(88px*var(--t5-scale))]`}
      aria-hidden="true"
    >
      <span className="text-[calc(32px*var(--t5-scale))] font-extrabold uppercase leading-none tracking-[calc(1px*var(--t5-scale))] text-white">
        VS
      </span>
    </div>
  );
}
