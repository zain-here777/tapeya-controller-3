import React from "react";
import BattingSquadCore from "../../FullScreen/core/BattingSquadCore.jsx";
import { bowlingSquadConfig } from "../../FullScreen/config/bowlingSquad.config.js";

export default function BowlingSquad({ match, config }) {
  return <BattingSquadCore match={match} baseConfig={bowlingSquadConfig} config={config} tone="bowler" />;
}
