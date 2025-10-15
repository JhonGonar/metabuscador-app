"use client";
import { useState, useMemo } from "react";
import type { Product } from "../../entities/product/data";

export function useCategoryFilter(initial: string | null = null, items: Product[] = []) {
  const [category, setCategory] = useState<string | null>(initial);
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const filtered = useMemo(() => {
    return items.filter((p) => {
      if (category && p.category !== category) return false;
      if (minPrice !== "" && p.price < Number(minPrice)) return false;
      if (maxPrice !== "" && p.price > Number(maxPrice)) return false;
      return true;
    });
  }, [items, category, minPrice, maxPrice]);

  return {
    category,
    setCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    filtered,
  };
}
