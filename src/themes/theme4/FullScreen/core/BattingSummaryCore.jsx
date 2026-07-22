import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import FullScreenPageShell from "../components/FullScreenPageShell.jsx";
import {
  T4_LOGO_TILE,
  panelStyle,
  resolveFullScreenTeamColor,
} from "../utils/fullScreenUi.js";
import { t4Motion, t4StaggerStyle } from "../../utils/motion.js";

/**
 * BattingSummary — full-screen batting card with logo and footer totals.
 * Layout / data flow mirrors Theme 3; visuals use Theme 4 design tokens.
 *
 * Hierarchy: page → inner → main → [left (header + list + footer) | crest]
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function BattingSummaryCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  const batters = Array.isArray(match?.batters) ? match.batters : [];
  if (!batters.length) return null;

  mergeConfig(baseConfig, configOverride);

  const team = match.team ?? {};
  const tournament = match.tournament ?? "";
  const teamLabel = team.name || team.code || "";
  const summary = match.summary ?? {};
  const fill = panelStyle(team, "batsman");
  const teamAccent = resolveFullScreenTeamColor(team, "batsman");

  return (
    <FullScreenPageShell>
      {/* bs-fs-inner */}
      <div className="relative z-[1] mx-auto flex h-full w-full max-w-[calc(1480px*var(--t4-scale))] flex-col justify-center gap-[calc(20px*var(--t4-scale))] px-[calc(48px*var(--t4-scale))] py-[calc(36px*var(--t4-scale))]">
        {/* bs-fs-main */}
        <div className="flex items-center gap-[calc(48px*var(--t4-scale))]">
          {/* bs-fs-left */}
          <div className="flex min-w-0 max-w-[calc(780px*var(--t4-scale))] flex-1 flex-col gap-[calc(16px*var(--t4-scale))]">
            {/* bs-fs-header */}
            <header
              className={`${t4Motion("fadeUp")} mb-[calc(28px*var(--t4-scale))] flex shrink-0 items-center gap-[calc(14px*var(--t4-scale))]`}
              style={t4StaggerStyle(0)}
            >
              <div
                className={`${T4_LOGO_TILE} h-[calc(52px*var(--t4-scale))] w-[calc(52px*var(--t4-scale))] p-[calc(6px*var(--t4-scale))]`}
              >
                {team.logoUrl ? (
                  <img
                    src={team.logoUrl}
                    alt={teamLabel}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span
                    className="text-[calc(14px*var(--t4-scale))] font-bold uppercase"
                    style={{ color: teamAccent }}
                  >
                    {team.code || "?"}
                  </span>
                )}
              </div>

              <div className="flex min-w-0 flex-col gap-[calc(1px*var(--t4-scale))]">
                {teamLabel ? (
                  <h1 className="text-[calc(36px*var(--t4-scale))] font-black uppercase leading-[1.05] tracking-[calc(1.2px*var(--t4-scale))] text-[#f8fafc]">
                    {teamLabel}
                  </h1>
                ) : null}
                {tournament ? (
                  <p className="text-[calc(18px*var(--t4-scale))] font-semibold uppercase leading-[1.15] tracking-[calc(1px*var(--t4-scale))] text-[#7dd3fc]">
                    {tournament}
                  </p>
                ) : null}
              </div>
            </header>

            {/* bs-fs-list */}
            <div className="flex w-full flex-col gap-[calc(8px*var(--t4-scale))]">
              {batters.map((batter, index) => {
                const name = batter.name ?? "";
                const howOut = batter.howOut ?? "";
                const runs = batter.runs ?? 0;
                const balls = batter.balls ?? 0;
                const strikeMark = batter.onStrike ? "*" : "";

                return (
                  <div
                    key={`${name}-${index}`}
                    className="grid w-full shrink-0 grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_auto] items-center gap-[calc(12px*var(--t4-scale))] rounded-[calc(8px*var(--t4-scale))] border border-white/15 px-[calc(18px*var(--t4-scale))] py-[calc(8px*var(--t4-scale))] motion-safe:animate-soft-in motion-reduce:animate-none"
                    style={{
                      ...fill,
                      minHeight: "calc(48px * var(--t4-scale))",
                      animationDelay: `${index * 60}ms`,
                    }}
                  >
                    <span className="truncate text-[calc(22px*var(--t4-scale))] font-bold uppercase leading-[1.1] tracking-[calc(0.8px*var(--t4-scale))] text-[#f8fafc]">
                      {name}
                      {strikeMark}
                    </span>
                    <span className="text-center text-[calc(16px*var(--t4-scale))] font-medium uppercase leading-[1.1] tracking-[calc(0.8px*var(--t4-scale))] text-[#f8fafc]">
                      {howOut}
                    </span>
                    <span className="flex min-w-[calc(72px*var(--t4-scale))] items-start justify-end gap-[calc(2px*var(--t4-scale))]">
                      <span className="text-[calc(26px*var(--t4-scale))] font-black tabular-nums leading-none tracking-[calc(-0.5px*var(--t4-scale))] text-[#f8fafc]">
                        {runs}
                      </span>
                      <span className="text-[calc(13px*var(--t4-scale))] font-semibold tabular-nums leading-none text-[#f8fafc]">
                        {balls}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>

            {/* bs-fs-footer */}
            <div
              className="flex w-full shrink-0 items-center justify-between rounded-[calc(10px*var(--t4-scale))] border border-white/15 px-[calc(24px*var(--t4-scale))] py-[calc(12px*var(--t4-scale))]"
              style={{ ...fill, minHeight: "calc(72px * var(--t4-scale))" }}
            >
              <div className="flex items-center gap-[calc(18px*var(--t4-scale))]">
                <div className="flex items-baseline gap-[calc(10px*var(--t4-scale))]">
                  <span className="text-[calc(18px*var(--t4-scale))] font-medium uppercase tracking-[calc(1px*var(--t4-scale))] text-[#f8fafc]">
                    EXTRAS
                  </span>
                  <span className="text-[calc(22px*var(--t4-scale))] font-black tabular-nums leading-none text-[#f8fafc]">
                    {summary.extras ?? 0}
                  </span>
                </div>

                <span
                  className="w-px shrink-0 self-center bg-white/25"
                  style={{ height: "calc(28px * var(--t4-scale))" }}
                  aria-hidden="true"
                />

                <div className="flex items-baseline gap-[calc(10px*var(--t4-scale))]">
                  <span className="text-[calc(18px*var(--t4-scale))] font-medium uppercase tracking-[calc(1px*var(--t4-scale))] text-[#f8fafc]">
                    OVERS
                  </span>
                  <span className="text-[calc(22px*var(--t4-scale))] font-black tabular-nums leading-none text-[#f8fafc]">
                    {summary.overs ?? "0.0"}
                  </span>
                </div>
              </div>

              <span className="text-[calc(36px*var(--t4-scale))] font-black tabular-nums tracking-[calc(1px*var(--t4-scale))] text-[#f8fafc]">
                {summary.score ?? "0-0"}
              </span>
            </div>
          </div>

          {/* bs-fs-crest — white tile like other Theme 4 logos */}
          <div
            className={`${T4_LOGO_TILE} ${t4Motion("slideRight")} hidden h-[calc(340px*var(--t4-scale))] w-[calc(340px*var(--t4-scale))] shrink-0 self-center rounded-[calc(20px*var(--t4-scale))] p-[calc(28px*var(--t4-scale))] lg:flex`}
            style={t4StaggerStyle(2, 160)}
          >
            {team.logoUrl ? (
              <img
                src={team.logoUrl}
                alt={teamLabel}
                className="h-full w-full object-contain"
              />
            ) : (
              <span className="text-[calc(48px*var(--t4-scale))] font-black uppercase text-[#0f2847]/40">
                {team.code || "?"}
              </span>
            )}
          </div>
        </div>
      </div>
    </FullScreenPageShell>
  );
}
