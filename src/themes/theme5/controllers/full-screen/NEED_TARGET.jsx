import React from "react";
import NeedTargetFsCore from "../../FullScreen/core/NeedTargetFsCore.jsx";
import { needTargetFsConfig } from "../../FullScreen/config/needTarget.config.js";

export default function NeedTargetFs({ match, config }) {
  return <NeedTargetFsCore match={match} baseConfig={needTargetFsConfig} config={config} />;
}
