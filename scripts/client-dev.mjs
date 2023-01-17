import { createServer } from 'vite';
import { clientDistPath, clientPath, clientSrcPath } from './paths.mjs';
import { configFactory } from './config.mjs';

const env = 'development';

process.env.NODE_ENV = env;

const server = await createServer(
  configFactory(env, clientPath, clientSrcPath, clientDistPath, 8080)
);
await server.listen();
server.printUrls();
