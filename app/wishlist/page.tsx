"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { addToCart } from "@/features/cart/cart-slice";
import { removeFromWishlist } from "@/features/wishlist/wishlist-slice";
import Image from "next/image";
import Link from "next/link";

export default function WishlistPage() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.wishlist.items);

  if (items.length === 0) {
    return (
      <p className="p-6 text-center text-gray-500">
        Your wishlist is empty
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Your Wishlist</h1>

      {items.map((product) => (
        <div
          key={product.id}
          className="flex gap-4 border rounded-xl p-4 items-center hover:shadow-md transition"
        >
          {/* IMAGE */}
          <Link href={`/products/${product.slug}`}>
            <div className="relative w-28 h-28 bg-gray-100 rounded-md overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
          </Link>

          {/* DETAILS */}
          <div className="flex-1">
            <Link href={`/products/${product.slug}`}>
              <h3 className="font-medium hover:underline">
                {product.title}
              </h3>
            </Link>

            <p className="text-sm text-gray-500">
              {product.category?.name}
            </p>

            <p className="font-semibold mt-1">
              ₦{product.price.toLocaleString()}
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-black text-white px-4 py-2 text-sm rounded-md hover:opacity-90"
            >
              Add to Cart
            </button>

            <button
              onClick={() => dispatch(removeFromWishlist(product.id))}
              className="text-xs text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}