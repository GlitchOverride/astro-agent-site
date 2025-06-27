import { a as createComponent, r as renderComponent, g as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DVEZg-pu.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$LinkButton, d as $$Footer } from '../chunks/Footer_0LvJXvqw.mjs';
import { S as SITE } from '../chunks/config_C2KZyXPG.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `404 Not Found | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main id="main-content" class="mx-auto flex max-w-3xl flex-1 items-center justify-center"> <div class="mb-14 flex flex-col items-center justify-center"> <h1 class="text-9xl font-bold text-accent">404</h1> <span aria-hidden="true">¯\\_(ツ)_/¯</span> <p class="mt-4 text-2xl sm:text-3xl">Page Not Found</p> ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/", "class": "my-6 text-lg underline decoration-dashed underline-offset-8" }, { "default": ($$result3) => renderTemplate`
Go back home
` })} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/trotsky/Projects/astro-agent-site/src/pages/404.astro", void 0);

const $$file = "/home/trotsky/Projects/astro-agent-site/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
