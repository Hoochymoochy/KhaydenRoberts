import { neon } from "@neondatabase/serverless";

export function getSql() {
  const raw = process.env.DATABASE_URL;
  if (!raw) {
    throw new Error("DATABASE_URL is not set");
  }
  // neon env pull may quote values; strip for the driver
  const url = raw.replace(/^['"]|['"]$/g, "");
  return neon(url);
}

export type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  created_at: string;
};
