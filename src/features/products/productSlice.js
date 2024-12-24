import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProduct, fetchProducts } from "./productService";

const productSlice = createSlice({
    name : 'product',
    initialState : {
        products : [],
        product : {},
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : ""
    },
    reducers : {},
    extraReducers : (builder) =>{

        builder
        .addCase(getProducts.pending , (state,action) =>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })
        .addCase(getProducts.fulfilled , (state,action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.products = action.payload
        })
        .addCase(getProducts.rejected , (state,action) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        })

        .addCase(getProduct.pending , (state,action) =>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })
        .addCase(getProduct.fulfilled , (state,action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.product = action.payload
        })
        .addCase(getProduct.rejected , (state,action) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        })
    }
});

export default productSlice.reducer;

//get products

export const getProducts = createAsyncThunk("FETCH/PRODUCTS" , async() =>{
    try {
        return await fetchProducts()
    } catch (error) {
        console.log(error);
    }
})

//get product

export const getProduct = createAsyncThunk("FETCH/PRODUCT" , async(id) =>{
    try {
        return await fetchProduct(id)
    } catch (error) {
        console.log(error);
    }
})