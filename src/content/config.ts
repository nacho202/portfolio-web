import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    pubDate: z.coerce.date(),
    featured: z.boolean().optional().default(false),
    github: z.string().optional(),
    live: z.string().optional(),
  }),
});

export const collections = {
  projects,
};
