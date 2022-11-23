import { ProductsSchema, ProductSchema } from "../types";

export const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const parsed = ProductsSchema.parse(data);
  return parsed;
};

export const getProduct = async (id: any) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  const parsed = ProductSchema.parse(data);
  return parsed;
};
