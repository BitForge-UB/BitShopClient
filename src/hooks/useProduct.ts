import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../lib/products/productsApi";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
};
