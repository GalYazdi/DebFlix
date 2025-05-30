import { FastifyRequest, FastifyReply } from "fastify";
import {
  addCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
} from "../services/categoriesServices";
import { StatusCodes } from "http-status-codes";
import { Category } from "../types/category";

export const addCategoryHandler = async (
  request: FastifyRequest<{ Body: Omit<Category, "id"> }>,
  reply: FastifyReply
) => {
  try {
    const { name } = request.body;
    if (!name) {
      return reply
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "Name is required" });
    }
    addCategory(request.body);
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    return reply
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: message });
  }
};

export const getCategoriesHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const categories = getCategories();
    return reply.status(StatusCodes.OK).send(categories);
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    return reply
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: message });
  }
};

export const getCategoryByIdHandler = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const id = request.params.id;
    const category = getCategoryById(id);
    return !category
      ? reply
          .status(StatusCodes.NOT_FOUND)
          .send({ error: "category not found" })
      : reply.status(StatusCodes.OK).send(category);
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    return reply
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: message });
  }
};

export const deleteCategoryHandler = async (
  request: FastifyRequest<{ Querystring: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const id = request.query.id;
    deleteCategory(id);
    return reply.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    return reply
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: message });
  }
};
