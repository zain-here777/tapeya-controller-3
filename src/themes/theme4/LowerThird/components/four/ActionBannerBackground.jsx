import React from "react";
import ActionBannerConfetti from "./ActionBannerConfetti.jsx";

/**
 * Animated plate background for Theme 4 action lower thirds.
 *
 * @param {Object} props
 * @param {boolean} [props.showConfetti]
 */
export default function ActionBannerBackground({ showConfetti = false }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="t4-broadcast-bar-bg absolute inset-0">
        <div className="t4-broadcast-bar-bg-shift motion-reduce:animate-none" />
        <div className="t4-broadcast-bar-texture motion-reduce:animate-none" />
        <div className="t4-broadcast-bar-glow motion-reduce:animate-none" />
        <div className="t4-broadcast-bar-energy motion-reduce:animate-none" />
        <div className="t4-broadcast-bar-shimmer t4-broadcast-bar-shimmer--a motion-reduce:animate-none" />
        <div className="t4-broadcast-bar-shimmer t4-broadcast-bar-shimmer--b motion-reduce:animate-none" />
        <div className="t4-broadcast-bar-streak t4-broadcast-bar-streak--a motion-reduce:animate-none" />
        <div className="t4-broadcast-bar-streak t4-broadcast-bar-streak--b motion-reduce:animate-none" />
      </div>
      {showConfetti ? <ActionBannerConfetti /> : null}
    </div>
  );
}
