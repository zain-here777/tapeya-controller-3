import React from "react";
import BreakBackground from "../../Breaks/components/BreakBackground.jsx";

/** Full-bleed chart page — Theme 5 background + scaled layout shell. */
export default function ChartPageShell({ children }) {
  return (
    <div className="t5-chart-page select-none font-montserrat">
      <BreakBackground />
      <div className="t5-chart-page-inner">{children}</div>
    </div>
  );
}
