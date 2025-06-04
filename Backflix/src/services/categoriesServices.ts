import { Category } from "../types/category";
import { v4 as uuidv4 } from "uuid";
import { categories } from "./mockDB";

export const addCategory = (category: Omit<Category, "id">) => {
  if (categories.find((c) => c.name === category.name)) {
    throw new Error("Category already exists");
  }

  const newCategory: Category = {
    ...category,
    id: uuidv4(),
    movies: category.movies || [],
  };

  categories.push(newCategory);
};

export const getCategories = () => categories;

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((c) => c.id === id);
};

export const deleteCategory = (id: string) => {
  const index = categories.findIndex((c) => c.id === id);
  index === -1
    ? (() => {
        throw new Error("Category not found");
      })()
    : null;

  categories.splice(index, 1);
};
