import { cosmiconfig } from "cosmiconfig";

export interface ModulaConfig {
  plugins?: string[];
  defaultBranch?: string;
}

export async function loadConfig(): Promise<ModulaConfig> {
  const explorer = cosmiconfig("modula");
  const result = await explorer.search();

  if (!result) return {};

  return result.config as ModulaConfig;
}