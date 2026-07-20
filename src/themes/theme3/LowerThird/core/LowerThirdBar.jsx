import React from "react";
import Divider from "./Divider";
import { AvatarConfigProvider } from "./AvatarPopContext.jsx";
import { useAvatarVisibility } from "./AvatarVisibilityContext.jsx";
import {
  avatarCssVars,
  avatarShellHeight,
  hasAvatarPop,
} from "../../theme/avatarConfig.js";
import { COLUMN_LAYOUT_CLASS } from "../../theme/layout.js";

/**
 * LowerThirdBar
 * Generic broadcast lower-third shell — renders any column set + optional right panel.
 */
export default function LowerThirdBar({
  columns = [],
  rightPanel = null,
  bowlerPanelVars = {},
  rightPanelBg = "bg-bowler-panel",
  avatar = { pop: 0, scale: 1, width: 84, offsetX: 0, gap: 12 },
}) {
  const { showAvatars } = useAvatarVisibility();
  const popEnabled = showAvatars && hasAvatarPop(avatar);

  return (
    <AvatarConfigProvider value={avatar}>
      <div
        className={`controller-scaled relative w-full shrink-0 font-controller select-none${popEnabled ? " controller-avatar-pop" : " overflow-hidden"}${showAvatars ? "" : " controller-avatars-hidden"}`}
        style={{
          ...avatarCssVars(avatar),
          height: avatarShellHeight(avatar, showAvatars),
        }}
      >
        <div className="relative h-full w-full">
          {/* Background strip — stays bar-height at bottom */}
          <div className="absolute inset-x-0 bottom-0 z-0 flex h-bar overflow-hidden">
            <div className="flex h-full min-w-0 flex-1 overflow-hidden">
              {columns.map((column) => (
                <div
                  key={`bg-${column.key}`}
                  className={`h-full min-w-0 ${column.bg} ${COLUMN_LAYOUT_CLASS[column.layout]}`}
                />
              ))}
            </div>

            {rightPanel && (
              <div
                className={`bowler-panel-width h-full shrink-0 overflow-hidden ${rightPanelBg}`}
                style={bowlerPanelVars}
              />
            )}
          </div>

          {/* Foreground — bar-height at bottom; avatars pop upward via absolute slot */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex h-bar">
            <div className="flex h-full min-w-0 flex-1">
              {columns.map((column, index) => (
                <React.Fragment key={column.key}>
                  {index > 0 && column.dividerBefore !== false && <Divider />}
                  <div
                    className={`${column.foregroundBg ?? column.bg} ${column.className} ${COLUMN_LAYOUT_CLASS[column.layout]}`}
                  >
                    {column.content}
                  </div>
                </React.Fragment>
              ))}
            </div>

            {rightPanel && (
              <div
                className="bowler-panel-width relative flex h-full min-w-0 shrink-0 items-center ctrl-gap-32"
                style={bowlerPanelVars}
              >
                {rightPanel}
              </div>
            )}
          </div>
        </div>
      </div>
    </AvatarConfigProvider>
  );
}
