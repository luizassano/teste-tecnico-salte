export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProductDto {
  name: string;
  description: string;
  price: number;
  image?: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  totalPages: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
} 