const SITE = {
  website: "https://astro-paper.pages.dev/",
  // replace this with your deployed domain
  author: "Sat Naing",
  profile: "https://satnaing.dev/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "AstroPaper",
  ogImage: "astropaper-og.jpg",
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1e3,
  // show back button in post detail
  editPost: {
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/"
  },
  dynamicOgImage: true,
  lang: "en",
  // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok"
  // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
};

export { SITE as S };
