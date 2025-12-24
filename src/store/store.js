import { configureStore } from '@reduxjs/toolkit'
import addCart from '../features/Cartslice'

export const store = configureStore({
  reducer: {
    cart:addCart
  },
})