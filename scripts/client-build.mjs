import { build } from 'vite';
import { clientDistPath, clientPath, clientSrcPath } from './paths.mjs';
import { configFactory } from './config.mjs';

const env = 'production';

process.env.NODE_ENV = env;

await build(configFactory(env, clientPath, clientSrcPath, clientDistPath));
