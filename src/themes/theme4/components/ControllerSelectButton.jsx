import React from "react";

/** Theme 4 control-panel controller button. */
export default function ControllerSelectButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={active ? "t4-controller-select-btn-active" : "t4-controller-select-btn"}
    >
      {children}
    </button>
  );
}
