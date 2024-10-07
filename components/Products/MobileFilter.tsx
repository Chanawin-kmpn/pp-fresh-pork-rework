"use client";
import { ProductFilterProps } from "@/types/types";
import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
  DrawerHeader,
} from "@/components/ui/drawer";
import { Checkbox } from "../ui/checkbox";

const MobileFilter: React.FC<ProductFilterProps> = ({
  categories,
  selectedTypes,
  handleTypeChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScroll(scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [selectedTypes]);

  return (
    <div
      className={`${
        isScroll
          ? "fixed bottom-8 left-1/2 z-50 -translate-x-1/2 transition-all duration-1000 ease-in-out"
          : ""
      }`}
    >
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger className="text-normal-bold flex items-center gap-2 rounded-full bg-secondery px-4 py-2 text-white lg:hidden">
          ตัวกรอง
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
          </span>
        </DrawerTrigger>
        <DrawerContent className="p-8">
          <DrawerHeader className="hidden">
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          {Object.entries(categories).map(([category, types]) => (
            <div key={category} className="mt-4 flex flex-col gap-2">
              <p className="text-large-bold mb-2 text-primary">{category}</p>
              <div className="mb-4 grid grid-cols-2 justify-center gap-4">
                {types.map((type: string) => (
                  <div key={type}>
                    <label
                      htmlFor={type}
                      className="text-medium flex items-center gap-2"
                    >
                      <Checkbox
                        id={type}
                        checked={selectedTypes === type}
                        onCheckedChange={() => handleTypeChange!(type)}
                        aria-label={`${type} filter`}
                      />
                      {type}
                    </label>
                  </div>
                ))}
              </div>
              <hr />
            </div>
          ))}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileFilter;
