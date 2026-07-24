import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import FullScreenPageShell from "../components/FullScreenPageShell.jsx";
import {
  T4_LOGO_TILE,
  panelStyle,
  resolveFullScreenTeamColor,
} from "../utils/fullScreenUi.js";
import { t4Motion, t4StaggerStyle } from "../../utils/motion.js";

const BOWLING_COLUMNS = [
  { key: "overs", label: "OVERS" },
  { key: "dots", label: "DOTS" },
  { key: "runs", label: "RUNS" },
  { key: "wickets", label: "WICKETS" },
  { key: "eco", label: "ECO" },
];

const ROW_GRID =
  "grid w-full grid-cols-[minmax(calc(140px*var(--t5-scale)),1.4fr)_repeat(5,minmax(0,1fr))] items-center gap-[calc(6px*var(--t5-scale))]";

/**
 * BowlingSummary — same shell as BattingSummary, bowling table + FOW.
 * Layout / data flow mirrors Theme 3; visuals use Theme 5 design tokens.
 *
 * Hierarchy: page → inner → main → [left (header + table + FOW + footer) | crest]
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function BowlingSummaryCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  const bowlers = Array.isArray(match?.bowlers) ? match.bowlers : [];
  if (!bowlers.length) return null;

  mergeConfig(baseConfig, configOverride);

  const team = match.team ?? {};
  const tournament = match.tournament ?? "";
  const teamLabel = team.name || team.code || "";
  const summary = match.summary ?? {};
  const fallOfWickets = match.fallOfWickets ?? "";
  const fill = panelStyle(team, "bowler");
  const teamAccent = resolveFullScreenTeamColor(team, "bowler");

  return (
    <FullScreenPageShell>
      {/* bs-fs-inner */}
      <div className="relative z-[1] mx-auto flex h-full w-full max-w-[calc(1480px*var(--t5-scale))] flex-col justify-center gap-[calc(20px*var(--t5-scale))] px-[calc(48px*var(--t5-scale))] py-[calc(36px*var(--t5-scale))]">
        {/* bs-fs-main */}
        <div className="flex items-center gap-[calc(48px*var(--t5-scale))]">
          {/* bs-fs-left */}
          <div className="flex min-w-0 max-w-[calc(780px*var(--t5-scale))] flex-1 flex-col gap-[calc(16px*var(--t5-scale))]">
            {/* bs-fs-header */}
            <header
              className={`${t4Motion("fadeUp")} mb-[calc(28px*var(--t5-scale))] flex shrink-0 items-center gap-[calc(14px*var(--t5-scale))]`}
              style={t4StaggerStyle(0)}
            >
              <div
                className={`${T4_LOGO_TILE} h-[calc(52px*var(--t5-scale))] w-[calc(52px*var(--t5-scale))] p-[calc(6px*var(--t5-scale))]`}
              >
                {team.logoUrl ? (
                  <img
                    src={team.logoUrl}
                    alt={teamLabel}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span
                    className="text-[calc(14px*var(--t5-scale))] font-bold uppercase"
                    style={{ color: teamAccent }}
                  >
                    {team.code || "?"}
                  </span>
                )}
              </div>

              <div className="flex min-w-0 flex-col gap-[calc(1px*var(--t5-scale))]">
                {teamLabel ? (
                  <h1 className="text-[calc(36px*var(--t5-scale))] font-black uppercase leading-[1.05] tracking-[calc(1.2px*var(--t5-scale))] text-[#f8fafc]">
                    {teamLabel}
                  </h1>
                ) : null}
                {tournament ? (
                  <p className="text-[calc(18px*var(--t5-scale))] font-semibold uppercase leading-[1.15] tracking-[calc(1px*var(--t5-scale))] text-[#7dd3fc]">
                    {tournament}
                  </p>
                ) : null}
              </div>
            </header>

            {/* bowl-fs-table */}
            <div className="flex w-full flex-col gap-[calc(8px*var(--t5-scale))]">
              <div className={`${ROW_GRID} shrink-0 px-[calc(18px*var(--t5-scale))]`}>
                <span className="block" aria-hidden="true" />
                {BOWLING_COLUMNS.map((col) => (
                  <span
                    key={col.key}
                    className="text-center text-[calc(16px*var(--t5-scale))] font-semibold uppercase leading-[1.1] tracking-[calc(0.6px*var(--t5-scale))] text-[#f8fafc]"
                  >
                    {col.label}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-[calc(8px*var(--t5-scale))]">
                {bowlers.map((bowler, index) => {
                  const name = bowler.name ?? "";

                  return (
                    <div
                      key={`${name}-${index}`}
                      className={`${ROW_GRID} shrink-0 rounded-[calc(8px*var(--t5-scale))] border border-white/15 px-[calc(18px*var(--t5-scale))] motion-safe:animate-soft-in motion-reduce:animate-none`}
                      style={{
                        ...fill,
                        minHeight: "calc(52px * var(--t5-scale))",
                        animationDelay: `${index * 60}ms`,
                      }}
                    >
                      <span className="truncate text-left text-[calc(22px*var(--t5-scale))] font-bold uppercase leading-[1.1] tracking-[calc(0.8px*var(--t5-scale))] text-[#f8fafc]">
                        {name}
                      </span>
                      <span className="text-center text-[calc(24px*var(--t5-scale))] font-bold tabular-nums leading-[1.1] text-[#f8fafc]">
                        {bowler.overs ?? "0.0"}
                      </span>
                      <span className="text-center text-[calc(24px*var(--t5-scale))] font-bold tabular-nums leading-[1.1] text-[#f8fafc]">
                        {bowler.dots ?? 0}
                      </span>
                      <span className="text-center text-[calc(24px*var(--t5-scale))] font-bold tabular-nums leading-[1.1] text-[#f8fafc]">
                        {bowler.runs ?? 0}
                      </span>
                      <span className="text-center text-[calc(24px*var(--t5-scale))] font-bold tabular-nums leading-[1.1] text-[#f8fafc]">
                        {bowler.wickets ?? 0}
                      </span>
                      <span className="text-center text-[calc(24px*var(--t5-scale))] font-bold tabular-nums leading-[1.1] text-[#f8fafc]">
                        {bowler.eco ?? "0.0"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* bowl-fs-fow */}
            {fallOfWickets ? (
              <div
                className="flex w-full shrink-0 items-center rounded-[calc(8px*var(--t5-scale))] bg-[linear-gradient(165deg,#ffffff_0%,#ffffff_58%,#f4f8fd_82%,#e3eef9_100%)] px-[calc(22px*var(--t5-scale))] py-[calc(12px*var(--t5-scale))] shadow-[0_calc(8px*var(--t5-scale))_calc(24px*var(--t5-scale))_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.15)]"
                style={{ minHeight: "calc(52px * var(--t5-scale))" }}
              >
                <span className="text-[calc(24px*var(--t5-scale))] font-bold uppercase leading-[1.1] tracking-[calc(1px*var(--t5-scale))] text-[#0f2847]">
                  FALL OF WICKETS : {fallOfWickets}
                </span>
              </div>
            ) : null}

            {/* bs-fs-footer */}
            <div
              className="flex w-full shrink-0 items-center justify-between rounded-[calc(10px*var(--t5-scale))] border border-white/15 px-[calc(24px*var(--t5-scale))] py-[calc(12px*var(--t5-scale))]"
              style={{ ...fill, minHeight: "calc(72px * var(--t5-scale))" }}
            >
              <div className="flex items-center gap-[calc(18px*var(--t5-scale))]">
                <div className="flex items-baseline gap-[calc(10px*var(--t5-scale))]">
                  <span className="text-[calc(18px*var(--t5-scale))] font-medium uppercase tracking-[calc(1px*var(--t5-scale))] text-[#f8fafc]">
                    EXTRAS
                  </span>
                  <span className="text-[calc(22px*var(--t5-scale))] font-black tabular-nums leading-none text-[#f8fafc]">
                    {summary.extras ?? 0}
                  </span>
                </div>

                <span
                  className="w-px shrink-0 self-center bg-white/25"
                  style={{ height: "calc(28px * var(--t5-scale))" }}
                  aria-hidden="true"
                />

                <div className="flex items-baseline gap-[calc(10px*var(--t5-scale))]">
                  <span className="text-[calc(18px*var(--t5-scale))] font-medium uppercase tracking-[calc(1px*var(--t5-scale))] text-[#f8fafc]">
                    OVERS
                  </span>
                  <span className="text-[calc(22px*var(--t5-scale))] font-black tabular-nums leading-none text-[#f8fafc]">
                    {summary.overs ?? "0.0"}
                  </span>
                </div>
              </div>

              <span className="text-[calc(36px*var(--t5-scale))] font-black tabular-nums tracking-[calc(1px*var(--t5-scale))] text-[#f8fafc]">
                {summary.score ?? "0-0"}
              </span>
            </div>
          </div>

          {/* bs-fs-crest */}
          <div
            className={`${T4_LOGO_TILE} ${t4Motion("slideRight")} hidden h-[calc(340px*var(--t5-scale))] w-[calc(340px*var(--t5-scale))] shrink-0 self-center rounded-[calc(20px*var(--t5-scale))] p-[calc(28px*var(--t5-scale))] lg:flex`}
            style={t4StaggerStyle(2, 160)}
          >
            {team.logoUrl ? (
              <img
                src={team.logoUrl}
                alt={teamLabel}
                className="h-full w-full object-contain"
              />
            ) : (
              <span className="text-[calc(48px*var(--t5-scale))] font-black uppercase text-[#0f2847]/40">
                {team.code || "?"}
              </span>
            )}
          </div>
        </div>
      </div>
    </FullScreenPageShell>
  );
}
