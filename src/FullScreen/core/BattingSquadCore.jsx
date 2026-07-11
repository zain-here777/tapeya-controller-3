import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import BreakFabricBackground from "../../Breaks/components/BreakFabricBackground.jsx";
import BattingSquadPlayerCard from "../components/BattingSquadPlayerCard.jsx";

/**
 * Squad grid core — full-screen single-team squad (6 + 5).
 * Used by BattingSquad (batsman) and BowlingSquad (bowler).
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 * @param {"batsman"|"bowler"} [props.tone]
 */
export default function BattingSquadCore({
  match,
  baseConfig,
  config: configOverride = {},
  tone = "batsman",
}) {
  const team = match?.team;
  const players = Array.isArray(match?.players) ? match.players : [];
  if (!team?.name && !players.length) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const tournament = match.tournament ?? "";
  const teamLabel = team?.name || team?.code || "";
  const row1 = players.slice(0, 6);
  const row2 = players.slice(6, 11);
  const isBowler = tone === "bowler";
  const nameplateBg = isBowler ? "bg-bowler-panel" : "bg-panel-player";
  const codeColor = isBowler ? "text-[#c4002b]" : "text-[#9c0028]";
  const pageToneClass = isBowler ? "batting-squad-page--bowler" : "";

  return (
    <div
      className={`batting-squad-page controller-scaled font-controller select-none ${pageToneClass}`.trim()}
    >
      <BreakFabricBackground />

      <div className="batting-squad-inner">
        <header className="batting-squad-header">
          <div className="batting-squad-logo">
            {team?.logoUrl ? (
              <img
                src={team.logoUrl}
                alt={teamLabel}
                className="h-full w-full object-contain"
              />
            ) : (
              <span
                className={`ctrl-t-batting-squad-code font-bold uppercase ${codeColor}`}
              >
                {team?.code || "?"}
              </span>
            )}
          </div>

          <div className="batting-squad-header-text">
            {teamLabel ? (
              <h1 className="ctrl-t-batting-squad-team uppercase text-white">
                {teamLabel}
              </h1>
            ) : null}
            {tournament ? (
              <p className="ctrl-t-batting-squad-tournament uppercase text-white">
                {tournament}
              </p>
            ) : null}
          </div>
        </header>

        <div className="batting-squad-grid">
          {row1.length ? (
            <div className="batting-squad-row batting-squad-row--top">
              {row1.map((player, index) => (
                <BattingSquadPlayerCard
                  key={`${player.name}-${index}`}
                  player={player}
                  index={index}
                  nameplateBg={nameplateBg}
                />
              ))}
            </div>
          ) : null}

          {row2.length ? (
            <div className="batting-squad-row batting-squad-row--bottom">
              {row2.map((player, index) => (
                <BattingSquadPlayerCard
                  key={`${player.name}-${index + 6}`}
                  player={player}
                  index={index + 6}
                  nameplateBg={nameplateBg}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
