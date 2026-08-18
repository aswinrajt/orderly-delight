import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Plus } from "lucide-react";

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export function ProductCard({ product, onAddToCart }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={768}
        height={768}
        className="aspect-4/3 w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-display text-base font-semibold">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Plus className="size-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
