import { createFileRoute } from "@tanstack/react-router";
import api from "../lib/apiHandler";

export const Layout: React.FC<{}> = () => {  
  const fetchData = async () => {

    api.get("/products").then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      }
    });
  };

  fetchData();

  return (
    <></>
  );
};

export const Route = createFileRoute("/checkout")({
  component: Layout,
});
