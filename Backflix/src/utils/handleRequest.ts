import { FastifyReply } from "fastify";
import { StatusCodes } from "http-status-codes";
import { AppError } from "./errors";

export const handleRequest = async (
  reply: FastifyReply,
  statusCode: number,
  callback: () => any | Promise<any>
) => {
  try {
    return reply.status(statusCode).send(await callback());
  } catch (error) {
    const message = error instanceof AppError ? error.message : "Unknown error";
    const status =
      error instanceof AppError
        ? error.statusCode
        : StatusCodes.INTERNAL_SERVER_ERROR;

    return reply.status(status).send({ error: message });
  }
};
