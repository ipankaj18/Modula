#!/usr/bin/env node

import { Command } from "commander";
import { analyzeCommand } from "./commands/analyze.js";
import { versionCommand } from "./commands/version.js";
import { loadConfig } from "./core/config.js";
import { loadPlugins } from "./core/plugin.js";

const program = new Command();

program
  .name("modula")
  .description("Modula - Git Intelligence Orchestration CLI")
  .version("1.0.0");

program
  .command("analyze")
  .description("Run analysis via gitnexus")
  .argument("[args...]", "Arguments to pass to gitnexus")
  .action(async (args) => {
    const config = await loadConfig();
    await loadPlugins(config.plugins);
    analyzeCommand(args);
  });

program
  .command("version")
  .description("Show version")
  .action(versionCommand);

program.parse(process.argv);