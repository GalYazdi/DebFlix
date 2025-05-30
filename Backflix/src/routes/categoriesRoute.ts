import { FastifyInstance } from "fastify";
import {
  addCategoryHandler,
  getCategoriesHandler,
  getCategoryByIdHandler,
  deleteCategoryHandler,
} from "../controllers/categoriesController";

export default function categoriesRoute(fastify: FastifyInstance) {
  return (
    fastify.post("/add", addCategoryHandler),
    fastify.get("/getAll", getCategoriesHandler),
    fastify.get("/get/:id", getCategoryByIdHandler),
    fastify.delete("/delete", deleteCategoryHandler)
  );
}
