import { FastifyRequest, FastifyReply } from "fastify";
import {
  addCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
} from "../services/categoriesServices";
import { StatusCodes } from "http-status-codes";
import { handleRequest } from "../utils/handleRequest";
import { categoriesInput } from "debflix-common/schemas";
import { AppError } from "../utils/errors";

export const addCategoryHandler = async (
  request: FastifyRequest<{ Body: categoriesInput }>,
  reply: FastifyReply
) => {
  return handleRequest(reply, StatusCodes.CREATED, () => {
    addCategory({ ...request.body, movies: request.body.movies || [] });
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
  return handleRequest(reply, StatusCodes.OK, () => {
    const category = getCategoryById(request.params.id);

    if (!category) {
      throw new AppError("Category not found", StatusCodes.NOT_FOUND);
    }
    return category;
  });
};

export const deleteCategoryHandler = async (
  request: FastifyRequest<{ Querystring: { id: string } }>,
  reply: FastifyReply
) => {
  return handleRequest(reply, StatusCodes.NO_CONTENT, () => {
    deleteCategory(request.query.id);
  });
};
