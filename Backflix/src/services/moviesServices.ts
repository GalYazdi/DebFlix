import { Movie } from "debflix-common/types";
import { v4 as uuidv4 } from "uuid";
import { movies } from "./mockDB";

export const addMovie = (movie: Omit<Movie, "id">) => {
  if (
    movies.find(
      (m) =>
        m.title === movie.title &&
        m.year === movie.year &&
        m.director === movie.director
    )
  ) {
    throw new Error("Movie already exists");
  }

  const newMovie: Movie = {
    ...movie,
    id: uuidv4(),
  };
  movies.push(newMovie);
};

export const getMovies = () => movies;

export const getMovieById = (id: string): Movie | undefined =>
  movies.find((movie) => movie.id === id);

export const deleteMovie = (id: string): void => {
  const index = movies.findIndex((movie) => movie.id === id);
  index === -1
    ? (() => {
        throw new Error("Movie not found");
      })()
    : null;

  movies.splice(index, 1);
};
