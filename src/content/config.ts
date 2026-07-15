import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['お知らせ', 'プレスリリース', '実績', 'メディア']),
    description: z.string().optional(),
  }),
});

export const collections = { news };
