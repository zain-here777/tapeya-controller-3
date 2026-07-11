import React from "react";

/**
 * Divider
 * Short vertical line centered in the bar — one per column gap.
 */
export default function Divider() {
  return (
    <div
      className="ctrl-divider-w flex h-full shrink-0 items-center justify-center self-stretch"
      aria-hidden="true"
    >
      <div className="ctrl-divider-line h-divider w-px" />
    </div>
  );
}
