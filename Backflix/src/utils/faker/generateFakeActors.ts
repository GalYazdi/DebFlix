import { faker } from "@faker-js/faker";
import { actors } from "../../services/mockDB";
import { getRandomMovies } from "./fakeHelpers";
import { Actor } from "debflix-common/types";

const fakeActorData = (): Actor => ({
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  gender: faker.person.gender(),
  birthDate: faker.date.birthdate(),
  movies: getRandomMovies(),
});

export const generateFakeActors = (amount: number) => {
  Array.from({ length: amount }).forEach(() => {
    actors.push(fakeActorData());
  });
};
