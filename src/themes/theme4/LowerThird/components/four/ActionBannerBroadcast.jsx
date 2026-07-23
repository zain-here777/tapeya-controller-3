import React from "react";
import ActionBannerBackground from "./ActionBannerBackground.jsx";
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
 * @param {boolean} [props.showConfetti]
 */
export default function ActionBannerBroadcast({
  label,
  broadcastVars,
  compact,
  showConfetti = false,
}) {
  const displayLabel = String(label || "Four").toUpperCase();
  const heroSize = compact
    ? "text-[calc(36px*var(--t4-scale))]"
    : "text-[calc(58px*var(--t4-scale))]";
  const tripleSize = compact
    ? "text-[calc(34px*var(--t4-scale))]"
    : "text-[calc(66px*var(--t4-scale))]";

  return (
    <div
      className="t4-broadcast-bar relative h-full w-full overflow-visible"
      style={broadcastVars}
    >
      <ActionBannerBackground showConfetti={showConfetti} />

      <div
        className="t4-broadcast-four-sequence relative z-[2] h-full w-full overflow-visible"
        role="img"
        aria-label={displayLabel}
      >
        <BroadcastFourHero label={displayLabel} textSizeClass={heroSize} />

        <div className="t4-broadcast-four-triple motion-reduce:opacity-100">
          {[0, 1, 2].map((index) => (
            <div key={index} className="t4-broadcast-four-triple-cell">
              <BroadcastCrossText
                label={displayLabel}
                textSize={tripleSize}
                emphasis
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
