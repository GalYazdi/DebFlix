type Movie = {
  id: number;
  title: string;
  year: number;
};

let movies: Movie[] = [];

function addMovie(movie: Omit<Movie, "id">): Movie {
  const existingMovie = movies.find(
    (m) => m.title === movie.title && m.year === movie.year
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

export { addMovie, Movie };
