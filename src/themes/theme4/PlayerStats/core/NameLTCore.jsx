import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import DefaultTeamEndCap from "../../LowerThird/components/default/DefaultTeamEndCap.jsx";
import {
  resolvePlayerStatsColorFallback,
  resolvePlayerStatsTeamColor,
} from "../utils/resolvePlayerStatsTeamColor.js";

/**
 * NameLT — name + role left, team logo + color bar right (Default LT end-cap).
 *
 * @param {"batsman"|"bowler"} [props.variant]
 */
export default function NameLTCore({
  match,
  baseConfig,
  config: configOverride = {},
  variant = "batsman",
}) {
  const player = match?.player;
  if (!player?.name) return null;

  const config = mergeConfig(baseConfig, configOverride);
  const { name, role = "" } = player;
  const team = match.team ?? {};
  const colorFallback = resolvePlayerStatsColorFallback(variant, config);
  const backgroundColor = resolvePlayerStatsTeamColor(match, variant, config);

  return (
    <div className="w-full shrink-0 select-none font-montserrat motion-safe:animate-t4-rise-soft motion-reduce:animate-none">
      <div className="mb-[calc(45px*var(--t4-scale))] w-full px-[calc(210px*var(--t4-scale))]">
        <div
          className="relative flex h-[var(--t4-bar-height)] w-full items-stretch overflow-hidden shadow-[0_-2px_10px_rgba(0,0,0,0.12)]"
          style={{ backgroundColor }}
        >
          <div className="relative z-[1] flex min-w-0 flex-1 flex-col justify-center px-[calc(28px*var(--t4-scale))]">
            <div className="flex min-w-0 flex-col gap-[calc(8px*var(--t4-scale))] leading-none">
              <span className="motion-safe:animate-soft-in motion-reduce:animate-none text-[calc(36px*var(--t4-scale))] font-bold uppercase leading-[1.05] tracking-[calc(1.2px*var(--t4-scale))] text-[#f8fafc]">
                {name}
              </span>
              {role ? (
                <span className="motion-safe:animate-soft-in motion-reduce:animate-none text-[calc(18px*var(--t4-scale))] font-semibold uppercase leading-[1.1] tracking-[calc(1.2px*var(--t4-scale))] text-[#f8fafc]/[0.88]" style={{ animationDelay: "80ms" }}>
                  {role}
                </span>
              ) : null}
            </div>
          </div>

          <DefaultTeamEndCap
            team={team}
            barSide="right"
            fallbackColorKey={colorFallback}
          />
        </div>
      </div>
    </div>
  );
}
