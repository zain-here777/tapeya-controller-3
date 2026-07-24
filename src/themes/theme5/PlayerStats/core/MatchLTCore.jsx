import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import { resolvePlayerStatsTeamColor } from "../utils/resolvePlayerStatsTeamColor.js";

/**
 * MatchLT — name left, score right, stats bottom.
 * Uses batting (teamA) or bowling (teamB) team color by variant.
 *
 * @param {"batsman"|"bowler"} [props.variant]
 * @param {"center"|"end"} [props.statsJustify]
 */
export default function MatchLTCore({
  match,
  baseConfig,
  config: configOverride = {},
  variant = "batsman",
  statsJustify = "center",
}) {
  const player = match?.player;
  if (!player?.name) return null;

  const config = mergeConfig(baseConfig, configOverride);

  const {
    name = "",
    runs = 0,
    balls = 0,
    figures,
    overs,
    stats = [],
  } = player;

  const hasBowlingFigures = figures != null && figures !== "";
  const backgroundColor = resolvePlayerStatsTeamColor(match, variant, config);
  const statsJustifyClass =
    statsJustify === "end" ? "justify-end" : "justify-center";

  return (
    <div className="w-full shrink-0 select-none font-montserrat motion-safe:animate-t5-rise-soft motion-reduce:animate-none">
      <div className="mb-[calc(45px*var(--t5-scale))] w-full px-[calc(210px*var(--t5-scale))]">
        <div
          className="relative flex h-[var(--t5-bar-height)] w-full items-stretch overflow-hidden shadow-[0_-2px_10px_rgba(0,0,0,0.12)]"
          style={{ backgroundColor }}
        >
          <div className="relative z-[1] flex min-w-0 flex-1 flex-col">
            <div className="flex h-[var(--t5-bar-row-short)] shrink-0 items-center justify-between gap-x-[calc(24px*var(--t5-scale))] px-[calc(28px*var(--t5-scale))]">
              <span className="flex-none whitespace-nowrap text-[calc(28px*var(--t5-scale))] font-bold uppercase leading-[1.05] tracking-[calc(0.8px*var(--t5-scale))] text-[#f8fafc]">
                {name}
              </span>

              <div className="flex shrink-0 items-baseline gap-[calc(6px*var(--t5-scale))] leading-none tabular-nums text-[#f8fafc]">
                {hasBowlingFigures ? (
                  <>
                    <span className="text-[calc(40px*var(--t5-scale))] font-bold leading-none">
                      {figures}
                    </span>
                    {overs != null && overs !== "" ? (
                      <span className="text-[calc(24px*var(--t5-scale))] font-medium leading-none">
                        {overs}
                      </span>
                    ) : null}
                  </>
                ) : (
                  <>
                    <span className="text-[calc(40px*var(--t5-scale))] font-bold leading-none">
                      {runs}
                    </span>
                    <span className="text-[calc(24px*var(--t5-scale))] font-medium leading-none">
                      ({balls})
                    </span>
                  </>
                )}
              </div>
            </div>

            {stats.length ? (
              <div
                className={`flex h-[var(--t5-bar-row-tall)] min-h-0 flex-1 items-center ${statsJustifyClass} border-t border-white/25 px-[calc(28px*var(--t5-scale))]`}
              >
                <div className="flex items-end gap-[calc(36px*var(--t5-scale))]">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center gap-[calc(6px*var(--t5-scale))] leading-none text-[#f8fafc]"
                    >
                      <span className="whitespace-nowrap text-[calc(18px*var(--t5-scale))] font-bold uppercase leading-none tracking-[calc(1px*var(--t5-scale))]">
                        {stat.label}
                      </span>
                      <span className="whitespace-nowrap text-[calc(32px*var(--t5-scale))] font-bold tabular-nums leading-none">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
