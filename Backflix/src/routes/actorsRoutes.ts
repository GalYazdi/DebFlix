import { FastifyInstance } from "fastify";

import {
  addActorHandler,
  getActorsHandler,
  getActorByIdHandler,
  deleteActorHandler,
} from "../controllers/actorsController";

export default async function actorRoutes(fastify: FastifyInstance) {
  fastify.addHook("onRequest", async (request, reply) => {
    if (request.method === "DELETE") {
      console.log("Method:", request.method);
      console.log("URL:", request.url);
      console.log("Query:", request.query);
    }
  });
  fastify.post("/add", addActorHandler);
  fastify.get("/getAll", getActorsHandler);
  fastify.get("/get/:id", getActorByIdHandler);
  fastify.delete("/delete", deleteActorHandler);
}
