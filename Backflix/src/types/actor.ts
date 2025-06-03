import { BaseEntity } from "./base";
import { Movie } from "./movie";

export interface Actor extends BaseEntity {
  name: string;
  age: number;
  movies: Movie[];
}
