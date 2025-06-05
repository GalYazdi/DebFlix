import { z } from "zod";
import { moviesSchema } from "./moviesSchema";

export const categoriesSchema = z.object({
  name: z.string(),
  movies: z.array(moviesSchema).optional(),
});

export type categoriesInput = z.infer<typeof categoriesSchema>;
