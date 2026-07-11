import React from "react";

/**
 * One partnership row — left batter | contribution bar | right batter.
 *
 * @param {Object} props
 * @param {Object} props.partnership
 */
export default function PartnershipListRow({ partnership }) {
  if (!partnership) return null;

  const left = partnership.left ?? {};
  const right = partnership.right ?? {};
  const leftRuns = Number(left.runs) || 0;
  const rightRuns = Number(right.runs) || 0;
  const totalRuns = leftRuns + rightRuns;
  const partnershipBalls = partnership.balls ?? 0;

  const leftPct = totalRuns > 0 ? (leftRuns / totalRuns) * 100 : 50;
  let rightPct = 100 - leftPct;
  let displayLeftPct = leftPct;

  /* Keep a visible tip for a zero-run side */
  const MIN_TIP = 6;
  if (totalRuns > 0 && rightPct === 0) {
    displayLeftPct = 100 - MIN_TIP;
    rightPct = MIN_TIP;
  } else if (totalRuns > 0 && leftPct === 0) {
    rightPct = 100 - MIN_TIP;
    displayLeftPct = MIN_TIP;
  }

  const badgeStyle = {
    left: `${displayLeftPct}%`,
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className="pl-fs-row">
      <div className="pl-fs-player-id pl-fs-player-id--left">
        <span className="pl-fs-swatch pl-fs-swatch--left" aria-hidden="true" />
        <span className="ctrl-t-pl-fs-name uppercase text-white">
          {left.name ?? ""}
        </span>
      </div>

      <div className="pl-fs-player-score pl-fs-player-score--left">
        <span className="ctrl-t-pl-fs-runs pl-fs-runs--left tabular-nums">
          {leftRuns}
        </span>
        <span className="ctrl-t-pl-fs-balls tabular-nums text-white">
          ({left.balls ?? 0})
        </span>
      </div>

      <div className="pl-fs-bar-wrap">
        <div className="pl-fs-bar">
          <div
            className="pl-fs-bar-seg pl-fs-bar-seg--left"
            style={{ width: `${displayLeftPct}%` }}
          >
            <span className="ctrl-t-pl-fs-bar-val tabular-nums text-white">
              {leftRuns}
            </span>
          </div>
          <div
            className="pl-fs-bar-seg pl-fs-bar-seg--right"
            style={{ width: `${rightPct}%` }}
          >
            <span className="ctrl-t-pl-fs-bar-val tabular-nums text-white">
              {rightRuns}
            </span>
          </div>
          <span className="pl-fs-bar-badge" style={badgeStyle}>
            <span className="ctrl-t-pl-fs-bar-total tabular-nums text-white">
              {totalRuns}
            </span>
            <span className="ctrl-t-pl-fs-bar-balls tabular-nums text-white">
              {partnershipBalls}
            </span>
          </span>
        </div>
      </div>

      <div className="pl-fs-player-score pl-fs-player-score--right">
        <span className="ctrl-t-pl-fs-runs pl-fs-runs--right tabular-nums">
          {rightRuns}
        </span>
        <span className="ctrl-t-pl-fs-balls tabular-nums text-white">
          ({right.balls ?? 0})
        </span>
      </div>

      <div className="pl-fs-player-id pl-fs-player-id--right">
        <span className="ctrl-t-pl-fs-name uppercase text-white">
          {right.name ?? ""}
        </span>
        <span className="pl-fs-swatch pl-fs-swatch--right" aria-hidden="true" />
      </div>
    </div>
  );
}
