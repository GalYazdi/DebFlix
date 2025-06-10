// src/schemas/actorsSchema.ts
import { z as z2 } from "zod";

// src/schemas/moviesSchema.ts
import { z } from "zod";
var moviesSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  year: z.number().int().min(1800).max((/* @__PURE__ */ new Date()).getFullYear() + 5),
  director: z.string()
}).strict();
var moviesInputSchema = moviesSchema.omit({ id: true });
var addMovieSchema = { body: moviesInputSchema };

// src/schemas/actorsSchema.ts
var actorsSchema = z2.object({
  name: z2.string(),
  birthDate: z2.number().int().min((/* @__PURE__ */ new Date("1900-01-01")).getTime()).max(Date.now()),
  movies: z2.array(moviesSchema).optional()
}).strict();
var addActorSchema = { body: actorsSchema };

// src/schemas/categoriesSchema.ts
import { z as z3 } from "zod";
var categoriesSchema = z3.object({
  name: z3.string(),
  movies: z3.array(moviesSchema).optional()
}).strict();
var addCategorySchema = { body: categoriesSchema };

// src/schemas/paramsSchema.ts
import { z as z4 } from "zod";
var idParamsSchema = z4.object({
  id: z4.string().uuid()
}).strict();
var getByIdParamsSchema = { params: idParamsSchema };

// src/schemas/queryStringSchema.ts
import { z as z5 } from "zod";
var idQuerySchema = z5.object({
  id: z5.string().uuid()
}).strict();
var getByIdQuerySchema = { querystring: idQuerySchema };
export {
  actorsSchema,
  addActorSchema,
  addCategorySchema,
  addMovieSchema,
  categoriesSchema,
  getByIdParamsSchema,
  getByIdQuerySchema,
  idParamsSchema,
  idQuerySchema,
  moviesInputSchema,
  moviesSchema
};
