import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useLanguage } from "../context/LanguageContext";
import { loadPosts } from "../data/loadPosts";

const posts = loadPosts();

export function Post() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">{t("post.notFound")}</h1>
        <Link to="/blog" className="text-blue-500 hover:underline">
          {t("blog.backToList")}
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
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      <Link to="/blog" className="text-blue-500 hover:underline">
        {t("blog.backToList")}
      </Link>
    </section>
  );
}
