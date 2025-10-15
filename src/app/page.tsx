"use client";
import Image from "next/image";
import { useState } from "react";
import CategoryFilter from "../widgets/CategoryFilter/CategoryFilter";
import ProductList from "../widgets/ProductList/ProductList";
import { products } from "../entities/product/data";
import { useCategoryFilter } from "../features/search/useCategoryFilter";

export default function Home() {
  const { category, setCategory, minPrice, setMinPrice, maxPrice, setMaxPrice, filtered } =
    useCategoryFilter(null, products);

  return (
    <div className="min-h-screen p-8 sm:p-12 bg-[var(--background)] text-[var(--foreground)]">
      <header className="max-w-5xl mx-auto mb-6">
        <h1 className="text-2xl font-bold">Metabuscador - Productos</h1>
        <p className="text-sm text-gray-600">Buscar por categoría y filtrar por precio</p>
      </header>

      <main className="max-w-5xl mx-auto grid gap-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <CategoryFilter value={category} onChange={setCategory} />

          <div className="w-full max-w-md p-4 rounded-md border border-gray-200 bg-white/60">
            <label className="block text-sm font-medium mb-2">Precio</label>
            <div className="flex gap-2">
              <input
                className="w-1/2 px-3 py-1 border rounded"
                placeholder="Min"
                type="number"
                value={minPrice as number | ""}
                onChange={(e) => setMinPrice(e.target.value === "" ? "" : Number(e.target.value))}
              />
              <input
                className="w-1/2 px-3 py-1 border rounded"
                placeholder="Max"
                type="number"
                value={maxPrice as number | ""}
                onChange={(e) => setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        <section>
          <ProductList items={filtered} />
        </section>
      </main>
    </div>
  );
}
