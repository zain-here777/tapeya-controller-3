import React from "react";
import ActionBannerConfetti from "./ActionBannerConfetti.jsx";
import BroadcastCrossText from "./BroadcastCrossText.jsx";
import BroadcastFourHero from "./BroadcastFourHero.jsx";

/**
 * Broadcast action strip — shared letter-reveal / scale / triple layout for
 * Four, Six, Replay, and other action controllers.
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {Record<string, string>} props.broadcastVars
 * @param {boolean} props.compact
 */
export default function ActionBannerBroadcast({
  label,
  broadcastVars,
  compact,
}) {
  const displayLabel = String(label || "Four").toUpperCase();
  const heroSize = compact
    ? "text-[calc(36px*var(--t4-scale))]"
    : "text-[calc(58px*var(--t4-scale))]";
  const tripleSize = compact
    ? "text-[calc(28px*var(--t4-scale))]"
    : "text-[calc(52px*var(--t4-scale))]";

  return (
    <div
      className="t4-broadcast-bar relative h-full w-full overflow-visible"
      style={broadcastVars}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="t4-broadcast-bar-bg absolute inset-0">
          <div className="t4-broadcast-bar-texture" />
          <div className="t4-broadcast-bar-streak t4-broadcast-bar-streak--a motion-reduce:animate-none" />
          <div className="t4-broadcast-bar-streak t4-broadcast-bar-streak--b motion-reduce:animate-none" />
        </div>
        <ActionBannerConfetti />
      </div>

      <div
        className="t4-broadcast-four-sequence relative z-[2] h-full w-full overflow-visible"
        role="img"
        aria-label={displayLabel}
      >
        <BroadcastFourHero label={displayLabel} textSizeClass={heroSize} />

        <div className="t4-broadcast-four-triple motion-reduce:opacity-100">
          {[0, 1, 2].map((index) => (
            <div key={index} className="t4-broadcast-four-triple-cell">
              <BroadcastCrossText label={displayLabel} textSize={tripleSize} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
