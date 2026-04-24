import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

interface ProductState {
  products: Product[];
  filtered: Product[];
  category: string[];
  sort: string;
}

const initialState: ProductState = {
  products: [],
  filtered: [],
  category: [],
  sort: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.filtered = action.payload;
    },
    filterByCategory: (state, action: PayloadAction<string[]>) => {
      state.category = action.payload;
      state.filtered = state.products.filter((p) =>
        action.payload.length ? action.payload.includes(p.category) : true
      );
    },
    sortProducts: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
      if (action.payload === "high") {
        state.filtered = [...state.filtered].sort((a, b) => b.price - a.price);
      } else if (action.payload === "low") {
        state.filtered = [...state.filtered].sort((a, b) => a.price - b.price);
      }
    },
  },
});

export const { setProducts, filterByCategory, sortProducts } = productSlice.actions;
export default productSlice.reducer;
