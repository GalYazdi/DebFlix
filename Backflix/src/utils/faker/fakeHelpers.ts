import { faker } from "@faker-js/faker";
import { movies } from "../../services/mockDB";

export const getRandomMovies = () => {
  const numOfMovies = faker.number.int({ min: 4, max: 6 });
  return faker.helpers.arrayElements(movies, numOfMovies);
};

export const getRandomCategory = () => {
  return faker.helpers.arrayElement([
    "Action",
    "Drama",
    "Comedy",
    "Horror",
    "Documentary",
    "Animation",
  ]);
};

export const getRandomCategoties = () => {
  return faker.helpers.arrayElements(
    ["Action", "Drama", "Comedy", "Horror", "Documentary", "Animation"],
    3
  );
};
