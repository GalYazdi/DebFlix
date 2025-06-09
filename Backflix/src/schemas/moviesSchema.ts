import { z } from "zod";

export const moviesSchema = z
  .object({
    id: z.string().uuid(),
    title: z.string().min(1),
    year: z
      .number()
      .int()
      .min(1800)
      .max(new Date().getFullYear() + 5),
    director: z.string(),
  })
  .strict();

export const moviesInputSchema = moviesSchema.omit({ id: true });
export const addMovieSchema = { body: moviesInputSchema };
export type moviesInput = z.infer<typeof moviesInputSchema>;
