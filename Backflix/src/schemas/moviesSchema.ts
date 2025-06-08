import { z } from "zod";

export const moviesInputSchema = z.object({
  title: z.string().min(2),
  year: z.number().int().min(1800).max(new Date().getFullYear()),
  director: z.string(),
});

export const fullMoviesSchema = moviesInputSchema.extend({
  id: z.string().uuid(),
});

export type moviesInput = z.infer<typeof moviesInputSchema>;
export type fullMovie = z.infer<typeof fullMoviesSchema>;
