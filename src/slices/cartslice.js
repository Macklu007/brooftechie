import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: localStorage.getItem("total")
    ? JSON.parse(localStorage.getItem("total"))
    : 0,
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setTotal(state, action) {
      state.total = action.payload;
      localStorage.setItem("total", JSON.stringify(state.total));
    },

    addToCart(state, action) {
      const exists = state.cart.find(
        (item) => item._id === action.payload._id
      );

      if (!exists) {
        state.cart.push(action.payload);
        state.total += action.payload.price || 0;

        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("total", JSON.stringify(state.total));
      }
    },

    removeFromCart(state, action) {
      const itemToRemove = state.cart.find(
        (item) => item._id === action.payload
      );

      if (itemToRemove) {
        
        state.total -= itemToRemove.price || 0;
      }

      state.cart = state.cart.filter(
        (item) => item._id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("total", JSON.stringify(state.total));
    },

    resetCart(state) {
      state.total = 0;
      state.cart = [];
      localStorage.removeItem("total");
      localStorage.removeItem("cart");
    },
  },
});

export const { setTotal, addToCart, resetCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
