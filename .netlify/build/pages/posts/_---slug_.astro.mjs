import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, g as renderTemplate, e as renderScript, f as renderTransition } from '../../chunks/astro/server_DVEZg-pu.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_BVxqapjP.mjs';
import { c as createSvgComponent, g as SHARE_LINKS, b as $$LinkButton, $ as $$Layout, a as $$Header, d as $$Footer } from '../../chunks/Footer_0LvJXvqw.mjs';
import { $ as $$Tag } from '../../chunks/Tag_DsIExlN3.mjs';
import { $ as $$Datetime } from '../../chunks/Datetime_USheDwxT.mjs';
import { S as SITE } from '../../chunks/config_C2KZyXPG.mjs';
import { g as getPath } from '../../chunks/getPath_BVi-12-M.mjs';
import { s as slugifyStr } from '../../chunks/slugify_CvQuO4Tx.mjs';
/* empty css                                    */
import { g as getSortedPosts } from '../../chunks/getSortedPosts_DQUXM3Gd.mjs';
export { renderers } from '../../renderers.mjs';

const IconEdit = createSvgComponent({"meta":{"src":"/_astro/IconEdit.C9zdzJLB.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-edit"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1\" /><path d=\"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z\" /><path d=\"M16 5l3 3\" />"});

const $$Astro$3 = createAstro("https://astro-paper.pages.dev/");
const $$EditPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$EditPost;
  const { hideEditPost, post, class: className = "" } = Astro2.props;
  const href = `${SITE.editPost.url}${post.filePath}`;
  const showEditPost = !hideEditPost && href.trim() !== "";
  return renderTemplate`${showEditPost && renderTemplate`${maybeRenderHead()}<div${addAttribute(["opacity-80", className], "class:list")}><span aria-hidden="true" class="max-sm:hidden">
|
</span><a class="space-x-1.5 hover:opacity-75"${addAttribute(href, "href")} rel="noopener noreferrer" target="_blank">${renderComponent($$result, "IconEdit", IconEdit, { "class": "inline-block size-6" })}<span class="italic max-sm:text-sm sm:inline">${SITE.editPost.text}</span></a></div>`}`;
}, "/home/trotsky/Projects/astro-agent-site/src/components/EditPost.astro", void 0);

const $$Astro$2 = createAstro("https://astro-paper.pages.dev/");
const $$ShareLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ShareLinks;
  const URL = Astro2.url;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col flex-wrap items-center justify-center gap-1 sm:items-start"> <span class="italic">Share this post on:</span> <div class="text-center"> ${SHARE_LINKS.map((social) => renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": `${social.href + URL}`, "class": "scale-90 p-2 hover:rotate-6 sm:p-1", "title": social.linkTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "social.icon", social.icon, { "class": "inline-block size-6 scale-125 fill-transparent stroke-current stroke-2 opacity-90 group-hover:fill-transparent sm:scale-110" })} <span class="sr-only">${social.linkTitle}</span> ` })}`)} </div> </div>`;
}, "/home/trotsky/Projects/astro-agent-site/src/components/ShareLinks.astro", void 0);

const IconChevronLeft = createSvgComponent({"meta":{"src":"/_astro/IconChevronLeft.DuweWiRq.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M15 6l-6 6l6 6\" />"});

const $$BackButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderTemplate`${maybeRenderHead()}<div class="mx-auto flex w-full max-w-3xl items-center justify-start px-2">${renderComponent($$result, "LinkButton", $$LinkButton, { "id": "back-button", "href": "/", "class": "focus-outline mt-8 mb-2 flex hover:text-foreground/75" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "IconChevronLeft", IconChevronLeft, { "class": "inline-block size-6" })}<span>Go back</span>` })}</div>`}${renderScript($$result, "/home/trotsky/Projects/astro-agent-site/src/components/BackButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/trotsky/Projects/astro-agent-site/src/components/BackButton.astro", void 0);

const IconChevronRight = createSvgComponent({"meta":{"src":"/_astro/IconChevronRight.Cp8tvvdg.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M9 6l6 6l-6 6\" />"});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://astro-paper.pages.dev/");
const $$PostDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostDetails;
  const { post, posts } = Astro2.props;
  const {
    title,
    author,
    description,
    ogImage: initOgImage,
    canonicalURL,
    pubDatetime,
    modDatetime,
    timezone,
    tags,
    hideEditPost
  } = post.data;
  const { Content } = await renderEntry(post);
  let ogImageUrl;
  if (typeof initOgImage === "string") {
    ogImageUrl = initOgImage;
  } else if (initOgImage?.src) {
    ogImageUrl = initOgImage.src;
  }
  if (!ogImageUrl && SITE.dynamicOgImage) {
    ogImageUrl = `${getPath(post.id, post.filePath)}/index.png`;
  }
  const ogImage = ogImageUrl ? new URL(ogImageUrl, Astro2.url.origin).href : void 0;
  const layoutProps = {
    title: `${title} | ${SITE.title}`,
    author,
    description,
    pubDatetime,
    modDatetime,
    canonicalURL,
    ogImage,
    scrollSmooth: true
  };
  const allPosts = posts.map(({ data: { title: title2 }, id }) => ({
    slug: id,
    title: title2
  }));
  const currentPostIndex = allPosts.findIndex((a) => a.slug === post.id);
  const prevPost = currentPostIndex !== 0 ? allPosts[currentPostIndex - 1] : null;
  const nextPost = currentPostIndex !== allPosts.length ? allPosts[currentPostIndex + 1] : null;
  return renderTemplate(_a || (_a = __template(["", ' <script data-astro-rerun>\n  /** Create a progress indicator\n   *  at the top */\n  function createProgressBar() {\n    // Create the main container div\n    const progressContainer = document.createElement("div");\n    progressContainer.className =\n      "progress-container fixed top-0 z-10 h-1 w-full bg-background";\n\n    // Create the progress bar div\n    const progressBar = document.createElement("div");\n    progressBar.className = "progress-bar h-1 w-0 bg-accent";\n    progressBar.id = "myBar";\n\n    // Append the progress bar to the progress container\n    progressContainer.appendChild(progressBar);\n\n    // Append the progress container to the document body or any other desired parent element\n    document.body.appendChild(progressContainer);\n  }\n  createProgressBar();\n\n  /** Update the progress bar\n   *  when user scrolls */\n  function updateScrollProgress() {\n    document.addEventListener("scroll", () => {\n      const winScroll =\n        document.body.scrollTop || document.documentElement.scrollTop;\n      const height =\n        document.documentElement.scrollHeight -\n        document.documentElement.clientHeight;\n      const scrolled = (winScroll / height) * 100;\n      if (document) {\n        const myBar = document.getElementById("myBar");\n        if (myBar) {\n          myBar.style.width = scrolled + "%";\n        }\n      }\n    });\n  }\n  updateScrollProgress();\n\n  /** Attaches links to headings in the document,\n   *  allowing sharing of sections easily */\n  function addHeadingLinks() {\n    const headings = Array.from(\n      document.querySelectorAll("h2, h3, h4, h5, h6")\n    );\n    for (const heading of headings) {\n      heading.classList.add("group");\n      const link = document.createElement("a");\n      link.className =\n        "heading-link ml-2 opacity-0 group-hover:opacity-100 focus:opacity-100";\n      link.href = "#" + heading.id;\n\n      const span = document.createElement("span");\n      span.ariaHidden = "true";\n      span.innerText = "#";\n      link.appendChild(span);\n      heading.appendChild(link);\n    }\n  }\n  addHeadingLinks();\n\n  /** Attaches copy buttons to code blocks in the document,\n   * allowing users to copy code easily. */\n  function attachCopyButtons() {\n    const copyButtonLabel = "Copy";\n    const codeBlocks = Array.from(document.querySelectorAll("pre"));\n\n    for (const codeBlock of codeBlocks) {\n      const wrapper = document.createElement("div");\n      wrapper.style.position = "relative";\n\n      const copyButton = document.createElement("button");\n      copyButton.className =\n        "copy-code absolute right-3 -top-3 rounded bg-muted px-2 py-1 text-xs leading-4 text-foreground font-medium";\n      copyButton.innerHTML = copyButtonLabel;\n      codeBlock.setAttribute("tabindex", "0");\n      codeBlock.appendChild(copyButton);\n\n      // wrap codebock with relative parent element\n      codeBlock?.parentNode?.insertBefore(wrapper, codeBlock);\n      wrapper.appendChild(codeBlock);\n\n      copyButton.addEventListener("click", async () => {\n        await copyCode(codeBlock, copyButton);\n      });\n    }\n\n    async function copyCode(block, button) {\n      const code = block.querySelector("code");\n      const text = code?.innerText;\n\n      await navigator.clipboard.writeText(text ?? "");\n\n      // visual feedback that task is completed\n      button.innerText = "Copied";\n\n      setTimeout(() => {\n        button.innerText = copyButtonLabel;\n      }, 700);\n    }\n  }\n  attachCopyButtons();\n\n  /** Scrolls the document to the top when\n   * the "Back to Top" button is clicked. */\n  function backToTop() {\n    document.querySelector("#back-to-top")?.addEventListener("click", () => {\n      document.body.scrollTop = 0; // For Safari\n      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera\n    });\n  }\n  backToTop();\n\n  /* Go to page start after page swap */\n  document.addEventListener("astro:after-swap", () =>\n    window.scrollTo({ left: 0, top: 0, behavior: "instant" })\n  );\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { ...layoutProps }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "BackButton", $$BackButton, {})} ${maybeRenderHead()}<main id="main-content"${addAttribute([
    "mx-auto w-full max-w-3xl px-4 pb-12",
    { "mt-8": false }
  ], "class:list")} data-pagefind-body> <h1 class="inline-block text-2xl font-bold text-accent sm:text-3xl"${addAttribute(renderTransition($$result2, "fam6wyqg", "", slugifyStr(title)), "data-astro-transition-scope")}> ${title} </h1> <div class="flex items-center gap-4"> ${renderComponent($$result2, "Datetime", $$Datetime, { "pubDatetime": pubDatetime, "modDatetime": modDatetime, "timezone": timezone, "size": "lg", "class": "my-2" })} ${renderComponent($$result2, "EditPost", $$EditPost, { "class": "max-sm:hidden", "hideEditPost": hideEditPost, "post": post })} </div> <article id="article" class="mx-auto prose mt-8 max-w-3xl"> ${renderComponent($$result2, "Content", Content, {})} </article> <hr class="my-8 border-dashed"> ${renderComponent($$result2, "EditPost", $$EditPost, { "class": "sm:hidden", "hideEditPost": hideEditPost, "post": post })} <ul class="mt-4 mb-8 sm:my-8"> ${tags.map((tag) => renderTemplate`${renderComponent($$result2, "Tag", $$Tag, { "tag": slugifyStr(tag), "tagName": tag })}`)} </ul> <div class="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end sm:gap-4"> ${renderComponent($$result2, "ShareLinks", $$ShareLinks, {})} <button id="back-to-top" class="focus-outline py-1 whitespace-nowrap hover:opacity-75"> ${renderComponent($$result2, "IconChevronLeft", IconChevronLeft, { "class": "inline-block rotate-90" })} <span>Back to Top</span> </button> </div> <hr class="my-6 border-dashed"> <!-- Previous/Next Post Buttons --> <div data-pagefind-ignore class="grid grid-cols-1 gap-6 sm:grid-cols-2"> ${prevPost && renderTemplate`<a${addAttribute(`/posts/${prevPost.slug}`, "href")} class="flex w-full gap-1 hover:opacity-75"> ${renderComponent($$result2, "IconChevronLeft", IconChevronLeft, { "class": "inline-block flex-none" })} <div> <span>Previous Post</span> <div class="text-sm text-accent/85">${prevPost.title}</div> </div> </a>`} ${nextPost && renderTemplate`<a${addAttribute(`/posts/${nextPost.slug}`, "href")} class="flex w-full justify-end gap-1 text-right hover:opacity-75 sm:col-start-2"> <div> <span>Next Post</span> <div class="text-sm text-accent/85">${nextPost.title}</div> </div> ${renderComponent($$result2, "IconChevronRight", IconChevronRight, { "class": "inline-block flex-none" })} </a>`} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` }));
}, "/home/trotsky/Projects/astro-agent-site/src/layouts/PostDetails.astro", "self");

const $$Astro = createAstro("https://astro-paper.pages.dev/");
async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const postResult = posts.map((post) => ({
    params: { slug: getPath(post.id, post.filePath, false) },
    props: { post }
  }));
  return postResult;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { post } = Astro2.props;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  return renderTemplate`${renderComponent($$result, "PostDetails", $$PostDetails, { "post": post, "posts": sortedPosts })}`;
}, "/home/trotsky/Projects/astro-agent-site/src/pages/posts/[...slug]/index.astro", void 0);

const $$file = "/home/trotsky/Projects/astro-agent-site/src/pages/posts/[...slug]/index.astro";
const $$url = "/posts/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
