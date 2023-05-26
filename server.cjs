import http from 'http';
const { createServer } = require('vite');

const isProduction = process.env.NODE_ENV === 'production';

async function createHttpServer() {
  const vite = await createServer({
    server: {
      middlewareMode: true,
    },
  });

  await vite.listen();

  const httpServer = http.createServer((req, res) => {
    vite.middlewares(req, res);
  });

  httpServer.listen(process.env.PORT || 3000, () => {
    console.log('HTTP server is running.');
  });
}

createHttpServer().catch((err) => {
  console.error(err);
  process.exit(1);
});

export default createHttpServer;
