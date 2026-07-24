import React from "react";

/**
 * Theme 5 break page background — navy mesh + soft accent beams (not Theme 3 silk).
 */
export default function BreakBackground() {
  return (
    <div className="t5-break-bg" aria-hidden="true">
      <div className="t5-break-bg-base" />
      <div className="t5-break-bg-beam t5-break-bg-beam--a" />
      <div className="t5-break-bg-beam t5-break-bg-beam--b" />
      <div className="t5-break-bg-glow t5-break-bg-glow--a" />
      <div className="t5-break-bg-glow t5-break-bg-glow--b" />
      <div className="t5-break-bg-vignette" />
    </div>
  );
}
