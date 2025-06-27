import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_B8DGbN3y.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/agent-content.astro.mjs');
const _page4 = () => import('./pages/api/send-email.astro.mjs');
const _page5 = () => import('./pages/archives.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/og.png.astro.mjs');
const _page8 = () => import('./pages/posts/_---slug_/index.png.astro.mjs');
const _page9 = () => import('./pages/posts/_---page_.astro.mjs');
const _page10 = () => import('./pages/posts/_---slug_.astro.mjs');
const _page11 = () => import('./pages/robots.txt.astro.mjs');
const _page12 = () => import('./pages/rss.xml.astro.mjs');
const _page13 = () => import('./pages/search.astro.mjs');
const _page14 = () => import('./pages/tags/_tag_/_---page_.astro.mjs');
const _page15 = () => import('./pages/tags.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.md", _page2],
    ["src/pages/agent-content.astro", _page3],
    ["src/pages/api/send-email.ts", _page4],
    ["src/pages/archives/index.astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/og.png.ts", _page7],
    ["src/pages/posts/[...slug]/index.png.ts", _page8],
    ["src/pages/posts/[...page].astro", _page9],
    ["src/pages/posts/[...slug]/index.astro", _page10],
    ["src/pages/robots.txt.ts", _page11],
    ["src/pages/rss.xml.ts", _page12],
    ["src/pages/search.astro", _page13],
    ["src/pages/tags/[tag]/[...page].astro", _page14],
    ["src/pages/tags/index.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "13c240a9-aab3-43b8-a84d-7d81a2bc409d"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
