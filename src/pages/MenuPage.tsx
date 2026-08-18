import { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { CategoryList } from "@/components/CategoryList";
import { ProductList } from "@/components/ProductList";
import { Cart } from "@/components/Cart";
import { categories } from "@/data/categories";
import { products, type Product } from "@/data/products";
import { useAppDispatch } from "@/redux/store";
import { addToCart } from "@/redux/cartSlice";

export function MenuPage() {
  const dispatch = useAppDispatch();
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]!.id);

  const visibleProducts = useMemo(
    () => products.filter((product) => product.categoryId === activeCategoryId),
    [activeCategoryId],
  );

  const handleAddToCart = (product: Product) => dispatch(addToCart(product));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_360px]">
        <section className="min-w-0">
          <h1 className="font-display text-2xl font-bold tracking-tight">Browse the menu</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Pick a category and add your favourites to the order.
          </p>
          <div className="mt-4">
            <CategoryList
              activeCategoryId={activeCategoryId}
              onSelectCategory={setActiveCategoryId}
            />
          </div>
          <div className="mt-6">
            <ProductList products={visibleProducts} onAddToCart={handleAddToCart} />
          </div>
        </section>
        <Cart />
      </main>
    </div>
  );
}
