import React from 'react';
import { Link } from '@tanstack/react-router';
import { FiShoppingCart } from "react-icons/fi";

const Navbar: React.FC = () => {
  return (
    <nav className='bg-Primary flex justify-center relative h-12'>
      <Link to="/" className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-Title'>
        <h1>LOGO</h1>
      </Link>
      <Link to="/cart" className='absolute right-4 top-1/2 transform -translate-y-1/2 text-Title'>
        <FiShoppingCart />
      </Link>
    </nav>
  );
};

export default Navbar;