import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

type Props = {
  activeCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
};

export function CategoryList({ activeCategoryId, onSelectCategory }: Props) {
  return (
    <nav aria-label="Product categories">
      <ul className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {categories.map((category) => {
          const isActive = category.id === activeCategoryId;
          const Icon = category.icon;
          return (
            <li key={category.id} className="shrink-0">
              <button
                onClick={() => onSelectCategory(category.id)}
                aria-pressed={isActive}
                className={cn(
                  "flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-secondary",
                )}
              >
                <Icon className="size-4.5" aria-hidden="true" />
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
