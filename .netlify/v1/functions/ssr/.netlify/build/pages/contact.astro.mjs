import { a as createComponent, r as renderComponent, e as renderScript, g as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DVEZg-pu.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, e as $$Hr, d as $$Footer } from '../chunks/Footer_0LvJXvqw.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact | Palmetto Pints" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main id="main-content"> <section id="contact" class="pt-8 pb-6"> <h1 class="my-4 inline-block text-4xl font-bold sm:my-8 sm:text-5xl">
Contact Us
</h1> <p class="mb-8">Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible.</p> <form id="contact-form" class="space-y-6"> <div> <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label> <input type="text" id="name" name="name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label> <input type="email" id="email" name="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400"> </div> <div> <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label> <textarea id="message" name="message" rows="4" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400"></textarea> </div> <div> <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
Send Message
</button> </div> </form> <div id="form-status" class="mt-4"></div> </section> ${renderComponent($$result2, "Hr", $$Hr, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderScript($$result, "/home/trotsky/Projects/astro-agent-site/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/trotsky/Projects/astro-agent-site/src/pages/contact.astro", void 0);

const $$file = "/home/trotsky/Projects/astro-agent-site/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
