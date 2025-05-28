import { BaseEntity } from "./base";

export interface Movie extends BaseEntity {
  id: string;
  title: string;
  year: number;
  director: string;
}
