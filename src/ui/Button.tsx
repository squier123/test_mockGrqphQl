import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils/index.tsx";

const buttonVariants = cva(
  "inline-flex transition-all duration-200 items-center justify-center gap-2.5 whitespace-nowrap rounded-md text-base font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:opacity-80 px-5 py-3 ",
        secondary:
          "bg-transparent items-center border border-grey text-grey hover:opacity-80 px-5 py-3",
        linear:
          "border border-primary bg-white text-primary hover:opacity-80 px-5 py-3",
        icon: "px-0 py-0 text-primary hover:opacity-80 font-medium",
        outline:
          "border-none bg-transparent text-primary hover:opacity-80 px-5 py-3",
        destructiveOutline:
          "border border-danger bg-white text-danger hover:opacity-80 px-5 py-3",
        ghost:
          "border-transparent bg-transparent text-black hover:opacity-80 px-5 py-3",
        destructive:
          "border-none bg-danger text-white hover:opacity-80 px-5 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
