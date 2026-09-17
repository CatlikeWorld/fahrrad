import { rmSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const obsoletePaths = [
  ".next",
  "src/app/admin",
  "src/app/api",
  "src/components/admin",
  "src/lib/auth.ts",
  "src/lib/database.ts",
  "src/lib/validation.ts",
  "data/sports.db",
  "data/sports.db-wal",
  "data/sports.db-shm",
];

for (const relativePath of obsoletePaths) {
  rmSync(path.join(root, relativePath), { recursive: true, force: true });
}

const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
const result = spawnSync(process.execPath, [nextCli, "build"], {
  cwd: root,
  stdio: "inherit",
  env: process.env,
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);
