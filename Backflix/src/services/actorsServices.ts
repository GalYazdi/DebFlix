import { Movie } from "./moviesServices";

type Actor = {
  id: number;
  name: string;
  age: number;
  movies: Movie[];
};

let actors: Actor[] = [];

function addActor(actor: Omit<Actor, "id"> & { movies?: Movie[] }): Actor {
  const existingActor = actors.find(
    (a) => a.name === actor.name && a.age === actor.age
  );
  if (existingActor) {
    throw new Error("Actor already exists");
  }

  const newActor: Actor = {
    ...actor,
    id: actors.length + 1,
    movies: actor.movies || [],
  };

  actors.push(newActor);
  return newActor;
}

function getActors(): Actor[] {
  return actors;
}

function getActorById(id: number): Actor | undefined {
  return actors.find((actor) => actor.id === id);
}

function deleteActor(id: number): void {
  const index = actors.findIndex((actor) => actor.id === id);
  if (index === -1) {
    throw new Error("Actor not found");
  }
  actors.splice(index, 1);
}

export { addActor, Actor, getActors, getActorById, deleteActor };
