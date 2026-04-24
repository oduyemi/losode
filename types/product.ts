export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  size?: string[];        
  color?: string[];       
  occasion?: string;
  fit?: string;
  returns?: string;
  brand?: string;
}