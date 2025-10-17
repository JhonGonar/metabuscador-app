"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import type { Product } from "../../entities/product/data";

type Props = {
  product: Product | null;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative z-10 w-[90%] max-w-2xl bg-white rounded-md p-6 shadow-lg">
        <button
          aria-label="Cerrar"
          className="absolute right-3 top-3 text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flex gap-6">
          <div className="w-48 h-48 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
            {product.img ? (
              <Image src={product.img} alt={product.name} width={192} height={192} />
            ) : (
              <div className="text-sm text-gray-500">No image</div>
            )}
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.category}</p>
            <div className="mt-4 text-lg font-semibold">${product.price.toFixed(2)}</div>
            <p className="mt-4 text-gray-700">Detalle del producto (descripción breve de ejemplo).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
