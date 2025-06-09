import { z } from "zod";

export const idQuerySchema = z
  .object({
    id: z.string().uuid(),
  })
  .strict();

export const getByIdQuerySchema = {querystring: idQuerySchema }
