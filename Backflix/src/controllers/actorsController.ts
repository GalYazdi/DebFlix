import {
  addActor,
  getActors,
  getActorById,
  deleteActor,
} from "../services/actorsServices";
import { FastifyReply, FastifyRequest } from "fastify";
import { Actor } from "../types/actor";
import { Movie } from "../types/movie";
import { StatusCodes } from "http-status-codes";

export const addActorHandler = async (
  request: FastifyRequest<{ Body: Omit<Actor, "id"> & { movies?: Movie[] } }>,
  reply: FastifyReply
) => {
  const { name, age } = request.body;
  try {
    if (!name || !age) {
      return reply
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "Name and age are required" });
    }
    addActor(request.body);
    return reply
      .status(StatusCodes.CREATED)
      .send({ message: "Actor created successfully" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return reply
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: message });
  }
};

export const getActorsHandler = (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const actors = getActors();
    return reply.status(StatusCodes.OK).send(actors);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return reply
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: message });
  }
};

export const getActorByIdHandler = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const id = request.params.id;
  try {
    const actor = getActorById(id);

    return !actor
      ? reply.status(StatusCodes.NOT_FOUND).send({ error: "Actor not found" })
      : reply.status(StatusCodes.OK).send(actor);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return reply
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: message });
  }
};

export const deleteActorHandler = (
  request: FastifyRequest<{ Querystring: { id: string } }>,
  reply: FastifyReply
) => {
  const id = request.query.id;
  try {
    deleteActor(id);
    return reply.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return reply
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: message });
  }
};
