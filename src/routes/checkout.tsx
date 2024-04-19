import { createFileRoute } from "@tanstack/react-router";
import { useProducts } from "../hooks/useProduct";
import Product from "../components/Product";

export const Layout: React.FC = () => {
  const { isFetching, data, error } = useProducts(); // Example, replace with your own hook

  if (isFetching) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="grid grid-cols-3 gap-4 m-4">
        {data.map((item: { id: string, title: string, imagePath: string, price: number}) => (
          <Product name={item.title} img={item.imagePath} price={item.price}  key={item.id} />
        ))}
      </div>
    </>
  );
};

export const Route = createFileRoute("/checkout")({
  component: Layout,
});
