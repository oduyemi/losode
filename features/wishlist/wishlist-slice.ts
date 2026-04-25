import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

interface WishlistState {
  items: Product[];
}

const loadWishlist = (): Product[] => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("wishlist") || "[]");
    } catch {
      return [];
    }
  };
  
  const initialState: WishlistState = {
    items: loadWishlist(), 
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<Product>) {
      const exists = state.items.find((p) => p.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },

    removeFromWishlist(state, action: PayloadAction<number>) {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },

    toggleWishlist(state, action: PayloadAction<Product>) {
      const exists = state.items.find((p) => p.id === action.payload.id);

      if (exists) {
        state.items = state.items.filter((p) => p.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;