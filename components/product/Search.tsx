"use client";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setSearch } from "@/features/products/product-slice";
import { useDebounce } from "@/hooks/use-debounce";

export const ProductSearch = () => {
  const dispatch = useDispatch();

  const handleChange = useDebounce((value: string) => {
    dispatch(setSearch(value));
  }, 500);

  return (
    <Input.Search
      placeholder="Search products..."
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}