import { createServer } from 'vite';
import { adminDistPath, adminPath, adminSrcPath } from './paths.mjs';
import { configFactory } from './config.mjs';

const env = 'development';

process.env.NODE_ENV = env;

const server = await createServer(configFactory(env, adminPath, adminSrcPath, adminDistPath, 8080));
await server.listen();
server.printUrls();
