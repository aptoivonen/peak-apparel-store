import { defineConfig } from "drizzle-kit";

import { env } from "@/env/server";

console.log(env.DATABASE_URL);

export default defineConfig({
  schema: "./src/db/schema/index.ts",
  dialect: "postgresql",
  out: "./src/db/migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
