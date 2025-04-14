/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx } from "clsx";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { VariantProps } from "class-variance-authority";
import { badgeVariants } from "../app/ui/Badge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < breakpoint);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [breakpoint]);

  return isMobile;
}
