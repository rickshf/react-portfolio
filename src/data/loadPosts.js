// Vite helper that eagerly imports all Markdown files from the posts folder
// Use the modern "query" option to read the raw Markdown content
const modules = import.meta.glob('../posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

// Simple front matter parser for the markdown files
// It expects front matter in the form:
// ---\ntitle: "My Title"\ndate: "2024-01-01"\n---\n
function parseFrontMatter(raw) {
  // Regex captures metadata between --- markers and the remaining Markdown.
  // Support both LF and CRLF line endings.
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/m.exec(raw);
  let metadata = {};
  let content = raw;
  if (match) {
    const fm = match[1];
    content = match[2];
    // Parse each "key: value" line inside the front matter
    fm.split('\n').forEach((line) => {
      const idx = line.indexOf(":");
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

// Grab the first non-empty line of the Markdown as a short preview
function getExcerpt(content) {
  const line = content
    .split('\n')
    .map((l) => l.trim())
    .find((l) => l);
  if (!line) return '';
  return line.replace(/^#+\s*/, '').slice(0, 140);
}

// Load all posts and return them sorted by date (newest first)
export function loadPosts() {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const { metadata, content } = parseFrontMatter(raw);
      const slug = path.split('/').pop().replace(/\.md$/, '');
      const rawDate = metadata.date || '';
      const parsed = new Date(rawDate);
      const safeDate = isNaN(parsed) ? new Date(0) : parsed;
      return {
        slug,
        title: metadata.title || slug,
        date: rawDate,
        content,
        excerpt: getExcerpt(content),
        _dateObj: safeDate,
      };
    })
    .sort((a, b) => b._dateObj - a._dateObj)
    .map((post) => {
      const { _dateObj, ...rest } = post;
      return rest;
    });
}
