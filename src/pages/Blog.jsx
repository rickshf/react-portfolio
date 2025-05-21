import { posts } from "../data/posts";
import ReactMarkdown from "react-markdown";

export function Blog() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Blog</h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        Artigos e reflexões sobre desenvolvimento, minimalismo e ferramentas digitais.
      </p>

      <div className="mt-8 space-y-10">
        {posts.map((post) => (
          <div key={post.slug} className="border-b pb-6 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{post.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
            <ReactMarkdown className="prose dark:prose-invert max-w-none">{post.content}</ReactMarkdown>
          </div>
        ))}
      </div>
    </section>
  );
}