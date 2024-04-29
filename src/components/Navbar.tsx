import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { FiShoppingCart } from "react-icons/fi";
import { Search } from "./Search";
import bitshopLogo from "../assets/img/bitshop.svg";
import { ProductType } from "../types/products";
import { useProductStore } from "../store/productStore";

const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const productStore = useProductStore();

  const handleCartHover = () => {
    setIsCartOpen(!isCartOpen);
  };

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
      <div
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-Title"
        onClick={handleCartHover}
      >
        <div className="relative">
          <FiShoppingCart />
          <span className="absolute bottom-2 right-0 left-3 inline-block w-3 h-3 bg-Title text-black text-xs rounded-full flex items-center justify-center text-center text-xs leading-3">
            {productStore.selectedProducts.length}
          </span>
        </div>
        {isCartOpen && (
          <div className="absolute right-0 mt-2 w-[35rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-balance">
            <div
              className="py-1 flex justify-between flex-col w-full"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {productStore.selectedProducts.map((product: ProductType) => (
                <p
                  key={product.id}
                  className="flex px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <div>
                    <img
                      src={product.imagePath}
                      alt="Fant Ikke Bildet"
                      className="max-h-32 max-w-32 object-cover min-h-32 min-w-32"
                    />
                  </div>
                  {product.title} - kr {Math.ceil(product.price)}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
