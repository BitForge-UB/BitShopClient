import { create } from "zustand";
import { ProductType } from "../types/products";

interface ProductState {
  selectedProducts: ProductType[];
  addProduct: (product: ProductType) => void;
  removeProduct: (product: ProductType) => void;
  clearProducts: () => void;
}

export const useProductStore = create<ProductState>()((set) => ({
  selectedProducts: JSON.parse(
    localStorage.getItem("selectedProducts") || "[]"
  ) as ProductType[],
  addProduct: (product: ProductType) =>
    set(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (state: { selectedProducts: any }) => (
        localStorage.setItem(
          "selectedProducts",
          JSON.stringify([...state.selectedProducts, product])
        ),
        {
          selectedProducts: [...state.selectedProducts, product],
        }
      )
    ),

  removeProduct: (product: ProductType) =>
    set(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (state: { selectedProducts: any }) => (
        localStorage.setItem(
          "selectedProducts",
          JSON.stringify(
            state.selectedProducts.filter(
              (selectedProduct: ProductType) =>
                selectedProduct.id !== product.id
            )
          )
        ),
        {
          selectedProducts: state.selectedProducts.filter(
            (selectedProduct: ProductType) => selectedProduct.id !== product.id
          ),
        }
      )
    ),

  clearProducts: () =>
    set(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      () => (
        localStorage.setItem("selectedProducts", "[]"),
        {
          selectedProducts: [],
        }
      )
    ),
}));
