import React, { useEffect } from 'react'
import { Plus, Trash } from 'lucide-react';
import { addItem } from '../features/Cartslice';
import { removeItem } from '../features/Cartslice';
import { fatchProducts } from '../features/ProductSlice'
import { useDispatch, useSelector } from 'react-redux';

function Product() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fatchProducts())
    }, [])

    const productInfo = useSelector((state) => state.products.items)
    console.log(productInfo);

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                productInfo.map((item) => (
                    <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
                        <img
                            src={item.thumbnail}
                            alt="product"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-bold text-sm text-slate-800">
                                {item.title}
                            </h3>
                            <p className="text-xs text-slate-500 mt-1">
                                {item.description}
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="font-bold">${item.price}</span>
                                <div className='flex gap-2'>
                                    <button onClick={() =>
                                        dispatch(addItem(1))} className="bg-black text-white p-2 rounded-lg cursor-pointer hover:bg-gray-800 transition">
                                        <Plus size={16} />
                                    </button>
                                    <button onClick={() =>
                                        dispatch(removeItem(1))} className="bg-red-600 text-white p-2 rounded-lg cursor-pointer hover:bg-red-400 transition">
                                        <Trash size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Product;
