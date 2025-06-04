import { faker } from "@faker-js/faker";
import { categories } from "../../services/mockDB";
import { getRandomCategory, getRandomMovies } from "../fakeHelpers";

const fakeCategoryData = () => ({
  id: faker.string.uuid(),
  name: getRandomCategory(),
  movies: getRandomMovies(),
});

export const generateFakeCategories = (amount: number) => {
    Array.from({length: amount}).forEach(() => {categories.push(fakeCategoryData())})
}
