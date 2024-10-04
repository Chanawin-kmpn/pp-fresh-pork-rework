import React from "react";

import ProductSection from "@/components/Products/ProductSection";

const Page = () => {
  return (
    <div className="flex flex-col gap-4 px-4 py-8 md:px-20 md:py-12 lg:flex-row lg:gap-8 xl:px-40 xl:py-16">
      <ProductSection />
    </div>
  );
};

export default Page;
