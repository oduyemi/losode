"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useProducts } from "@/features/products/hooks";
import { ProductCard } from "./Card";

export const ProductGrid = () => {
  const filters = useSelector((state: RootState) => state.products.filters);

  const { data, isLoading, isError } = useProducts(filters);

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Failed to load products</p>;
  if (!data || data.length === 0) return <p>No products found</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};