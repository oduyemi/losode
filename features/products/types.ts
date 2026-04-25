export interface ApiCategory {
    id: number;
    name: string;
    slug: string;
    image: string;
  }
  
  export interface ApiProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: ApiCategory;
  }