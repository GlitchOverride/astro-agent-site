import { c as createAstro, a as createComponent, r as renderComponent, g as renderTemplate, m as maybeRenderHead, d as renderSlot, u as unescapeHTML } from '../chunks/astro/server_DVEZg-pu.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, d as $$Footer } from '../chunks/Footer_0LvJXvqw.mjs';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_CtHk0gAN.mjs';
import { S as SITE } from '../chunks/config_C2KZyXPG.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astro-paper.pages.dev/");
const $$AboutLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${frontmatter.title} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})} ${maybeRenderHead()}<main id="main-content"> <section id="about" class="prose mb-28 max-w-3xl prose-img:border-0"> <h1 class="text-2xl tracking-wider sm:text-3xl">${frontmatter.title}</h1> ${renderSlot($$result2, $$slots["default"])} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/trotsky/Projects/astro-agent-site/src/layouts/AboutLayout.astro", void 0);

const html = () => "<p>AstroPaper is a minimal, responsive and SEO-friendly Astro blog theme. I designed and crafted this based on <a href=\"https://satnaing.dev/blog\">my personal blog</a>.</p>\n<p>This theme is aimed to be accessible out of the box. Light and dark mode are supported by\ndefault and additional color schemes can also be configured.</p>\n<p>This theme is self-documented _ which means articles/posts in this theme can also be considered as documentations. So, see the documentation for more info.</p>\n<div>\n  <img src=\"/dev.svg\" class=\"sm:w-1/2 mx-auto\" alt=\"coding dev illustration\">\n</div>\n<h2 id=\"tech-stack\">Tech Stack</h2>\n<p>This theme is written in vanilla JavaScript (+ TypeScript for type checking) and a little bit of ReactJS for some interactions. TailwindCSS is used for styling; and Markdown is used for blog contents.</p>\n<h2 id=\"features\">Features</h2>\n<p>Here are certain features of this site.</p>\n<ul>\n<li>fully responsive and accessible</li>\n<li>SEO-friendly</li>\n<li>light &#x26; dark mode</li>\n<li>fuzzy search</li>\n<li>super fast performance</li>\n<li>draft posts</li>\n<li>pagination</li>\n<li>sitemap &#x26; rss feed</li>\n<li>highly customizable</li>\n</ul>\n<p>If you like this theme, you can star/contribute to the <a href=\"https://github.com/satnaing/astro-paper\">repo</a>.<br>\nOr you can even give any feedback via my <a href=\"mailto:contact@satnaing.dev\">email</a>.</p>";

				const frontmatter = {"layout":"../layouts/AboutLayout.astro","title":"About"};
				const file = "/home/trotsky/Projects/astro-agent-site/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "   \n                                    \n              \n   \n\nAstroPaper is a minimal, responsive and SEO-friendly Astro blog theme. I designed and crafted this based on [my personal blog](https://satnaing.dev/blog).\n\nThis theme is aimed to be accessible out of the box. Light and dark mode are supported by\ndefault and additional color schemes can also be configured.\n\nThis theme is self-documented \\_ which means articles/posts in this theme can also be considered as documentations. So, see the documentation for more info.\n\n<div>\n  <img src=\"/dev.svg\" class=\"sm:w-1/2 mx-auto\" alt=\"coding dev illustration\">\n</div>\n\n## Tech Stack\n\nThis theme is written in vanilla JavaScript (+ TypeScript for type checking) and a little bit of ReactJS for some interactions. TailwindCSS is used for styling; and Markdown is used for blog contents.\n\n## Features\n\nHere are certain features of this site.\n\n- fully responsive and accessible\n- SEO-friendly\n- light & dark mode\n- fuzzy search\n- super fast performance\n- draft posts\n- pagination\n- sitemap & rss feed\n- highly customizable\n\nIf you like this theme, you can star/contribute to the [repo](https://github.com/satnaing/astro-paper).  \nOr you can even give any feedback via my [email](mailto:contact@satnaing.dev).\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"tech-stack","text":"Tech Stack"},{"depth":2,"slug":"features","text":"Features"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$AboutLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
