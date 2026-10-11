import Link from "next/link";
import { getPosts } from "@/lib/posts";

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  let posts: Awaited<ReturnType<typeof getPosts>> = [];
  let loadError = false;

  try {
    posts = await getPosts();
  } catch {
    loadError = true;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />

      <nav className="relative z-10 flex justify-center md:justify-end px-4 md:px-12 lg:px-24 py-5 text-sm md:text-base tracking-wide text-white/90">
        <div className="flex space-x-6 md:space-x-10">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <span className="text-white">Blog</span>
        </div>
      </nav>

      <header className="relative z-10 px-6 md:px-16 lg:px-24 pt-16 md:pt-24 pb-16 md:pb-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/45 mb-6 blog-fade">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] blog-fade blog-fade-delay-1">
            The real moat is belief.
          </h1>
          <p className="mt-6 md:mt-8 max-w-2xl text-sm md:text-base text-white/50 leading-relaxed blog-fade blog-fade-delay-1">
            Notes on companies, tech, and venture. Markets, products, and the
            people building what comes next.
          </p>
          <div className="mt-10 md:mt-14 max-w-3xl space-y-6 text-base md:text-xl text-white/70 leading-relaxed blog-fade blog-fade-delay-2">
            <p>
              When anyone can build anything, the product stops being the
              advantage. Belief is. The companies that last earn it from people
              who care about their customers and stand for something real.
            </p>
            <p>
              It starts quiet. A sticker on a laptop. Someone spotting a build
              board and thinking, yeah, I know that company. Then it shows up
              at dinner, unprompted.
            </p>
            <p className="text-white/90">
              That is how the impossible starts to feel possible: not through a
              launch, but through the conversations people keep having.
            </p>
          </div>
        </div>
      </header>

      <main className="relative z-10 px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10 md:mb-12">
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/45 mb-3">
              Writing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Posts
            </h2>
          </div>

          {loadError ? (
            <p className="text-white/50">
              Couldn’t load posts right now. Try again shortly.
            </p>
          ) : posts.length === 0 ? (
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              No posts yet. The first conversation starts here soon.
            </p>
          ) : (
            <ul className="space-y-6">
              {posts.map((post) => (
                <li key={post.id}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block border-t border-white/10 pt-5 group"
                  >
                    <time className="text-sm tracking-wide text-white/40">
                      {formatDate(post.created_at)}
                    </time>
                    <p className="mt-2 text-lg md:text-xl font-medium group-hover:text-white/80 transition-colors">
                      {post.title}
                    </p>
                    <p className="mt-2 text-sm text-white/50 whitespace-pre-wrap line-clamp-3">
                      {post.content}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <footer className="px-6 md:px-16 py-10 border-t border-white/15 text-sm text-white/45">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row sm:justify-between gap-3">
          <p>© 2026 Khayden Roberts</p>
          <Link href="/" className="hover:text-white transition-colors">
            Back home
          </Link>
        </div>
      </footer>

      <style>{`
        @keyframes blog-fade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .blog-fade { animation: blog-fade 0.9s ease-out both; }
        .blog-fade-delay-1 { animation-delay: 0.12s; }
        .blog-fade-delay-2 { animation-delay: 0.24s; }
      `}</style>
    </div>
  );
}
