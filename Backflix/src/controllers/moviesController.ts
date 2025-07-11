import { FastifyRequest, FastifyReply } from "fastify";
import {
  addMovie,
  getMovies,
  getMovieById,
  deleteMovie,
} from "../services/moviesServices";
import { StatusCodes } from "http-status-codes";
import { handleRequest } from "../utils/handleRequest";
import { moviesInput } from "debflix-common/schemas";
import { AppError } from "../utils/errors";

export const addMovieHandler = async (
  request: FastifyRequest<{ Body: moviesInput }>,
  reply: FastifyReply
) => {
  return handleRequest(reply, StatusCodes.CREATED, () => {
    addMovie(request.body);
    return { message: "Movie created successfully" };
  });
};

export const getMoviesHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  return handleRequest(reply, StatusCodes.OK, getMovies);
};

export const getMovieByIdHandler = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  return handleRequest(reply, StatusCodes.OK, () => {
    const movie =
      getMovieById(request.params.id) ||
      (() => {
        throw new AppError("Movie not found", StatusCodes.NOT_FOUND);
      })();

    return movie;
  });
};

export const deleteMovieHandler = (
  request: FastifyRequest<{ Querystring: { id: string } }>,
  reply: FastifyReply
) => {
  return handleRequest(reply, StatusCodes.NO_CONTENT, () => {
    deleteMovie(request.query.id);
  });
};
