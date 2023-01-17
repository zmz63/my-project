import { build } from 'vite';
import { adminDistPath, adminPath, adminSrcPath } from './paths.mjs';
import { configFactory } from './config.mjs';

const env = 'production';

process.env.NODE_ENV = env;

await build(configFactory(env, adminPath, adminSrcPath, adminDistPath));
