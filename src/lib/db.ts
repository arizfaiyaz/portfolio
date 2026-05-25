import "server-only";

import { neon } from "@neondatabase/serverless";

export function getSql() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    if (process.env.NODE_ENV === "development") {
      console.warn("DATABASE_URL is not configured. Visitor API will use fallback data.");
    }

    throw new Error("DATABASE_URL is not configured.");
  }

  return neon(databaseUrl);
}
