import { lazy } from "react";
import { createThemeModule } from "../contract.js";
import {
  controllerCatalog,
  controllerOutputPath,
  getController,
  getControllerEntry,
  getControllersByCategory,
  LOWER_THIRD_PANEL_ROW_SIZE,
} from "./controllers/registry.js";
import { theme4Config } from "./config/theme.config.js";

const ControlPanelPage = lazy(() => import("./pages/ControlPanelPage.jsx"));
const OutputPage = lazy(() => import("./pages/OutputPage.jsx"));
const ControllerHost = lazy(() => import("./controllers/ControllerHost.jsx"));

async function loadStyles() {
  await Promise.all([
    import("./styles/theme4.css"),
    import("./styles/motion.css"),
    import("./FullScreenTransition/styles/fst.css"),
    import("./Breaks/styles/breaks.css"),
    import("./Charts/styles/charts.css"),
  ]);
}

export default createThemeModule({
  id: theme4Config.id,
  label: theme4Config.label,
  loadStyles,
  ControlPanelPage,
  OutputPage,
  getController,
  getControllerEntry,
  getControllersByCategory,
  controllerOutputPath,
  ControllerHost,
  controllerCatalog,
  LOWER_THIRD_PANEL_ROW_SIZE,
});

export {
  loadStyles,
  ControlPanelPage,
  OutputPage,
  getController,
  getControllerEntry,
  getControllersByCategory,
  controllerOutputPath,
  controllerCatalog,
  LOWER_THIRD_PANEL_ROW_SIZE,
  ControllerHost,
};
