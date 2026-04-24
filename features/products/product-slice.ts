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
      // ---------------- FILTERS ----------------
      setCategory(state, action: PayloadAction<string[]>) {
        state.filters.category = action.payload;
      },
  
      setSize(state, action: PayloadAction<string[]>) {
        state.filters.size = action.payload;
      },
  
      setOccasion(state, action: PayloadAction<string[]>) {
        state.filters.occasion = action.payload;
      },
  
      setFit(state, action: PayloadAction<string[]>) {
        state.filters.fit = action.payload;
      },
  
      setReturns(state, action: PayloadAction<string[]>) {
        state.filters.returns = action.payload;
      },
  
      setColor(state, action: PayloadAction<string[]>) {
        state.filters.color = action.payload;
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
  
      clearFilters(state) {
        state.filters = initialState.filters;
      },
    },
});

export const {
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
} = productsSlice.actions;

export default productsSlice.reducer;