import { z } from "zod";

export const moviesSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  year: z.number().int().max(new Date().getFullYear()),
  director: z.string(),
});

export type moviesInput = z.infer<typeof moviesSchema>;
