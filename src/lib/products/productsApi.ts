import api from "../apiHandler";

export const getProducts = async () => {
  const response = await api.get("/products?&page_size=100");
  return response.data;
};

export const getBrowseProducts = async (query: string) => {
  const response = await api.get("/products/browse/" + query);
  return response.data;
};

export const getAi = async (prompt: string) => {
  const response = await api.get("/ai/" + prompt);
  return response.data;
}
