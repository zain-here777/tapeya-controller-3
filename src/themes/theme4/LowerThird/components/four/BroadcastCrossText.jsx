import React from "react";

/**
 * White broadcast label with team-tinted depth shadow.
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {string} props.textSize
 */
export default function BroadcastCrossText({ label, textSize }) {
  return (
    <span
      className={`t4-broadcast-cross-text t4-broadcast-cross-text-layer--solid motion-reduce:animate-none ${textSize} italic uppercase leading-none`}
    >
      {label}
    </span>
  );
}
