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
  .command("analyze [args...]")
  .allowUnknownOption(true)
  .action((args) => {
    analyzeCommand(args);
  });

program
  .command("clean [args...]")
  .allowUnknownOption(true)
  .action((args) => {
    analyzeCommand(args);
  });

program
  .command("query [args...]")
  .allowUnknownOption(true)
  .action((args) => {
    analyzeCommand(args);
  });

program
  .command("version")
  .description("Show version")
  .action(versionCommand);

program.parse(process.argv);