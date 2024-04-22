import { createFileRoute } from "@tanstack/react-router";
import { useProducts } from "../hooks/useProduct";
import Product from "../components/Product";
import { useState } from "react";

export const Homepage: React.FC = () => {
  const { isFetching, data, error } = useProducts(); // Example, replace with your own hook
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  if (isFetching) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  // Filter products with categoryName "Drikke"
  const filteredProducts = data.filter(
    (item: {
      id: string;
      title: string;
      imagePath: string;
      price: number;
      categoryName: string;
    }) => item.categoryName === "Drikke"
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-4 m-4">
        {filteredProducts.map((item) => (
          <div
            onClick={() =>
              setSelectedIds(
                selectedIds.includes(item.id)
                  ? selectedIds.filter((id) => id !== item.id)
                  : [...selectedIds, item.id]
              )
            }
          >
            <Product
              name={item.title}
              img={item.imagePath}
              price={item.price}
              key={item.id}
              isSelected={selectedIds.includes(item.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export const Route = createFileRoute("/")({
  component: Homepage,
});
