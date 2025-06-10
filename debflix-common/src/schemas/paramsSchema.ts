import { z } from "zod";

export const idParamsSchema = z
  .object({
    id: z.string().uuid(),
  })
  .strict();


export const getByIdParamsSchema = {params: idParamsSchema}
