import ProductCard from "../ProductCard/ProductCard";
import type { Product } from "../../entities/product/data";

export default function ProductList({ items, onSelect }: { items: Product[]; onSelect?: (p: Product) => void }) {
  if (!items.length) {
    return <div className="text-center p-8">No se encontraron productos.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} onClick={() => onSelect?.(p)} />
      ))}
    </div>
  );
}
