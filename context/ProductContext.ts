import { createContext } from "react";
import { Product } from "@/types/types";

export const ProductContext = createContext<Product[]>([]);
