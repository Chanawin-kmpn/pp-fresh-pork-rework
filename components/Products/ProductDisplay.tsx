import { Product, ProductProp } from "@/types/types";
import React from "react";
import ProductCard from "./ProductCard";

interface ProductDisplayProp {
  products: Product[];
}

const ProductDisplay: React.FC<ProductDisplayProp> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-8">
      {products.map((item) => (
        <ProductCard key={item.product_name} product={item} />
      ))}
    </div>
  );
};

export default ProductDisplay;
