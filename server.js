// server.js
const { createServer } = require('http');
const next = require('next');

// Detect environment
const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost'; // Azure will handle the hostname
const port = process.env.PORT || 3000;

// Create Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, err => {
    if (err) throw err;
    console.log(`🚀 Next.js app ready on http://localhost:${port}`);
  });
});
