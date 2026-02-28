import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pkg = require("../../package.json");

export function versionCommand() {
  console.log(`Modula v${pkg.version}`);
}