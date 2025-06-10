import { FastifyInstance } from "fastify";
import {
  addCategoryHandler,
  getCategoriesHandler,
  getCategoryByIdHandler,
  deleteCategoryHandler,
} from "../controllers/categoriesController";
import { addCategorySchema } from "debflix-common";
import { getByIdParamsSchema } from "debflix-common";
import { getByIdQuerySchema } from "debflix-common";

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
