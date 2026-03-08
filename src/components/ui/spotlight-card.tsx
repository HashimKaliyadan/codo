"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    spotlightColor?: string;
    radius?: number;
}

export function SpotlightCard({
    children,
    className = "",
    spotlightColor = "rgba(255, 255, 255, 0.1)",
    radius = 600,
    ...props
}: SpotlightCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`relative group ${className}`}
            onMouseMove={handleMouseMove}
            {...props}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            ${radius}px circle at ${mouseX}px ${mouseY}px,
                            ${spotlightColor},
                            transparent 80%
                        )
                    `,
                }}
            />
            {children}
        </div>
    );
}
