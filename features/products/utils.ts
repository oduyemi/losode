import { Product } from "@/types/product";


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

    if (filters.search) {
      const search = filters.search.toLowerCase();
      const matches =
        product.title?.toLowerCase().includes(search) ||
        product.category?.name?.toLowerCase().includes(search);

      if (!matches) return false;
    }

    if (filters.category.length > 0) {
      if (!filters.category.includes(product.category?.slug)) {
        return false;
      }
    }

    const [min, max] = filters.priceRange;
    if (product.price < min || product.price > max) {
      return false;
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

export function transformProduct(p: any): Product {
  const isBadImage = (url: string) => {
    return (
      !url ||
      url.includes("gstatic") ||          
      url.includes("googleusercontent") || 
      url.includes("base64") ||           
      !url.startsWith("http")                );
  };

  const safeImages =
    p.images?.filter((img: string) => !isBadImage(img)) || [];

  return {
    id: p.id,
    title: p.title,
    slug:
      p.slug ||
      p.title.toLowerCase().replace(/\s+/g, "-") + `-${p.id}`,
    price: p.price,
    description: p.description,
    images:
      safeImages.length > 0
        ? safeImages
        : ["/images/placeholder.jpg"], 
    brand: p.brand,
    category: {
      id: p.category?.id,
      name: p.category?.name,
      slug: p.category?.slug,
      image: p.category?.image,
    },
    creationAt: p.creationAt,
    updatedAt: p.updatedAt,
  };
}