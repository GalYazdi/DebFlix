import { faker } from "@faker-js/faker";
import { movies } from "../../services/mockDB";
import { Movie } from "../../types/movie";

const fakeMovieData = (): Movie => ({
  id: faker.string.uuid(),
  title: faker.lorem.words(3),
  year: faker.date.past().getFullYear(),
  director: faker.person.fullName(),
});

export const generateFakeMovies = (amount: number) => {
  Array.from({ length: amount }).forEach(() => {
    movies.push(fakeMovieData());
  });
};
