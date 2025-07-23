import { faker } from "@faker-js/faker";
import { movies } from "../../services/mockDB";
import { Movie } from "debflix-common/types";
import {  getRandomCategoties } from "./fakeHelpers";

const fakeMovieData = (): Movie => ({
  id: faker.string.uuid(),
  title: faker.lorem.words(1),
  year: faker.date.past().getFullYear(),
  director: faker.person.fullName(),
  rating: faker.number.float({ min: 0, max: 10, multipleOf: 0.1 }),
  likes: faker.number.int({ min: 0, max: 1000 }),
  categories: getRandomCategoties(),
});

export const generateFakeMovies = (amount: number) => {
  Array.from({ length: amount }).forEach(() => {
    movies.push(fakeMovieData());
  });
};
