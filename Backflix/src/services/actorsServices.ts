import { v4 as uuidv4 } from "uuid";
import { Actor } from "debflix-common";
import { actors } from "./mockDB";


export const addActor = (actor: Omit<Actor, "id">) => {
  if (
    actors.find(
      ({ name, birthDate }) =>
        name === actor.name && birthDate === actor.birthDate
    )
  ) {
    throw new Error("Actor already exists");
  }

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
  index === -1
    ? (() => {
        throw new Error("Actor not found");
      })()
    : null;

  actors.splice(index, 1);
};
