"use client";
import { useProducts } from "@/features/products/hooks";
import { ProductCard } from "./Card";

export const ProductGrid = () => {
  const { data } = useProducts();

  if (!data) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};