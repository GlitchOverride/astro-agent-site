import { c as createAstro, a as createComponent, b as addAttribute, e as renderScript, g as renderTemplate, d as renderSlot, G as renderHead, r as renderComponent, u as unescapeHTML, m as maybeRenderHead, s as spreadAttributes } from './astro/server_DVEZg-pu.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { S as SITE } from './config_C2KZyXPG.mjs';

const $$Astro$6 = createAstro("https://astro-paper.pages.dev/");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/trotsky/Projects/astro-agent-site/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/trotsky/Projects/astro-agent-site/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://astro-paper.pages.dev/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const googleSiteVerification = undefined                                               ;
  const {
    title = SITE.title,
    author = SITE.author,
    profile = SITE.profile,
    description = SITE.desc,
    ogImage = `/${SITE.ogImage}` ,
    canonicalURL = new URL(Astro2.url.pathname, Astro2.url),
    pubDatetime,
    modDatetime,
    scrollSmooth = false
  } = Astro2.props;
  const socialImageURL = new URL(ogImage, Astro2.url);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `${title}`,
    image: `${socialImageURL}`,
    datePublished: `${pubDatetime?.toISOString()}`,
    ...modDatetime && { dateModified: modDatetime.toISOString() },
    author: [
      {
        "@type": "Person",
        name: `${author}`,
        ...profile && { url: profile }
      }
    ]
  };
  return renderTemplate(
    _a || (_a = __template(["<html", "", ' data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"', '><meta name="generator"', "><!-- General Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="author"', '><link rel="sitemap" href="/sitemap-index.xml"><!-- Open Graph / Facebook --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', "><!-- Article Published/Modified time -->", "", '<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Google JSON-LD Structured data --><script type="application/ld+json">', '</script><!-- Enable RSS feed auto-discovery  --><!-- https://docs.astro.build/en/recipes/rss/#enabling-rss-feed-auto-discovery --><link rel="alternate" type="application/rss+xml"', "", '><meta name="theme-color" content="">', "", '<script src="/toggle-theme.js"></script>', "</head> <body data-astro-cid-sckkx6r4> ", " </body></html>"])),
    addAttribute(`${SITE.lang}`, "lang"),
    addAttribute(`${scrollSmooth && "scroll-smooth"}`, "class"),
    addAttribute(canonicalURL, "href"),
    addAttribute(Astro2.generator, "content"),
    title,
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(author, "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(canonicalURL, "content"),
    addAttribute(socialImageURL, "content"),
    pubDatetime && renderTemplate`<meta property="article:published_time"${addAttribute(pubDatetime.toISOString(), "content")}>`,
    modDatetime && renderTemplate`<meta property="article:modified_time"${addAttribute(modDatetime.toISOString(), "content")}>`,
    addAttribute(canonicalURL, "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(socialImageURL, "content"),
    unescapeHTML(JSON.stringify(structuredData)),
    addAttribute(SITE.title, "title"),
    addAttribute(new URL("rss.xml", Astro2.site), "href"),
    // If PUBLIC_GOOGLE_SITE_VERIFICATION is set in the environment variable,
    // include google-site-verification tag in the heading
    // Learn more: https://support.google.com/webmasters/answer/9008080#meta_tag_verification&zippy=%2Chtml-tag
    googleSiteVerification,
    renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true }),
    renderHead(),
    renderSlot($$result, $$slots["default"])
  );
}, "/home/trotsky/Projects/astro-agent-site/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro("https://astro-paper.pages.dev/");
const $$Hr = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hr;
  const { noPadding = false, ariaHidden = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`max-w-3xl mx-auto ${noPadding ? "px-0" : "px-4"}`, "class")}> <hr class="border-border"${addAttribute(ariaHidden, "aria-hidden")}> </div>`;
}, "/home/trotsky/Projects/astro-agent-site/src/components/Hr.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const IconX = createSvgComponent({"meta":{"src":"/_astro/IconX.DK0Dc7zq.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-x"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" />"});

const IconMoon = createSvgComponent({"meta":{"src":"/_astro/IconMoon.CRxdR147.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-moon"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z\" />"});

const IconSearch = createSvgComponent({"meta":{"src":"/_astro/IconSearch.w3diR66o.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-search"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" />"});

const IconArchive = createSvgComponent({"meta":{"src":"/_astro/IconArchive.Woxh8eou.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-archive"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z\" /><path d=\"M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10\" /><path d=\"M10 12l4 0\" />"});

const IconSunHigh = createSvgComponent({"meta":{"src":"/_astro/IconSunHigh.EHu4P2Sl.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-sun-high"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z\" /><path d=\"M6.343 17.657l-1.414 1.414\" /><path d=\"M6.343 6.343l-1.414 -1.414\" /><path d=\"M17.657 6.343l1.414 -1.414\" /><path d=\"M17.657 17.657l1.414 1.414\" /><path d=\"M4 12h-2\" /><path d=\"M12 4v-2\" /><path d=\"M20 12h2\" /><path d=\"M12 20v2\" />"});

const IconMenuDeep = createSvgComponent({"meta":{"src":"/_astro/IconMenuDeep.CczWFiGg.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M4 6h16\" /><path d=\"M7 12h13\" /><path d=\"M10 18h10\" />"});

const $$Astro$3 = createAstro("https://astro-paper.pages.dev/");
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const {
    id,
    href,
    class: className = "",
    ariaLabel,
    title,
    disabled = false
  } = Astro2.props;
  return renderTemplate`${disabled ? renderTemplate`${maybeRenderHead()}<span${addAttribute(id, "id")}${addAttribute(["group inline-block", className], "class:list")}${addAttribute(title, "title")}${addAttribute(disabled, "aria-disabled")}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`<a${addAttribute(id, "id")}${addAttribute(href, "href")}${addAttribute(["group inline-block hover:text-accent", className], "class:list")}${addAttribute(ariaLabel, "aria-label")}${addAttribute(title, "title")}>${renderSlot($$result, $$slots["default"])}</a>`}`;
}, "/home/trotsky/Projects/astro-agent-site/src/components/LinkButton.astro", void 0);

const $$Astro$2 = createAstro("https://astro-paper.pages.dev/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  const currentPath = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  const isActive = (path) => {
    const currentPathArray = currentPath.split("/").filter((p) => p.trim());
    const pathArray = path.split("/").filter((p) => p.trim());
    return currentPath === path || currentPathArray[0] === pathArray[0];
  };
  return renderTemplate`${maybeRenderHead()}<header> <a id="skip-to-content" href="#main-content" class="absolute -top-full left-16 z-50 bg-background px-3 py-2 text-accent backdrop-blur-lg transition-all focus:top-4">
Skip to content
</a> <div id="nav-container" class="mx-auto flex max-w-3xl flex-col items-center justify-between sm:flex-row"> <div id="top-nav-wrap" class="relative flex w-full items-baseline justify-between bg-background p-4 sm:items-center sm:py-6"> <a href="/" class="absolute py-1 text-2xl leading-7 font-semibold whitespace-nowrap sm:static"> ${SITE.title} </a> <nav id="nav-menu" class="flex w-full flex-col items-center sm:ml-2 sm:flex-row sm:justify-end sm:space-x-4 sm:py-0"> <button id="menu-btn" class="focus-outline self-end p-2 sm:hidden" aria-label="Open Menu" aria-expanded="false" aria-controls="menu-items"> ${renderComponent($$result, "IconX", IconX, { "id": "close-icon", "class": "hidden" })} ${renderComponent($$result, "IconMenuDeep", IconMenuDeep, { "id": "menu-icon" })} </button> <ul id="menu-items"${addAttribute([
    "mt-4 grid w-44 grid-cols-2 place-content-center gap-2",
    "[&>li>a]:block [&>li>a]:px-4 [&>li>a]:py-3 [&>li>a]:text-center [&>li>a]:font-medium [&>li>a]:hover:text-accent sm:[&>li>a]:px-2 sm:[&>li>a]:py-1",
    "hidden",
    "sm:mt-0 sm:ml-0 sm:flex sm:w-auto sm:gap-x-5 sm:gap-y-0"
  ], "class:list")}> <li class="col-span-2"> <a href="/posts"${addAttribute({ "active-nav": isActive("/posts") }, "class:list")}>
Posts
</a> </li> <li class="col-span-2"> <a href="/tags"${addAttribute({ "active-nav": isActive("/tags") }, "class:list")}>
Tags
</a> </li> <li class="col-span-2"> <a href="/about"${addAttribute({ "active-nav": isActive("/about") }, "class:list")}>
About
</a> </li> <li class="col-span-2"> <a href="/contact"${addAttribute({ "active-nav": isActive("/contact") }, "class:list")}>
Contact
</a> </li> ${renderTemplate`<li class="col-span-2"> ${renderComponent($$result, "LinkButton", $$LinkButton, { "href": "/archives", "class:list": [
    "focus-outline flex justify-center p-3 sm:p-1",
    {
      "active-nav [&>svg]:stroke-accent": isActive("/archives")
    }
  ], "ariaLabel": "archives", "title": "Archives" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "IconArchive", IconArchive, { "class": "hidden sm:inline-block" })} <span class="sm:sr-only">Archives</span> ` })} </li>`} <li class="col-span-1 flex items-center justify-center"> ${renderComponent($$result, "LinkButton", $$LinkButton, { "href": "/search", "class:list": [
    "focus-outline flex p-3 sm:p-1",
    { "[&>svg]:stroke-accent": isActive("/search") }
  ], "ariaLabel": "search", "title": "Search" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "IconSearch", IconSearch, {})} <span class="sr-only">Search</span> ` })} </li> ${renderTemplate`<li class="col-span-1 flex items-center justify-center"> <button id="theme-btn" class="focus-outline relative size-12 p-4 sm:size-8 hover:[&>svg]:stroke-accent" title="Toggles light & dark" aria-label="auto" aria-live="polite"> ${renderComponent($$result, "IconMoon", IconMoon, { "class": "absolute top-[50%] left-[50%] -translate-[50%] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" })} ${renderComponent($$result, "IconSunHigh", IconSunHigh, { "class": "absolute top-[50%] left-[50%] -translate-[50%] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" })} </button> </li>`} </ul> </nav> </div> </div> ${renderComponent($$result, "Hr", $$Hr, {})} </header> ${renderScript($$result, "/home/trotsky/Projects/astro-agent-site/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/trotsky/Projects/astro-agent-site/src/components/Header.astro", void 0);

const IconMail = createSvgComponent({"meta":{"src":"/_astro/IconMail.BsR8RxJL.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-mail"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z\" /><path d=\"M3 7l9 6l9 -6\" />"});

const IconGitHub = createSvgComponent({"meta":{"src":"/_astro/IconGitHub.D4TpU-sh.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-github"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5\" />"});

const IconBrandX = createSvgComponent({"meta":{"src":"/_astro/IconBrandX.ATC87rTm.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-x"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M4 4l11.733 16h4.267l-11.733 -16z\" /><path d=\"M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772\" />"});

const IconLinkedin = createSvgComponent({"meta":{"src":"/_astro/IconLinkedin.CgFOWy_H.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M8 11v5\" /><path d=\"M8 8v.01\" /><path d=\"M12 16v-5\" /><path d=\"M16 16v-3a2 2 0 1 0 -4 0\" /><path d=\"M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z\" />"});

const IconWhatsapp = createSvgComponent({"meta":{"src":"/_astro/IconWhatsapp.B1vN587S.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9\" /><path d=\"M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1\" />"});

const IconFacebook = createSvgComponent({"meta":{"src":"/_astro/IconFacebook.DViGtK9D.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3\" />"});

const IconTelegram = createSvgComponent({"meta":{"src":"/_astro/IconTelegram.Btn5McfO.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4\" />"});

const IconPinterest = createSvgComponent({"meta":{"src":"/_astro/IconPinterest.Fl4F684Z.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-pinterest"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M8 20l4 -9\" /><path d=\"M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7\" /><path d=\"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" />"});

const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: ` ${SITE.title} on Github`,
    icon: IconGitHub
  },
  {
    name: "X",
    href: "https://x.com/username",
    linkTitle: `${SITE.title} on X`,
    icon: IconBrandX
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/username/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail
  }
];
const SHARE_LINKS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: IconPinterest
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail
  }
];

const $$Astro$1 = createAstro("https://astro-paper.pages.dev/");
const $$Socials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Socials;
  const { centered = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex-wrap justify-center gap-1", { flex: centered }], "class:list")}> ${SOCIALS.map((social) => renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": social.href, "class": "p-2 hover:rotate-6 sm:p-1", "title": social.linkTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "social.icon", social.icon, { "class": "inline-block size-6 scale-125 fill-transparent stroke-current stroke-2 opacity-90 group-hover:fill-transparent sm:scale-110" })} <span class="sr-only">${social.linkTitle}</span> ` })}`)} </div>`;
}, "/home/trotsky/Projects/astro-agent-site/src/components/Socials.astro", void 0);

const $$Astro = createAstro("https://astro-paper.pages.dev/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const { noMarginTop = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(["w-full", { "mt-auto": !noMarginTop }], "class:list")}> ${renderComponent($$result, "Hr", $$Hr, { "noPadding": true })} <div class="flex flex-col items-center justify-between py-6 sm:flex-row-reverse sm:py-4"> ${renderComponent($$result, "Socials", $$Socials, { "centered": true })} <div class="my-2 flex flex-col items-center whitespace-nowrap sm:flex-row"> <span>Copyright &#169; ${currentYear}</span> <span class="hidden sm:inline">&nbsp;|&nbsp;</span> <span>All rights reserved.</span> </div> </div> </footer>`;
}, "/home/trotsky/Projects/astro-agent-site/src/components/Footer.astro", void 0);

export { $$Layout as $, SOCIALS as S, $$Header as a, $$LinkButton as b, createSvgComponent as c, $$Footer as d, $$Hr as e, $$Socials as f, SHARE_LINKS as g };
