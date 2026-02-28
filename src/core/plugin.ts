import { ModulaPlugin } from "../types/plugin.js";
import { logger } from "./logger.js";

export async function loadPlugins(pluginNames: string[] = []) {
  for (const name of pluginNames) {
    try {
      const module = await import(name);
      const plugin: ModulaPlugin = module.default;
      plugin.setup();
      logger.success(`Loaded plugin: ${plugin.name}`);
    } catch (err) {
      logger.warn(`Failed to load plugin: ${name}`);
    }
  }
}