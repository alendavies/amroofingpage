import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Dc6JDPEF.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/favicon.ico.astro.mjs');
const _page2 = () => import('./pages/robots.txt.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const _page4 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/favicon.ico.ts", _page1],
    ["src/pages/robots.txt.ts", _page2],
    ["src/pages/index.astro", _page3],
    ["node_modules/@astrojs/starlight/routes/static/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "42a13792-6c72-4138-9006-1e45fb70a3c6"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
