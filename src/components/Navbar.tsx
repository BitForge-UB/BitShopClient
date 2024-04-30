import React, { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { FiShoppingCart } from "react-icons/fi";
import { Search } from "./Search";
import bitshopLogo from "../assets/img/bitshop.svg";
import { ProductType } from "../types/products";
import { useProductStore } from "../store/productStore";
import Product from "./Product";

const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const productStore = useProductStore();

  const handleCartHover = () => {
    if (productStore.selectedProducts.length > 0) setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    if (productStore.selectedProducts.length === 0) setIsCartOpen(false);
  }, [productStore.selectedProducts]);

  return (
    <nav className="bg-Primary flex justify-center relative h-14">
      <Link
        to="/"
        className="absolute left-16 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-Title"
      >
        <img className="w-24 " src={bitshopLogo} alt="" />
      </Link>
      <div className="flex flex-row items-center justify-between gap-4 text-Title ml-12">
        <Search />
      </div>
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-Title">
        <div className="relative">
          <FiShoppingCart onClick={handleCartHover} />
          <span className="absolute bottom-2 right-0 left-3 inline-block w-3 h-3 bg-Title text-black text-xs rounded-full flex items-center justify-center text-center text-xs leading-3">
            {productStore.selectedProducts.length}
          </span>
        </div>
        {isCartOpen && (
          <div className="absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-balance">
            <div
              className="flex justify-center flex-col min-w-48 p-2 text-Primary"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {productStore.selectedProducts.map((product: ProductType) => (
                <div className="flex flex-col justify-center mt-4">
                  <Product
                    name={product.title}
                    img={product.imagePath}
                    price={product.price}
                    isSelected={false}
                    quantity={product.quantity}
                  />
                  <div className="flex justify-between mt-1 mb-1 ">
                    <button
                      className="bg-Primary text-white px-4 py-2 rounded-md"
                      onClick={() => {
                        productStore.changeQuantity(
                          product,
                          (product?.quantity || 0) + 1
                        );
                        console.log(product.quantity);
                      }}
                    >
                      +
                    </button>
                    <p className="text-2xl">{product.quantity}</p>
                    <button
                      className="bg-Primary text-white px-4 py-2 rounded-md"
                      onClick={() => {
                        if (product.quantity > 1) {
                          productStore.changeQuantity(
                            product,
                            product.quantity - 1
                          );
                        } else {
                          productStore.removeProduct(product);
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
              <hr className="w-full border-[2px] mt-4"></hr>
              <div className="flex justify-between mt-6">
                <button
                  className="bg-Primary text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    setIsCartOpen(false);
                  }}
                >
                  Lukk
                </button>
                <Link
                  to="/checkout"
                  className="bg-Primary text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    setIsCartOpen(false);
                  }}
                >
                  Betaling
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
