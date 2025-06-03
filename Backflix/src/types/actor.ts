import { BaseEntity } from "./base";
import { Movie } from "./movie";

export interface Actor extends BaseEntity {
  name: string;
  birthDate: Date;
  movies?: Movie[];
}
