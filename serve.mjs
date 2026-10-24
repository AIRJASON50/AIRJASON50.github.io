import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const port = Number(process.argv[2] ?? 4173);
if (!Number.isInteger(port) || port < 1024 || port > 65535) {
  throw new Error('Choose a port between 1024 and 65535.');
}
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jpg': 'image/jpeg',
};

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const parts = pathname.split('/');
    const file = resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (parts.some((part) => part.startsWith('.')) || !file.startsWith(root + sep)) {
      response.writeHead(403).end('Forbidden');
      return;
    }
    const content = await readFile(file);
    response.writeHead(200, {
      'Content-Type': contentTypes[extname(file)] ?? 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    response.end(content);
  } catch {
    response.writeHead(404).end('Not found');
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Local preview: http://127.0.0.1:${port}`);
});
