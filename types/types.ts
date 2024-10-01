import { ReactNode } from "react";

export interface CertificateProp {
  icon: string;
  title: string;
  desc: string;
}

export interface Initiative {
  icon: string;
  title: string;
  desc: string;
}

export interface Product {
  product_item_id: number;
  type_id: number;
  product_name: string;
  description: string;
  product_size: number;
  price: number;
  product_image: string;
}

export interface ProductProp {
  product: Product;
}

export interface ProductItemsProp {
  productItems: Product[];
}

export interface ProductType {
  type_id: number;
  category_id: number;
  type_name: string;
  product_items: Product[];
}

export interface Category {
  category_id: number;
  product_type: string;
  types: ProductType[];
}

export interface Products {
  products: Category[];
}

export interface ProductFilterProps {
  categories: { [key: string]: string[] };
  selectedTypes: string;
  setSelectedTypes: React.Dispatch<React.SetStateAction<string>>;
  handleTypeChange?: (typeName: string) => void;
}
