import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

interface Filters {
  category: string[]; 
  size: string[];
  occasion: string[];
  fit: string[];
  returns: string[];
  color: string[];
  priceRange: [number, number];
  search: string;
}

interface ProductState {
  products: Product[];
  filters: Filters;
  sort: string;
}

const initialState: ProductState = {
  products: [],
  filters: {
    category: [],
    size: [],
    occasion: [],
    fit: [],
    returns: [],
    color: [],
    priceRange: [0, 200000],
    search: "",
  },
  sort: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },

    setCategory(state, action: PayloadAction<string[]>) {
      state.filters.category = action.payload;
    },

    setPriceRange(state, action: PayloadAction<[number, number]>) {
      state.filters.priceRange = action.payload;
    },

    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },

    clearFilters(state) {
      state.filters = initialState.filters;
    },
  },
});

export const {
  setProducts,
  setSearch,
  setCategory,
  setPriceRange,
  setSort,
  clearFilters,
} = productsSlice.actions;

export default productsSlice.reducer;