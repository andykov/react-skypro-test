import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    isEmpty: true,
  },
  reducers: {
    setProductToCart: (state, action) => {
      const productOne = state?.products.find(
        (p) => p.id === action.payload.id
      );

      if (productOne) {
        if (productOne.quantity.current < productOne.quantity.max) {
          productOne.quantity.current++;
        }
      } else {
        state.products.push({
          ...action.payload,
          quantity: {
            ...action.payload.quantity,
            current: 1,
          },
          isInCart: true,
        });
      }

      state.totalPrice = setTotalPrice(state.products);
      state.totalCount = setTotalCount(state.products);
      state.isEmpty = false;
    },

    removeProductFromCart: (state, action) => {
      state.products = state?.products.filter((p) => p.id !== action.payload);

      state.products.isInCart = !state.products.isInCart;
      state.totalPrice = setTotalPrice(state.products);
      state.totalCount = setTotalCount(state.products);
      state.totalCount > 0 ? (state.isEmpty = false) : (state.isEmpty = true);
    },

    cartProductIncrement: (state, action) => {
      const productOne = state?.products.find(
        (p) => p.id === action.payload.id
      );

      if (productOne) {
        productOne.quantity.current++;
      }

      state.totalPrice = setTotalPrice(state.products);
      state.totalCount = setTotalCount(state.products);
    },

    cartProductDecrement: (state, action) => {
      const productOne = state?.products.find(
        (p) => p.id === action.payload.id
      );

      if (productOne) {
        productOne.quantity.current--;
      }

      state.totalPrice = setTotalPrice(state.products);
      state.totalCount = setTotalCount(state.products);
    },
    clearCart: (state, action) => {
      console.log("clearCart", action);
      state.products = [];
      state.totalPrice = 0;
      state.totalCount = 0;
      state.isEmpty = !state.isEmpty;
    },
  },
});

function setTotalPrice(products) {
  return products.reduce(
    (sum, item) => sum + item.price * item.quantity.current,
    0
  );
}
function setTotalCount(products) {
  return products.reduce((sum, item) => sum + item.quantity.current, 0);
}

export const {
  setProductToCart,
  removeProductFromCart,
  cartProductIncrement,
  cartProductDecrement,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
