import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/context/AuthContext";
import { LogOut, ShoppingBag, UtensilsCrossed } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type Props = {
  cartCount: number;
  onLogout?: () => void;
};

export function Navbar({ cartCount, onLogout }: Props) {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout?.();
    logout();
    navigate({ to: "/" });
  };

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-card/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <UtensilsCrossed className="size-5" aria-hidden="true" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg font-bold tracking-tight">Spice&nbsp;Route</p>
            <p className="hidden text-xs text-muted-foreground sm:block">Order fresh, order fast</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground">
            <ShoppingBag className="size-4" aria-hidden="true" />
            <span className="sr-only">Items in cart:</span>
            {cartCount}
            <span className="hidden sm:inline">items</span>
          </span>
          {username && (
            <span className="hidden text-sm text-muted-foreground md:inline">Hi, {username}</span>
          )}
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
          >
            <LogOut className="size-4" aria-hidden="true" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
