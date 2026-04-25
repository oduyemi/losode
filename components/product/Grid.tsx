"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useProducts } from "@/features/products/hooks";
import { ProductCard } from "./Card";
import { useState, useEffect } from "react";
import { Pagination } from "antd";

export const ProductGrid = () => {
  const filters = useSelector((state: RootState) => state.products.filters);
  const { data, isLoading, isError } = useProducts(filters);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  useEffect(() => {
    const updatePageSize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setPageSize(4); // 2 cols × 2 rows
      } else if (width < 1024) {
        setPageSize(6); // 3 cols × 2 rows
      } else {
        setPageSize(8); // 4 cols × 2 rows
      }
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  if (isLoading)
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-[350px] bg-gray-100 animate-pulse rounded-xl" />
        ))}
      </div>
    );

  if (isError)
    return (
      <div className="text-center py-10 text-gray-500">
        Failed to load products. Try again.
      </div>
    );
  if (!data || data.length === 0) return <p>No products found</p>;

  // 🔥 Paginate
  const start = (page - 1) * pageSize;
  const paginatedData = data.slice(start, start + pageSize);

  return (
    <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={data.length}
          onChange={(p) => setPage(p)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};