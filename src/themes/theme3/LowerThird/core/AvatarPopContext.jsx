import React, { createContext, useContext } from "react";
import { AVATAR_CONFIG_NONE } from "../../theme/avatarConfig.js";

const AvatarConfigContext = createContext(AVATAR_CONFIG_NONE);

export function AvatarConfigProvider({ value, children }) {
  return (
    <AvatarConfigContext.Provider value={value}>{children}</AvatarConfigContext.Provider>
  );
}

/** Avatar pop-out settings for the active controller variant. */
export function useAvatarConfig() {
  return useContext(AvatarConfigContext);
}
