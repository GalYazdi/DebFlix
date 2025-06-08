import { z } from "zod";
import { fullMoviesSchema } from "./moviesSchema";

export const categoriesSchema = z.object({
  name: z.string(),
  movies: z.array(fullMoviesSchema).optional(),
});

export type categoriesInput = z.infer<typeof categoriesSchema>;
