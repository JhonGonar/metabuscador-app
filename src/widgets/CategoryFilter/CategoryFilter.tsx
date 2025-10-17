"use client";
import React from "react";
import { categories } from "../../entities/product/data";

type Props = {
  value: string | null;
  onChange: (c: string | null) => void;
};

export default function CategoryFilter({ value, onChange }: Props) {
  return (
    <div className="w-full max-w-md p-4 rounded-md border border-gray-200 bg-white/60">
      <label className="block text-sm font-medium mb-2">Categoría</label>
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => onChange(null)}
          className={`px-3 py-1 rounded-full text-sm ${value === null ? "bg-gray-800 text-white" : "bg-gray-100"}`}
        >
          Todas
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`px-3 py-1 rounded-full text-sm ${value === c ? "bg-gray-800 text-white" : "bg-gray-100"}`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
