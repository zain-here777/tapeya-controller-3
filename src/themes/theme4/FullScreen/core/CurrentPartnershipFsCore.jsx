import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import FullScreenPageShell from "../components/FullScreenPageShell.jsx";
import { panelStyle } from "../utils/fullScreenUi.js";

function splitName(batter) {
  if (!batter) return { firstName: "", lastName: "", fullName: "" };
  const firstName = batter.firstName ?? "";
  const lastName =
    batter.lastName ||
    String(batter.name || "")
      .trim()
      .split(/\s+/)
      .slice(-1)[0] ||
    "";
  const fullName = `${firstName} ${lastName}`.trim() || lastName;
  return { firstName, lastName, fullName };
}

function Portrait({ batter, side, index }) {
  if (!batter) {
    return <div className={`flex items-end justify-center px-[calc(18px*var(--t4-scale))] ${side === "left" ? "" : ""}`} />;
  }
  const { fullName, lastName } = splitName(batter);
  const photoUrl = batter.photoUrl ?? "";

  return (
    <div
      className="flex items-end justify-center px-[calc(18px*var(--t4-scale))] motion-safe:animate-soft-in motion-reduce:animate-none"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="relative flex h-full min-h-[calc(360px*var(--t4-scale))] w-full items-end justify-center overflow-hidden rounded-[calc(6px*var(--t4-scale))] border border-[var(--t4-divider)] bg-[#0b1220]">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={fullName}
            className="relative z-[1] h-[96%] w-auto max-w-full object-contain object-bottom drop-shadow-[0_calc(8px*var(--t4-scale))_calc(18px*var(--t4-scale))_rgba(0,0,0,0.45)]"
          />
        ) : (
          <span className="text-[calc(72px*var(--t4-scale))] font-bold uppercase text-white/40">
            {(lastName || "?").slice(0, 1)}
          </span>
        )}
      </div>
    </div>
  );
}

function Nameplate({ batter, side = "left" }) {
  if (!batter) return <div className="min-w-0 flex-1" />;
  const { firstName, lastName } = splitName(batter);
  const align = side === "right" ? "items-end text-right" : "items-start text-left";

  return (
    <div className={`flex min-w-0 flex-col justify-center gap-[calc(2px*var(--t4-scale))] ${align}`}>
      {firstName ? (
        <span className="text-[calc(22px*var(--t4-scale))] font-semibold uppercase text-[#f8fafc]">
          {firstName}
        </span>
      ) : null}
      <span className="inline-flex items-start gap-[calc(2px*var(--t4-scale))]">
        <span className="text-[calc(40px*var(--t4-scale))] font-black uppercase leading-none text-[#f8fafc]">
          {lastName}
        </span>
        {batter.onStrike ? (
          <span className="text-[calc(28px*var(--t4-scale))] font-bold leading-none text-[#7dd3fc]">*</span>
        ) : null}
      </span>
    </div>
  );
}

function ScoreBlock({ batter }) {
  return (
    <div className="flex shrink-0 items-baseline gap-[calc(10px*var(--t4-scale))]">
      <span className="text-[calc(56px*var(--t4-scale))] font-black tabular-nums leading-none text-[#f8fafc]">
        {batter?.runs ?? 0}
      </span>
      <span className="text-[calc(26px*var(--t4-scale))] font-bold tabular-nums leading-none text-[#f8fafc]">
        ({batter?.balls ?? 0})
      </span>
    </div>
  );
}

/** Current partnership — dual portraits + totals bar. */
export default function CurrentPartnershipFsCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  const batters = Array.isArray(match?.batters) ? match.batters : [];
  const left = batters[0];
  const right = batters[1];
  if (!left && !right) return null;

  mergeConfig(baseConfig, configOverride);

  const team = match.team ?? {};
  const tournament = match.tournament ?? "";
  const teamLabel = team.name || team.code || "";
  const partnership = match.partnership ?? {};
  const partnershipRuns = partnership.runs ?? 0;
  const partnershipBalls = partnership.balls ?? 0;
  const barStyle = panelStyle(team, "batsman");

  return (
    <FullScreenPageShell>
      <div className="mx-auto flex h-full w-full max-w-[calc(1480px*var(--t4-scale))] flex-col gap-[calc(28px*var(--t4-scale))] px-[calc(48px*var(--t4-scale))] py-[calc(36px*var(--t4-scale))]">
        <header className="flex shrink-0 flex-col gap-[calc(4px*var(--t4-scale))]">
          {teamLabel ? (
            <h1 className="text-[calc(40px*var(--t4-scale))] font-black uppercase text-[#f8fafc]">
              {teamLabel}
            </h1>
          ) : null}
          {tournament ? (
            <p className="text-[calc(20px*var(--t4-scale))] font-semibold uppercase text-[#7dd3fc]">
              {tournament}
            </p>
          ) : null}
        </header>

        <div
          className="relative my-auto flex w-full flex-col overflow-hidden rounded-[calc(10px*var(--t4-scale))] border border-[var(--t4-divider)] shadow-[0_0_calc(40px*var(--t4-scale))_rgba(0,0,0,0.35)]"
          style={barStyle}
        >
          <div className="grid min-h-[calc(420px*var(--t4-scale))] grid-cols-[1.05fr_1.2fr_1.05fr] items-stretch overflow-hidden pt-[calc(20px*var(--t4-scale))]">
            <Portrait batter={left} side="left" index={0} />
            <div className="flex flex-col items-center justify-center gap-[calc(10px*var(--t4-scale))] px-[calc(12px*var(--t4-scale))] text-center">
              <span className="text-[calc(26px*var(--t4-scale))] font-bold uppercase tracking-[calc(1.5px*var(--t4-scale))] text-[#f8fafc]">
                CURRENT PARTNERSHIP
              </span>
              <span className="text-[calc(120px*var(--t4-scale))] font-black tabular-nums leading-[0.9] tracking-[calc(-2px*var(--t4-scale))] text-[#f8fafc]">
                {partnershipRuns}
              </span>
              <span className="text-[calc(22px*var(--t4-scale))] font-semibold uppercase tracking-[calc(1.5px*var(--t4-scale))] text-[#f8fafc]">
                RUNS <span className="mx-[calc(6px*var(--t4-scale))]">•</span> {partnershipBalls} BALLS
              </span>
            </div>
            <Portrait batter={right} side="right" index={1} />
          </div>

          <div className="relative z-[1] mx-auto mb-[calc(24px*var(--t4-scale))] mt-[calc(16px*var(--t4-scale))] w-[calc(100%-calc(48px*var(--t4-scale)))] rounded-[calc(10px*var(--t4-scale))] bg-white/30 p-px">
            <div
              className="flex min-h-[calc(104px*var(--t4-scale))] w-full items-stretch overflow-hidden rounded-[calc(9px*var(--t4-scale))]"
              style={{ backgroundColor: barStyle.backgroundColor }}
            >
              <div className="flex min-w-0 flex-1 items-center justify-between gap-[calc(20px*var(--t4-scale))] py-[calc(16px*var(--t4-scale))] pl-[calc(28px*var(--t4-scale))] pr-[calc(20px*var(--t4-scale))]">
                <Nameplate batter={left} side="left" />
                <ScoreBlock batter={left} />
              </div>
              <span className="w-px shrink-0 self-center bg-white/30" style={{ height: "calc(56px * var(--t4-scale))" }} aria-hidden="true" />
              <div className="flex min-w-0 flex-1 items-center justify-between gap-[calc(20px*var(--t4-scale))] py-[calc(16px*var(--t4-scale))] pl-[calc(20px*var(--t4-scale))] pr-[calc(28px*var(--t4-scale))]">
                <ScoreBlock batter={right} />
                <Nameplate batter={right} side="right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullScreenPageShell>
  );
}
