"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { ProductCard } from "./Card";

export const ProductGrid = () => {
  const { filtered } = useSelector((state: RootState) => state.products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}