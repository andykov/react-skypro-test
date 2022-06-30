import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productReducer from "../features/productSlice";
import { loadState } from "../utils";

export const store = configureStore({
  reducer: {
    stateCart: cartReducer,
    stateProducts: productReducer,
  },
  preloadedState: loadState(),
});
