import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../admin/store/productsSlice";
import wishlistReducer from "./wishlistSlice";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";


const myStore = configureStore({
    reducer: {
        products: productsReducer,
        wishlist: wishlistReducer,
        cart: cartReducer,
        auth: authReducer
    }
})

export default myStore