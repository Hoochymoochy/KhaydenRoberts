import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { createPost, getPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const posts = await getPosts();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: "Failed to load posts" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!(await isAdminAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const title = typeof body.title === "string" ? body.title.trim() : "";
    const content = typeof body.content === "string" ? body.content.trim() : "";

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const post = await createPost(title, content);
    return NextResponse.json(post, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
