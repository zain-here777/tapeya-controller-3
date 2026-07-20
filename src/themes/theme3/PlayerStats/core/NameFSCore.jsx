import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import BreakFabricBackground from "../../Breaks/components/BreakFabricBackground.jsx";

/**
 * NameFS — full-screen batsman name graphic.
 * Break fabric background; portrait left, team logo + info panel right.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function NameFSCore({
  match,
  baseConfig,
  config: configOverride = {},
  panelBg = "bg-panel-player",
  logoBg = "bg-panel-player",
  pageClassName = "",
}) {
  const player = match?.player;
  if (!player?.lastName && !player?.name) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const team = match.team ?? {};
  const firstName = player.firstName ?? "";
  const derivedLast =
    String(player.name || "")
      .trim()
      .split(/\s+/)
      .slice(1)
      .join(" ");
  const lastName =
    player.lastName || derivedLast || String(player.name || "").trim();
  const role = player.role ?? "";
  const subtitle = player.subtitle ?? "";
  const photoUrl = player.photoUrl ?? "";
  const teamCode = team.code ?? "";
  const teamLabel = team.name || team.code || "Team";

  return (
    <div
      className={`name-fs-page controller-scaled font-controller select-none ${pageClassName}`.trim()}
    >
      <BreakFabricBackground />

      <div className="name-fs-inner">
        <div className="name-fs-portrait">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={`${firstName} ${lastName}`.trim() || lastName}
              className="name-fs-portrait-img"
            />
          ) : (
            <div className="name-fs-portrait-fallback">
              <span className="ctrl-t-name-fs-last uppercase text-white/40">
                {(lastName || "?").slice(0, 1)}
              </span>
            </div>
          )}
        </div>

        <div className="name-fs-info">
          <div className={`name-fs-logo ${logoBg}`}>
            {team.logoUrl ? (
              <img
                src={team.logoUrl}
                alt={teamLabel}
                className="h-full w-full object-contain p-[calc(14px*var(--cs))]"
              />
            ) : (
              <span className="ctrl-t-name-fs-team-code font-bold uppercase text-white">
                {teamCode || "?"}
              </span>
            )}
          </div>

          <div className={`name-fs-card ${panelBg}`}>
            <div className="name-fs-card-names">
              {firstName ? (
                <span className="ctrl-t-name-fs-first uppercase text-white">
                  {firstName}
                </span>
              ) : null}
              <span className="ctrl-t-name-fs-last uppercase text-white">
                {lastName}
              </span>
            </div>

            <div className="name-fs-card-divider" aria-hidden="true" />

            <div className="name-fs-card-meta">
              {teamCode ? (
                <span className="ctrl-t-name-fs-team-code uppercase text-amber-200">
                  {teamCode}
                </span>
              ) : null}
              {role ? (
                <span className="ctrl-t-name-fs-role uppercase text-white">
                  {role}
                </span>
              ) : null}
              {subtitle ? (
                <span className="ctrl-t-name-fs-subtitle text-white/75">
                  {subtitle}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
