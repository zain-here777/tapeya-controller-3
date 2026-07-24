import React, { Suspense } from "react";
import { useTheme } from "../themes/ThemeProvider.jsx";
import AppLoadingShell from "../app/components/AppLoadingShell.jsx";

/** Theme-agnostic router page — delegates entirely to the active theme module. */
export default function OutputPage() {
  const { themeModule, loading } = useTheme();

  if (loading || !themeModule) {
    return <AppLoadingShell message="Loading theme…" />;
  }

  const Page = themeModule.OutputPage;
  return (
    <Suspense fallback={<AppLoadingShell message="Loading output…" />}>
      <Page key={themeModule.id} />
    </Suspense>
  );
}
