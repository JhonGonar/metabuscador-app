import Image from "next/image";
import type { Product } from "../../entities/product/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="w-full max-w-sm p-4 border rounded-md bg-white/70 flex gap-4 items-center">
      <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
        {product.img ? (
          <Image src={product.img} alt={product.name} width={80} height={80} />
        ) : (
          <div className="text-xs text-gray-500">No image</div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.category}</p>
        <div className="mt-2 font-semibold">${product.price.toFixed(2)}</div>
      </div>
    </div>
  );
}
