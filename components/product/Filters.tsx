"use client";
import { Collapse, Checkbox, Slider, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  setCategory,
  // setSize,
  // setOccasion,
  // setFit,
  // setReturns,
  // setColor,
  setPriceRange,
} from "@/features/products/product-slice";
import { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useCategories } from "@/features/products/hooks";


const { Panel } = Collapse;
// const sizes = [
//     "UK 10-M","UK 12-L","UK 14-XL","UK 16-2XL","UK 18-3XL",
//     "UK 20-4XL","UK 22-5XL","UK 24-6XL","UK 26-7XL","UK 28-8XL",
//     "UK 30-9XL","UK 4-XS","UK 4-XXS","UK 6-S","UK 6-XS",
//     "UK 8-M","UK 8-S"
//   ];
//   const occasions = ["Casual Wear", "Formal Wear", "Party Wear", "Weddings", "Work Wear"];
//   const fits = ["Loose Fit", "Regular Fit", "Tight Fit"];
//   const returns = ["Amendments", "Exchanges", "Returns"];
//   const colors = [
//     "Almond","Beige","Black","Blue","Brown","Caramel","Coffee","Cream","Dark Green",
//     "Eggshell","Green","Lilac","Lime","Mint","Multicolour","Mustard","Navy Blue",
//     "Olive","Orange","Purple","Red","Turquoise","White","Wine"
//   ];

//   // Color map
//   const colorMap: Record<string, string> = {
//     Almond: "#EED9C4",
//     Beige: "#F5F5DC",
//     Black: "#000",
//     Blue: "#1E3A8A",
//     Brown: "#8B4513",
//     Caramel: "#D2691E",
//     Coffee: "#6F4E37",
//     Cream: "#FFFDD0",
//     "Dark Green": "#064E3B",
//     Eggshell: "#F0EAD6",
//     Green: "#16A34A",
//     Lilac: "#C8A2C8",
//     Lime: "#84CC16",
//     Mint: "#98FF98",
//     Multicolour: "linear-gradient(45deg, red, blue, yellow)",
//     Mustard: "#D4A017",
//     "Navy Blue": "#1E293B",
//     Olive: "#808000",
//     Orange: "#F97316",
//     Purple: "#7E22CE",
//     Red: "#DC2626",
//     Turquoise: "#40E0D0",
//     White: "#FFF",
//     Wine: "#722F37",
//   };


export default function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.products.filters);
  const { data: categoriesData, isLoading: catLoading } = useCategories();
  const [price, setPrice] = useState<[number, number]>([40000, 150000]);

  const categories =
  categoriesData?.map((cat: any) => ({
    label: cat.name,
    value: cat.slug, 
  })) || [];

  const handlePriceChange = (value: [number, number]) => {
    setPrice(value);
    dispatch(setPriceRange(value));
  };

  const renderFilterSection = (
    items: string[],
    selected: string[],
    setAction: (val: string[]) => any
  ) => (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-gray-400">All</span>

      {selected.length > 0 && (
        <button
          onClick={() => dispatch(setAction([]))}
          className="text-xs text-gray-400 underline text-left"
        >
          Unselect all
        </button>
      )}

      {items.map((item) => (
        <Checkbox
          key={item}
          checked={selected.includes(item)}
          onChange={() => {
            const next = selected.includes(item)
              ? selected.filter((i) => i !== item)
              : [...selected, item];

            dispatch(setAction(next));
          }}
        >
          {item}
        </Checkbox>
      ))}
    </div>
  );

  return (
    <aside className="min-h-screen w-full md:w-[260px] pr-0 md:pr-4 border-r">
      <Collapse
        defaultActiveKey={[]}
        ghost
        expandIconPosition="end"
        expandIcon={({ isActive }) =>
          isActive ? (
            <MinusOutlined className="text-xs" />
          ) : (
            <PlusOutlined className="text-xs" />
          )
        }
      >
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

            {catLoading && <p className="text-xs text-gray-400">Loading...</p>}

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

        {/* <Panel header="Size" key="size">
          <div className="max-h-40 overflow-y-auto pr-2">
            {renderFilterSection(sizes, filters.size, setSize)}
          </div>
        </Panel>

        <Panel header="Occasion" key="occasion">
          {renderFilterSection(occasions, filters.occasion, setOccasion)}
        </Panel>

        <Panel header="Fit" key="fit">
          {renderFilterSection(fits, filters.fit, setFit)}
        </Panel>

        <Panel header="Returns" key="returns">
          {renderFilterSection(returns, filters.returns, setReturns)}
        </Panel>

        <Panel header="Color" key="color">
          <Checkbox.Group
            value={filters.color}
            onChange={(val) => dispatch(setColor(val as string[]))}
          >
            <div className="max-h-48 overflow-y-auto pr-2 flex flex-col gap-3">
              {colors.map((color) => (
                <Checkbox key={color} value={color}>
                  <span className="flex items-center gap-2 text-sm">
                    <span
                      className="w-4 h-4 rounded-full border"
                      style={{ background: colorMap[color] }}
                    />
                    {color}
                  </span>
                </Checkbox>
              ))}
            </div>
          </Checkbox.Group>
        </Panel> */}

        {/* PRICE */}
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
                onChange={(val) => handlePriceChange([val || 0, price[1]])}
                className="w-full"
              />
              <InputNumber
                min={0}
                value={price[1]}
                onChange={(val) => handlePriceChange([price[0], val || 0])}
                className="w-full"
              />
            </div>
          </div>
        </Panel>
      </Collapse>
    </aside>
  );
}