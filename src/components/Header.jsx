import React from 'react'
import AddToCart from './AddToCart'
import { ShoppingCart, Bell, Search, Menu } from 'lucide-react';


function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm shadow-slate-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-xl lg:hidden hover:bg-slate-100 text-slate-600 transition-colors">
              <Menu size={22} />
            </button>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-200 group-hover:bg-indigo-700 transition-all">
                <ShoppingCart className="text-white" size={20} />
              </div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight hidden sm:block">
                Cart<span className="text-indigo-600">Dash</span>
              </span>
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-lg mx-12">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all text-sm"
                placeholder="Search orders, SKU or customers..."
              />
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3">
            <button className="md:hidden p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
              <Search size={20} />
            </button>
            <button className="relative p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 block h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white"></span>
            </button>

            <AddToCart />



          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;