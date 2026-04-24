"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "@/store/product-slice";
import { ProductGrid } from "@/components/product/Grid";
import Layout from "@/components/layout/index";

const dummyProducts = [
  {
    id: "1",
    name: "Blazer Set",
    price: 80000,
    image: "/p1.jpg",
    category: "Co-Ords",
  },
  {
    id: "2",
    name: "Corset Dress",
    price: 120000,
    image: "/p2.jpg",
    category: "Dresses",
  },
];

export default function ProductsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(dummyProducts));
  }, []);

  return (
    <Layout>
      <ProductGrid />
    </Layout>
  );
}