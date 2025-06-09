import { z } from "zod";

export const moviesInputSchema = z
  .object({
    title: z.string().min(1),
    year: z.number().int().min(1800).max(new Date().getFullYear()),
    director: z.string(),
  })
  .strict();

export const fullMoviesSchema = moviesInputSchema
  .extend({
    id: z.string().uuid(),
  })
  .strict();

export type moviesInput = z.infer<typeof moviesInputSchema>;