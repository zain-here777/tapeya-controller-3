import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";

/**
 * TournamentLT — name left, tournament right, centered stats bottom.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 * @param {string} [props.panelBg]
 */
export default function TournamentLTCore({
  match,
  baseConfig,
  config: configOverride = {},
  panelBg = "bg-panel-player",
}) {
  const player = match?.player;
  if (!player?.name) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const {
    name = "",
    tournament = "",
    stats = [],
  } = player;

  return (
    <div className="controller-scaled relative w-full shrink-0 overflow-hidden font-controller select-none">
      <div className="mb-[calc(45px*var(--cs))] w-full px-[calc(210px*var(--cs))]">
        <div
          className={`relative flex h-bar w-full items-stretch overflow-hidden ${panelBg}`}
        >
          <div className="relative z-[1] flex min-w-0 flex-1 flex-col bg-transparent">
            <div className="flex h-[calc(56px*var(--cs))] shrink-0 items-center justify-between gap-x-[calc(24px*var(--cs))] bg-transparent px-[calc(28px*var(--cs))]">
              <span className="ctrl-t-summary-team flex-none whitespace-nowrap uppercase text-white">
                {name}
              </span>

              {tournament ? (
                <span className="ctrl-t-summary-team min-w-0 truncate text-right uppercase text-white">
                  {tournament}
                </span>
              ) : null}
            </div>

            {stats.length ? (
              <div className="flex h-[calc(83px*var(--cs))] min-h-0 flex-1 items-center justify-center border-t border-divider bg-transparent px-[calc(28px*var(--cs))]">
                <div className="ctrl-gap-40 flex items-end">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="ctrl-gap-6 flex flex-col items-center leading-none text-white"
                    >
                      <span className="ctrl-t-last-wicket-stat-label whitespace-nowrap uppercase">
                        {stat.label}
                      </span>
                      <span className="ctrl-t-last-wicket-stat-value whitespace-nowrap tabular-nums">
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
