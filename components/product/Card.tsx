"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { toggleWishlist } from "@/features/wishlist/wishlist-slice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Link from "next/link";
import { Product } from "@/types/product";

export const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <Link href={`/products/${product.slug}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group cursor-pointer"
      >
        <Card className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
          <div className="relative w-full h-[320px] bg-gray-100 overflow-hidden">
            <Image
              src={product.images?.[0] || "/placeholder.png"}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch(toggleWishlist(product));
              }}
              className="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md hover:scale-110 transition"
            >
              <motion.span
                key={isWishlisted ? "filled" : "outline"}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {isWishlisted ? (
                  <HeartFilled className="text-red-500" />
                ) : (
                  <HeartOutlined className="text-gray-700" />
                )}
              </motion.span>
            </motion.button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <button className="bg-white text-black text-xs px-4 py-2 rounded-full shadow-md hover:bg-black hover:text-white transition">
                Quick View
              </button>
            </div>
          </div>
          <div className="p-4 space-y-2">
            <p className="text-[11px] tracking-widest text-gray-400 uppercase">
              {product.category?.name || "Store"}
            </p>
            <h3 className="text-sm font-medium text-gray-900 leading-snug line-clamp-2 group-hover:underline">
              {product.title}
            </h3>
            <div className="flex items-center justify-between pt-1">
              <p className="text-sm font-semibold text-gray-900">
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