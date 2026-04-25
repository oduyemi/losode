import { Product } from "@/types/product";
import { ApiProduct } from "./types";


export interface FilterState {
  category: string[];
  size: string[];
  occasion: string[];
  fit: string[];
  returns: string[];
  color: string[];
  priceRange: [number, number];
  search: string;
}


export function filterProducts(
  products: Product[],
  filters: FilterState
): Product[] {
  return products.filter((product) => {
    // CATEGORY
    if (
      filters.category.length &&
      !filters.category.includes(product.category)
    ) {
      return false;
    }

    // SIZE
    if (
      filters.size.length &&
      (!product.size ||
        !filters.size.some((s) => product.size?.includes(s)))
    ) {
      return false;
    }

    // OCCASION
    if (
      filters.occasion.length &&
      (!product.occasion ||
        !filters.occasion.includes(product.occasion))
    ) {
      return false;
    }

    // FIT
    if (
      filters.fit.length &&
      (!product.fit || !filters.fit.includes(product.fit))
    ) {
      return false;
    }

    // RETURNS
    if (
      filters.returns.length &&
      (!product.returns ||
        !filters.returns.includes(product.returns))
    ) {
      return false;
    }

    // COLOR
    if (
      filters.color.length &&
      (!product.color ||
        !filters.color.some((c) => product.color?.includes(c)))
    ) {
      return false;
    }

    // PRICE
    const [min, max] = filters.priceRange;
    if (product.price < min || product.price > max) {
      return false;
    }

    // SEARCH
    if (filters.search) {
      const search = filters.search.toLowerCase();

      const matches =
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search) ||
        product.brand?.toLowerCase().includes(search);

      if (!matches) return false;
    }

    return true;
  });
};


export function sortProducts(products: Product[], sort: string) {
  if (!sort) return products;

  switch (sort) {
    case "price-high":
      return [...products].sort((a, b) => b.price - a.price);

    case "price-low":
      return [...products].sort((a, b) => a.price - b.price);

    case "newest":
      return [...products].reverse();

    default:
      return products;
  }
};


export function processProducts(
  products: Product[],
  filters: FilterState,
  sort: string
) {
  const filtered = filterProducts(products, filters);
  return sortProducts(filtered, sort);
}


const mockSizes = ["UK 8-M", "UK 10-M", "UK 12-L", "UK 14-XL"];
const mockColors = ["Black", "Blue", "Red", "White", "Green"];
const mockFits = ["Loose Fit", "Regular Fit", "Tight Fit"];

function isValidImage(url?: string) {
  if (!url) return false;

  // block localhost / invalid
  if (url.includes("127.0.0.1") || url.includes("localhost")) {
    return false;
  }

  return url.startsWith("http");
}

export function transformProduct(api: ApiProduct): Product {
  return {
    id: String(api.id),
    name: api.title || "Untitled",
    price: api.price || 0,
    image: isValidImage(api.images?.[0])
      ? api.images[0]
      : "/placeholder.png",
    category: api.category?.name || "",
    brand: "Platzi Store",
    size: [],
    color: [],
    fit: "",
    occasion: "",
    returns: "",
  };
}