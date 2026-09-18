import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  padded?: boolean;
}

export function Card({
  className,
  hoverEffect = true,
  padded = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300",
        hoverEffect && "hover:border-teal-300/80 hover:shadow-[0_12px_24px_-8px_rgba(15,118,110,0.12)] hover:-translate-y-0.5",
        padded && "p-6 md:p-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
