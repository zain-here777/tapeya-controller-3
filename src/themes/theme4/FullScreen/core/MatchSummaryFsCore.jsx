import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import FullScreenPageShell from "../components/FullScreenPageShell.jsx";
import { T4_LOGO_TILE, panelStyle } from "../utils/fullScreenUi.js";

function panelForTeam(team) {
  const tone = team?.theme === "bowler" ? "bowler" : "batsman";
  return panelStyle(team, tone);
}

function TeamInningsBlock({ team, teamIndex = 0 }) {
  const headStyle = panelForTeam(team);
  const batters = Array.isArray(team.batters) ? team.batters : [];
  const bowlers = Array.isArray(team.bowlers) ? team.bowlers : [];
  const oversLabel = team.overs != null ? `${team.overs} OVERS` : "";
  const rowCount = Math.max(batters.length, bowlers.length, 1);
  const baseDelay = teamIndex * 220;

  return (
    <section className="flex w-full flex-col gap-[calc(14px*var(--t4-scale))]">
      <div
        className="grid w-full grid-cols-[1.6fr_1fr_auto] items-center gap-[calc(16px*var(--t4-scale))] rounded-[calc(8px*var(--t4-scale))] border border-[var(--t4-divider)] px-[calc(22px*var(--t4-scale))] py-[calc(12px*var(--t4-scale))] motion-safe:animate-soft-in motion-reduce:animate-none"
        style={{ ...headStyle, animationDelay: `${baseDelay}ms` }}
      >
        <span className="text-[calc(26px*var(--t4-scale))] font-black uppercase text-[#f8fafc]">
          {team.name || team.code || ""}
        </span>
        {oversLabel ? (
          <span className="text-[calc(18px*var(--t4-scale))] font-semibold uppercase text-[#f8fafc]/85">
            {oversLabel}
          </span>
        ) : (
          <span />
        )}
        <span className="text-[calc(32px*var(--t4-scale))] font-black tabular-nums text-[#f8fafc]">
          {team.score ?? "0-0"}
        </span>
      </div>

      <div className="flex flex-col gap-[calc(6px*var(--t4-scale))]">
        {Array.from({ length: rowCount }, (_, index) => {
          const batter = batters[index];
          const bowler = bowlers[index];
          const mark = batter?.onStrike ? "*" : "";
          const rowDelay = baseDelay + 80 + index * 90;

          return (
            <div key={`row-${index}`} className="grid grid-cols-2 gap-[calc(12px*var(--t4-scale))]">
              <div
                className={`grid grid-cols-[1fr_auto_auto] items-center gap-[calc(10px*var(--t4-scale))] rounded-[calc(6px*var(--t4-scale))] border border-[var(--t4-divider)] px-[calc(14px*var(--t4-scale))] py-[calc(8px*var(--t4-scale))] ${batter ? "motion-safe:animate-soft-in motion-reduce:animate-none" : ""}`}
                style={
                  batter
                    ? { ...headStyle, animationDelay: `${rowDelay}ms` }
                    : { visibility: "hidden" }
                }
              >
                {batter ? (
                  <>
                    <span className="truncate text-[calc(18px*var(--t4-scale))] font-semibold uppercase text-[#f8fafc]">
                      {batter.name ?? ""}
                      {mark ? <span className="text-[#7dd3fc]">{mark}</span> : null}
                    </span>
                    <span className="text-[calc(22px*var(--t4-scale))] font-bold tabular-nums text-[#f8fafc]">
                      {batter.runs ?? 0}
                    </span>
                    <span className="text-[calc(18px*var(--t4-scale))] font-bold tabular-nums text-[#f8fafc]">
                      {batter.balls ?? 0}
                    </span>
                  </>
                ) : null}
              </div>

              <div
                className={`grid grid-cols-[1fr_auto_auto] items-center gap-[calc(10px*var(--t4-scale))] rounded-[calc(6px*var(--t4-scale))] border border-[var(--t4-divider)] px-[calc(14px*var(--t4-scale))] py-[calc(8px*var(--t4-scale))] ${bowler ? "motion-safe:animate-soft-in motion-reduce:animate-none" : ""}`}
                style={
                  bowler
                    ? { ...headStyle, animationDelay: `${rowDelay + 40}ms` }
                    : { visibility: "hidden" }
                }
              >
                {bowler ? (
                  <>
                    <span className="truncate text-[calc(18px*var(--t4-scale))] font-semibold uppercase text-[#f8fafc]">
                      {bowler.name ?? ""}
                    </span>
                    <span className="text-[calc(22px*var(--t4-scale))] font-bold tabular-nums text-[#f8fafc]">
                      {bowler.wickets ?? 0}-{bowler.runs ?? 0}
                    </span>
                    <span className="text-[calc(18px*var(--t4-scale))] font-bold tabular-nums text-[#f8fafc]">
                      {bowler.overs ?? "0.0"}
                    </span>
                  </>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function TeamLogoFrame({ team }) {
  const label = team.name || team.code || "";

  return (
    <div
      className={`${T4_LOGO_TILE} h-[calc(160px*var(--t4-scale))] w-[calc(160px*var(--t4-scale))] p-[calc(16px*var(--t4-scale))]`}
    >
      {team.logoUrl ? (
        <img src={team.logoUrl} alt={label} className="max-h-full max-w-full object-contain" />
      ) : (
        <span className="text-[calc(28px*var(--t4-scale))] font-bold uppercase text-[#0f2847]">
          {team.code || "?"}
        </span>
      )}
    </div>
  );
}

/** Match summary — dual innings blocks + logos + result. */
export default function MatchSummaryFsCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.teamA || !match?.teamB) return null;

  const config = mergeConfig(baseConfig, configOverride);
  const title = match.title ?? config.title ?? "MATCH SUMMARY";
  const tournament = match.tournament ?? "";
  const result = match.result ?? "";

  return (
    <FullScreenPageShell>
      <div className="mx-auto flex h-full w-full max-w-[calc(1480px*var(--t4-scale))] flex-col px-[calc(48px*var(--t4-scale))] py-[calc(36px*var(--t4-scale))]">
        <div className="flex min-h-0 flex-1 items-stretch gap-[calc(48px*var(--t4-scale))]">
          <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-[calc(18px*var(--t4-scale))]">
            <header className="flex shrink-0 flex-col gap-[calc(4px*var(--t4-scale))]">
              <h1 className="text-[calc(44px*var(--t4-scale))] font-black uppercase text-[#f8fafc]">
                {title}
              </h1>
              {tournament ? (
                <p className="text-[calc(20px*var(--t4-scale))] font-semibold uppercase text-[#7dd3fc]">
                  {tournament}
                </p>
              ) : null}
            </header>

            <div className="flex max-w-[calc(820px*var(--t4-scale))] flex-col gap-[calc(28px*var(--t4-scale))]">
              <TeamInningsBlock team={match.teamA} teamIndex={0} />
              <TeamInningsBlock team={match.teamB} teamIndex={1} />
            </div>

            {result ? (
              <div className="flex w-full max-w-[calc(820px*var(--t4-scale))] shrink-0 items-center justify-center rounded-[calc(10px*var(--t4-scale))] bg-[linear-gradient(165deg,#ffffff_0%,#ffffff_58%,#f4f8fd_82%,#e3eef9_100%)] px-[calc(24px*var(--t4-scale))] py-[calc(14px*var(--t4-scale))] shadow-[0_calc(8px*var(--t4-scale))_calc(24px*var(--t4-scale))_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.15)]">
                <span className="text-center text-[calc(26px*var(--t4-scale))] font-bold uppercase tracking-[calc(1px*var(--t4-scale))] text-[#0f2847]">
                  {result}
                </span>
              </div>
            ) : null}
          </div>

          <aside className="flex shrink-0 flex-col items-center justify-center gap-[calc(24px*var(--t4-scale))]" aria-label="Teams">
            <TeamLogoFrame team={match.teamA} />
            <span className="text-[calc(28px*var(--t4-scale))] font-black uppercase text-[#f8fafc]">VS</span>
            <TeamLogoFrame team={match.teamB} />
          </aside>
        </div>
      </div>
    </FullScreenPageShell>
  );
}
