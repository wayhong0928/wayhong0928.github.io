import { defineCollection, z } from "astro:content";

export const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    period: z.object({ start: z.string(), end: z.string().optional() }),
    role: z.string(),
    techStack: z.array(z.string()).default([]),
    problem: z.string().optional(),
    actions: z.array(z.string()).default([]),
    impact: z.array(z.string()).default([]),
    links: z
      .object({
        demo: z.string().url().optional(),
        repo: z.string().url().optional(),
        slides: z.string().url().optional(),
      })
      .default({}),
    type: z.enum(["side", "academic", "work"]).default("side"),
  }),
});

export const activities = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    org: z.string().optional(),
    period: z.object({ start: z.string(), end: z.string().optional() }),
    description: z.string().optional(),
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
  }),
});

export const collections = { posts, projects, activities };