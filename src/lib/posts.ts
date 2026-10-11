import { getSql, type Post } from "./db";
import { slugify } from "./slug";

async function uniqueSlug(base: string) {
  const sql = getSql();
  let candidate = base;
  let n = 2;

  for (;;) {
    const rows = await sql`
      SELECT id FROM posts
      WHERE slug = ${candidate}
      LIMIT 1
    `;
    if (rows.length === 0) return candidate;
    candidate = `${base}-${n}`;
    n += 1;
  }
}

export async function getPosts(): Promise<Post[]> {
  const sql = getSql();
  const rows = await sql`
    SELECT id, title, slug, content, created_at
    FROM posts
    ORDER BY created_at DESC
  `;
  return rows as Post[];
}

export async function getPost(id: number): Promise<Post | null> {
  const sql = getSql();
  const rows = await sql`
    SELECT id, title, slug, content, created_at
    FROM posts
    WHERE id = ${id}
    LIMIT 1
  `;
  return (rows[0] as Post) ?? null;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const sql = getSql();
  const rows = await sql`
    SELECT id, title, slug, content, created_at
    FROM posts
    WHERE slug = ${slug}
    LIMIT 1
  `;
  return (rows[0] as Post) ?? null;
}

export async function createPost(title: string, content: string): Promise<Post> {
  const sql = getSql();
  const slug = await uniqueSlug(slugify(title));
  const rows = await sql`
    INSERT INTO posts (title, slug, content)
    VALUES (${title}, ${slug}, ${content})
    RETURNING id, title, slug, content, created_at
  `;
  return rows[0] as Post;
}

export async function updatePost(
  id: number,
  title: string,
  content: string
): Promise<Post | null> {
  const sql = getSql();
  const existing = await getPost(id);
  if (!existing) return null;

  // Keep the shareable slug stable when editing
  const rows = await sql`
    UPDATE posts
    SET title = ${title}, content = ${content}
    WHERE id = ${id}
    RETURNING id, title, slug, content, created_at
  `;
  return (rows[0] as Post) ?? null;
}

export async function deletePost(id: number): Promise<boolean> {
  const sql = getSql();
  const rows = await sql`
    DELETE FROM posts
    WHERE id = ${id}
    RETURNING id
  `;
  return rows.length > 0;
}
