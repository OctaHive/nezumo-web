import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Changelog entries rendered on /updates. Each entry is a markdown file in
// ./content/updates (srcDir is ".", so collections live at the project root).
const updates = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/updates" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    status: z.enum(["released", "planned"]).default("released"),
    highlights: z.array(z.string()).default([]),
    counts: z
      .object({
        new: z.number().int().nonnegative().default(0),
        improved: z.number().int().nonnegative().default(0),
        fixed: z.number().int().nonnegative().default(0),
      })
      .default({ new: 0, improved: 0, fixed: 0 }),
  }),
});

export const collections = { updates };
