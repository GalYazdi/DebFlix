import { FastifyRequest, FastifyReply } from "fastify";
import {
  addCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
} from "../services/categoriesServices";
import { StatusCodes } from "http-status-codes";
import { Category } from "../types/category";
import { handleRequest } from "../utils/handleRequest";

export const addCategoryHandler = async (
  request: FastifyRequest<{ Body: Omit<Category, "id"> }>,
  reply: FastifyReply
) => {
  const { name } = request.body;

  if (!name) {
    return reply
      .status(StatusCodes.BAD_REQUEST)
      .send({ error: "Name is required" });
  }
  return handleRequest(reply, StatusCodes.CREATED, () => {
    addCategory(request.body);
    return { message: "Category added successfully" };
  });
};

export const getCategoriesHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  return handleRequest(reply, StatusCodes.OK, getCategories);
};

export const getCategoryByIdHandler = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const id = request.params.id;
  return handleRequest(reply, StatusCodes.OK, () => {
    const category = getCategoryById(id);

    if (!category) {
      return reply
        .status(StatusCodes.NOT_FOUND)
        .send({ error: "Category not found" });
    }
    return category;
  });
};

export const deleteCategoryHandler = async (
  request: FastifyRequest<{ Querystring: { id: string } }>,
  reply: FastifyReply
) => {
  const id = request.query.id;
  return handleRequest(reply, StatusCodes.NO_CONTENT, () => {
    deleteCategory(id);
  });
};
