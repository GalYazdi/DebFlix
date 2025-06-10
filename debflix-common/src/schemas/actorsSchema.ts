import { z } from "zod";
import { moviesSchema } from "./moviesSchema";

export const actorsSchema = z
  .object({
    name: z.string(),
    birthDate: z
      .number()
      .int()
      .min(new Date("1900-01-01").getTime())
      .max(Date.now()),
    movies: z.array(moviesSchema).optional(),
  })
  .strict();

export type actorsInput = z.infer<typeof actorsSchema>;

export const addActorSchema = { body: actorsSchema };
