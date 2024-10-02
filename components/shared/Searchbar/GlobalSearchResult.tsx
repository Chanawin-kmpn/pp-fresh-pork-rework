import React from "react";
import { Product } from "@/types/types";
import Link from "next/link";
import Image from "next/image";

interface GlobalSearchResultProps {
  products: Product[];
  onResultClose: () => void;
}

const GlobalSearchResult: React.FC<GlobalSearchResultProps> = ({
  products,
  onResultClose,
}) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className="absolute mt-2 w-full rounded-md bg-white p-4 shadow-lg">
      <p className="text-large-bold">
        สินค้า:{" "}
        <span className="text-medium-bold text-gray-300">
          ({products.length})
        </span>
      </p>
      <div className="my-4 h-px bg-gray-500" />
      <div className="grid grid-cols-2">
        {products.map((product) => (
          <Link
            key={product.product_item_id}
            href={`/products/${product.product_item_id}`}
            onClick={onResultClose}
          >
            <div className="flex items-center gap-4 p-2 hover:bg-gray-100">
              <div className="relative block h-16 w-full max-w-16">
                <Image
                  src={product.product_image}
                  alt={`${product.product_name} Image`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-normal-bold">{product.product_name}</p>
                <p className="text-small">{product.product_size} กรัม</p>
                <p className="text-large-bold text-gray-500">
                  {product.price} บาท
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GlobalSearchResult;
