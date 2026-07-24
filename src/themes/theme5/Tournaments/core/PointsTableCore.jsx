import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import BreakBackground from "../../Breaks/components/BreakBackground.jsx";
import { t4Motion } from "../../utils/motion.js";

const DEFAULT_COLUMNS = ["PLD", "WON", "LOST", "NR", "PTS", "NRR"];

/**
 * Theme 5 Points Table — Tailwind layout + motion.css row cascades.
 */
export default function PointsTableCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match) return null;

  const config = mergeConfig(baseConfig, configOverride);
  const title = match.title ?? config.title ?? "POINTS TABLE";
  const tournament = match.tournament ?? "";
  const columns = match.columns?.length ? match.columns : DEFAULT_COLUMNS;
  const teams = Array.isArray(match.teams) ? match.teams : [];
  const footer = match.footer ?? "";

  return (
    <div className="absolute inset-0 overflow-hidden bg-[var(--t5-surface)] select-none font-montserrat">
      <BreakBackground />

      <div className="relative z-[1] mx-auto flex h-full w-full max-w-[calc(1480px*var(--t5-scale))] flex-col justify-center gap-[calc(28px*var(--t5-scale))] px-[calc(48px*var(--t5-scale))] py-[calc(40px*var(--t5-scale))]">
        <header className={`t5-tlb-header-anim flex shrink-0 flex-col gap-[calc(4px*var(--t5-scale))]`}>
          {title ? (
            <h1 className="m-0 text-[calc(36px*var(--t5-scale))] font-extrabold uppercase leading-[1.05] tracking-[calc(1.5px*var(--t5-scale))] text-[#f8fafc]">
              {title}
            </h1>
          ) : null}
          {tournament ? (
            <p className="m-0 text-[calc(18px*var(--t5-scale))] font-semibold uppercase leading-[1.15] tracking-[calc(1.5px*var(--t5-scale))] text-[#f8fafc]/80">
              {tournament}
            </p>
          ) : null}
        </header>

        <div className="flex w-full flex-col gap-[calc(10px*var(--t5-scale))]">
          <div
            className={`${t4Motion("fadeIn")} flex w-full items-center gap-[calc(20px*var(--t5-scale))] pl-[calc(10px*var(--t5-scale))] pr-[calc(24px*var(--t5-scale))]`}
            aria-hidden="true"
          >
            <div className="h-[calc(48px*var(--t5-scale))] w-[calc(48px*var(--t5-scale))] shrink-0 invisible" />
            <div className="min-w-0 flex-1" />
            <div className="grid w-[min(52%,calc(560px*var(--t5-scale)))] shrink-0 grid-cols-6 items-center gap-[calc(8px*var(--t5-scale))]">
              {columns.map((col) => (
                <span
                  key={col}
                  className="text-center text-[calc(16px*var(--t5-scale))] font-bold uppercase leading-none tracking-[calc(1px*var(--t5-scale))] text-white"
                >
                  {col}
                </span>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-[calc(12px*var(--t5-scale))]">
            {teams.map((team, rowIndex) => {
              const values = [
                team.pld ?? "0",
                team.won ?? "0",
                team.lost ?? "0",
                team.nr ?? "0",
                team.pts ?? "0",
                team.nrr ?? "—",
              ];

              return (
                <div
                  key={`${team.rank}-${team.name}`}
                  className="t5-pt-row-anim flex w-full min-h-[calc(68px*var(--t5-scale))] items-center gap-[calc(20px*var(--t5-scale))] rounded-[calc(6px*var(--t5-scale))] bg-[var(--t5-panel-primary)] pl-[calc(10px*var(--t5-scale))] pr-[calc(24px*var(--t5-scale))] shadow-[0_calc(4px*var(--t5-scale))_calc(16px*var(--t5-scale))_rgba(0,0,0,0.2)]"
                  style={{ "--t5-tlb-stagger": rowIndex }}
                >
                  <div
                    className={`flex h-[calc(48px*var(--t5-scale))] w-[calc(48px*var(--t5-scale))] shrink-0 items-center justify-center rounded-[calc(4px*var(--t5-scale))] ${
                      team.rank === 1
                        ? "bg-gradient-to-b from-[#38bdf8] via-[#0284c7] to-[#0369a1] shadow-[0_0_calc(16px*var(--t5-scale))_rgba(14,165,233,0.45)]"
                        : "bg-gradient-to-br from-[#0ea5e9] to-[#0369a1]"
                    }`}
                  >
                    <span className="text-[calc(22px*var(--t5-scale))] font-bold tabular-nums text-white">
                      {team.rank}
                    </span>
                  </div>
                  <span className="min-w-0 flex-1 truncate text-[calc(24px*var(--t5-scale))] font-bold uppercase leading-[1.1] tracking-[calc(1px*var(--t5-scale))] text-[#f8fafc]">
                    {team.name}
                  </span>
                  <div className="grid w-[min(52%,calc(560px*var(--t5-scale)))] shrink-0 grid-cols-6 items-center gap-[calc(8px*var(--t5-scale))]">
                    {values.map((value, index) => (
                      <span
                        key={`${team.name}-${columns[index] ?? index}`}
                        className="text-center text-[calc(22px*var(--t5-scale))] font-bold tabular-nums text-[#f8fafc]"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {footer ? (
          <div className="t5-pt-footer-anim flex w-full min-h-[calc(64px*var(--t5-scale))] items-center justify-center rounded-[calc(6px*var(--t5-scale))] bg-gradient-to-br from-[#0ea5e9] to-[#0369a1] px-[calc(24px*var(--t5-scale))] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
            <span className="text-center text-[calc(22px*var(--t5-scale))] font-bold uppercase tracking-[calc(1px*var(--t5-scale))] text-white">
              {footer}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
