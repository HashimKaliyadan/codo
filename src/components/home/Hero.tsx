"use client";

import Link from "next/link";
import { ArrowRight, Code2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import QuantumScene from "./QuantumScene";

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden pt-[88px]">
            {/* 3D Quantum Scene Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none -z-20">
                <QuantumScene />
                {/* Ambient Readability Overlay */}
                <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--background)_0%,_transparent_70%] opacity-40 dark:opacity-60" />
            </div>

            <div className="container max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight text-codo-blue dark:text-codo-aqua leading-[1.2] mb-8 flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-2 capitalize"
                >
                    <span className="opacity-90">CODO</span>
                    <span className="text-codo-green relative px-2">
                        AI Innovations
                    </span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-lg text-foreground/80 max-w-2xl mb-10 leading-relaxed">
                    The central powerhouse driving digital transformation. We engineer elite, custom software solutions through our Agency and empower the next generation of tech leaders through our Academy.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                    <Link href="/portfolio" className="inline-flex h-14 items-center justify-center rounded-codo bg-codo-blue px-8 font-medium text-white shadow-codo transition-transform hover:-translate-y-1 w-full sm:w-auto dark:bg-codo-aqua dark:text-codo-blue">
                        <Code2 className="mr-2 h-5 w-5" /> Work With Our Agency
                    </Link>
                    <Link href="https://codoacademy.com" target="_blank" className="inline-flex h-14 items-center justify-center rounded-codo border border-codo-blue/30 bg-background/50 backdrop-blur-md px-8 font-medium text-codo-blue transition-transform hover:-translate-y-1 w-full sm:w-auto dark:border-codo-aqua/30 dark:text-codo-aqua">
                        <GraduationCap className="mr-2 h-5 w-5" /> Explore CODO Academy
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}