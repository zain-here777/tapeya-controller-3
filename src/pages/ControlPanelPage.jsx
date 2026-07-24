import React, { Suspense } from "react";
import { useTheme } from "../themes/ThemeProvider.jsx";
import AppLoadingShell from "../app/components/AppLoadingShell.jsx";

/** Theme-agnostic router page — delegates entirely to the active theme module. */
export default function ControlPanelPage() {
  const { themeModule, loading } = useTheme();

  if (loading || !themeModule) {
    return <AppLoadingShell message="Loading theme…" />;
  }

  const Page = themeModule.ControlPanelPage;
  return (
    <Suspense fallback={<AppLoadingShell message="Loading control panel…" />}>
      <Page key={themeModule.id} />
    </Suspense>
  );
}
