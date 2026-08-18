import { useAppDispatch, useAppSelector, selectCartItems, selectCartTotal } from "@/redux/store";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/cartSlice";
import { CartItem } from "./CartItem";
import { formatPrice } from "@/lib/format";
import { ShoppingCart } from "lucide-react";

export function Cart() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);

  return (
    <aside className="rounded-2xl border border-border bg-card p-4 shadow-sm lg:sticky lg:top-24">
      <div className="flex items-center justify-between gap-2">
        <h2 className="font-display text-lg font-bold">Your Order</h2>
        {items.length > 0 && (
          <button
            onClick={() => dispatch(clearCart())}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-destructive"
          >
            Clear
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-12 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
            <ShoppingCart className="size-7" />
          </span>
          <p className="font-semibold">Your order is empty</p>
          <p className="text-sm text-muted-foreground">Add some tasty items to get started.</p>
        </div>
      ) : (
        <>
          <ul className="mt-4 flex flex-col gap-3">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={(id) => dispatch(increaseQuantity(id))}
                onDecrease={(id) => dispatch(decreaseQuantity(id))}
                onRemove={(id) => dispatch(removeFromCart(id))}
              />
            ))}
          </ul>
          <div className="mt-4 border-t border-border pt-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-display text-2xl font-bold text-primary">
                {formatPrice(total)}
              </span>
            </div>
            <button className="mt-3 w-full rounded-xl bg-primary py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Place Order
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
