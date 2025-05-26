import { FastifyInstance } from "fastify";

import {
  addActorHandler,
  getActorsHandler,
  getActorByIdHandler,
  deleteActorHandler,
} from "../controllers/actorsController";

export default async function actorRoutes(fastify: FastifyInstance) {
  fastify.post("/add", addActorHandler);
  fastify.get("/getAll", getActorsHandler);
  fastify.get("/get/:id", getActorByIdHandler);
  fastify.delete("/delete", deleteActorHandler);
}
