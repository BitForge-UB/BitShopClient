import { useQuery } from "@tanstack/react-query";
import { getBrowseProducts, getProducts } from "../lib/products/productsApi";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
};

export const useBrowseProducts = (query: string) => {
  return useQuery({
    queryKey: ["browse"],
    queryFn: () => getBrowseProducts(query),
  });
};
