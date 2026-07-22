import React, { useEffect, useState } from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import ChartPageShell from "../components/ChartPageShell.jsx";
import ChartHeader from "../components/ChartHeader.jsx";
import ChartCrestColumn from "../components/ChartCrestColumn.jsx";

const WHEEL_SIZE = 480;
const GRASS_GRADIENT_ID = "t4-wagon-wheel-grass";

const SHOT_COLORS = {
  single: "#38bdf8",
  multi: "#94a3b8",
  four: "#0ea5e9",
  six: "#fbbf24",
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
      width={`calc(${size}px * var(--t4-scale))`}
      height={`calc(${size}px * var(--t4-scale))`}
      viewBox={`0 0 ${size} ${size}`}
      className="max-h-full max-w-full overflow-visible"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={GRASS_GRADIENT_ID} cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#0f2847" />
          <stop offset="70%" stopColor="#0b1f38" />
          <stop offset="100%" stopColor="#071018" />
        </radialGradient>
      </defs>

      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill={`url(#${GRASS_GRADIENT_ID})`}
        stroke="rgba(14, 165, 233, 0.45)"
        strokeWidth="2"
      />
      <circle
        cx={cx}
        cy={cy}
        r={radius * 0.58}
        fill="none"
        stroke="rgba(148, 163, 184, 0.22)"
        strokeWidth="1.5"
        strokeDasharray="3 7"
      />
      <line
        x1={cx}
        y1={cy - radius}
        x2={cx}
        y2={cy + radius}
        stroke="rgba(148, 163, 184, 0.12)"
        strokeWidth="1"
      />
      <line
        x1={cx - radius}
        y1={cy}
        x2={cx + radius}
        y2={cy}
        stroke="rgba(148, 163, 184, 0.12)"
        strokeWidth="1"
      />
      <rect
        x={cx - 9}
        y={cy - 34}
        width="18"
        height="68"
        rx="3"
        fill="rgba(248, 250, 252, 0.12)"
        stroke="rgba(148, 163, 184, 0.35)"
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
                transition: animate ? `opacity 0.3s ${dotDelay}ms` : "none",
              }}
            />
          </g>
        );
      })}

      <circle
        cx={cx}
        cy={cy}
        r="6"
        fill="#f8fafc"
        stroke="rgba(14, 165, 233, 0.5)"
        strokeWidth="2"
      />
    </svg>
  );
}

function WagonLegend() {
  return (
    <div className="t4-chart-wagon-legend">
      {LEGEND_ITEMS.map(([label, color]) => (
        <div key={label} className="flex items-center gap-[calc(8px*var(--t4-scale))]">
          <span
            className="t4-chart-legend-swatch shrink-0"
            style={{ background: color }}
          />
          <span className="t4-chart-legend whitespace-nowrap uppercase">{label}</span>
        </div>
      ))}
    </div>
  );
}

function WagonBigStat({ label, value, accent }) {
  return (
    <div className="t4-chart-wagon-stat">
      <div
        className="t4-chart-wagon-stat-accent"
        style={{ background: accent }}
        aria-hidden="true"
      />
      <div className="t4-chart-legend uppercase">{label}</div>
      <div
        className="t4-chart-big-stat mt-[calc(4px*var(--t4-scale))] tabular-nums leading-none"
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
      <div className="mb-[calc(6px*var(--t4-scale))] flex items-baseline justify-between gap-[calc(12px*var(--t4-scale))]">
        <span className="t4-chart-legend shrink-0 whitespace-nowrap uppercase">
          {label}
        </span>
        <span className="t4-chart-legend-muted shrink-0 whitespace-nowrap">
          {value} runs · {pct}%
        </span>
      </div>
      <div className="t4-chart-zone-track">
        <div
          className="t4-chart-zone-fill motion-safe:animate-chart-grow-w motion-reduce:animate-none"
          style={{
            "--chart-bar-w": `${pct}%`,
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${color}, color-mix(in srgb, ${color} 55%, #f8fafc))`,
          }}
        />
      </div>
    </div>
  );
}

function WagonStatsPanel({ player, stats }) {
  return (
    <div className="flex min-w-0 flex-col justify-center gap-[calc(22px*var(--t4-scale))]">
      <div className="min-w-0">
        <div className="t4-chart-legend t4-chart-legend-heading uppercase">SHOT MAP</div>
        <div className="t4-chart-player-name mt-[calc(8px*var(--t4-scale))] break-words uppercase leading-[1.05]">
          {player.name}
        </div>
        {player.teamName || player.role ? (
          <div className="t4-chart-legend-muted mt-[calc(6px*var(--t4-scale))]">
            {[player.teamName, player.role].filter(Boolean).join(" · ")}
          </div>
        ) : null}
      </div>

      <div className="grid grid-cols-3 gap-[calc(12px*var(--t4-scale))]">
        <WagonBigStat label="RUNS" value={stats.total} accent="#f8fafc" />
        <WagonBigStat label="FOURS" value={stats.fours} accent={SHOT_COLORS.four} />
        <WagonBigStat label="SIXES" value={stats.sixes} accent={SHOT_COLORS.six} />
      </div>

      <div className="flex flex-col gap-[calc(14px*var(--t4-scale))]">
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

/** Wagon wheel chart core (Theme 4). */
export default function WagonWheelCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.teams || !Array.isArray(match.shots)) return null;

  mergeConfig(baseConfig, configOverride);

  const title = match.title ?? "WAGON WHEEL";
  const tournament = match.tournament ?? "";
  const player = match.player ?? {};
  const shots = match.shots;
  const stats = summarizeShots(shots);

  return (
    <ChartPageShell>
      <ChartHeader title={title} subtitle={tournament} />
      <ChartCrestColumn top={match.teams.top} bottom={match.teams.bottom} />

      <div className="t4-chart-wagon-panel t4-chart-body-anim motion-safe:animate-chart-fade-up motion-reduce:animate-none">
        <div
          className="t4-chart-wagon-grid"
          style={{
            gridTemplateColumns: `minmax(0, calc(${WHEEL_SIZE + 40}px * var(--t4-scale))) minmax(calc(280px * var(--t4-scale)), 1fr)`,
          }}
        >
          <div className="flex min-w-0 flex-col items-center justify-center gap-[calc(18px*var(--t4-scale))]">
            <WagonWheelField shots={shots} />
            <WagonLegend />
          </div>
          <WagonStatsPanel player={player} stats={stats} />
        </div>
      </div>
    </ChartPageShell>
  );
}
