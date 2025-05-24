import { FastifyInstance } from "fastify";
import { get } from "http";
import { addMovieHandler, getMoviesHandler } from "../controllers/moviesController";
import { getMovies } from "../services/moviesServices";

export default async function movieRoutes(fastify: FastifyInstance) {
  fastify.post("/add", addMovieHandler);
  fastify.get("/getAll", getMoviesHandler)
}
