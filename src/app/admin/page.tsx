"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  created_at: string;
};

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const loadPosts = async () => {
    const res = await fetch("/api/posts", { cache: "no-store" });
    if (!res.ok) return;
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    let cancelled = false;

    const bootstrap = async () => {
      try {
        const res = await fetch("/api/admin/session", { cache: "no-store" });
        if (!res.ok || cancelled) return;
        const data = await res.json();
        if (cancelled || !data.authenticated) return;
        setAuthenticated(true);
        await loadPosts();
      } catch {
        // Stay on password form if session check fails
      }
    };

    bootstrap();
    return () => {
      cancelled = true;
    };
  }, []);

  const resetForm = () => {
    setTitle("");
    setContent("");
    setEditingId(null);
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Wrong password.");
        return;
      }
      setAuthenticated(true);
      setPassword("");
      setBusy(false);
      await loadPosts();
    } catch {
      setError("Could not sign in.");
    } finally {
      setBusy(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    setStatus("");
    try {
      const isEdit = editingId !== null;
      const res = await fetch(
        isEdit ? `/api/posts/${editingId}` : "/api/posts",
        {
          method: isEdit ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, content }),
        }
      );
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || `Failed to ${isEdit ? "update" : "create"} post.`);
        return;
      }
      resetForm();
      setStatus(isEdit ? "Post updated." : "Post published.");
      await loadPosts();
    } catch {
      setError("Failed to save post.");
    } finally {
      setBusy(false);
    }
  };

  const startEdit = (post: Post) => {
    setEditingId(post.id);
    setTitle(post.title);
    setContent(post.content);
    setError("");
    setStatus("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (post: Post) => {
    if (!confirm(`Delete “${post.title}”?`)) return;
    setBusy(true);
    setError("");
    setStatus("");
    try {
      const res = await fetch(`/api/posts/${post.id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Failed to delete post.");
        return;
      }
      if (editingId === post.id) resetForm();
      setStatus("Post deleted.");
      await loadPosts();
    } catch {
      setError("Failed to delete post.");
    } finally {
      setBusy(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    resetForm();
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 lg:px-24 py-10">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/45 mb-2">
              Admin
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Blog posts
            </h1>
          </div>
          <Link href="/blog" className="text-sm text-white/55 hover:text-white">
            View blog
          </Link>
        </div>

        {!authenticated ? (
          <form onSubmit={handleLogin} className="space-y-5">
            <label className="block">
              <span className="text-sm text-white/55">Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full bg-transparent border border-white/20 px-4 py-3 text-white outline-none focus:border-white/50"
                autoFocus
                required
              />
            </label>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={busy}
              className="px-5 py-3 border border-white/40 text-sm tracking-wide hover:bg-white hover:text-black transition-colors disabled:opacity-50"
            >
              {busy ? "Signing in…" : "Enter"}
            </button>
          </form>
        ) : (
          <div className="space-y-14">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-white/55">
                  {editingId !== null ? "Edit post" : "New post"}
                </p>
                {editingId !== null && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-sm text-white/45 hover:text-white"
                  >
                    Cancel edit
                  </button>
                )}
              </div>
              <label className="block">
                <span className="text-sm text-white/55">Title</span>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-2 w-full bg-transparent border border-white/20 px-4 py-3 text-white outline-none focus:border-white/50"
                  required
                />
              </label>
              <label className="block">
                <span className="text-sm text-white/55">Content</span>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={10}
                  className="mt-2 w-full bg-transparent border border-white/20 px-4 py-3 text-white outline-none focus:border-white/50 resize-y"
                  required
                />
              </label>
              {error && <p className="text-sm text-red-400">{error}</p>}
              {status && <p className="text-sm text-white/60">{status}</p>}
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={busy}
                  className="px-5 py-3 border border-white/40 text-sm tracking-wide hover:bg-white hover:text-black transition-colors disabled:opacity-50"
                >
                  {busy
                    ? "Saving…"
                    : editingId !== null
                      ? "Save changes"
                      : "Publish"}
                </button>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="px-5 py-3 text-sm text-white/50 hover:text-white transition-colors"
                >
                  Log out
                </button>
              </div>
            </form>

            <section>
              <h2 className="text-xl font-semibold mb-6">Published</h2>
              {posts.length === 0 ? (
                <p className="text-white/45">No posts yet.</p>
              ) : (
                <ul className="space-y-6">
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="border-t border-white/10 pt-5"
                    >
                      <p className="text-lg font-medium">{post.title}</p>
                      <p className="mt-1 text-xs text-white/35">
                        /blog/{post.slug}
                      </p>
                      <p className="mt-2 text-sm text-white/50 whitespace-pre-wrap line-clamp-3">
                        {post.content}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-4 text-sm">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-white/55 hover:text-white"
                        >
                          View
                        </Link>
                        <button
                          type="button"
                          onClick={() => startEdit(post)}
                          disabled={busy}
                          className="text-white/55 hover:text-white disabled:opacity-50"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(post)}
                          disabled={busy}
                          className="text-red-400/80 hover:text-red-400 disabled:opacity-50"
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
