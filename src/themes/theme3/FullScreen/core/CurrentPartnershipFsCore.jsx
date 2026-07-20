import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import BreakFabricBackground from "../../Breaks/components/BreakFabricBackground.jsx";

/**
 * CurrentPartnership — full-screen partnership graphic.
 * Header + centered card (portraits | totals | name/score bar).
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function CurrentPartnershipFsCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  const batters = Array.isArray(match?.batters) ? match.batters : [];
  const left = batters[0];
  const right = batters[1];
  if (!left && !right) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const team = match.team ?? {};
  const tournament = match.tournament ?? "";
  const teamLabel = team.name || team.code || "";
  const partnership = match.partnership ?? {};
  const partnershipRuns = partnership.runs ?? 0;
  const partnershipBalls = partnership.balls ?? 0;

  return (
    <div className="cp-fs-page controller-scaled font-controller select-none">
      <BreakFabricBackground />

      <div className="cp-fs-inner">
        <header className="cp-fs-header">
          {teamLabel ? (
            <h1 className="ctrl-t-cp-fs-team uppercase text-white">
              {teamLabel}
            </h1>
          ) : null}
          {tournament ? (
            <p className="ctrl-t-cp-fs-tournament uppercase text-white">
              {tournament}
            </p>
          ) : null}
        </header>

        <div className="cp-fs-card bg-panel-player">
          <div className="cp-fs-body">
            <Portrait batter={left} side="left" index={0} />

            <div className="cp-fs-center">
              <span className="ctrl-t-cp-fs-label uppercase text-white">
                CURRENT PARTNERSHIP
              </span>
              <span className="ctrl-t-cp-fs-total tabular-nums text-white">
                {partnershipRuns}
              </span>
              <span className="ctrl-t-cp-fs-meta uppercase text-white">
                RUNS <span className="cp-fs-dot" aria-hidden="true">
                  •
                </span>{" "}
                {partnershipBalls} BALLS
              </span>
            </div>

            <Portrait batter={right} side="right" index={1} />
          </div>

          <div className="cp-fs-bar">
            <div className="cp-fs-bar-inner bg-panel-player">
              <div className="cp-fs-half cp-fs-half--left">
                <Nameplate batter={left} side="left" />
                <ScoreBlock batter={left} />
              </div>

              <span className="cp-fs-bar-divider" aria-hidden="true" />

              <div className="cp-fs-half cp-fs-half--right">
                <ScoreBlock batter={right} />
                <Nameplate batter={right} side="right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function splitName(batter) {
  if (!batter) return { firstName: "", lastName: "", fullName: "" };
  const firstName = batter.firstName ?? "";
  const lastName =
    batter.lastName ||
    String(batter.name || "")
      .trim()
      .split(/\s+/)
      .slice(-1)[0] ||
    "";
  const fullName = `${firstName} ${lastName}`.trim() || lastName;
  return { firstName, lastName, fullName };
}

function Portrait({ batter, side, index }) {
  if (!batter) return <div className={`cp-fs-portrait-slot cp-fs-portrait-slot--${side}`} />;

  const { fullName, lastName } = splitName(batter);
  const photoUrl = batter.photoUrl ?? "";

  return (
    <div
      className={`cp-fs-portrait-slot cp-fs-portrait-slot--${side} cp-fs-player-in`}
      style={{ "--cp-fs-delay": `${index * 120}ms` }}
    >
      <div className="cp-fs-portrait">
        {photoUrl ? (
          <img src={photoUrl} alt={fullName} className="cp-fs-portrait-img" />
        ) : (
          <span className="ctrl-t-cp-fs-fallback uppercase text-white/40">
            {(lastName || "?").slice(0, 1)}
          </span>
        )}
      </div>
    </div>
  );
}

function Nameplate({ batter, side = "left" }) {
  if (!batter) {
    return <div className={`cp-fs-nameplate cp-fs-nameplate--${side}`} />;
  }

  const { firstName, lastName } = splitName(batter);

  return (
    <div className={`cp-fs-nameplate cp-fs-nameplate--${side}`}>
      {firstName ? (
        <span className="ctrl-t-cp-fs-first uppercase text-white">
          {firstName}
        </span>
      ) : null}
      <span className="cp-fs-lastname-row">
        <span className="ctrl-t-cp-fs-last uppercase text-white">{lastName}</span>
        {batter.onStrike ? (
          <span className="ctrl-t-cp-fs-strike" aria-hidden="true">
            *
          </span>
        ) : null}
      </span>
    </div>
  );
}

function ScoreBlock({ batter }) {
  return (
    <div className="cp-fs-score">
      <span className="ctrl-t-cp-fs-score-runs tabular-nums text-white">
        {batter?.runs ?? 0}
      </span>
      <span className="ctrl-t-cp-fs-score-balls tabular-nums text-white">
        ({batter?.balls ?? 0})
      </span>
    </div>
  );
}
