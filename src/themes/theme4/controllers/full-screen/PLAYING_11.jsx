import React from "react";
import Playing11Core from "../../FullScreen/core/Playing11Core.jsx";
import { playing11Config } from "../../FullScreen/config/playing11.config.js";

export default function Playing11({ match, config }) {
  return <Playing11Core match={match} baseConfig={playing11Config} config={config} />;
}
