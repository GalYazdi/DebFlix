import { v4 as uuidv4 } from "uuid";
import { Actor } from "debflix-common/types";
import { actors } from "./mockDB";
import { AppError } from "../utils/errors";
import { StatusCodes } from "http-status-codes";

export const addActor = (actor: Omit<Actor, "id">) => {
  actors.find(
    ({ name, birthDate }) =>
      name === actor.name && birthDate === actor.birthDate
  ) &&
    (() => {
      throw new AppError("Actor already exists", StatusCodes.CONFLICT);
    })();

  const newActor: Actor = {
    ...actor,
    id: uuidv4(),
    movies: actor.movies || [],
  };

  actors.push(newActor);
};

export const getActors = () => actors;

export const getActorById = (id: string): Actor | undefined => {
  return actors.find((actor) => actor.id === id);
};

export const deleteActor = (id: string) => {
  const index = actors.findIndex((actor) => actor.id === id);
  index === -1 &&
    (() => {
      throw new AppError("Actor not found", StatusCodes.NOT_FOUND);
    })();

  actors.splice(index, 1);
};
