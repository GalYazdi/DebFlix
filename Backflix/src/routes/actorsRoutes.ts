import { FastifyInstance } from "fastify";

import {
  addActorHandler,
  getActorsHandler,
  getActorByIdHandler,
  deleteActorHandler,
} from "../controllers/actorsController";
import { actorsSchema } from "../schemas/actorsSchema";
import { paramsSchema } from "../schemas/paramsSchema";
import { queryStringSchema } from "../schemas/queryStringSchema";

export const actorRoutes = (fastify: FastifyInstance) => {
  fastify.addHook("onRequest", async (request, reply) => {
    if (request.method === "DELETE") {
      console.log("Method:", request.method);
      console.log("URL:", request.url);
      console.log("Query:", request.query);
    }
  });
  fastify.post("/add", { schema: { body: actorsSchema } }, addActorHandler);
  fastify.get("/getAll", getActorsHandler);
  fastify.get("/get/:id", {schema: {params: paramsSchema}}, getActorByIdHandler);
  fastify.delete("/delete", {schema: {querystring: queryStringSchema}}, deleteActorHandler);
};
