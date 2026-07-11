import React, { useEffect, useState } from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import ChartPageShell from "../components/ChartPageShell.jsx";
import ChartHeader from "../components/ChartHeader.jsx";
import ChartCrestColumn from "../components/ChartCrestColumn.jsx";

const WHEEL_SIZE = 480;
const GRASS_GRADIENT_ID = "sc-wagon-wheel-grass";

const SHOT_COLORS = {
  single: "#5fd0a8",
  multi: "#e0c05a",
  four: "#5aa0ff",
  six: "#f0d44a",
};

const LEGEND_ITEMS = [
  ["1s & 2s", SHOT_COLORS.single],
  ["3s", SHOT_COLORS.multi],
  ["FOUR", SHOT_COLORS.four],
  ["SIX", SHOT_COLORS.six],
];

function shotPoint(angle, dist, size) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 18;
  const rad = (angle * Math.PI) / 180;
  return [cx + radius * dist * Math.sin(rad), cy + radius * dist * Math.cos(rad)];
}

function summarizeShots(shots) {
  const total = shots.reduce((sum, shot) => sum + shot.runs, 0);
  const fours = shots.filter((shot) => shot.runs === 4).length;
  const sixes = shots.filter((shot) => shot.runs === 6).length;
  const offSide = shots
    .filter((shot) => shot.angle > 0)
    .reduce((sum, shot) => sum + shot.runs, 0);
  const legSide = shots
    .filter((shot) => shot.angle <= 0)
    .reduce((sum, shot) => sum + shot.runs, 0);
  return { total, fours, sixes, offSide, legSide };
}

function runColor(runs) {
  if (runs === 6) return SHOT_COLORS.six;
  if (runs === 4) return SHOT_COLORS.four;
  if (runs >= 2) return SHOT_COLORS.multi;
  return SHOT_COLORS.single;
}

function WagonWheelField({ shots, size = WHEEL_SIZE, animate = true }) {
  const [drawn, setDrawn] = useState(!animate);
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 18;

  useEffect(() => {
    if (!animate) {
      setDrawn(true);
      return undefined;
    }
    setDrawn(false);
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setDrawn(true));
    });
    return () => cancelAnimationFrame(frame);
  }, [animate, shots]);

  return (
    <svg
      width={`calc(${size}px * var(--cs))`}
      height={`calc(${size}px * var(--cs))`}
      viewBox={`0 0 ${size} ${size}`}
      className="max-h-full max-w-full overflow-visible"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={GRASS_GRADIENT_ID} cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#16361f" />
          <stop offset="70%" stopColor="#0d2415" />
          <stop offset="100%" stopColor="#091a10" />
        </radialGradient>
      </defs>

      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill={`url(#${GRASS_GRADIENT_ID})`}
        stroke="rgba(150,255,190,.35)"
        strokeWidth="2"
      />
      <circle
        cx={cx}
        cy={cy}
        r={radius * 0.58}
        fill="none"
        stroke="rgba(255,255,255,.14)"
        strokeWidth="1.5"
        strokeDasharray="3 7"
      />
      <line
        x1={cx}
        y1={cy - radius}
        x2={cx}
        y2={cy + radius}
        stroke="rgba(255,255,255,.08)"
        strokeWidth="1"
      />
      <line
        x1={cx - radius}
        y1={cy}
        x2={cx + radius}
        y2={cy}
        stroke="rgba(255,255,255,.08)"
        strokeWidth="1"
      />
      <rect
        x={cx - 9}
        y={cy - 34}
        width="18"
        height="68"
        rx="3"
        fill="rgba(200,180,140,.22)"
        stroke="rgba(220,200,160,.3)"
        strokeWidth="1"
      />

      {shots.map((shot, index) => {
        const [x, y] = shotPoint(shot.angle, shot.dist, size);
        const color = runColor(shot.runs);
        const length = Math.hypot(x - cx, y - cy);
        const big = shot.runs >= 4;
        const lineDelay = 300 + index * 70;
        const dotDelay = 600 + index * 70;

        return (
          <g key={`${shot.angle}-${shot.dist}-${index}`}>
            <line
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke={color}
              strokeWidth={big ? 3 : 2}
              strokeLinecap="round"
              opacity="0.92"
              strokeDasharray={length}
              strokeDashoffset={drawn ? 0 : length}
              style={{
                transition: animate
                  ? `stroke-dashoffset 0.55s ${lineDelay}ms cubic-bezier(.2,.8,.2,1)`
                  : "none",
              }}
            />
            <circle
              cx={x}
              cy={y}
              r={big ? 6 : 4}
              fill={color}
              style={{
                opacity: drawn ? 1 : 0,
                transition: animate
                  ? `opacity 0.3s ${dotDelay}ms`
                  : "none",
              }}
            />
          </g>
        );
      })}

      <circle
        cx={cx}
        cy={cy}
        r="6"
        fill="#fff"
        stroke="rgba(255,255,255,.5)"
        strokeWidth="2"
      />
    </svg>
  );
}

function WagonLegend() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-[calc(20px*var(--cs))] gap-y-[calc(8px*var(--cs))]">
      {LEGEND_ITEMS.map(([label, color]) => (
        <div key={label} className="flex items-center gap-[calc(8px*var(--cs))]">
          <span
            className="h-[calc(4px*var(--cs))] w-[calc(22px*var(--cs))] shrink-0 rounded-sm"
            style={{ background: color }}
          />
          <span className="ctrl-t-chart-legend whitespace-nowrap uppercase text-white/70">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function WagonBigStat({ label, value, accent }) {
  return (
    <div className="relative min-w-0 overflow-hidden rounded-[calc(12px*var(--cs))] border border-white/15 bg-panel-player px-[calc(14px*var(--cs))] py-[calc(12px*var(--cs))]">
      <div
        className="absolute inset-x-0 top-0 h-[calc(3px*var(--cs))]"
        style={{ background: accent }}
        aria-hidden="true"
      />
      <div className="ctrl-t-chart-legend whitespace-nowrap uppercase text-white/50">
        {label}
      </div>
      <div
        className="ctrl-t-chart-big-stat mt-[calc(4px*var(--cs))] tabular-nums leading-none"
        style={{ color: accent }}
      >
        {value}
      </div>
    </div>
  );
}

function WagonZoneBar({ label, value, total, color }) {
  const pct = total ? Math.round((value / total) * 100) : 0;

  return (
    <div className="min-w-0">
      <div className="mb-[calc(6px*var(--cs))] flex items-baseline justify-between gap-[calc(12px*var(--cs))]">
        <span className="ctrl-t-chart-legend shrink-0 whitespace-nowrap uppercase text-white/70">
          {label}
        </span>
        <span className="ctrl-t-chart-legend shrink-0 whitespace-nowrap text-white/80">
          {value} runs · {pct}%
        </span>
      </div>
      <div className="h-[calc(10px*var(--cs))] overflow-hidden rounded-md bg-black/40">
        <div
          className="h-full rounded-md motion-safe:animate-chart-grow-w motion-reduce:animate-none"
          style={{
            "--chart-bar-w": `${pct}%`,
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${color}, color-mix(in srgb, ${color} 60%, white))`,
          }}
        />
      </div>
    </div>
  );
}

function WagonStatsPanel({ player, stats }) {
  return (
    <div className="flex min-w-0 flex-col justify-center gap-[calc(22px*var(--cs))]">
      <div className="min-w-0">
        <div className="ctrl-t-chart-legend font-bold uppercase tracking-[0.2em] text-white/50">
          SHOT MAP
        </div>
        <div className="ctrl-t-chart-player-name mt-[calc(8px*var(--cs))] break-words uppercase leading-[1.05] text-white">
          {player.name}
        </div>
        {player.teamName || player.role ? (
          <div className="ctrl-t-chart-legend mt-[calc(6px*var(--cs))] text-white/60">
            {[player.teamName, player.role].filter(Boolean).join(" · ")}
          </div>
        ) : null}
      </div>

      <div className="grid grid-cols-3 gap-[calc(12px*var(--cs))]">
        <WagonBigStat label="RUNS" value={stats.total} accent="#ffffff" />
        <WagonBigStat label="FOURS" value={stats.fours} accent={SHOT_COLORS.four} />
        <WagonBigStat label="SIXES" value={stats.sixes} accent={SHOT_COLORS.six} />
      </div>

      <div className="flex flex-col gap-[calc(14px*var(--cs))]">
        <WagonZoneBar
          label="OFF SIDE"
          value={stats.offSide}
          total={stats.total}
          color={SHOT_COLORS.four}
        />
        <WagonZoneBar
          label="LEG SIDE"
          value={stats.legSide}
          total={stats.total}
          color={SHOT_COLORS.multi}
        />
      </div>
    </div>
  );
}

/**
 * Wagon wheel chart core.
 */
export default function WagonWheelCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.teams || !Array.isArray(match.shots)) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const title = match.title ?? "WAGON WHEEL";
  const tournament = match.tournament ?? "";
  const player = match.player ?? {};
  const shots = match.shots;
  const stats = summarizeShots(shots);

  return (
    <ChartPageShell>
      <ChartHeader title={title} subtitle={tournament} />
      <ChartCrestColumn top={match.teams.top} bottom={match.teams.bottom} />

      <div className="absolute bottom-[calc(56px*var(--cs))] left-[calc(70px*var(--cs))] right-[calc(400px*var(--cs))] top-[calc(200px*var(--cs))] z-[2] motion-safe:animate-chart-fade-up motion-reduce:animate-none">
        <div
          className="grid h-full w-full min-w-0 items-center gap-[calc(36px*var(--cs))] rounded-[calc(18px*var(--cs))] border border-white/15 bg-panel-player/80 p-[calc(32px*var(--cs))]"
          style={{
            gridTemplateColumns: `minmax(0, calc(${WHEEL_SIZE + 40}px * var(--cs))) minmax(calc(280px * var(--cs)), 1fr)`,
          }}
        >
          <div className="flex min-w-0 flex-col items-center justify-center gap-[calc(18px*var(--cs))]">
            <WagonWheelField shots={shots} />
            <WagonLegend />
          </div>
          <WagonStatsPanel player={player} stats={stats} />
        </div>
      </div>
    </ChartPageShell>
  );
}
