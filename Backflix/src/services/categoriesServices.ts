import { Category } from "../types/category";
import { v4 as uuidv4 } from "uuid";

const categories: Category[] = [];

export const addCategory = (category: Omit<Category, "id">) => {
  const existingCategory = categories.find((c) => c.name === category.name);

  if (existingCategory) {
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
