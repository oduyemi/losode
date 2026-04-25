"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { ProductCard } from "@/components/product/Card";

export default function WishlistPage() {
  const items = useSelector((state: RootState) => state.wishlist.items);

  if (items.length === 0) {
    return <p className="p-6">Your wishlist is empty</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}