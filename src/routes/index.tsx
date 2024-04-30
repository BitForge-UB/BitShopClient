import { createFileRoute } from "@tanstack/react-router";
import { useProducts } from "../hooks/useProduct";
import Product from "../components/Product";
import { ProductType } from "../types/products";
import { useProductStore } from "../store/productStore";

export const Homepage: React.FC = () => {
  const productStore = useProductStore();
  const { isFetching, data, error } = useProducts(); // Example, replace with your own hook

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

  const onSelect = (product: ProductType) => {
    const isSelected = productStore.selectedProducts.some(
      (selectedProduct) => selectedProduct.id === product.id
    );

    if (isSelected) {
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(
          productStore.selectedProducts.filter(
            (selectedProduct) => selectedProduct.id !== product.id
          )
        )
      );

      productStore.removeProduct(product);
    } else {
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify([...productStore.selectedProducts, product])
      );

      productStore.addProduct(product);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 m-4">
        {filteredProducts.map((item: ProductType) => (
          <div onClick={() => onSelect(item)} key={item.id}>
            <Product
              name={item.title}
              img={item.imagePath}
              price={item.price}
              key={item.id}
              quantity={item.quantity}
              isSelected={productStore.selectedProducts.some(
                (selectedProduct) => selectedProduct.id === item.id
              )}
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
