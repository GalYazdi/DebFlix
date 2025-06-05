import { z } from "zod";
import { moviesSchema } from "./moviesSchema";

export const actorsSchema = z.object({
  name: z.string(),
  birthDate: z
    .string()
    .refine(
      (val) =>
        !isNaN(Date.parse(val)) &&
        new Date(val) < new Date() &&
        new Date(val) >= new Date("1900-01-01")
    ),
  movies: z.array(moviesSchema).optional(),
});

export type actorsInput = z.infer<typeof actorsSchema>;
