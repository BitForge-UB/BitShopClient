import api from "../apiHandler";

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const getBrowseProducts = async (query: string) => {
  const response = await api.get("/products/browse/" + query);
  return response.data;
};
