import { Movie } from "./movie";
import { BaseEntity } from "./base";

export interface Category extends BaseEntity {
    id: string;
    name: string;
    movies: Movie[];
}