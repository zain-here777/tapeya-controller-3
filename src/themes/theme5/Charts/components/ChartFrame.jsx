import React from "react";

const PAD_L = 96;
const PAD_T = 24;
const PAD_B = 86;
const PAD_R = 28;

/**
 * Shared axis frame for worm / manhattan / run-rate charts.
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
  const scale = "var(--t5-scale)";

  return (
    <div
      className="t5-chart-frame relative max-w-full"
      style={{
        width: fluid ? "100%" : `calc(${width}px * ${scale})`,
        maxWidth: fluid ? `calc(${width}px * ${scale})` : undefined,
        height: `calc(${height}px * ${scale})`,
      }}
    >
      {yTicks.map((tick) => {
        const yPct = yMax ? 1 - tick / yMax : 0;
        const top = `calc((${PAD_T}px + ${plotH}px * ${yPct}) * ${scale})`;

        return (
          <div key={tick}>
            <div
              className="t5-chart-grid-line absolute h-px"
              style={{
                left: `calc(${PAD_L}px * ${scale})`,
                right: `calc(${PAD_R}px * ${scale})`,
                top,
              }}
            />
            <span
              className="t5-chart-tick absolute text-right"
              style={{
                left: 0,
                top: `calc((${PAD_T}px + ${plotH}px * ${yPct} - 18px) * ${scale})`,
                width: `calc(${PAD_L - 18}px * ${scale})`,
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
          left: `calc(${PAD_L}px * ${scale})`,
          right: `calc(${PAD_R}px * ${scale})`,
          top: `calc(${PAD_T}px * ${scale})`,
          height: `calc(${plotH}px * ${scale})`,
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
            left: `calc(${PAD_L}px * ${scale})`,
            right: `calc(${PAD_R}px * ${scale})`,
            top: `calc((${PAD_T + plotH + 10}px) * ${scale})`,
          }}
        >
          {xLabels.map((label, index) => (
            <span
              key={`${label}-${index}`}
              className="t5-chart-xlabel flex min-w-0 flex-1 justify-center text-center"
            >
              {label}
            </span>
          ))}
        </div>
      ) : null}

      {yLabel ? (
        <span
          className="t5-chart-axis-label absolute origin-left -rotate-90 uppercase"
          style={{
            left: `calc(-8px * ${scale})`,
            top: `calc((${PAD_T + plotH / 2}px) * ${scale})`,
          }}
        >
          {yLabel}
        </span>
      ) : null}

      {xLabel ? (
        <span
          className="t5-chart-axis-label absolute text-center uppercase"
          style={{
            left: `calc(${PAD_L}px * ${scale})`,
            right: `calc(${PAD_R}px * ${scale})`,
            top: xLabels
              ? `calc((${PAD_T + plotH + 46}px) * ${scale})`
              : `calc((${height - 28}px) * ${scale})`,
          }}
        >
          {xLabel}
        </span>
      ) : null}
    </div>
  );
}

export const CHART_PAD = { L: PAD_L, T: PAD_T, B: PAD_B, R: PAD_R };
