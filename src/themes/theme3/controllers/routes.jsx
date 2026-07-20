import {
  controllerCatalog,
  controllerOutputPath,
} from "./registry.js";

/** Legacy route metadata derived from the controller catalog. */
export const controllerRoutes = controllerCatalog.map((entry) => ({
  id: entry.id,
  category: entry.category,
  path: controllerOutputPath(entry.category, entry.id),
  label: entry.label,
}));

export const defaultControllerPath = "/";

export const defaultOutputPath =
  controllerRoutes[0]?.path ?? "/output/lower-third/empty";

export const controllerNavItems = controllerRoutes.map(({ id, path, label }) => ({
  id,
  path,
  label,
}));
