import { createFileRoute } from "@tanstack/react-router";
import { useProducts } from "../hooks/useProduct";
import Product from "../components/Product";

export const Layout: React.FC = () => {

  const { isFetching, data, error } = useProducts(); // Example, replace with your own hook

  if (isFetching) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="bg-Secondary"> 
        <h1 className="text-4xl text-center border-b-2 border-Text">Utsjekking</h1>
        <h2 className="text-2xl text-center ">Ser dette riktig ut?</h2>
        <div className="grid grid-cols-2 gap-4 m-4">
          {data.map((item: { id: string, title: string, imagePath: string, price: number}) => (
            <div key={item.id}>
              <Product name={item.title} img={item.imagePath} price={item.price}  />
              <button className="bg-Button text-white rounded-lg p-1 w-full mt-2">Fjern</button>
            </div>
          ))}
        </div>
        <div className="p-4">
          <button className="bg-Button text-white rounded-lg p-2 w-full mt-2">Bekreft</button>
        </div>
      </div>
    </>
  );
};

export const Route = createFileRoute("/checkout")({
  component: Layout,
});
