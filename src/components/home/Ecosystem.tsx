"use client";

import Link from "next/link";
import { ArrowRight, Code2, GraduationCap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Ecosystem() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacityParallax = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);

    return (
        <section ref={ref} className="container max-w-7xl mx-auto px-4 md:px-8 pb-16 pt-12">
            {/* New Parallax Narrative Intro */}
            <motion.div
                style={{ y: yParallax, opacity: opacityParallax }}
                className="max-w-4xl mx-auto text-center mb-24"
            >
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-foreground/90 dark:text-white/90 balance-text">
                    The central powerhouse driving digital transformation. We engineer elite, custom software solutions through our Agency and empower the next generation of tech leaders through our Academy.
                </p>
            </motion.div>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-codo-blue dark:text-codo-aqua">Our Ecosystem</h2>
                <p className="text-foreground/70 mt-3">Two specialized verticals, one shared vision of digital excellence.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* CODO Agency (Takes 6 of 12 columns) */}
                <div className="md:col-span-6 rounded-codo border border-border bg-white dark:bg-[#00203F]/50 p-8 shadow-codo transition-all hover:-translate-y-1">
                    <div className="h-14 w-14 rounded-full bg-codo-blue/10 dark:bg-codo-aqua/10 flex items-center justify-center mb-6 text-codo-blue dark:text-codo-aqua">
                        <Code2 className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-codo-blue dark:text-codo-aqua mb-3">CODO Agency</h3>
                    <p className="text-foreground/80 mb-6 min-h-[80px]">
                        Our service arm delivering custom web development, complex software architectures, mobile applications, and cutting-edge AI integrations for enterprises.
                    </p>
                    <Link href="/portfolio" className="text-codo-green font-medium inline-flex items-center hover:underline">
                        View Agency Portfolio <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>

                {/* CODO Academy (Takes 6 of 12 columns) */}
                <div className="md:col-span-6 rounded-codo border border-border bg-white dark:bg-[#00203F]/50 p-8 shadow-codo transition-all hover:-translate-y-1">
                    <div className="h-14 w-14 rounded-full bg-codo-green/10 flex items-center justify-center mb-6 text-codo-green">
                        <GraduationCap className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-codo-blue dark:text-codo-aqua mb-3">CODO Academy</h3>
                    <p className="text-foreground/80 mb-6 min-h-[80px]">
                        Our education arm dedicated to catalyzing a digital revolution by training 100,000 individuals in Python Full-Stack, Machine Learning, and Robotics.
                    </p>
                    <Link href="https://codoacademy.com" target="_blank" className="text-codo-green font-medium inline-flex items-center hover:underline">
                        Visit Academy Website <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
