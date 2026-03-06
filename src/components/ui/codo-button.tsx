"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-codo text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-codo",
    {
        variants: {
            variant: {
                default: "bg-codo-green text-white hover:bg-[#006c50]",
                secondary: "bg-codo-blue text-white hover:bg-[#003366]",
                outline: "border border-codo-blue bg-transparent text-codo-blue hover:bg-codo-aqua dark:border-codo-aqua dark:text-codo-aqua dark:hover:bg-codo-blue",
                ghost: "hover:bg-codo-aqua hover:text-codo-blue dark:hover:bg-codo-blue dark:hover:text-codo-aqua shadow-none",
                link: "text-codo-green underline-offset-4 hover:underline shadow-none",
            },
            size: {
                default: "h-11 px-6 py-2", // Slightly taller for a premium feel
                sm: "h-9 px-4 text-xs",
                lg: "h-14 px-8 text-base",
                icon: "h-11 w-11",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean; // Manual override if parent is handling state
}

const CodoButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, isLoading = false, children, disabled, onClick, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        // Internal auto-loading state for async onClick handlers
        const [isInternalLoading, setIsInternalLoading] = React.useState(false);

        const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
            if (isLoading || isInternalLoading) return;

            if (onClick) {
                const result = onClick(e) as unknown;
                // If the onClick is an async function, automatically trigger the spinner
                if (result instanceof Promise) {
                    setIsInternalLoading(true);
                    try {
                        await result;
                    } finally {
                        setIsInternalLoading(false);
                    }
                }
            }
        };

        const currentlyLoading = isLoading || isInternalLoading;

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={disabled || currentlyLoading}
                onClick={handleClick}
                {...props}
            >
                {currentlyLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                <span className={cn(currentlyLoading && "opacity-80")}>
                    {children}
                </span>
            </Comp>
        );
    }
);
CodoButton.displayName = "CodoButton";

export { CodoButton, buttonVariants };
