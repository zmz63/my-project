import _path from 'path';
import vue from '@vitejs/plugin-vue';
import { adminSrcPath, clientSrcPath, commonPath } from './paths.mjs';
import svgLoader from './svg-loader.mjs';

export function configFactory(mode, root, src, dist, port) {
  const isDev = mode === 'development';

  return {
    configFile: false,
    root,
    mode,
    base: './',
    plugins: [vue(), svgLoader(_path.join(src, 'icons'))],
    resolve: {
      alias: {
        '@client': clientSrcPath,
        '@admin': adminSrcPath,
        '@common': commonPath,
      },
    },
    build: {
      outDir: dist,
      emptyOutDir: true,
      sourcemap: isDev,
      target: 'esnext',
    },
    server: isDev
      ? {
          port,
        }
      : undefined,
  };
}
