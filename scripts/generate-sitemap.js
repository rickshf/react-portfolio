import fs from 'fs/promises';
import path from 'path';

async function main() {
  const postsDir = path.join('src', 'posts');
  const distDir = path.join('dist');
  const sitemapPath = path.join(distDir, 'sitemap.xml');

  const files = await fs.readdir(postsDir);
  const urls = [];

  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const raw = await fs.readFile(path.join(postsDir, file), 'utf8');
    const slug = file.replace(/\.md$/, '');
    const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
    let metadata = {};
    if (match) {
      const fm = match[1];
      fm.split('\n').forEach((line) => {
        const idx = line.indexOf(':');
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
    urls.push({ slug, date: metadata.date });
  }

  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const open = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const close = '</urlset>\n';
  const body = urls
    .map((u) => {
      const lastmod = u.date ? `\n    <lastmod>${u.date}</lastmod>` : '';
      return `  <url>\n    <loc>/blog/${u.slug}</loc>${lastmod}\n  </url>`;
    })
    .join('\n');

  await fs.mkdir(distDir, { recursive: true });
  await fs.writeFile(sitemapPath, xmlHeader + open + body + '\n' + close);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
