import React from "react";
import ActionBannerConfetti from "./ActionBannerConfetti.jsx";
import BroadcastCrossText from "./BroadcastCrossText.jsx";

/**
 * Broadcast Four strip — two "FOUR" labels cross at center (no logo / loaders).
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
  const textSize = compact
    ? "text-[calc(44px*var(--t4-scale))]"
    : "text-[calc(64px*var(--t4-scale))]";

  return (
    <div
      className="t4-broadcast-bar relative h-full w-full overflow-hidden"
      style={broadcastVars}
    >
      <div className="t4-broadcast-bar-bg pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="t4-broadcast-bar-texture" />
        <div className="t4-broadcast-bar-streak t4-broadcast-bar-streak--a motion-reduce:animate-none" />
        <div className="t4-broadcast-bar-streak t4-broadcast-bar-streak--b motion-reduce:animate-none" />
      </div>

      <ActionBannerConfetti />

      <div className="t4-broadcast-cross-stage relative z-[2] h-full w-full">
        <div className="t4-broadcast-cross-runner t4-broadcast-cross-runner--left motion-reduce:animate-none">
          <BroadcastCrossText label={displayLabel} textSize={textSize} />
        </div>
        <div className="t4-broadcast-cross-runner t4-broadcast-cross-runner--right motion-reduce:animate-none">
          <BroadcastCrossText label={displayLabel} textSize={textSize} />
        </div>
      </div>
    </div>
  );
}
