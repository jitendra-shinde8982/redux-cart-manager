import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fatchProducts = createAsyncThunk('products', async ()=>{
    const resp = await fetch('https://dummyjson.com/products')
    const jsonResp = await resp.json()
    return jsonResp.products;
})

const initialState ={
    items : [],
    status : undefined,
    error:null
    
}

const Productslice = createSlice({
    name: 'productsSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fatchProducts.fulfilled,(state,action) =>{
            state.status = 'succeeded'
            state.items = action.payload
        })
    }
})

export default Productslice.reducer