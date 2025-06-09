import { z } from "zod";

export const queryStringSchema = z
  .object({
    id: z.string().uuid(),
  })
  .strict();
