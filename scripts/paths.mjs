import _path from 'path';
import _url from 'url';

export const __dirname = _url.fileURLToPath(new URL('.', import.meta.url));

export const rootPath = _path.join(__dirname, '..');

export const distPath = _path.join(rootPath, 'dist');

export const clientDistPath = _path.join(distPath, 'client');
export const adminDistPath = _path.join(distPath, 'admin');

export const packagesPath = _path.join(rootPath, 'packages');

export const clientPath = _path.join(packagesPath, 'client');
export const adminPath = _path.join(packagesPath, 'admin');
export const commonPath = _path.join(packagesPath, 'common');

export const clientPublicPath = _path.join(clientPath, 'public');
export const adminPublicPath = _path.join(adminPath, 'public');

export const clientSrcPath = _path.join(clientPath, 'src');
export const adminSrcPath = _path.join(adminPath, 'src');
