import { FastifyInstance } from "fastify";
import { get } from "http";
import { addMovieHandler } from "../controllers/addMovieHandler";

export default async function movieRoutes(fastify: FastifyInstance) {
  fastify.post("/add", addMovieHandler);
}
