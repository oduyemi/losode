import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product-slice";
import wishlistReducer from "@/features/wishlist/wishlist-slice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishlistReducer,
  },
});


if (typeof window !== "undefined") {
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist.items));
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;