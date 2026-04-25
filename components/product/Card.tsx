"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { toggleWishlist } from "@/features/wishlist/wishlist-slice";
import { addToCart } from "@/features/cart/cart-slice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Link from "next/link";
import { Product } from "@/types/product";
import { useState } from "react";

export const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Link href={`/products/${product.slug}`}>
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="group cursor-pointer"
      >
        <Card className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 bg-white">
          <div className="relative w-full h-[320px] bg-gray-100 overflow-hidden">
            <Image
              src={product.images?.[0] || "/placeholder.png"}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch(toggleWishlist(product));
              }}
              className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-md hover:scale-110 transition"
            >
              {isWishlisted ? (
                <HeartFilled className="text-red-500" />
              ) : (
                <HeartOutlined className="text-gray-700" />
              )}
            </motion.button>

            <div className="absolute bottom-0 left-0 w-full p-3 bg-white/90 backdrop-blur-md flex gap-2 justify-center">
              <button className="bg-white border text-black text-xs px-4 py-2 rounded-full shadow-sm hover:bg-black hover:text-white transition">
                Quick View
              </button>

              <button
                onClick={handleAddToCart}
                className={`text-xs px-4 py-2 rounded-full shadow-md transition ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-black text-white hover:opacity-90"
                }`}
              >
                {added ? "Added ✓" : "Add to Cart"}
              </button>
            </div>
          </div>

          <div className="p-4 space-y-2">
            <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">
              {product.category?.name || "Store"}
            </p>

            <h3 className="text-sm font-medium text-gray-900 leading-snug line-clamp-2 group-hover:underline">
              {product.title}
            </h3>

            <div className="flex items-center justify-between pt-1">
              <p className="text-base font-semibold text-gray-900">
                ₦{product.price.toLocaleString()}
              </p>

              <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
                →
              </span>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
};