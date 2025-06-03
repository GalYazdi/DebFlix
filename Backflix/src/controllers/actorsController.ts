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
import { handleRequest } from "../utils/handleRequest";

export const addActorHandler = async (
  request: FastifyRequest<{ Body: Omit<Actor, "id"> }>,
  reply: FastifyReply
) => {
  const { name, birthDate } = request.body;
  if (!name || !birthDate) {
    return reply
      .status(StatusCodes.BAD_REQUEST)
      .send({ error: "Name and age are required" });
  }
  return handleRequest(reply, StatusCodes.CREATED, () => {
    addActor(request.body);
    return { message: "Actor created Successfully" };
  });
};

export const getActorsHandler = (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  handleRequest(reply, StatusCodes.OK, getActors);
};

export const getActorByIdHandler = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const id = request.params.id;
  return handleRequest(reply, StatusCodes.OK, () => {
    const actor = getActorById(id);
    if (!actor) {
      return reply
        .status(StatusCodes.NOT_FOUND)
        .send({ error: "Actor not found" });
    }
    return actor;
  });
};

export const deleteActorHandler = (
  request: FastifyRequest<{ Querystring: { id: string } }>,
  reply: FastifyReply
) => {
  const id = request.query.id;
  return handleRequest(reply, StatusCodes.NO_CONTENT, () => {
    deleteActor(id);
  });
};
