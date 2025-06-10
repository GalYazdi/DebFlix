import { FastifyInstance } from "fastify";

import {
  addActorHandler,
  getActorsHandler,
  getActorByIdHandler,
  deleteActorHandler,
} from "../controllers/actorsController";
import { addActorSchema } from "debflix-common";
import { getByIdParamsSchema } from "debflix-common";
import { getByIdQuerySchema } from "debflix-common";

export const actorRoutes = (fastify: FastifyInstance) => {
  fastify.addHook("onRequest", async (request, reply) => {
    if (request.method === "DELETE") {
      console.log("Method:", request.method);
      console.log("URL:", request.url);
      console.log("Query:", request.query);
    }
  });
  fastify.post("/add", { schema: addActorSchema }, addActorHandler);
  fastify.get("/getAll", getActorsHandler);
  fastify.get("/get/:id", { schema: getByIdParamsSchema }, getActorByIdHandler);
  fastify.delete("/delete", { schema: getByIdQuerySchema }, deleteActorHandler);
};
