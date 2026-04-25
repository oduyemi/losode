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
    if (
      filters.category.length &&
      !filters.category.includes(product.category.name)
    ) {
      return false;
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      if (product.price < min || product.price > max) return false;
    }

    if (filters.search) {
      const search = filters.search.toLowerCase();

      const matches =
        product.title.toLowerCase().includes(search) ||
        product.category.name.toLowerCase().includes(search) ||
        product.brand?.toLowerCase().includes(search);

      if (!matches) return false;
    }

    return true;
  });
}


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
}


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

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}


function generateSlug(title: string, id: number) {
  return `${title}`
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-") + `-${id}`;
}

export function transformProduct(api: ApiProduct): Product {
  return {
    id: api.id,
    title: api.title || "Untitled",
    slug: generateSlug(api.title, api.id), // ✅ FIX
    price: api.price || 0,
    description: api.description || "",
    images: api.images || [],
    category: api.category,

    creationAt: "",
    updatedAt: "",
  };
}
