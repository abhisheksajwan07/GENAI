import dotnev from "dotenv";
let loaded = false;
export function loadEnv(): void {
  if (loaded) return;
  dotnev.config();
  loaded = true;
}
