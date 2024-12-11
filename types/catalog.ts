export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: ProductRating;
}

export interface ProductRating {
  count: number;
  rate: number;
}

export interface CatalogProps {
  catalog: Product[];
  status?: number | null;
}

export interface CartState {
  items: Product[];
}

export interface CatalogItemProps {
  product: Product;
}
