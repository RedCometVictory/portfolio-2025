import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  // v5 way of getting data
  // load all data from specified location
  // glob with * fetches all files in folders and sub folders with extenstions specified, base indicated what folder to look in.
  // glob is no longer needed as astro v4 and v5 handle this internally.
  loader: glob({ pattern: "**/*.{md, mdx}", base: "./src/content/blog" }),
  // soon type to be depricated, but still works for local files
  // type: 'content',
  schema: z.object ({
    title: z.string(),
    published: z.date(),
    updated: z.date(),
    // published: z.string().datetime(),
    // updated: z.string().datetime(),
    author: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    description: z.string().optional(),
    draft: z.boolean(),
    category: z.string().optional(),
    slug: z.string(),
  })
});

export const collections = {
  blog: blogCollection
};