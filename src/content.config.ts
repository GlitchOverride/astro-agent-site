import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";
export const STRAPI_BLOG_PATH = "src/content/strapi-posts";

// Schema definition shared between local and Strapi content
const blogSchema = ({ image }: { image: any }) => {
  return z.object({
    author: z.string().default(SITE.author),
    pubDatetime: z.date(),
    modDatetime: z.date().optional().nullable(),
    title: z.string(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: image().or(z.string()).optional(),
    description: z.string(),
    canonicalURL: z.string().optional(),
    hideEditPost: z.boolean().optional(),
    timezone: z.string().optional(),
  });
};

// Local blog content collection
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: blogSchema,
});

// Strapi-generated blog content collection
const strapiBlog = defineCollection({
  loader: glob({ pattern: "*.md", base: `./${STRAPI_BLOG_PATH}` }),
  schema: blogSchema,
});

export const collections = { 
  blog,
  "strapi-blog": strapiBlog 
};
