import React, { createContext, useContext, useState } from "react";

const STORAGE_KEY = "scorecard-controller-show-avatars";

const AvatarVisibilityContext = createContext({
  showAvatars: true,
  setShowAvatars: () => {},
  toggleAvatars: () => {},
});

function readStoredVisibility() {
  if (typeof window === "undefined") return true;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === null) return true;
  return stored === "true";
}

export function AvatarVisibilityProvider({ children }) {
  const [showAvatars, setShowAvatars] = useState(readStoredVisibility);

  const updateVisibility = (next) => {
    setShowAvatars(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, String(next));
    }
  };

  const toggleAvatars = () => updateVisibility(!showAvatars);

  return (
    <AvatarVisibilityContext.Provider
      value={{ showAvatars, setShowAvatars: updateVisibility, toggleAvatars }}
    >
      {children}
    </AvatarVisibilityContext.Provider>
  );
}

export function useAvatarVisibility() {
  return useContext(AvatarVisibilityContext);
}
