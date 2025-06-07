// Vite helper that eagerly imports all Markdown files from the posts folder
const modules = import.meta.glob('../posts/*.md', { as: 'raw', eager: true });

// Simple front matter parser for the markdown files
function parseFrontMatter(raw) {
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/m.exec(raw);
  let metadata = {};
  let content = raw;
  if (match) {
    const fm = match[1];
    content = match[2];
    fm.split('\n').forEach((line) => {
      const idx = line.index(":");
      if (idx !== -1) {
        const key = line.slice(0, idx).trim();
        let value = line.slice(idx + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        metadata[key] = value;
      }
    });
  }
  return { metadata, content };
}

// Load all posts and return them sorted by date (newest first)
export function loadPosts() {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const { metadata, content } = parseFrontMatter(raw);
      const slug = path.split('/').pop().replace(/\.md$/, '');
      return {
        slug,
        title: metadata.title || slug,
        date: metadata.date || '',
        content,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
