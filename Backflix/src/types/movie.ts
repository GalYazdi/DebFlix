import { BaseEntity } from "./base";

export interface Movie extends BaseEntity {
  title: string;
  year: number;
  director: string;
}