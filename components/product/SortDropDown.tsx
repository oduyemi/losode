"use client";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "@/features/products/product-slice";
import { RootState } from "@/store/index";

export default function SortDropdown() {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.products.sort);

  return (
    <Select
      value={sort || undefined}
      placeholder="Sort by"
      className="w-48"
      onChange={(value) => dispatch(setSort(value))}
      options={[
        { label: "Newest", value: "newest" },
        { label: "Price: High to Low", value: "price-high" },
        { label: "Price: Low to High", value: "price-low" },
      ]}
    />
  );
}