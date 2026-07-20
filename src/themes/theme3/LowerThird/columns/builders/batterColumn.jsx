import React from "react";
import BatterCard from "../../components/BatterCard";
import { DEFAULT_COLUMN_CLASS } from "../columnTypes";

/**
 * Batter column — photo, name, runs/balls.
 */
export function createBatterColumn({
  batter,
  bg = "bg-panel-player",
  foregroundBg,
  className = DEFAULT_COLUMN_CLASS.batter,
}) {
  return {
    key: batter.id,
    bg,
    foregroundBg: foregroundBg ?? bg,
    layout: "expandable",
    className,
    content: <BatterCard batter={batter} />,
  };
}
