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

export const getProductId = async (id: string) => {
  const response = await api.get("/products/" + id);
  return response.data;
}

export const sendOrder = async (order: Order[]) => {
  const response = await api.post("/checkout", {
    body: JSON.stringify(order),
  });
  return response.data;
}