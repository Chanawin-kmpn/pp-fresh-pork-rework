import React from "react";
import DesktopFilter from "./DesktopFilter";
import MobileFilter from "./MobileFilter";
import { ProductFilterProps } from "@/types/types";

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  selectedTypes,
  setSelectedTypes,
}) => {
  // ฟังก์ชันจัดการการเปลี่ยนแปลงของ Checkbox
  const handleTypeChange = (typeName: string) => {
    setSelectedTypes((prev) => (prev === typeName ? "" : typeName));
  };

  return (
    <div className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-8">
      <h5 className="text-primary">ประเภทสินค้า</h5>
      <DesktopFilter
        categories={categories}
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
        handleTypeChange={handleTypeChange}
      />
      <MobileFilter
        categories={categories}
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
        handleTypeChange={handleTypeChange}
      />
    </div>
  );
};

export default ProductFilter;
