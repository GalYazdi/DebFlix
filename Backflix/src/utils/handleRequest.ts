import { FastifyReply } from "fastify";
import { StatusCodes } from "http-status-codes";

export const handleRequest = async (
  reply: FastifyReply,
  statusCode: number,
  callback: () => any | Promise<any>
) => {
  try {
    return reply.status(statusCode).send(await callback());
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return reply
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: message });
  }
};
