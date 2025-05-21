import { posts } from "../data/posts";

export function Blog() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Blog</h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        Artigos e reflexões sobre desenvolvimento, minimalismo e ferramentas digitais.
      </p>

      <div className="mt-8 space-y-6">
        {posts.map((post) => (
          <div key={post.slug}>
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{post.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2 whitespace-pre-line">{post.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}