import React from "react";

/**
 * Theme 4 break page background — navy mesh + soft accent beams (not Theme 3 silk).
 */
export default function BreakBackground() {
  return (
    <div className="t4-break-bg" aria-hidden="true">
      <div className="t4-break-bg-base" />
      <div className="t4-break-bg-beam t4-break-bg-beam--a" />
      <div className="t4-break-bg-beam t4-break-bg-beam--b" />
      <div className="t4-break-bg-glow t4-break-bg-glow--a" />
      <div className="t4-break-bg-glow t4-break-bg-glow--b" />
      <div className="t4-break-bg-vignette" />
    </div>
  );
}
