"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useRef, useState } from "react";
import productData from "@/data/product.json";
import { Product } from "@/types/types";
import GlobalSearchResult from "./GlobalSearchResult";
import { XCircleIcon } from "@heroicons/react/24/outline";

const GlobalSearch = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (search) {
      const foundProducts = (productData as any).products
        .flatMap((category: any) => category.types)
        .flatMap((type: any) => type.product_items)
        .filter((item: Product) =>
          item.product_name.toLowerCase().includes(search.toLowerCase()),
        );

      setProducts(foundProducts);
      setIsResultsOpen(true);
    } else {
      setProducts([]);
      setIsResultsOpen(false);
    }
  }, [search]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsResultsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleResultClose = () => {
    setIsResultsOpen(false);
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="flex rounded-lg border border-primary px-4 py-2">
        <div className="relative flex grow items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <Input
            placeholder="ค้นหาสินค้า..."
            className="text-normal no-focus border-none bg-transparent shadow-none outline-none"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <Button
          variant={"ghost"}
          size="icon"
          aria-label="Search clear button"
          onClick={() => setSearch("")}
        >
          <XCircleIcon className="size-6 text-primary" />
        </Button>
      </div>
      {isResultsOpen && (
        <GlobalSearchResult
          products={products}
          onResultClose={handleResultClose}
        />
      )}
    </div>
  );
};

export default GlobalSearch;
