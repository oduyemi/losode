import { Product } from "@/types/product";

export interface FilterState {
  category: string[];
  priceRange: [number, number];
  search: string;
}