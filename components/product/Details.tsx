"use client";
import { useParams } from "next/navigation";
import { useProducts } from "@/features/products/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Image from "next/image";
import { useState } from "react";

export const ProductDetails = () => {
  const { slug } = useParams();
  const filters = useSelector((state: RootState) => state.products.filters);
  const { data, isLoading } = useProducts(filters);
  const product = data?.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);
  if (isLoading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

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
              <Image src={img} alt="" fill className="object-cover" />
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

        <button className="w-full bg-black text-white py-3 rounded-md">
          Add to Bag
        </button>

        <button className="w-full border py-3 rounded-md">
          Save Item
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