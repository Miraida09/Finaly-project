import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../admin/store/productsSlice";
import wishlistReducer from "./wishlistSlice";
import cartReducer from "./cartSlice";


const myStore = configureStore({
    reducer: {
        products: productsReducer,
        wishlist: wishlistReducer,
        cart: cartReducer
    }
})

export default myStore