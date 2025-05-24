import { FastifyRequest, FastifyReply } from "fastify";
import { addMovie, Movie, getMovies } from "../services/moviesServices";

export async function addMovieHandler(
  request: FastifyRequest<{ Body: Omit<Movie, "id"> }>,
  reply: FastifyReply
) {
  try {
    const movieData = request.body;

    if (!movieData.title || !movieData.year) {
      return reply.status(400).send({ error: "Title and year are required" });
    }
    const newMovie = addMovie(movieData);
    return reply.status(201).send(newMovie);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return reply.status(500).send({ error: message });
  }
}

export async function getMoviesHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const movies = getMovies();
    return reply.status(200).send(movies);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return reply.status(500).send({ error: message });
  }
}

export async function getMovieByIdHandler(
  request: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) {
  const id = Number(request.params.id);
  try {
    const movie = getMovies().find((m) => m.id === id);
    console.log("movies:", getMovies());

    if (!movie) {
      return reply.status(404).send({ error: "Movie not found" });
    }
    return reply.status(200).send(movie);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return reply.status(500).send({ error: message });
  }
}
