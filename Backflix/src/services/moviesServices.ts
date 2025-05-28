import { Movie } from "../types/movie";
import { v4 as uuidv4 } from "uuid";

const movies: Movie[] = [];

export const addMovie = (movie: Omit<Movie, "id">): Movie => {
  const existingMovie = movies.find(
    (m) =>
      m.title === movie.title &&
      m.year === movie.year &&
      m.director === movie.director
  );
  if (existingMovie) {
    throw new Error("Movie already exists");
  }

  const newMovie: Movie = {
    ...movie,
    id: uuidv4(),
  };
  movies.push(newMovie);

  return newMovie;
};

export const getMovies = () => movies;

export const getMovieById = (id: string): Movie | undefined =>
  movies.find((movie) => movie.id === id);

export const deleteMovie = (id: string): void => {
  const index = movies.findIndex((movie) => movie.id === id);
  if (index === -1) {
    throw new Error("Movie not found");
  }
  movies.splice(index, 1);
};
