import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import BreakFabricBackground from "../../Breaks/components/BreakFabricBackground.jsx";
import PartnershipListRow from "../components/PartnershipListRow.jsx";

/**
 * PartnershipList — full-screen runs-contributed partnership list.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function PartnershipListCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  const partnerships = Array.isArray(match?.partnerships)
    ? match.partnerships
    : [];
  if (!partnerships.length) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const team = match.team ?? {};
  const tournament = match.tournament ?? "";
  const teamLabel = team.name || team.code || "";
  const summary = match.summary ?? {};

  return (
    <div className="pl-fs-page controller-scaled font-controller select-none">
      <BreakFabricBackground />

      <div className="pl-fs-inner">
        <header className="pl-fs-header">
          <div className="pl-fs-logo">
            {team.logoUrl ? (
              <img
                src={team.logoUrl}
                alt={teamLabel}
                className="h-full w-full object-contain"
              />
            ) : (
              <span className="ctrl-t-pl-fs-code font-bold uppercase text-[#9c0028]">
                {team.code || "?"}
              </span>
            )}
          </div>
          <div className="pl-fs-header-text">
            {teamLabel ? (
              <h1 className="ctrl-t-pl-fs-team uppercase text-white">
                {teamLabel}
              </h1>
            ) : null}
            {tournament ? (
              <p className="ctrl-t-pl-fs-tournament uppercase text-white">
                {tournament}
              </p>
            ) : null}
          </div>
        </header>

        <div className="pl-fs-card bg-panel-player">
          <div className="pl-fs-list">
            {partnerships.map((partnership) => (
              <PartnershipListRow
                key={partnership.id ?? `${partnership.left?.name}-${partnership.right?.name}`}
                partnership={partnership}
              />
            ))}
          </div>

          <p className="ctrl-t-pl-fs-caption uppercase text-white/80">
            RUNS CONTRIBUTED
          </p>
        </div>

        {(summary.extras != null ||
          summary.overs != null ||
          summary.score) && (
          <div className="pl-fs-summary bg-panel-player">
            {summary.extras != null ? (
              <span className="ctrl-t-pl-fs-summary uppercase text-white">
                EXTRAS {summary.extras}
              </span>
            ) : null}
            {summary.overs != null ? (
              <>
                <span className="pl-fs-summary-divider" aria-hidden="true" />
                <span className="ctrl-t-pl-fs-summary uppercase text-white">
                  OVERS {summary.overs}
                </span>
              </>
            ) : null}
            {summary.score ? (
              <>
                <span className="pl-fs-summary-divider" aria-hidden="true" />
                <span className="ctrl-t-pl-fs-summary-score tabular-nums text-white">
                  {summary.score}
                </span>
              </>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
