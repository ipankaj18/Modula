import { spawn } from "child_process";
import { logger } from "../core/logger.js";

export function analyzeCommand(args: string[]) {
  logger.info("Running gitnexus analyze...");

  const child = spawn("gitnexus", ["analyze", ...args], {
    stdio: "inherit",
    shell: true,
  });

  child.on("exit", (code) => {
    process.exit(code ?? 0);
  });

  child.on("error", () => {
    logger.error("Failed to execute gitnexus.");
    process.exit(1);
  });
}