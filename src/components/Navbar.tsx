import { useAppDispatch, useAppSelector, selectCartCount } from "@/redux/store";
import { logout } from "@/redux/authSlice";
import { clearCart } from "@/redux/cartSlice";
import { useNavigate } from "@tanstack/react-router";
import { LogOut, ShoppingBag, UtensilsCrossed } from "lucide-react";

export function Navbar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const username = useAppSelector((s) => s.auth.username);
  const cartCount = useAppSelector(selectCartCount);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate({ to: "/" });
  };

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-card/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <UtensilsCrossed className="size-5" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg font-bold tracking-tight">Spice&nbsp;Route</p>
            <p className="hidden text-xs text-muted-foreground sm:block">Order fresh, order fast</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground sm:inline-flex">
            <ShoppingBag className="size-4" />
            {cartCount} items
          </span>
          {username && (
            <span className="hidden text-sm text-muted-foreground md:inline">Hi, {username}</span>
          )}
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <LogOut className="size-4" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
