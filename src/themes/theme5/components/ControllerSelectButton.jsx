import React from "react";

/** Theme 5 control-panel controller button. */
export default function ControllerSelectButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={active ? "t5-controller-select-btn-active" : "t5-controller-select-btn"}
    >
      {children}
    </button>
  );
}
