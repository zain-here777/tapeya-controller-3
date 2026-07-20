import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import BreakFabricBackground from "../../Breaks/components/BreakFabricBackground.jsx";

/**
 * NeedTarget — full-screen chase target graphic.
 * Header + card (need/from columns) + wickets pill.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function NeedTargetFsCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const tournament = match.tournament ?? "";
  const matchup = match.matchup ?? "";
  const title = match.title ?? "";
  const need = match.need ?? {};
  const runs = need.runs ?? 0;
  const balls = need.balls ?? 0;
  const wicketsLeft = match.wicketsLeft;
  const wicketsLabel =
    wicketsLeft == null
      ? ""
      : `WITH ${wicketsLeft} WICKET${Number(wicketsLeft) === 1 ? "" : "S"}`;

  return (
    <div className="need-fs-page controller-scaled font-controller select-none">
      <BreakFabricBackground />

      <div className="need-fs-inner">
        <header className="need-fs-header">
          {matchup ? (
            <h1 className="ctrl-t-need-fs-matchup uppercase text-white">
              {matchup}
            </h1>
          ) : null}
          {tournament ? (
            <p className="ctrl-t-need-fs-tournament uppercase text-white">
              {tournament}
            </p>
          ) : null}
        </header>

        <div className="need-fs-card-wrap">
          <div className="need-fs-card bg-panel-player">
            {title ? (
              <h2 className="ctrl-t-need-fs-title uppercase text-white">
                {title}
              </h2>
            ) : null}

            <div className="need-fs-cols">
              <div className="need-fs-col">
                <span className="need-fs-chip">
                  <span className="ctrl-t-need-fs-chip uppercase text-white">
                    NEED
                  </span>
                </span>
                <span className="ctrl-t-need-fs-value tabular-nums text-white">
                  {runs}
                </span>
                <span className="need-fs-chip">
                  <span className="ctrl-t-need-fs-chip uppercase text-white">
                    RUNS
                  </span>
                </span>
              </div>

              <div className="need-fs-col">
                <span className="need-fs-chip">
                  <span className="ctrl-t-need-fs-chip uppercase text-white">
                    FROM
                  </span>
                </span>
                <span className="ctrl-t-need-fs-value tabular-nums text-white">
                  {balls}
                </span>
                <span className="need-fs-chip">
                  <span className="ctrl-t-need-fs-chip uppercase text-white">
                    BALLS
                  </span>
                </span>
              </div>
            </div>
          </div>

          {wicketsLabel ? (
            <div className="need-fs-wickets">
              <span className="ctrl-t-need-fs-wickets uppercase">
                {wicketsLabel}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
