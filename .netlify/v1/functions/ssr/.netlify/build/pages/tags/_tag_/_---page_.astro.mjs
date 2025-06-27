import { c as createAstro, a as createComponent, r as renderComponent, g as renderTemplate, b as addAttribute, f as renderTransition, m as maybeRenderHead } from '../../../chunks/astro/server_DVEZg-pu.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_BVxqapjP.mjs';
import { $ as $$Main } from '../../../chunks/Main_VArykIvu.mjs';
import { $ as $$Layout, a as $$Header, d as $$Footer } from '../../../chunks/Footer_0LvJXvqw.mjs';
import { $ as $$Card } from '../../../chunks/Card_BC7P4R14.mjs';
import { $ as $$Pagination } from '../../../chunks/Pagination_DVq95-Ti.mjs';
import { g as getUniqueTags } from '../../../chunks/getUniqueTags_19lFPOFK.mjs';
import { g as getSortedPosts } from '../../../chunks/getSortedPosts_DQUXM3Gd.mjs';
import { a as slugifyAll } from '../../../chunks/slugify_CvQuO4Tx.mjs';
import { S as SITE } from '../../../chunks/config_C2KZyXPG.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const getPostsByTag = (posts, tag) => getSortedPosts(
  posts.filter((post) => slugifyAll(post.data.tags).includes(tag))
);

const $$Astro = createAstro("https://astro-paper.pages.dev/");
async function getStaticPaths({ paginate }) {
  const posts = await getCollection("blog");
  const tags = getUniqueTags(posts);
  return tags.flatMap(({ tag, tagName }) => {
    const tagPosts = getPostsByTag(posts, tag);
    return paginate(tagPosts, {
      params: { tag },
      props: { tagName },
      pageSize: SITE.postPerPage
    });
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const params = Astro2.params;
  const { tag } = params;
  const { page, tagName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tag: ${tagName} | ${SITE.title}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": [`Tag:`, `${tagName}`], "titleTransition": tag, "pageDesc": `All the articles with the tag "${tagName}".` }, { "default": async ($$result3) => renderTemplate`  ${maybeRenderHead()}<ul> ${page.data.map((data) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { ...data })}`)} </ul> `, "title": async ($$result3) => renderTemplate`<h1${addAttribute(renderTransition($$result3, "7yucybdb", "", tag), "data-astro-transition-scope")}>${`Tag:${tag}`}</h1>` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "page": page })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": page.lastPage > 1 })} ` })}`;
}, "/home/trotsky/Projects/astro-agent-site/src/pages/tags/[tag]/[...page].astro", "self");

const $$file = "/home/trotsky/Projects/astro-agent-site/src/pages/tags/[tag]/[...page].astro";
const $$url = "/tags/[tag]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
