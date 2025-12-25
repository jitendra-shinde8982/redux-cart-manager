import { configureStore } from '@reduxjs/toolkit'
import addCart from '../features/Cartslice'
import productReducer from '../features/ProductSlice'

export const store = configureStore({
  reducer: {
    cart:addCart,
    products: productReducer
  },
})