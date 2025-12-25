import React from 'react'
import {ShoppingCart} from 'lucide-react';
import { useSelector } from 'react-redux';


function AddToCart() {
  const cartCount = useSelector((state) => state.cart.value)

  return (
    
            <button className="relative p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white shadow-md shadow-indigo-200 ring-2 ring-white">
               {cartCount}
              </span>
            </button>
  );
}

export default AddToCart;
