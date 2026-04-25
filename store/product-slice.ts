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


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // PRODUCTS 
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },

    setSearch: (state, action) => {
      state.filters.search = action.payload;
    },

    // FILTERS 
    setCategory: (state, action: PayloadAction<string[]>) => {
      state.filters.category = action.payload;
    },

    setSize: (state, action: PayloadAction<string[]>) => {
      state.filters.size = action.payload;
    },

    setOccasion: (state, action: PayloadAction<string[]>) => {
      state.filters.occasion = action.payload;
    },

    setFit: (state, action: PayloadAction<string[]>) => {
      state.filters.fit = action.payload;
    },

    setReturns: (state, action: PayloadAction<string[]>) => {
      state.filters.returns = action.payload;
    },

    setColor: (state, action: PayloadAction<string[]>) => {
      state.filters.color = action.payload;
    },

    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.filters.priceRange = action.payload;
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },

    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },

    // RESET 
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const {
  setProducts,
  setCategory,
  setSize,
  setOccasion,
  setFit,
  setReturns,
  setColor,
  setPriceRange,
  setSearch,
  setSort,
  clearFilters,
} = productSlice.actions;

export default productSlice.reducer;