import { useSelector } from "react-redux";
import { processProducts } from "./utils";
import { RootState } from "@/store";

export function useProducts() {
  const { products, filters, sort } = useSelector(
    (state: RootState) => state.products
  );

  const data = processProducts(products, filters, sort || "");

  return { data };
}