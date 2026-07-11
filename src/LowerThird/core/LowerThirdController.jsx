import React from "react";
import LowerThirdBar from "./LowerThirdBar";
import {
  resolveAvatarConfig,
} from "../../theme/avatarConfig.js";

/**
 * LowerThirdController
 * Wraps LowerThirdBar with config-driven bowler panel sizing.
 */
export default function LowerThirdController({
  columns,
  rightPanel,
  config,
}) {
  const bowlerPanelVars = {
    "--bowler-pct": `${config.bowlerPanelWidthPercent}%`,
    "--bowler-max": `${config.bowlerPanelMaxWidth}px`,
  };

  const avatar = resolveAvatarConfig(config.avatar ?? config.avatarPop);

  return (
    <LowerThirdBar
      columns={columns}
      rightPanel={rightPanel}
      bowlerPanelVars={bowlerPanelVars}
      rightPanelBg={config.rightPanelBg}
      avatar={avatar}
    />
  );
}
