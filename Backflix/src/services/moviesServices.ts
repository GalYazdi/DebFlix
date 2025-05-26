type Movie = {
  id: number;
  title: string;
  year: number;
  director: string;
};

let movies: Movie[] = [];

function addMovie(movie: Omit<Movie, "id">): Movie {
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
    id: movies.length + 1,
  };
  movies.push(newMovie);

  return newMovie;
}

function getMovies(): Movie[] {
  return movies;
}

function getMovieById(id: number): Movie | undefined {
  return movies.find((movie) => movie.id === id);
}

function deleteMovie(id: number): void {
  const index = movies.findIndex((movie) => movie.id === id);
  if (index === -1) {
    throw new Error("Movie not found");
  }
  movies.splice(index, 1);
}

export { addMovie, Movie, getMovies, deleteMovie, getMovieById };
