import {
  addActor,
  getActors,
  getActorById,
  deleteActor,
} from "../services/actorsServices";
import { FastifyReply, FastifyRequest } from "fastify";
import { StatusCodes } from "http-status-codes";
import { handleRequest } from "../utils/handleRequest";
import { actorsInput } from "debflix-common/schemas";
import { AppError } from "../utils/errors";

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
      throw new AppError("Actor not found", StatusCodes.NOT_FOUND)
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
