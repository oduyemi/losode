import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchCategories } from "./api";
import { filterProducts, sortProducts, transformProduct } from "./utils";
import { FilterState } from "./utils";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function useProducts(filters: FilterState) {
  const sort = useSelector((state: RootState) => state.products.sort);

  return useQuery({
    queryKey: ["products", filters],
    queryFn: async () => {
      const data = await fetchProducts(filters);
      const transformed = (data || []).map(transformProduct);
      const filtered = filterProducts(transformed, filters);
      return sortProducts(filtered, sort || "");
    },
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
}