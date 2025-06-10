"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  actorsSchema: () => actorsSchema,
  addActorSchema: () => addActorSchema,
  addCategorySchema: () => addCategorySchema,
  addMovieSchema: () => addMovieSchema,
  categoriesSchema: () => categoriesSchema,
  getByIdParamsSchema: () => getByIdParamsSchema,
  getByIdQuerySchema: () => getByIdQuerySchema,
  idParamsSchema: () => idParamsSchema,
  idQuerySchema: () => idQuerySchema,
  moviesInputSchema: () => moviesInputSchema,
  moviesSchema: () => moviesSchema
});
module.exports = __toCommonJS(index_exports);

// src/schemas/actorsSchema.ts
var import_zod2 = require("zod");

// src/schemas/moviesSchema.ts
var import_zod = require("zod");
var moviesSchema = import_zod.z.object({
  id: import_zod.z.string().uuid(),
  title: import_zod.z.string().min(1),
  year: import_zod.z.number().int().min(1800).max((/* @__PURE__ */ new Date()).getFullYear() + 5),
  director: import_zod.z.string()
}).strict();
var moviesInputSchema = moviesSchema.omit({ id: true });
var addMovieSchema = { body: moviesInputSchema };

// src/schemas/actorsSchema.ts
var actorsSchema = import_zod2.z.object({
  name: import_zod2.z.string(),
  birthDate: import_zod2.z.number().int().min((/* @__PURE__ */ new Date("1900-01-01")).getTime()).max(Date.now()),
  movies: import_zod2.z.array(moviesSchema).optional()
}).strict();
var addActorSchema = { body: actorsSchema };

// src/schemas/categoriesSchema.ts
var import_zod3 = require("zod");
var categoriesSchema = import_zod3.z.object({
  name: import_zod3.z.string(),
  movies: import_zod3.z.array(moviesSchema).optional()
}).strict();
var addCategorySchema = { body: categoriesSchema };

// src/schemas/paramsSchema.ts
var import_zod4 = require("zod");
var idParamsSchema = import_zod4.z.object({
  id: import_zod4.z.string().uuid()
}).strict();
var getByIdParamsSchema = { params: idParamsSchema };

// src/schemas/queryStringSchema.ts
var import_zod5 = require("zod");
var idQuerySchema = import_zod5.z.object({
  id: import_zod5.z.string().uuid()
}).strict();
var getByIdQuerySchema = { querystring: idQuerySchema };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
