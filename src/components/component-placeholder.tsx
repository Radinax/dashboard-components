import { cn } from "@/lib/utils";
import { Plus, Grip } from "lucide-react";

interface ComponentPlaceholderProps {
  title: string;
  description: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "col-span-1 row-span-1 min-h-[200px]",
  md: "col-span-2 row-span-1 min-h-[250px]",
  lg: "col-span-3 row-span-2 min-h-[400px]",
  xl: "col-span-4 row-span-2 min-h-[400px]",
};

export function ComponentPlaceholder({
  title,
  description,
  size = "md",
  className,
}: ComponentPlaceholderProps) {
  return (
    <div
      className={cn(
        "group relative bg-card border-2 border-dashed border-border rounded-xl p-6 transition-all duration-200 hover:border-primary/50 hover:bg-accent/50",
        sizeClasses[size],
        className
      )}
    >
      {/* Drag Handle */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Grip className="w-4 h-4 text-muted-foreground" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Plus className="w-6 h-6 text-primary" />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            {description}
          </p>
        </div>

        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors opacity-0 group-hover:opacity-100">
          Add Component
        </button>
      </div>

      {/* Size Indicator */}
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground/50 font-mono">
        {size.toUpperCase()}
      </div>
    </div>
  );
}
