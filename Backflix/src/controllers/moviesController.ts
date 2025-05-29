import { FastifyRequest, FastifyReply } from "fastify";
import {
  addMovie,
  getMovies,
  getMovieById,
  deleteMovie,
} from "../services/moviesServices";
const { StatusCodes } = require("http-status-codes");
import { Movie } from "../types/movie";

export const addMovieHandler = async (
  request: FastifyRequest<{ Body: Omit<Movie, "id"> }>,
  reply: FastifyReply
) => {
  try {
    const { title, year } = request.body;

    if (!title || !year) {
      return reply
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "Title and year are required" });
    }
    addMovie(request.body);
    return reply
      .status(StatusCodes.CREATED)
      .send({ message: "Movie created successfully" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return reply
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: message });
  }
};

export const getMoviesHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const movies = getMovies();
    return reply.status(StatusCodes.OK).send(movies);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return reply
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: message });
  }
};

export const getMovieByIdHandler = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const id = request.params.id;
  try {
    const movie = getMovieById(id);

    return !movie
      ? reply.status(StatusCodes.NOT_FOUND).send({ error: "Movie not found" })
      : reply.status(StatusCodes.OK).send(movie);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return reply
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: message });
  }
};

export const deleteMovieHandler = (
  request: FastifyRequest<{ Querystring: { id: string } }>,
  reply: FastifyReply
) => {
  const id = request.query.id;
  try {
    deleteMovie(id);
    return reply.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return reply
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: message });
  }
};
