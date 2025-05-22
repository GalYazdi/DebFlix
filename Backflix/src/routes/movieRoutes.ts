import { FastifyInstance } from "fastify";
import { get } from "http";
import { addMovieHandler } from "../controllers/moviesController";

export default async function movieRoutes(fastify: FastifyInstance) {
  fastify.post("/add", addMovieHandler);
}
