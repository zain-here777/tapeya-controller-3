import React from "react";
import ActionBannerConfetti from "./ActionBannerConfetti.jsx";

/**
 * Sliding diagonal plate background — Theme 5 action lower thirds.
 *
 * @param {Object} props
 * @param {boolean} [props.showConfetti]
 */
export default function ActionBannerBackground({ showConfetti = false }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="t5-broadcast-bar-bg absolute inset-0">
        <div className="t5-broadcast-bar-diagonal motion-reduce:animate-none" />
        <div className="t5-broadcast-bar-diagonal t5-broadcast-bar-diagonal--2 motion-reduce:animate-none" />
        <div className="t5-broadcast-bar-diagonal t5-broadcast-bar-diagonal--3 motion-reduce:animate-none" />
      </div>
      {showConfetti ? <ActionBannerConfetti /> : null}
    </div>
  );
}
