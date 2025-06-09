import { faker } from "@faker-js/faker";
import { actors } from "../../services/mockDB";
import { getRandomMovies } from "./fakeHelpers";
import { Actor } from "../../types/actor";

const fakeActorData = (): Actor => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  birthDate: faker.date.birthdate(),
  movies: getRandomMovies(),
});

export const generateFakeActors = (amount: number) => {
  Array.from({ length: amount }).forEach(() => {
    actors.push(fakeActorData());
  });
};
