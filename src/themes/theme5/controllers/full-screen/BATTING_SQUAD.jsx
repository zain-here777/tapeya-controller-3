import React from "react";
import BattingSquadCore from "../../FullScreen/core/BattingSquadCore.jsx";
import { battingSquadConfig } from "../../FullScreen/config/battingSquad.config.js";

export default function BattingSquad({ match, config }) {
  return <BattingSquadCore match={match} baseConfig={battingSquadConfig} config={config} tone="batsman" />;
}
