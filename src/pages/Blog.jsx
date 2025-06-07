import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { loadPosts } from "../data/loadPosts";

const posts = loadPosts();

export function Blog() {
  const { t } = useLanguage();
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {t("blog.title")}
      </h1>
      <div className="mt-8 space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-6 dark:border-gray-700">
            <Link
              to={`/blog/${post.slug}`}
              className="text-2xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              {post.title}
            </Link>
            <time className="block text-sm text-gray-500 dark:text-gray-400 mb-2">
              {post.date}
            </time>
          </article>
        ))}
      </div>
    </section>
  );
}
