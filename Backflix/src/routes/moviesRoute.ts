import { FastifyInstance } from "fastify";
import {
  addMovieHandler,
  getMoviesHandler,
  getMovieByIdHandler,
  deleteMovieHandler,
} from "../controllers/moviesController";
import { moviesInputSchema } from "../schemas/moviesSchema";
import { paramsSchema } from "../schemas/paramsSchema";
import { queryStringSchema } from "../schemas/queryStringSchema";

export const movieRoutes = (fastify: FastifyInstance) => {
  fastify.addHook("onRequest", async (request, reply) => {
    console.log("New /movies request:");
    console.log("Method:", request.method);
    console.log("URL:", request.url);
    console.log("Headers:", request.headers);
    console.log("Params:", request.params);
    console.log("Query:", request.query);
  });

  fastify.post("/add", { schema: { body: moviesInputSchema } }, addMovieHandler);
  fastify.get("/getAll",  getMoviesHandler);
  fastify.get("/get/:id", {schema: {params: paramsSchema}}, getMovieByIdHandler);
  fastify.delete("/delete", {schema: {querystring: queryStringSchema}}, deleteMovieHandler);
};
