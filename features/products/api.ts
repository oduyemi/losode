import { FilterState } from "./utils";


const BASE_URL = "https://api.escuelajs.co/api/v1";

// Build query string from filters
export function buildQueryParams(filters: FilterState) {
  const params = new URLSearchParams();
  if (filters.search) {
    params.append("title", filters.search);
  }

  if (filters.priceRange) {
    params.append("price_min", String(filters.priceRange[0]));
    params.append("price_max", String(filters.priceRange[1]));
  }

  if (filters.category.length === 1) {
    params.append("categorySlug", filters.category[0].toLowerCase());
  }

  return params.toString();
}

// Fetch products with filters
export async function fetchProducts(filters?: FilterState) {
  const query = filters ? `?${buildQueryParams(filters)}` : "";

  const res = await fetch(`${BASE_URL}/products/${query}`, {
    next: { revalidate: 60 }, // caching for 60 seconds
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
}

// Fetch categories
export async function fetchCategories() {
  const res = await fetch(`${BASE_URL}/categories`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed to fetch categories");

  return res.json();
}