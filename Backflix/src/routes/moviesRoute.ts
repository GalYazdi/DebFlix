import { FastifyInstance } from "fastify";
import {
  addMovieHandler,
  getMoviesHandler,
  getMovieByIdHandler,
  deleteMovieHandler,
} from "../controllers/moviesController";
import { moviesSchema } from "../schemas/moviesSchema";

export const movieRoutes = (fastify: FastifyInstance) => {
  fastify.addHook("onRequest", async (request, reply) => {
    console.log("New /movies request:");
    console.log("Method:", request.method);
    console.log("URL:", request.url);
    console.log("Headers:", request.headers);
    console.log("Params:", request.params);
    console.log("Query:", request.query);
  });

  fastify.post("/add", { schema: { body: moviesSchema } }, addMovieHandler);
  fastify.get("/getAll", getMoviesHandler);
  fastify.get("/get/:id", getMovieByIdHandler);
  fastify.delete("/delete", deleteMovieHandler);
};
