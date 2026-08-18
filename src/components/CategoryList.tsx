import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

type Props = {
  activeCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
};

export function CategoryList({ activeCategoryId, onSelectCategory }: Props) {
  return (
    <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 sm:flex-wrap">
      {categories.map((category) => {
        const isActive = category.id === activeCategoryId;
        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={cn(
              "flex shrink-0 items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition-colors",
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:bg-secondary",
            )}
          >
            <span className="text-lg" aria-hidden>
              {category.icon}
            </span>
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
