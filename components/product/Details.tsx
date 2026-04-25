"use client";
import { useParams } from "next/navigation";
import { useProduct } from "@/features/products/hooks";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/features/wishlist/wishlist-slice";
import { RootState } from "@/store";
import Image from "next/image";
import { useState } from "react";
import { addToCart } from "@/features/cart/cart-slice";

export const ProductDetails = () => {
    const params = useParams();
    const slug = typeof params.slug === "string" ? params.slug: params.slug?.[0]; 
    const dispatch = useDispatch();
    const { data: product, isLoading, isError } = useProduct(slug);
    const wishlist = useSelector((state: RootState) => state.wishlist.items);
    const isWishlisted = product ? wishlist.some((item) => item.id === product.id): false;
    const [activeImage, setActiveImage] = useState(0);
    
    
    if (isLoading) {
        return <p className="p-6">Loading product...</p>;
      }
      
      if (isError) {
        return (
          <p className="p-6 text-red-500">
            Failed to load product. Please try again.
          </p>
        );
      }
      
      if (!product) {
        return <p className="p-6">Product not found</p>;
      }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        {/* LEFT */}
        <div className="flex gap-4">
            <div className="flex flex-col gap-3">
            {product.images.map((img, index) => (
                <div
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-20 h-20 relative cursor-pointer border ${
                    activeImage === index ? "border-black" : "border-gray-200"
                }`}
                >
                <Image 
                    src={img} 
                    alt="" 
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                />
                </div>
            ))}
            </div>

            <div className="flex-1 relative h-[500px] bg-gray-100">
            <Image
                src={product.images[activeImage]}
                alt={product.title}
                fill
                className="object-cover"
            />
            </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
            <div>
            <h1 className="text-2xl font-semibold uppercase tracking-wide">
                {product.title}
            </h1>
            <p className="text-xl font-bold mt-2">
                ₦{product.price.toLocaleString()}
            </p>
            </div>

            <button
                onClick={() => dispatch(addToCart(product))}
                className="w-full bg-black text-white py-3 rounded-md hover:opacity-90 transition"
                >
                Add to Cart
                </button>

            <button
                onClick={() => dispatch(toggleWishlist(product))}
                className={`w-full py-3 rounded-md border ${
                    isWishlisted ? "bg-black text-white" : ""
                }`}
                >
                {isWishlisted ? "Saved ✓" : "Save Item"}
            </button>

            <div className="border-t pt-6 space-y-4 text-sm text-gray-600">
            <div>
                <h3 className="font-medium text-gray-900 mb-2">
                Item Description
                </h3>
                <p>{product.description}</p>
            </div>

            <div>
                <h3 className="font-medium text-gray-900 mb-2">
                Category
                </h3>
                <p>{product.category?.name}</p>
            </div>
            </div>
        </div>
        </div>
    );
};