import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
// Load posts directly from the Markdown files so the blog and post
// pages use the exact same data source
import { loadPosts } from "../data/loadPosts";

// Posts are loaded once at module level and reused on each render
const posts = loadPosts();

export function Post() {
  const { slug } = useParams();
  // Find the post that matches the slug from the URL
  const post = posts.find((p) => p.slug === slug);

  // Show a friendly message if the post doesn't exist
  if (!post) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link to="/blog" className="text-blue-500 hover:underline">
          ← Back to blog
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {post.title}
      </h1>
      <time className="block text-sm text-gray-500">{post.date}</time>
      <div className="prose dark:prose-invert max-w-none">
        {/* Render the Markdown content of the post */}
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      <Link to="/blog" className="text-blue-500 hover:underline">
        ← Back to blog
      </Link>
    </section>
  );
}
