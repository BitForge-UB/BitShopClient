import { createFileRoute } from "@tanstack/react-router";
import { useProducts } from "../hooks/useProduct";

export const Layout: React.FC = () => {
  const { isFetching, data, error } = useProducts(); // Example, replace with your own hook

  if (isFetching) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <p>test</p>
      {data.map((item: string) => (
        <p>{item}</p>
      ))}
    </>
  );
};

export const Route = createFileRoute("/checkout")({
  component: Layout,
});
