import { FastifyInstance } from "fastify";
import {
  addCategoryHandler,
  getCategoriesHandler,
  getCategoryByIdHandler,
  deleteCategoryHandler,
} from "../controllers/categoriesController";
import { addCategorySchema, categoriesSchema } from "../schemas/categoriesSchema";
import { getByIdParamsSchema, idParamsSchema } from "../schemas/paramsSchema";
import { getByIdQuerySchema, idQuerySchema } from "../schemas/queryStringSchema";

export const categoriesRoute = (fastify: FastifyInstance) => {
  return (
    fastify.post(
      "/add",
      { schema: addCategorySchema },
      addCategoryHandler
    ),
    fastify.get("/getAll", getCategoriesHandler),
    fastify.get(
      "/get/:id",
      { schema: getByIdParamsSchema },
      getCategoryByIdHandler
    ),
    fastify.delete(
      "/delete",
      { schema: getByIdQuerySchema },
      deleteCategoryHandler
    )
  );
};
