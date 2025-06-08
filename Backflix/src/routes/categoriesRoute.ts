import { FastifyInstance } from "fastify";
import {
  addCategoryHandler,
  getCategoriesHandler,
  getCategoryByIdHandler,
  deleteCategoryHandler,
} from "../controllers/categoriesController";
import { categoriesSchema } from "../schemas/categoriesSchema";
import { paramsSchema } from "../schemas/paramsSchema";
import { queryStringSchema } from "../schemas/queryStringSchema";

export const categoriesRoute = (fastify: FastifyInstance) => {
  return (
    fastify.post(
      "/add",
      { schema: { body: categoriesSchema } },
      addCategoryHandler
    ),
    fastify.get("/getAll", getCategoriesHandler),
    fastify.get(
      "/get/:id",
      { schema: { params: paramsSchema } },
      getCategoryByIdHandler
    ),
    fastify.delete(
      "/delete",
      { schema: { querystring: queryStringSchema } },
      deleteCategoryHandler
    )
  );
};
