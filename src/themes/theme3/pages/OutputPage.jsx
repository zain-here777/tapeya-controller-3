import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  readActiveController,
  subscribeActiveController,
  writeActiveController,
} from "../../../shared/controller/activeController.js";
import { readThemeFromSearch } from "../../../shared/utils/outputPath.js";
import { writeActiveTheme } from "../../activeTheme.js";
import { useTheme } from "../../ThemeProvider.jsx";
import BroadcastPageShell from "../layouts/BroadcastPageShell.jsx";
import ControllerHost from "../controllers/ControllerHost.jsx";
import ControllerLayout from "../layouts/ControllerLayout.jsx";
import { controllerCatalog, getControllerEntry } from "../controllers/registry.js";

/** Theme 3 output page — fully self-contained within theme3. */
export default function Theme3OutputPage() {
  const { category: paramCategory, id: paramId } = useParams();
  const [searchParams] = useSearchParams();
  const { setThemeId } = useTheme();

  const [active, setActive] = useState(() => {
    if (paramCategory && paramId) {
      return { category: paramCategory, id: paramId };
    }
    return readActiveController() ?? null;
  });

  useEffect(() => {
    const themeFromUrl = readThemeFromSearch(searchParams);
    if (themeFromUrl) {
      writeActiveTheme(themeFromUrl);
      setThemeId(themeFromUrl);
    }
  }, [searchParams, setThemeId]);

  useEffect(() => {
    if (paramCategory && paramId) {
      writeActiveController(paramCategory, paramId);
      setActive({ category: paramCategory, id: paramId });
    }
  }, [paramCategory, paramId]);

  useEffect(() => subscribeActiveController(setActive), []);

  const resolvedActive = useMemo(() => {
    if (active) {
      const entry = getControllerEntry(active.category, active.id);
      if (entry) return active;
    }

    const first = controllerCatalog[0];
    return first ? { category: first.category, id: first.id } : null;
  }, [active]);

  if (!resolvedActive) {
    return (
      <BroadcastPageShell className="flex flex-col items-center justify-center gap-4 bg-white text-black">
        <p className="text-black/60">Select a controller from the control panel.</p>
        <Link to="/" className="output-page-link">
          Open control panel
        </Link>
      </BroadcastPageShell>
    );
  }

  const entry = getControllerEntry(resolvedActive.category, resolvedActive.id);

  if (!entry) {
    return (
      <BroadcastPageShell className="flex flex-col items-center justify-center gap-4 bg-white text-black">
        <p className="text-black/60">
          Unknown controller: {resolvedActive.category}/{resolvedActive.id}
        </p>
        <Link to="/" className="output-page-link">
          Back to control panel
        </Link>
      </BroadcastPageShell>
    );
  }

  return (
    <ControllerLayout title={entry.label} panelLink="/">
      <ControllerHost
        category={resolvedActive.category}
        id={resolvedActive.id}
        {...entry.getProps()}
      />
    </ControllerLayout>
  );
}
