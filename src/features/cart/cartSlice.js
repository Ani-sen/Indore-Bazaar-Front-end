import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cartItems :[],
    },
    reducers : {

        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find(item => item.id === action.payload.id);
            if (itemInCart) {
              itemInCart.quantity += 1;
            } else {
              state.cartItems.push({ ...action.payload, quantity: 1 });
            }
          },
          removeFromCart: (state, action) => {
            return{
                ...state,
                cartItems : state.cartItems.filter(item => item.id !== action.payload),
            }
            
          },


        // addToCart : (state , action) =>{
        //     return{
        //         ...state,
        //         cartItems : [action.payload , ...state.cartItems],
        //     };
        // },        
        // removeFromCart : (state , action) =>{
        //     return{
        //         ...state,
        //         cartItems : state.cartItems.filter((item) => item.id !== action.payload ),
        //     }
        // },


    },
    extraReducers : (builder)=>{},
});

export const {addToCart , removeFromCart} = cartSlice.actions;

export default cartSlice.reducer