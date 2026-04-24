import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "./utils";
import { Product } from "@/types/product";

interface ProductsState {
  products: Product[];
  filters: FilterState;
  sort?: string;
}

const initialState: ProductsState = {
  products: [],
  filters: {
    category: [],
    priceRange: [0, 200000],
    search: "",
  },
  sort: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string[]>) {
      state.filters.category = action.payload;
    },

    setPriceRange(state, action: PayloadAction<[number, number]>) {
      state.filters.priceRange = action.payload;
    },

    setSearch(state, action: PayloadAction<string>) {
      state.filters.search = action.payload;
    },

    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
  },
});

export const {
  setCategory,
  setPriceRange,
  setSearch,
  setSort,
} = productsSlice.actions;

export default productsSlice.reducer;