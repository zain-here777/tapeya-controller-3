import React from "react";

/**
 * Control-panel button for selecting a controller.
 * Uses Tailwind component classes from index.css.
 */
export default function ControllerSelectButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={active ? "controller-select-btn-active" : "controller-select-btn"}
    >
      {children}
    </button>
  );
}
