import { useQuery } from "@tanstack/react-query";
import { getAi, getBrowseProducts, getProducts } from "../lib/products/productsApi";

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

export const useGetAi = (prompt: string) => {
  return useQuery({
    queryKey: ["browse"],
    queryFn: () => getAi(prompt),
    // do not run if prompt is empty
    enabled: prompt.length > 0,
  });
};