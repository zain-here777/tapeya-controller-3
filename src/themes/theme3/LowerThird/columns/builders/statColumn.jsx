import React from "react";
import StatItem from "../../components/StatItem";
import { DEFAULT_COLUMN_CLASS, STAT_COLUMN_BG } from "../columnTypes";

/**
 * Stat column — label + value (Partnership, CRR, RRR, etc.).
 */
export function createStatColumn({
  stat,
  bg = STAT_COLUMN_BG,
  className = DEFAULT_COLUMN_CLASS.stat,
  dividerBefore = false,
}) {
  return {
    key: `stat-${stat.label}`,
    bg,
    layout: "stat",
    dividerBefore,
    className,
    content: (
      <StatItem label={stat.label} value={stat.value} sublabel={stat.sublabel} />
    ),
  };
}
