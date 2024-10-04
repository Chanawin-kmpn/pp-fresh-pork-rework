"use client";
import { ProductProp } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard: React.FC<ProductProp> = ({ product }) => {
  return (
    <div className="rounded shadow transition-shadow hover:shadow-md">
      <div className="relative h-48 w-full max-lg:max-h-36">
        <Image
          src={product.product_image}
          alt={`${product.product_name} image`}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="rounded object-cover"
        />
      </div>
      <div className="bg-card p-2">
        <div className="flex flex-col gap-2">
          <p className="text-large-bold text-primary">{product.product_name}</p>
          <p className="text-normal mt-2 line-clamp-1 lg:line-clamp-2">
            {product.description}
          </p>
          <p className="text-gray-400">น้ำหนัก {product.product_size} กรัม</p>
          <div className="flex items-center justify-between">
            <p className="text-normal-bold mt-2 text-primary">
              {product.price} บาท
            </p>

            <Link
              className="text-normal z-20 rounded-lg bg-secondery px-2 py-1 text-white lg:px-4 lg:py-2"
              href={`/products/${product.product_item_id}`}
            >
              ดูรายละเอียด
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
