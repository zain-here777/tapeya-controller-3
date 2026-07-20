import React from "react";

const PAD_L = 96;
const PAD_T = 24;
const PAD_B = 86;
const PAD_R = 28;

/**
 * Shared axis frame for worm / manhattan / run-rate charts.
 * Dynamic tick positions require style props.
 *
 * @param {boolean} [fluid] — fill parent width (capped at `width` design px)
 */
export default function ChartFrame({
  width,
  height,
  yTicks,
  yMax,
  xLabels = null,
  yLabel,
  xLabel,
  fluid = false,
  children,
}) {
  const plotW = width - PAD_L - PAD_R;
  const plotH = height - PAD_T - PAD_B;

  return (
    <div
      className="relative max-w-full"
      style={{
        width: fluid ? "100%" : `calc(${width}px * var(--cs))`,
        maxWidth: fluid ? `calc(${width}px * var(--cs))` : undefined,
        height: `calc(${height}px * var(--cs))`,
      }}
    >
      {yTicks.map((tick) => {
        const yPct = yMax ? 1 - tick / yMax : 0;
        const top = `calc((${PAD_T}px + ${plotH}px * ${yPct}) * var(--cs))`;

        return (
          <div key={tick}>
            <div
              className="absolute h-px bg-white/25"
              style={{
                left: `calc(${PAD_L}px * var(--cs))`,
                right: `calc(${PAD_R}px * var(--cs))`,
                top,
              }}
            />
            <span
              className="ctrl-t-chart-tick absolute text-right text-white/70"
              style={{
                left: 0,
                top: `calc((${PAD_T}px + ${plotH}px * ${yPct} - 18px) * var(--cs))`,
                width: `calc(${PAD_L - 18}px * var(--cs))`,
              }}
            >
              {tick}
            </span>
          </div>
        );
      })}

      <div
        className="absolute overflow-visible"
        style={{
          left: `calc(${PAD_L}px * var(--cs))`,
          right: `calc(${PAD_R}px * var(--cs))`,
          top: `calc(${PAD_T}px * var(--cs))`,
          height: `calc(${plotH}px * var(--cs))`,
        }}
      >
        {typeof children === "function"
          ? children({ plotW, plotH })
          : children}
      </div>

      {xLabels ? (
        <div
          className="absolute flex"
          style={{
            left: `calc(${PAD_L}px * var(--cs))`,
            right: `calc(${PAD_R}px * var(--cs))`,
            top: `calc((${PAD_T + plotH + 10}px) * var(--cs))`,
          }}
        >
          {xLabels.map((label, index) => (
            <span
              key={`${label}-${index}`}
              className="ctrl-t-chart-xlabel flex min-w-0 flex-1 justify-center text-center text-white"
            >
              {label}
            </span>
          ))}
        </div>
      ) : null}

      {yLabel ? (
        <span
          className="ctrl-t-chart-axis-label absolute origin-left -rotate-90 uppercase text-white/50"
          style={{
            left: `calc(-8px * var(--cs))`,
            top: `calc((${PAD_T + plotH / 2}px) * var(--cs))`,
          }}
        >
          {yLabel}
        </span>
      ) : null}

      {xLabel ? (
        <span
          className="ctrl-t-chart-axis-label absolute text-center uppercase text-white/50"
          style={{
            left: `calc(${PAD_L}px * var(--cs))`,
            right: `calc(${PAD_R}px * var(--cs))`,
            top: xLabels
              ? `calc((${PAD_T + plotH + 46}px) * var(--cs))`
              : `calc((${height - 28}px) * var(--cs))`,
          }}
        >
          {xLabel}
        </span>
      ) : null}
    </div>
  );
}

export const CHART_PAD = { L: PAD_L, T: PAD_T, B: PAD_B, R: PAD_R };
