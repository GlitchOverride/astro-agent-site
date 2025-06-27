import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, g as renderTemplate } from './astro/server_DVEZg-pu.mjs';
import 'kleur/colors';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import { c as createSvgComponent } from './Footer_0LvJXvqw.mjs';
import { S as SITE } from './config_C2KZyXPG.mjs';

const IconCalendar = createSvgComponent({"meta":{"src":"/_astro/IconCalendar.C0xY3fv4.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-calendar-week"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /><path d=\"M7 14h.013\" /><path d=\"M10.01 14h.005\" /><path d=\"M13.01 14h.005\" /><path d=\"M16.015 14h.005\" /><path d=\"M13.015 17h.005\" /><path d=\"M7.01 17h.005\" /><path d=\"M10.01 17h.005\" />"});

const $$Astro = createAstro("https://astro-paper.pages.dev/");
const $$Datetime = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Datetime;
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const {
    pubDatetime,
    modDatetime,
    size = "sm",
    class: className = "",
    timezone: postTimezone
  } = Astro2.props;
  const latestDatetime = modDatetime && modDatetime > pubDatetime ? modDatetime : pubDatetime;
  const datetime = dayjs(latestDatetime).tz(postTimezone || SITE.timezone);
  const date = datetime.format("D MMM, YYYY");
  const time = datetime.format("hh:mm A");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex items-end space-x-2 opacity-80", className], "class:list")}> ${renderComponent($$result, "IconCalendar", IconCalendar, { "class:list": [
    "inline-block size-6 min-w-[1.375rem]",
    { "scale-90": size === "sm" }
  ] })} ${modDatetime && modDatetime > pubDatetime ? renderTemplate`<span${addAttribute(["text-sm italic", { "sm:text-base": size === "lg" }], "class:list")}>
Updated:
</span>` : renderTemplate`<span class="sr-only">Published:</span>`} <span${addAttribute(["text-sm italic", { "sm:text-base": size === "lg" }], "class:list")}> <time${addAttribute(datetime.toISOString(), "datetime")}>${date}</time> <span aria-hidden="true"> | </span> <span class="sr-only">&nbsp;at&nbsp;</span> <span class="text-nowrap">${time}</span> </span> </div>`;
}, "/home/trotsky/Projects/astro-agent-site/src/components/Datetime.astro", void 0);

export { $$Datetime as $ };
