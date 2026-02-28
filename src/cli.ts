#!/usr/bin/env node

import { spawn } from "child_process";

function runGitnexus(args: string[]) {
  const child = spawn("gitnexus", args, {
    stdio: "inherit",
    shell: true
  });

  child.on("exit", (code) => {
    process.exit(code ?? 0);
  });

  child.on("error", (err) => {
    console.error("Failed to run gitnexus:", err);
    process.exit(1);
  });
}

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Usage: modula analyze");
  process.exit(0);
}

const command = args[0];

switch (command) {
  case "analyze":
    runGitnexus(["analyze", ...args.slice(1)]);
    break;

  default:
    console.log(`Unknown command: ${command}`);
    console.log("Usage: modula analyze");
    process.exit(1);
}