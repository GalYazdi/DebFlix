import { FastifyInstance } from "fastify";

import {
  addActorHandler,
  getActorsHandler,
  getActorByIdHandler,
  deleteActorHandler,
} from "../controllers/actorsController";
import {addActorSchema } from "../schemas/actorsSchema";
import { getByIdParamsSchema } from "../schemas/paramsSchema";
import {
  getByIdQuerySchema,
 
} from "../schemas/queryStringSchema";

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
