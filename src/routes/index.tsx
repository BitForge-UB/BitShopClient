import { createFileRoute } from "@tanstack/react-router";
import { useProducts } from "../hooks/useProduct";
import Product from "../components/Product";
import { useEffect, useState } from "react";

export const Homepage: React.FC = () => {
  const { isFetching, data, error } = useProducts(); // Example, replace with your own hook
  const [selectedIds, setSelectedIds] = useState<number[]>(JSON.parse(localStorage.getItem("selectedIds") || "[]"));

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

  const onSelect = (id: number) => {
    localStorage.setItem("selectedIds", JSON.stringify(selectedIds.includes(id)
    ? selectedIds.filter((selectedId) => selectedId !== id)
    : [...selectedIds, id]));
    
    
    setSelectedIds(
      selectedIds.includes(id)
        ? selectedIds.filter((selectedId) => selectedId !== id)
        : [...selectedIds, id]
    );

    // store it to localstorage
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 m-4">
        {filteredProducts.map((item) => (
          <div
            onClick={() => onSelect(item.id)}
            key={item.id}
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
