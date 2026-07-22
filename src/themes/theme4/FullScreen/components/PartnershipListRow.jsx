import React from "react";

/**
 * One partnership row — left batter | contribution bar | right batter.
 * Layout and colors via Tailwind v3 (sky / white segments for navy contrast).
 *
 * @param {Object} props
 * @param {Object} props.partnership
 */
export default function PartnershipListRow({ partnership }) {
  if (!partnership) return null;

  const left = partnership.left ?? {};
  const right = partnership.right ?? {};
  const leftRuns = Number(left.runs) || 0;
  const rightRuns = Number(right.runs) || 0;
  const totalRuns = leftRuns + rightRuns;
  const partnershipBalls = partnership.balls ?? 0;

  const leftPct = totalRuns > 0 ? (leftRuns / totalRuns) * 100 : 50;
  let rightPct = 100 - leftPct;
  let displayLeftPct = leftPct;

  const MIN_TIP = 6;
  if (totalRuns > 0 && rightPct === 0) {
    displayLeftPct = 100 - MIN_TIP;
    rightPct = MIN_TIP;
  } else if (totalRuns > 0 && leftPct === 0) {
    rightPct = 100 - MIN_TIP;
    displayLeftPct = MIN_TIP;
  }

  return (
    <div className="grid w-full grid-cols-[minmax(calc(160px*var(--t4-scale)),1fr)_calc(110px*var(--t4-scale))_minmax(calc(280px*var(--t4-scale)),1.4fr)_calc(110px*var(--t4-scale))_minmax(calc(160px*var(--t4-scale)),1fr)] items-center gap-[calc(16px*var(--t4-scale))] max-[1200px]:grid-cols-1 max-[1200px]:gap-[calc(8px*var(--t4-scale))]">
      <div className="flex min-w-0 items-center justify-start gap-[calc(12px*var(--t4-scale))]">
        <span
          className="h-[calc(18px*var(--t4-scale))] w-[calc(18px*var(--t4-scale))] shrink-0 rounded-[calc(3px*var(--t4-scale))] bg-sky-500"
          aria-hidden="true"
        />
        <span className="truncate text-[calc(26px*var(--t4-scale))] font-bold uppercase leading-[1.1] tracking-[calc(1px*var(--t4-scale))] text-[#f8fafc]">
          {left.name ?? ""}
        </span>
      </div>

      <div className="flex shrink-0 items-center justify-end gap-[calc(4px*var(--t4-scale))] whitespace-nowrap">
        <span className="text-[calc(28px*var(--t4-scale))] font-black tabular-nums leading-none text-[#f8fafc]">
          {leftRuns}
        </span>
        <span className="text-[calc(22px*var(--t4-scale))] font-semibold tabular-nums leading-none text-[#f8fafc]">
          ({left.balls ?? 0})
        </span>
      </div>

      <div className="flex w-full items-center">
        <div className="relative flex h-[calc(42px*var(--t4-scale))] w-full items-stretch overflow-hidden rounded-[calc(10px*var(--t4-scale))] bg-sky-500">
          <div
            className="relative flex min-w-0 items-center justify-start bg-sky-500 px-[calc(12px*var(--t4-scale))]"
            style={{ width: `${displayLeftPct}%` }}
          >
            <span className="text-[calc(18px*var(--t4-scale))] font-bold tabular-nums leading-none text-white">
              {leftRuns}
            </span>
          </div>
          <div
            className="relative flex min-w-0 items-center justify-end bg-white px-[calc(12px*var(--t4-scale))]"
            style={{ width: `${rightPct}%` }}
          >
            <span className="text-[calc(18px*var(--t4-scale))] font-bold tabular-nums leading-none text-[#0b1220]">
              {rightRuns}
            </span>
          </div>
          <span
            className="absolute top-1/2 z-[1] flex min-w-[calc(48px*var(--t4-scale))] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-[calc(3px*var(--t4-scale))] rounded-[calc(6px*var(--t4-scale))] bg-[#050810] px-[calc(8px*var(--t4-scale))] py-[calc(4px*var(--t4-scale))]"
            style={{ left: `${displayLeftPct}%` }}
          >
            <span className="text-[calc(16px*var(--t4-scale))] font-black tabular-nums leading-none text-white">
              {totalRuns}
            </span>
            <span className="relative top-[0.15em] self-start text-[calc(11px*var(--t4-scale))] font-semibold tabular-nums leading-none text-white">
              {partnershipBalls}
            </span>
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-start gap-[calc(4px*var(--t4-scale))] whitespace-nowrap">
        <span className="text-[calc(28px*var(--t4-scale))] font-black tabular-nums leading-none text-[#f8fafc]">
          {rightRuns}
        </span>
        <span className="text-[calc(22px*var(--t4-scale))] font-semibold tabular-nums leading-none text-[#f8fafc]">
          ({right.balls ?? 0})
        </span>
      </div>

      <div className="flex min-w-0 items-center justify-end gap-[calc(12px*var(--t4-scale))]">
        <span className="truncate text-right text-[calc(26px*var(--t4-scale))] font-bold uppercase leading-[1.1] tracking-[calc(1px*var(--t4-scale))] text-[#f8fafc]">
          {right.name ?? ""}
        </span>
        <span
          className="h-[calc(18px*var(--t4-scale))] w-[calc(18px*var(--t4-scale))] shrink-0 rounded-[calc(3px*var(--t4-scale))] bg-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
