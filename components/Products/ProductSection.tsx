"use client";
import { ProductContext } from "@/context/ProductContext";
import React, { useEffect, useMemo, useState } from "react";
import ProductDisplay from "./ProductDisplay";
import ProductFilter from "./ProductFilter";
import productData from "@/data/product.json";
import { Products, Category, Product } from "@/types/types";

const ProductSection = () => {
  const [selectedTypes, setSelectedTypes] = useState<string>("");
  const [productItems, setProductItems] = useState<Product[]>(
    (productData as Products).products.flatMap((category) =>
      category.types.flatMap((type) => type.product_items),
    ),
  );
  // สร้างข้อมูลประเภทสินค้าและชนิดสินค้า
  const productCategories = useMemo(() => {
    const categories: { [key: string]: string[] } = {};
    (productData as Products).products.forEach((category: Category) => {
      categories[category.product_type] = category.types.map(
        (type) => type.type_name,
      );
    });
    return categories;
  }, []);

  // ฟังก์ชันสำหรับแสดงรายการสินค้าตามประเภทที่เลือก
  const getDisplayedProducts = (): void => {
    if (selectedTypes === "") {
      setProductItems(
        (productData as Products).products.flatMap((category) =>
          category.types.flatMap((type) => type.product_items),
        ),
      );
    } else {
      setProductItems(
        (productData as Products).products
          .flatMap((category) => category.types)
          .filter((type) => selectedTypes === type.type_name)
          .flatMap((type) => type.product_items),
      );
    }
  };

  useEffect(() => {
    getDisplayedProducts();
  }, [selectedTypes]);
  return (
    <>
      {" "}
      <aside className="lg:w-1/4 lg:max-w-[256px]">
        <ProductFilter
          categories={productCategories}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
        />
      </aside>
      <main className="lg:w-3/4">
        <ProductContext.Provider value={productItems}>
          <ProductDisplay products={productItems} />
        </ProductContext.Provider>
      </main>
    </>
  );
};

export default ProductSection;
