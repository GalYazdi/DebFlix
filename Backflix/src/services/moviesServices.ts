import { Movie } from "debflix-common/types";
import { v4 as uuidv4 } from "uuid";
import { movies } from "./mockDB";
import { AppError } from "../utils/errors";
import { StatusCodes } from "http-status-codes";

export const addMovie = (movie: Omit<Movie, "id">) => {
  movies.find(
    (m) =>
      m.title === movie.title &&
      m.year === movie.year &&
      m.director === movie.director
  ) &&
    (() => {
      throw new AppError("Movie already exists", StatusCodes.CONFLICT);
    })();

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
    && (() => {
        throw new AppError("Movie not found", StatusCodes.NOT_FOUND);
      })()

  movies.splice(index, 1);
};
