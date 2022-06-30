import { createSlice } from "@reduxjs/toolkit";
import { products } from "../store/mockData";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products,
  },
  reducers: {
    toggleFavoriteProduct: (state, action) => {
      const productOne = state.products.find((p) => p.id === action.payload);

      if (productOne) {
        productOne.isFavorite = !productOne.isFavorite;
      }
    },
    activeToCartProduct: (state, action) => {
      const productOne = state.products.find((p) => p.id === action.payload);
      console.log("productOne AC", productOne);
      if (productOne) {
        productOne.isInCart = true;
      }
    },
    deActiveToCartProduct: (state, action) => {
      console.log("deActiveToCartProduct", action);
      const productOne = state.products.find((p) => p.id === action.payload);
      console.log("productOne DE", productOne);
      console.log("productOne DE state", state.products);
      if (productOne) {
        productOne.isInCart = false;
      } else {
      }
    },
  },
});

export const {
  toggleFavoriteProduct,
  activeToCartProduct,
  deActiveToCartProduct,
} = productSlice.actions;
export default productSlice.reducer;
