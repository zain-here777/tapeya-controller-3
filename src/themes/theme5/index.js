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
import { theme5Config } from "./config/theme.config.js";

const ControlPanelPage = lazy(() => import("./pages/ControlPanelPage.jsx"));
const OutputPage = lazy(() => import("./pages/OutputPage.jsx"));
const ControllerHost = lazy(() => import("./controllers/ControllerHost.jsx"));

async function loadStyles() {
  await Promise.all([
    import("./styles/theme5.css"),
    import("./styles/motion.css"),
    import("./FullScreenTransition/styles/fst.css"),
    import("./Breaks/styles/breaks.css"),
    import("./Charts/styles/charts.css"),
  ]);
}

export default createThemeModule({
  id: theme5Config.id,
  label: theme5Config.label,
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
