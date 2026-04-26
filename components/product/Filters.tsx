"use client";
import {
  Collapse,
  Checkbox,
  Slider,
  Input,
  InputNumber,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  setCategory,
  setPriceRange,
  setSearch,
} from "@/features/products/product-slice";
import { useState, useEffect } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useCategories } from "@/features/products/hooks";
import { ApiCategory } from "@/features/products/types";

const { Panel } = Collapse;

export default function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.products.filters);
  const { data: categoriesData, isLoading: catLoading } = useCategories();

  const [price, setPrice] = useState<[number, number]>(filters.priceRange);
  const [searchInput, setSearchInput] = useState(filters.search);

  useEffect(() => {
    const delay = setTimeout(() => {
      dispatch(setSearch(searchInput));
    }, 400);

    return () => clearTimeout(delay);
  }, [searchInput, dispatch]);

  const categories =
  categoriesData?.map((cat: ApiCategory) => ({
    label: cat.name,
    value: cat.slug,
  })) || [];

  const handlePriceChange = (value: number | number[]) => {
    if (Array.isArray(value) && value.length === 2) {
      const range: [number, number] = [value[0], value[1]];
      setPrice(range);
      dispatch(setPriceRange(range));
    }
  };

  return (
    <aside className="min-h-screen w-full md:w-[260px] pr-0 md:pr-4 border-r">
      <div className="space-y-6 bg-white p-4 rounded-xl shadow-sm">

        {/* 🔍 SEARCH */}
        <div>
          <p className="text-sm font-medium mb-2">Search</p>
          <Input
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            allowClear
          />
        </div>

        {/* 🎛 FILTERS */}
        <Collapse
          defaultActiveKey={["category", "price"]}
          ghost
          expandIconPlacement="end"
          expandIcon={({ isActive }) =>
            isActive ? (
              <MinusOutlined className="text-xs" />
            ) : (
              <PlusOutlined className="text-xs" />
            )
          }
        >

          {/* 📂 CATEGORY */}
          <Panel header="Category" key="category">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-400">All</span>

              {filters.category.length > 0 && (
                <button
                  onClick={() => dispatch(setCategory([]))}
                  className="text-xs text-gray-400 underline text-left"
                >
                  Unselect all
                </button>
              )}

              {catLoading && (
                <p className="text-xs text-gray-400">Loading...</p>
              )}

              {categories.map((item) => (
                <Checkbox
                  key={item.value}
                  checked={filters.category.includes(item.value)}
                  onChange={() => {
                    const next = filters.category.includes(item.value)
                      ? filters.category.filter((i) => i !== item.value)
                      : [...filters.category, item.value];

                    dispatch(setCategory(next));
                  }}
                >
                  {item.label}
                </Checkbox>
              ))}
            </div>
          </Panel>

          {/* 💰 PRICE */}
          <Panel header="Price" key="price">
            <div className="space-y-4">
              <Slider
                range
                min={0}
                max={200000}
                value={price}
                onChange={handlePriceChange}
              />

              <div className="flex gap-2">
                <InputNumber
                  min={0}
                  value={price[0]}
                  onChange={(val) =>
                    handlePriceChange([val || 0, price[1]])
                  }
                  className="w-full"
                />
                <InputNumber
                  min={0}
                  value={price[1]}
                  onChange={(val) =>
                    handlePriceChange([price[0], val || 0])
                  }
                  className="w-full"
                />
              </div>
            </div>
          </Panel>

        </Collapse>
      </div>
    </aside>
  );
}