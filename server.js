const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3456;
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.mp4': 'video/mp4',
  '.pdf': 'application/pdf'
};

function resolvePath(urlPath) {
  let safePath = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  if (safePath === '/') safePath = '/index.html';
  const filePath = path.normalize(path.join(PUBLIC_DIR, safePath));
  if (!filePath.startsWith(PUBLIC_DIR)) return null;
  return filePath;
}

const server = http.createServer((req, res) => {
  const filePath = resolvePath(req.url);
  if (!filePath) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end('<h1>404 — Página não encontrada</h1>');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stat.size,
      'Cache-Control': 'no-cache'
    });

    const readStream = fs.createReadStream(filePath);
    readStream.on('error', () => {
      res.writeHead(500);
      res.end('Server Error');
    });
    readStream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log('');
  console.log('🚀  DRIVA Pitch Deck rodando em:');
  console.log('   • Local:    http://localhost:' + PORT + '/');
  console.log('');
  console.log('📁  Servindo pasta: public/');
  console.log('⏹️   Pressione Ctrl+C para parar');
  console.log('');
});
