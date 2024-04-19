import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { FiShoppingCart } from "react-icons/fi";


const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartHover = () => {
    setIsCartOpen(!isCartOpen);
  };

  const dummyProducts = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 3, name: 'Product 3', price: 30 },
    
  ];


  return (
    <nav className='bg-Primary flex justify-center relative h-12'>
      <Link to="/" className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-Title'>
        <h1 className='glow'>BITSHOP</h1>
      </Link>
      <div className='absolute right-8 top-1/2 transform -translate-y-1/2 text-Title' onMouseEnter={handleCartHover} onMouseLeave={handleCartHover}>
        <div className='relative'>
          <FiShoppingCart />
          <span className='absolute bottom-2 right-0 left-3 inline-block w-3 h-3 bg-Title text-black text-xs rounded-full flex items-center justify-center text-center text-xs leading-3'>
            {dummyProducts.length}
          </span>
        </div>
        {isCartOpen && (
          <div className='absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
            <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
              {dummyProducts.map(product => (
                <p key={product.id} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' role='menuitem'>
                  {product.name} - ${product.price}
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