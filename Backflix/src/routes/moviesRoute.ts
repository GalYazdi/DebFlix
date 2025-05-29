import { FastifyInstance } from "fastify";
import {
  addMovieHandler,
  getMoviesHandler,
  getMovieByIdHandler,
  deleteMovieHandler,
} from "../controllers/moviesController";

export default async function movieRoutes(fastify: FastifyInstance) {
  fastify.addHook("onRequest", async (request, reply) => {
    console.log("New /movies request:");
    console.log("Method:", request.method);
    console.log("URL:", request.url);
    console.log("Headers:", request.headers);
    console.log("Params:", request.params);
    console.log("Query:", request.query);
  });

  fastify.post("/add", addMovieHandler);
  fastify.get("/getAll", getMoviesHandler);
  fastify.get("/get/:id", getMovieByIdHandler);
  fastify.delete("/delete", deleteMovieHandler);
}
