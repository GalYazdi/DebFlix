import {
  addActor,
  Actor,
  getActors,
  getActorById,
  deleteActor,
} from "../services/actorsServices";
import { Movie } from "../services/moviesServices";
import { FastifyReply, FastifyRequest } from "fastify";

export async function addActorHandler(
  request: FastifyRequest<{ Body: Omit<Actor, "id"> & { movies?: Movie[] } }>,
  reply: FastifyReply
) {
  const actorData = request.body;
  console.log("Received actor data:", actorData);
  try {
    if (!actorData.name || !actorData.age) {
      return reply.status(400).send({ error: "Name and age are required" });
    }
    const newActor = addActor(actorData);
    console.log("New actor added:", newActor);
    return reply.status(201).send(newActor);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return reply.status(500).send({ error: message });
  }
}

export async function getActorsHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const actors = getActors();
    return reply.status(200).send(actors);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return reply.status(500).send({ error: message });
  }
}

export async function getActorByIdHandler(
  request: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) {
  const id = Number(request.params.id);
  try {
    const actor = getActorById(id);

    if (!actor) {
      return reply.status(404).send({ error: "Actor not found" });
    }
    return reply.status(200).send(actor);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return reply.status(500).send({ error: message });
  }
}

export async function deleteActorHandler(
  request: FastifyRequest<{ Querystring: { id: string } }>,
  reply: FastifyReply
) {
  const id = Number(request.query.id);
  try {
    deleteActor(id);
    return reply.status(204).send();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return reply.status(500).send({ error: message });
  }
}
