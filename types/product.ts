export interface Product {
  id: number;
  title: string;
  slug: string; 
  price: number;
  description: string;
  brand?: string;
  images: string[];
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
  };

  creationAt: string;
  updatedAt: string;
}