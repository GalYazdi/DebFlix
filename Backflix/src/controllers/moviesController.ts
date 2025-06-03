import { FastifyRequest, FastifyReply } from "fastify";
import {
  addMovie,
  getMovies,
  getMovieById,
  deleteMovie,
} from "../services/moviesServices";
import { StatusCodes } from "http-status-codes";
import { Movie } from "../types/movie";
import { handleRequest } from "../utils/handleRequest";

export const addMovieHandler = async (
  request: FastifyRequest<{ Body: Omit<Movie, "id"> }>,
  reply: FastifyReply
) => {
  const { title, year } = request.body;

  if (!title || !year) {
    return reply
      .status(StatusCodes.BAD_REQUEST)
      .send({ error: "Title and year are required" });
  }
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
  const id = request.params.id;
  return handleRequest(reply, StatusCodes.OK, () => {
    const movie = getMovieById(id);
    if (!movie) {
      reply.status(StatusCodes.NOT_FOUND).send({ error: "Movie not found" });
      return;
    }
    return movie;
    // return movie ?? reply.status(StatusCodes.NOT_FOUND).send({ error: "Movie not found" });
  });
};

export const deleteMovieHandler = (
  request: FastifyRequest<{ Querystring: { id: string } }>,
  reply: FastifyReply
) => {
  const id = request.query.id;
  return handleRequest(reply, StatusCodes.NO_CONTENT, () => {
    deleteMovie(id);
  });
};
