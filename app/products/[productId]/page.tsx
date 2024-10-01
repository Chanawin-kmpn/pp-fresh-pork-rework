"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/types/types";
import productData from "@/data/product.json";

export default function ProductDetail() {
  const params = useParams();
  const productId = params.productId as string;
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    if (productId) {
      // Find the product in the productData
      //  FlatMap ทำให้คัดพวก Category กับ type ออกให้เหลือแต่ product item ที่มีค่าตรงกับ ProductId
      const foundProduct = (productData as any).products
        .flatMap((category: any) => category.types)
        .flatMap((type: any) => type.product_items)
        .find((item: Product) => item.product_item_id.toString() === productId);

      setProduct(foundProduct || null);
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.product_name}</h1>
      <p>{product.description}</p>
      <p>ราคา: {product.price} บาท</p>
      <p>น้ำหนัก: {product.product_size} กรัม</p>
      {/* Add more product details as needed */}
    </div>
  );
}
