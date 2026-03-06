"use client";

import Link from "next/link";
import { ArrowRight, Code2, GraduationCap } from "lucide-react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import QuantumScene from "./QuantumScene";

export default function Hero() {
    const { scrollY } = useScroll();
    const sceneY = useTransform(scrollY, [0, 600], [0, 250]);
    const sceneOpacity = useTransform(scrollY, [0, 400], [1, 0.2]);

    const titleContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const wordItem: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring" as const, stiffness: 120, damping: 15 }
        }
    };

    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden pt-[88px]">
            {/* 3D Quantum Scene Background with Parallax Scroll */}
            <motion.div
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{ y: sceneY, opacity: sceneOpacity }}
            >
                <QuantumScene />
                {/* Ambient Readability Overlay */}
                <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--background)_0%,_transparent_70%] opacity-40 dark:opacity-60 z-10" />
            </motion.div>

            <div className="relative container max-w-5xl mx-auto px-6 text-center z-20 flex flex-col items-center">
                <motion.h1
                    variants={titleContainer}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight text-foreground dark:text-white leading-[1.2] mb-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
                >
                    <motion.span variants={wordItem}>
                        COD<span className="text-codo-green">O</span>
                    </motion.span>
                    <motion.span variants={wordItem} className="relative px-2">
                        AI
                    </motion.span>
                    <motion.span variants={wordItem} className="relative px-2">
                        Innovations
                    </motion.span>
                </motion.h1>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                    {/* Primary Glass Button */}
                    <Link href="/portfolio" className="inline-flex h-14 items-center justify-center rounded-2xl bg-codo-blue/60 px-8 font-medium text-white shadow-xl backdrop-blur-xl border border-white/20 transition-all hover:bg-codo-blue/70 hover:-translate-y-1 hover:shadow-2xl w-full sm:w-auto dark:bg-codo-aqua/70 dark:text-codo-blue dark:border-white/30 dark:hover:bg-codo-aqua/80">
                        <Code2 className="mr-2 h-5 w-5" /> Work With Our Agency
                    </Link>
                    {/* Secondary Glass Button */}
                    <Link href="https://codoacademy.com" target="_blank" className="inline-flex h-14 items-center justify-center rounded-2xl bg-white/30 backdrop-blur-xl border border-white/40 px-8 font-medium text-codo-blue shadow-lg transition-all hover:bg-white/40 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto dark:bg-black/30 dark:border-white/20 dark:text-codo-aqua dark:hover:bg-black/40">
                        <GraduationCap className="mr-2 h-5 w-5" /> Explore CODO Academy
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}