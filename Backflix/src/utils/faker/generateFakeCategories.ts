import { faker } from "@faker-js/faker";
import { categories } from "../../services/mockDB";
import { getRandomCategory, getRandomMovies } from "./fakeHelpers";
import { Category } from "debflix-common";

const fakeCategoryData = (): Category => ({
  id: faker.string.uuid(),
  name: getRandomCategory(),
  movies: getRandomMovies(),
});

export const generateFakeCategories = (amount: number) => {
  Array.from({ length: amount }).forEach(() => {
    categories.push(fakeCategoryData());
  });
};
