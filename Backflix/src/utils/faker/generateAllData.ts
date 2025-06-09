import { generateFakeActors } from "./generateFakeActors";
import { generateFakeCategories } from "./generateFakeCategories";
import { generateFakeMovies } from "./generateFakeMovies";

export const generateFakeData = (amount: number) => {
  generateFakeMovies(amount);
  generateFakeActors(amount);
  generateFakeCategories(amount);
};
