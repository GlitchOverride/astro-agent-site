import { c as createAstro, a as createComponent, r as renderComponent, g as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DVEZg-pu.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_BVxqapjP.mjs';
import { $ as $$Main } from '../chunks/Main_VArykIvu.mjs';
import { $ as $$Layout, a as $$Header, d as $$Footer } from '../chunks/Footer_0LvJXvqw.mjs';
import { $ as $$Card } from '../chunks/Card_BC7P4R14.mjs';
import { S as SITE } from '../chunks/config_C2KZyXPG.mjs';
export { renderers } from '../renderers.mjs';

const getPostsByGroupCondition = (posts, groupFunction) => {
  const result = {};
  for (let i = 0; i < posts.length; i++) {
    const item = posts[i];
    const groupKey = groupFunction(item, i);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
  }
  return result;
};

const $$Astro = createAstro("https://astro-paper.pages.dev/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Archives | ${SITE.title}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Archives", "pageDesc": "All the articles I've archived." }, { "default": async ($$result3) => renderTemplate`${Object.entries(
    getPostsByGroupCondition(
      posts,
      (post) => post.data.pubDatetime.getFullYear()
    )
  ).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)).map(([year, yearGroup]) => renderTemplate`${maybeRenderHead()}<div> <span class="text-2xl font-bold">${year}</span> <sup class="text-sm">${yearGroup.length}</sup> ${Object.entries(
    getPostsByGroupCondition(
      yearGroup,
      (post) => post.data.pubDatetime.getMonth() + 1
    )
  ).sort(([monthA], [monthB]) => Number(monthB) - Number(monthA)).map(([month, monthGroup]) => renderTemplate`<div class="flex flex-col sm:flex-row"> <div class="mt-6 min-w-36 text-lg sm:my-6"> <span class="font-bold">${months[Number(month) - 1]}</span> <sup class="text-xs">${monthGroup.length}</sup> </div> <ul> ${monthGroup.sort(
    (a, b) => Math.floor(
      new Date(b.data.pubDatetime).getTime() / 1e3
    ) - Math.floor(
      new Date(a.data.pubDatetime).getTime() / 1e3
    )
  ).map((data) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { ...data })}`)} </ul> </div>`)} </div>`)}` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/trotsky/Projects/astro-agent-site/src/pages/archives/index.astro", void 0);

const $$file = "/home/trotsky/Projects/astro-agent-site/src/pages/archives/index.astro";
const $$url = "/archives";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
