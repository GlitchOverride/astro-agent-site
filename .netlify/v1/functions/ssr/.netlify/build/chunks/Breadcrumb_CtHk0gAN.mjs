import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, g as renderTemplate } from './astro/server_DVEZg-pu.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://astro-paper.pages.dev/");
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const currentUrlPath = Astro2.url.pathname.replace(/\/+$/, "");
  const breadcrumbList = currentUrlPath.split("/").slice(1);
  if (breadcrumbList[0] === "posts") {
    breadcrumbList.splice(0, 2, `Posts (page ${breadcrumbList[1] || 1})`);
  }
  if (breadcrumbList[0] === "tags" && !isNaN(Number(breadcrumbList[2]))) {
    breadcrumbList.splice(
      1,
      3,
      `${breadcrumbList[1]} ${Number(breadcrumbList[2]) === 1 ? "" : "(page " + breadcrumbList[2] + ")"}`
    );
  }
  return renderTemplate`${maybeRenderHead()}<nav class="mx-auto mt-8 mb-1 w-full max-w-3xl px-4" aria-label="breadcrumb"> <ul class="font-light [&>li]:inline [&>li:not(:last-child)>a]:hover:opacity-100"> <li> <a href="/" class="opacity-80">Home</a> <span aria-hidden="true" class="opacity-80">&raquo;</span> </li> ${breadcrumbList.map(
    (breadcrumb, index) => index + 1 === breadcrumbList.length ? renderTemplate`<li> <span${addAttribute(["capitalize opacity-75", { lowercase: index > 0 }], "class:list")} aria-current="page">  ${decodeURIComponent(breadcrumb)} </span> </li>` : renderTemplate`<li> <a${addAttribute(`/${breadcrumb}/`, "href")} class="capitalize opacity-70"> ${breadcrumb} </a> <span aria-hidden="true">&raquo;</span> </li>`
  )} </ul> </nav>`;
}, "/home/trotsky/Projects/astro-agent-site/src/components/Breadcrumb.astro", void 0);

export { $$Breadcrumb as $ };
