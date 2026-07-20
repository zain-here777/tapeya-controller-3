import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import TeamCrest from "../../LowerThird/components/TeamCrest.jsx";

/**
 * NameLT — name + role on the left, team logo on the right.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 * @param {string} [props.panelBg]
 */
export default function NameLTCore({
  match,
  baseConfig,
  config: configOverride = {},
  panelBg = "bg-panel-player",
}) {
  const player = match?.player;
  if (!player?.name) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const { name, role = "" } = player;
  const team = match.team ?? {};

  return (
    <div className="controller-scaled relative w-full shrink-0 overflow-hidden font-controller select-none">
      <div className="mb-[calc(45px*var(--cs))] w-full px-[calc(210px*var(--cs))]">
        <div
          className={`relative flex h-bar w-full items-stretch overflow-hidden ${panelBg}`}
        >
          <div className="relative z-[1] flex min-w-0 flex-1 flex-col justify-center bg-transparent px-[calc(28px*var(--cs))]">
            <div className="ctrl-gap-8 flex min-w-0 flex-col leading-none">
              <span className="ctrl-t-name-lt-name uppercase text-white">
                {name}
              </span>
              {role ? (
                <span className="ctrl-t-name-lt-role uppercase text-white">
                  {role}
                </span>
              ) : null}
            </div>
          </div>

          <div className="relative z-[1] flex h-full shrink-0 items-stretch">
            <div className="flex w-[calc(139px*var(--cs))] shrink-0 items-center justify-center bg-transparent px-[calc(16px*var(--cs))] py-[calc(12px*var(--cs))]">
              {team.logoUrl ? (
                <img
                  src={team.logoUrl}
                  alt={team.name || team.code || "Team"}
                  className="h-full w-full object-contain"
                />
              ) : (
                <TeamCrest
                  code={team.code}
                  name={team.name}
                  theme={team.theme ?? "gold"}
                  size="lg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
