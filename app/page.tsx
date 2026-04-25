"use client";
import { useProducts } from "@/features/products/hooks";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setProducts } from "@/store/product-slice";
import { useEffect } from "react";
import { ProductGrid } from "@/components/product/Grid";
import Layout from "@/components/layout/index";


export default function HomePage() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state: RootState) => state.products);

  const { data, isLoading } = useProducts(filters);

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return (
  <Layout>
    <ProductGrid />
  </Layout>);
}