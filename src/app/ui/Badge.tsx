import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/index.tsx";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:
          "text-badges-default bg-badges-default/40 border-badges-default",
        primary:
          "text-badges-primary bg-badges-primary/40 border-badges-primary",
        danger: "text-badges-danger bg-badges-danger/40 border-badges-danger",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
