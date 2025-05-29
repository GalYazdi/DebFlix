import { v4 as uuidv4 } from "uuid";
import { Movie } from "../types/movie";
import { Actor } from "../types/actor";

const actors: Actor[] = [];

export const addActor = (
  actor: Omit<Actor, "id"> & { movies?: Movie[] }
): Actor => {
  const existingActor = actors.find(
    (a) => a.name === actor.name && a.age === actor.age
  );
  if (existingActor) {
    throw new Error("Actor already exists");
  }

  const newActor: Actor = {
    ...actor,
    id: uuidv4(),
    movies: actor.movies || [],
  };

  actors.push(newActor);
  return newActor;
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
