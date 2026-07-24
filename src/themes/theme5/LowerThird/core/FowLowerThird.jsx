import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import { resolveTeamColor } from "../../config/teamColors.js";
import DefaultTeamEndCap from "../components/default/DefaultTeamEndCap.jsx";
import FallOfWicketsRow from "../components/fow/FallOfWicketsRow.jsx";
import FowTeamBlock from "../components/fow/FowTeamBlock.jsx";

/**
 * Theme 5 FOW lower third — team left, title right, wicket stacks centered on the bar.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function FowLowerThird({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.teamA) return null;

  const config = mergeConfig(baseConfig, configOverride);
  const battingFallback = config.defaultBattingColorKey ?? "teamA";
  const backgroundColor = resolveTeamColor(match.teamA.colorKey, battingFallback);

  const wickets = match.fallOfWickets || [];
  const title = match.fowTitle || "Fall of Wickets";

  return (
    <div className="w-full shrink-0 select-none font-montserrat">
      <div className="relative flex h-[var(--t5-bar-height)] w-full items-stretch overflow-hidden shadow-[0_-2px_10px_rgba(0,0,0,0.12)]">
        <DefaultTeamEndCap
          team={match.teamA}
          barSide="left"
          fallbackColorKey={battingFallback}
        />

        <div className="relative min-w-0 flex-1" style={{ backgroundColor }}>
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
            <FallOfWicketsRow wickets={wickets} showTitle={false} />
          </div>

          <div className="relative z-10 flex h-full items-stretch">
            <div className="flex h-full shrink-0 items-center">
              <FowTeamBlock team={match.teamA} />
              <div
                className="t5-lt-vrule"
                aria-hidden="true"
              />
            </div>

            <div className="ml-auto flex h-full shrink-0 items-center pr-[calc(40px*var(--t5-scale))]">
              <span className="whitespace-nowrap text-[calc(28px*var(--t5-scale))] font-bold tracking-wide text-white">
                {title}
              </span>
            </div>
          </div>
        </div>

        <div
          className="w-[calc(12px*var(--t5-scale))] shrink-0 self-stretch"
          style={{ backgroundColor }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
