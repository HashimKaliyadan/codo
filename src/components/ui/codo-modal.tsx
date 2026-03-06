"use client";

import * as React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface CodoModalProps {
    isOpen: boolean;
    onClose: (open: boolean) => void;
    title: string;
    description?: string;
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export function CodoModal({
    isOpen,
    onClose,
    title,
    description,
    size = "md",
    children,
}: CodoModalProps) {
    // Enforcing SOP Modal Sizes
    const maxWidthClass = {
        sm: "sm:max-w-[400px]", // For alerts & simple confirmations
        md: "sm:max-w-[600px]", // For standard data entry forms
        lg: "sm:max-w-[950px]", // For detailed reports
    }[size];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className={cn(
                    "rounded-codo shadow-codo border-border bg-background",
                    maxWidthClass
                )}
            >
                <DialogHeader>
                    <DialogTitle className="text-codo-blue dark:text-codo-aqua text-xl font-bold">
                        {title}
                    </DialogTitle>
                    {description && (
                        <DialogDescription className="text-muted-foreground mt-1.5">
                            {description}
                        </DialogDescription>
                    )}
                </DialogHeader>

                {/* Modal Body */}
                <div className="mt-4">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
}
