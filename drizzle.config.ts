// import { config } from "dotenv";
// import { defineConfig } from "drizzle-kit";
import { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export default{
  driver:"pg",
  schema: "./db/schema.ts",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
}satisfies Config;
