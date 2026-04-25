import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product-slice";
import wishlistReducer from "@/features/wishlist/wishlist-slice";
import cartReducer from "@/features/cart/cart-slice";


export const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});


if (typeof window !== "undefined") {
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist.items));
    localStorage.setItem("cart", JSON.stringify(state.cart.items));
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;