import { Product } from "@/types/types";
import React from "react";
import ProductCard from "./ProductCard";

interface ProductDisplayProp {
  products: Product[];
}

const ProductDisplay: React.FC<ProductDisplayProp> = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-2 max-sm:grid-cols-2 lg:gap-8">
      {products.map((item) => (
        <ProductCard key={item.product_name} product={item} />
      ))}
    </div>
  );
};

export default ProductDisplay;
