import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchCategories, BASE_URL } from "./api";
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


export function useProduct(slug?: string) {
  return useQuery({
    queryKey: ["product", slug],
    enabled: !!slug,
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/products`);
      const data = await res.json();

      const transformed = data.map(transformProduct);

      const product = transformed.find((p) => p.slug === slug);

      if (!product) throw new Error("Product not found");

      return product;
    },
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
}