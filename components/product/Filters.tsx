"use client";
import { Checkbox, Slider, Select } from "antd";
import { useDispatch } from "react-redux";
import { setCategory, setPriceRange } from "@/features/products/product-slice";
import { filterByCategory } from "@/store/product-slice";
import { sortProducts } from "@/store/product-slice";


const options = ["Co-Ords", "Dresses", "Suits"];


export const ProductFilters = () => {
  const dispatch = useDispatch();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        <Checkbox.Group
          options={["Co-Ords", "Dresses", "Suits"]}
          onChange={(val) => dispatch(setCategory(val))}
        />
      </div>

      <div>
        <h3 className="font-semibold mb-2">Price</h3>
        <Slider
          range
          max={200000}
          onChange={(val) => dispatch(setPriceRange(val))}
        />
      </div>
    </div>
  );
}


export const CategoryFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className="space-y-3">
      <h4 className="font-semibold">Category</h4>
      <Checkbox.Group
        options={options}
        onChange={(val) => dispatch(filterByCategory(val as string[]))}
      />
    </div>
  );
}


export const SortDropdown = () => {
  const dispatch = useDispatch();

  return (
    <Select
      placeholder="Sort"
      className="w-48"
      onChange={(val) => dispatch(sortProducts(val))}
      options={[
        { label: "Price High to Low", value: "high" },
        { label: "Price Low to High", value: "low" },
      ]}
    />
  );
}
