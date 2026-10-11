import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — Khayden Roberts`,
    description: post.content.slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-center md:justify-end px-4 md:px-12 lg:px-24 py-5 text-sm md:text-base tracking-wide text-white/90">
        <div className="flex space-x-6 md:space-x-10">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
        </div>
      </nav>

      <article className="px-6 md:px-16 lg:px-24 pt-12 md:pt-20 pb-20">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-sm text-white/45 hover:text-white transition-colors"
          >
            ← All posts
          </Link>
          <time className="block mt-8 text-sm tracking-wide text-white/40">
            {formatDate(post.created_at)}
          </time>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            {post.title}
          </h1>
          <div className="mt-10 md:mt-14 text-base md:text-lg text-white/70 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        </div>
      </article>
    </div>
  );
}
