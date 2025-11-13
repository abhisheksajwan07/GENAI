import { loadEnv } from "./env.js";
import { selectAndHello } from "./provider.js";

async function main() {
  loadEnv();
  try {
    const result = await selectAndHello();
    process.stdout.write(JSON.stringify(result, null, 2) + "\n");
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(err);
    process.exit(1);
  }
}
main();
