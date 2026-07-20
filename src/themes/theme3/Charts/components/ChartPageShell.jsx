import React from "react";
import BreakFabricBackground from "../../Breaks/components/BreakFabricBackground.jsx";

/**
 * Full-bleed chart page shell — fabric background + scaled canvas.
 */
export default function ChartPageShell({ children }) {
  return (
    <div className="chart-page controller-scaled font-controller select-none">
      <BreakFabricBackground />
      <div className="chart-page-inner">{children}</div>
    </div>
  );
}
