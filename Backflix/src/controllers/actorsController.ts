import {
  addActor,
  getActors,
  getActorById,
  deleteActor,
} from "../services/actorsServices";
import { FastifyReply, FastifyRequest } from "fastify";
import { StatusCodes } from "http-status-codes";
import { handleRequest } from "../utils/handleRequest";
import { actorsInput } from "../schemas/actorsSchema";

export const addActorHandler = async (
  request: FastifyRequest<{ Body: actorsInput }>,
  reply: FastifyReply
) => {
  return handleRequest(reply, StatusCodes.CREATED, () => {
    addActor({ ...request.body, birthDate: new Date(request.body.birthDate) });
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
  return handleRequest(reply, StatusCodes.OK, () => {
    const actor = getActorById(request.params.id);

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
  return handleRequest(reply, StatusCodes.NO_CONTENT, () => {
    deleteActor(request.query.id);
  });
};
