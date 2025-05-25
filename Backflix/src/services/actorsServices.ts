import { Movie } from "./moviesServices";

type Actor = {
    id: number;
    name: string;
    age: number;
    movies: Movie[];
}

let actors: Actor[] = [];

function addActor(actor: Omit<Actor, "id">): Actor {
    const existingActor = actors.find((a) => a.name === actor.name && a.age === actor.age);
    if (existingActor) {
        throw new Error("Actor already exists");
    }

    const newActor: Actor = {
        ...actor,
        id: actors.length + 1,
        movies: [],
    };

    actors.push(newActor);
    return newActor;
}