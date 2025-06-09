import { z } from "zod";
import { fullMoviesSchema } from "./moviesSchema";

export const categoriesSchema = z
  .object({
    name: z.string(),
    movies: z.array(fullMoviesSchema).optional(),
  })
  .strict();

export type categoriesInput = z.infer<typeof categoriesSchema>;
export const addCategorySchema = {body: categoriesSchema}
