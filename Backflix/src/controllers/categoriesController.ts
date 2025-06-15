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
  return handleRequest(reply, StatusCodes.NO_CONTENT, () => {
    deleteCategory(request.query.id);
  });
};
