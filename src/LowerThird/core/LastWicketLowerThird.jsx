import React from "react";
import { mergeControllerConfig } from "../config/mergeControllerConfig.js";

/**
 * LastWicket lower third — same shell as before (no logos; short top / tall bottom).
 * Content: dismissed batter + breakdown stats. Full bar uses batsman panel color.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function LastWicketLowerThird({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  const lastWicket = match?.lastWicket;
  if (!lastWicket) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const {
    name = "",
    howOut = "",
    runs = 0,
    balls = 0,
    stats = [],
  } = lastWicket;

  return (
    <div className="controller-scaled relative w-full shrink-0 overflow-hidden font-controller select-none">
      <div className="mb-[calc(45px*var(--cs))] w-full px-[calc(210px*var(--cs))]">
        <div className="relative flex h-bar w-full items-stretch overflow-hidden bg-panel-player">
          <div className="relative z-[1] flex min-w-0 flex-1 flex-col bg-transparent">
            <div className="flex h-[calc(56px*var(--cs))] shrink-0 items-center justify-between gap-x-[calc(24px*var(--cs))] bg-transparent px-[calc(28px*var(--cs))]">
              <div className="ctrl-gap-16 flex min-w-0 items-baseline">
                <span className="ctrl-t-summary-team flex-none whitespace-nowrap uppercase text-white">
                  {name}
                </span>
                {howOut ? (
                  <span className="ctrl-t-last-wicket-howout whitespace-nowrap uppercase text-white/90">
                    {howOut}
                  </span>
                ) : null}
              </div>

              <div className="ctrl-gap-4 flex shrink-0 items-baseline leading-none tabular-nums text-white">
                <span className="ctrl-t-last-wicket-runs">{runs}</span>
                <span className="ctrl-t-last-wicket-balls">({balls})</span>
              </div>
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
