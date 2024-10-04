"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/types/types";
import productData from "@/data/product.json";
import Image from "next/image";
import ProductBreadcrumb from "@/components/shared/ProductBreadcrumb";

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
    <div className="space-y-4 px-8 py-4 lg:space-y-8 lg:px-40 lg:py-16">
      <ProductBreadcrumb
        productId={productId}
        productName={product.product_name}
      />
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
        <div className="relative h-[468px] w-full lg:flex-1">
          <Image
            src={product.product_image}
            fill
            alt={`${product.product_name} Image`}
          />
        </div>
        <div className="flex flex-col gap-4 lg:flex-1">
          <div className="space-y-2">
            <p className="text-subtitle text-primary">{product.product_name}</p>
            <p className="text-normal">{product.description}</p>
          </div>
          <div className="space-y-2">
            <p className="text-large-bold text-primary">ขนาดผลิตภัณฑ์</p>
            <p className="text-normal">น้ำหนัก {product.product_size} กรัม</p>
          </div>
          <div>
            <p className="text-medium-bold text-primary">
              ราคา {product.price} บาท
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
