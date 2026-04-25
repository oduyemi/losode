"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { HeartOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Product } from "@/types/product";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="group cursor-pointer"
      >
        <Card className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
          
          <div className="relative w-full h-[320px] bg-gray-100">
            <Image
              src={product.images?.[0] || "/placeholder.png"}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <button className="absolute top-3 right-3 bg-white/80 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition">
            <HeartOutlined size={18} className="text-gray-700" />
          </button>
          </div>

          <div className="p-4 space-y-1">
            <p className="text-xs text-gray-400 uppercase">
              {product.category?.name || "Store"}
            </p>

            <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
              {product.title}
            </h3>

            <p className="text-sm font-semibold text-gray-900 pt-1">
              ₦{product.price.toLocaleString()}
            </p>
          </div>

        </Card>
      </motion.div>
    </Link>
  );
};