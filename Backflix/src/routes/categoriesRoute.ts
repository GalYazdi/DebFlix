import { FastifyInstance } from "fastify";
import {
  addCategoryHandler,
  getCategoriesHandler,
  getCategoryByIdHandler,
  deleteCategoryHandler,
} from "../controllers/categoriesController";
import { addCategorySchema } from "debflix-common/schemas";
import { getByIdParamsSchema } from "debflix-common/schemas";
import { getByIdQuerySchema } from "debflix-common/schemas";

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
