import { z } from "zod";

export const moviesSchema = z.object({
  title: z.string().min(2),
  year: z.number().int().min(1800).max(new Date().getFullYear()),
  director: z.string(),
});

export type moviesInput = z.infer<typeof moviesSchema>;
