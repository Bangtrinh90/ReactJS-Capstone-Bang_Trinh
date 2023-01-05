import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const globalStore = configureStore({
  reducer: {
    productData: productReducer,
    cartData: cartReducer,
  },
});

export default globalStore;
