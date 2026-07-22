import React from "react";
import LastWicketFsCore from "../../FullScreen/core/LastWicketFsCore.jsx";
import { lastWicketFsConfig } from "../../FullScreen/config/lastWicket.config.js";

export default function LastWicketFs({ match, config }) {
  return <LastWicketFsCore match={match} baseConfig={lastWicketFsConfig} config={config} />;
}
