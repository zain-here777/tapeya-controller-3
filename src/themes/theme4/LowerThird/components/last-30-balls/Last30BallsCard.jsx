import React from "react";

function PanelDivider() {
  return (
    <div
      className="h-[calc(68px*var(--t4-scale))] w-px shrink-0 self-center bg-white/25"
      aria-hidden="true"
    />
  );
}

const DEFAULT_STATS = [
  { label: "DOTS", value: 0 },
  { label: "FOURS", value: 0 },
  { label: "SIXES", value: 0 },
  { label: "WICKETS", value: 0 },
  { label: "RUNS", value: 0 },
];

function StatCell({ label, value, labelClassName, valueClassName }) {
  return (
    <div className="flex h-full min-w-0 flex-col items-center justify-center gap-[calc(6px*var(--t4-scale))] leading-none text-white">
      <span
        className={
          labelClassName ??
          "whitespace-nowrap text-[calc(14px*var(--t4-scale))] font-bold uppercase tracking-wide"
        }
      >
        {label}
      </span>
      <span
        key={`${label}-${value}`}
        className={
          valueClassName ??
          "animate-score-pop whitespace-nowrap text-[calc(28px*var(--t4-scale))] font-bold tabular-nums"
        }
      >
        {value}
      </span>
    </div>
  );
}

/**
 * Theme 4 Last 30 Balls card — stacked title + evenly spaced stat columns.
 *
 * @param {Object} props
 * @param {string} [props.titleLine1]
 * @param {string} [props.titleLine2]
 * @param {Array<{ label: string, value: string|number, key?: string }>} [props.stats]
 * @param {string} [props.statLabelClassName]
 * @param {string} [props.statValueClassName]
 */
export default function Last30BallsCard({
  titleLine1 = "LAST 30",
  titleLine2 = "BALLS",
  stats,
  statLabelClassName,
  statValueClassName,
}) {
  const cells = stats?.length ? stats : DEFAULT_STATS;

  return (
    <div className="flex min-w-0 flex-1 items-stretch overflow-hidden">
      <div className="flex shrink-0 flex-col items-center justify-center gap-[calc(4px*var(--t4-scale))] px-[calc(12px*var(--t4-scale))] text-center leading-none">
        <span className="whitespace-nowrap text-[calc(18px*var(--t4-scale))] font-bold uppercase tracking-wide text-white">
          {titleLine1}
        </span>
        <span className="whitespace-nowrap text-[calc(28px*var(--t4-scale))] font-bold uppercase leading-none text-white">
          {titleLine2}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 items-stretch">
        {cells.map((stat) => (
          <React.Fragment key={stat.key ?? stat.label}>
            <PanelDivider />
            <div className="flex min-w-0 flex-1 basis-0 items-center justify-center px-[calc(4px*var(--t4-scale))]">
              <StatCell
                label={stat.label}
                value={stat.value}
                labelClassName={statLabelClassName}
                valueClassName={statValueClassName}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
