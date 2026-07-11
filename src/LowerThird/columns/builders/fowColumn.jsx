import React from "react";
import FallOfWicketsRow from "../../components/FallOfWicketsRow";
import { DEFAULT_COLUMN_CLASS } from "../columnTypes";

/**
 * Fall of wickets column — ordinal / score / name stacks in the middle panel.
 */
export function createFowColumn({
  wickets,
  bg = "bg-panel-player",
  foregroundBg,
  className = DEFAULT_COLUMN_CLASS.fow,
}) {
  return {
    key: "fall-of-wickets",
    bg,
    foregroundBg: foregroundBg ?? bg,
    layout: "expandable",
    className,
    content: <FallOfWicketsRow wickets={wickets} />,
  };
}
