// src/pages/Blog.jsx
import ReactMarkdown from 'react-markdown';
import { posts } from '../data/posts';

export function Blog() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Blog</h1>
      <div className="mt-8 space-y-10">
        {posts.map(post => (
          <article key={post.slug} className="border-b pb-6 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
              {post.title}
            </h2>
            <time className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {post.date}
            </time>

            {/* Aqui aplicamos o estilo de “prose” no container, não no ReactMarkdown */}
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>
                {post.content}
              </ReactMarkdown>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}
