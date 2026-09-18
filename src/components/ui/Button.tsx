import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp" | "accent";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", children, className, icon, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-[#0F766E] text-white hover:bg-[#115E59] focus-visible:ring-[#0F766E] shadow-sm hover:shadow-md",
      secondary:
        "bg-[#14B8A6] text-white hover:bg-[#0D9488] focus-visible:ring-[#14B8A6] shadow-sm",
      outline:
        "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 focus-visible:ring-slate-400",
      ghost:
        "text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-300",
      whatsapp:
        "bg-[#25D366] text-white hover:bg-[#20bd5a] focus-visible:ring-[#25D366] shadow-sm hover:shadow-md",
      accent:
        "bg-[#2563EB] text-white hover:bg-[#1D4ED8] focus-visible:ring-[#2563EB] shadow-sm hover:shadow-md",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
