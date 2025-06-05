import { FastifyInstance } from "fastify";
import {
  addCategoryHandler,
  getCategoriesHandler,
  getCategoryByIdHandler,
  deleteCategoryHandler,
} from "../controllers/categoriesController";
import { categoriesSchema } from "../schemas/categoriesSchema";

export const categoriesRoute = (fastify: FastifyInstance) => {
  return (
    fastify.post(
      "/add",
      { schema: { body: categoriesSchema } },
      addCategoryHandler
    ),
    fastify.get("/getAll", getCategoriesHandler),
    fastify.get("/get/:id", getCategoryByIdHandler),
    fastify.delete("/delete", deleteCategoryHandler)
  );
};
