"use client";

import Link from "next/link";
import { ArrowRight, Code2, GraduationCap } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback, useLayoutEffect } from "react";
import { SpotlightCard } from "../ui/spotlight-card";

// ── Inline useCountUp Hook ───────────────────────────────────────────
function useCountUp(target: number, duration: number = 2000, startOnView: boolean = true) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const start = useCallback(() => {
        if (hasStarted) return;
        setHasStarted(true);

        const startTime = performance.now();
        const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic for a satisfying deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        };
        requestAnimationFrame(step);
    }, [target, duration, hasStarted]);

    useEffect(() => {
        if (startOnView && isInView) {
            start();
        }
    }, [isInView, start, startOnView]);

    return { count, ref };
}

// ── Stats Data ───────────────────────────────────────────────────────
const stats = [
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 10000, suffix: "+", label: "Students Trained" },
    { value: 5, suffix: "+", label: "Years of Innovation" },
    { value: 12, suffix: "+", label: "Countries Reached" },
];

// ── Individual Stat Item ─────────────────────────────────────────────
function StatItem({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
    const { count, ref } = useCountUp(value, 2200);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-2 py-6"
        >
            <span className="text-4xl md:text-5xl font-bold text-codo-green tabular-nums">
                {count.toLocaleString()}{suffix}
            </span>
            <span className="text-xs md:text-sm font-medium uppercase tracking-widest text-foreground/50 dark:text-white/50">
                {label}
            </span>
        </motion.div>
    );
}

// ── Narrative Lines Data ────────────────────────────────────────────
// Combining phrases so words like "Agency" and "Academy" move with their sentences.
const narrativeLines = [
    { text: "The central powerhouse driving digital transformation." },
    {
        text: "We engineer elite, custom software solutions through our ",
        highlight: "Agency",
        color: "green"
    },
    {
        text: "and empower the next generation of tech leaders through our ",
        highlight: "Academy.",
        color: "blue"
    },
];

export default function Ecosystem() {
    const sectionRef = useRef<HTMLElement>(null);
    const narrativeRef = useRef<HTMLDivElement>(null);

    // Overall narrative scroll tracking
    const { scrollYProgress } = useScroll({
        target: narrativeRef,
        offset: ["start end", "center center"]
    });


    return (
        <section ref={sectionRef} className="container max-w-7xl mx-auto px-4 md:px-8 py-24 relative">

            {/* ─── PART 1: Cinematic Split-Text Parallax Reveal ─── */}
            <div ref={narrativeRef} className="min-h-[80vh] md:min-h-[100svh] flex items-center justify-center py-12 md:py-20 relative">

                {/* Animated Gradient Mesh Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                    <div
                        className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 dark:opacity-15 blur-[120px]"
                        style={{
                            background: "radial-gradient(circle, rgba(0,135,100,0.3) 0%, rgba(0,32,63,0.15) 50%, transparent 70%)",
                            animation: "meshFloat 8s ease-in-out infinite alternate",
                        }}
                    />
                    <div
                        className="absolute w-[400px] h-[400px] top-1/3 left-1/4 rounded-full opacity-15 dark:opacity-10 blur-[100px]"
                        style={{
                            background: "radial-gradient(circle, rgba(0,32,63,0.25) 0%, transparent 60%)",
                            animation: "meshFloat 10s ease-in-out 2s infinite alternate-reverse",
                        }}
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center px-4">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed md:leading-relaxed text-foreground/90 dark:text-white/90 space-y-4">
                        {narrativeLines.map((line, i) => {
                            // Each line gets its own staggered parallax offset
                            const startOffset = 0.1 + i * 0.15;
                            const endOffset = Math.min(startOffset + 0.4, 1);

                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const y = useTransform(scrollYProgress, [startOffset, endOffset], [40, 0]);
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const opacity = useTransform(scrollYProgress, [startOffset, endOffset], [0, 1]);

                            return (
                                <motion.div
                                    key={i}
                                    style={{ y, opacity }}
                                    className="block"
                                >
                                    {line.text}
                                    {line.highlight && (
                                        <span className={
                                            line.color === "green"
                                                ? "text-codo-green font-bold drop-shadow-[0_0_15px_rgba(0,135,100,0.4)]"
                                                : "text-codo-blue dark:text-codo-aqua font-bold drop-shadow-[0_0_15px_rgba(0,32,63,0.3)] dark:drop-shadow-[0_0_15px_rgba(240,243,255,0.3)]"
                                        }>
                                            {line.highlight}
                                        </span>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ─── PART 2: Animated Stats Counter Bar ─── */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-8 md:py-12 mb-12"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 relative">
                    {stats.map((stat, index) => (
                        <div key={index} className="relative">
                            <StatItem
                                value={stat.value}
                                suffix={stat.suffix}
                                label={stat.label}
                                delay={index * 0.1}
                            />
                            {/* Vertical Dividers (hidden on last item and on mobile between rows) */}
                            {index < stats.length - 1 && (
                                <div className={`absolute right-0 top-1/4 h-1/2 w-px bg-gradient-to-b from-transparent via-codo-green/30 to-transparent ${index === 1 ? "hidden md:block" : ""}`} />
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* ─── PART 3: Gradient Divider ─── */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-codo-green/40 to-transparent mb-12" />

            {/* ─── PART 4: Ecosystem Heading ─── */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold tracking-wider text-codo-green uppercase mb-4"
                >
                    CODO Ecosystem
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-foreground mb-6"
                >
                    Two Verticals. One Vision.
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-foreground/70"
                >
                    We engineer elite software solutions and empower the next generation of tech leaders to drive absolute digital excellence.
                </motion.p>
            </div>

            {/* ─── PART 5: Glass Command Deck Cards ─── */}
            <div className="flex flex-col gap-8 max-w-5xl mx-auto">

                {/* ── CODO Agency Card ── */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group block"
                >
                    {/* Glass Card Surface */}
                    <SpotlightCard className="relative overflow-hidden rounded-3xl bg-codo-blue/[0.04] dark:bg-[#00101f]/70 backdrop-blur-2xl border border-codo-blue/15 dark:border-white/8 shadow-[0_8px_40px_rgba(0,32,63,0.06)] dark:shadow-[0_8px_40px_rgb(0,0,0,0.25)] z-10 transition-transform duration-500 ease-out hover:-translate-y-1">


                        {/* Content: Horizontal Layout */}
                        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 p-8 md:p-10 z-10">

                            {/* Icon Pill */}
                            <div className="flex-shrink-0 h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-codo-blue/8 dark:bg-codo-aqua/10 border border-black/5 dark:border-white/10 flex items-center justify-center text-codo-blue dark:text-codo-aqua shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-codo-blue/20 dark:group-hover:shadow-codo-aqua/20">
                                <Code2 className="h-8 w-8 md:h-10 md:w-10" />
                            </div>

                            {/* Text Content */}
                            <div className="flex-grow min-w-0">
                                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-2">
                                    <span className="text-codo-blue dark:text-codo-aqua">CODO Agency</span>
                                </h3>
                                <p className="text-foreground/65 dark:text-white/60 leading-relaxed text-base md:text-lg">
                                    Our service arm delivering elite custom software, complex architectures, and cutting-edge AI integrations for visionaries.
                                </p>
                            </div>

                            {/* CTA Arrow */}
                            <Link href="/portfolio" className="flex-shrink-0 h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-codo-green flex items-center justify-center text-white shadow-lg hover:shadow-codo-green/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105 group/arrow">
                                <ArrowRight className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover/arrow:translate-x-0.5" />
                            </Link>
                        </div>
                    </SpotlightCard>
                </motion.div>

                {/* ── CODO Academy Card ── */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    className="relative group block"
                >
                    {/* Glass Card Surface */}
                    <SpotlightCard className="relative overflow-hidden rounded-3xl bg-codo-green/[0.04] dark:bg-[#00101f]/70 backdrop-blur-2xl border border-codo-green/15 dark:border-white/8 shadow-[0_8px_40px_rgba(0,135,100,0.06)] dark:shadow-[0_8px_40px_rgb(0,0,0,0.25)] z-10 transition-transform duration-500 ease-out hover:-translate-y-1">


                        {/* Content: Horizontal Layout */}
                        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 p-8 md:p-10 z-10">

                            {/* Icon Pill */}
                            <div className="flex-shrink-0 h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-codo-green/8 dark:bg-codo-green/12 border border-black/5 dark:border-white/10 flex items-center justify-center text-codo-green shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-codo-green/20">
                                <GraduationCap className="h-8 w-8 md:h-10 md:w-10" />
                            </div>

                            {/* Text Content */}
                            <div className="flex-grow min-w-0">
                                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-2">
                                    <span className="text-codo-green">CODO Academy</span>
                                </h3>
                                <p className="text-foreground/65 dark:text-white/60 leading-relaxed text-base md:text-lg">
                                    Our education arm training 100,000 individuals in Python Full-Stack, Machine Learning, and Robotics to lead the future.
                                </p>
                            </div>

                            {/* CTA Arrow */}
                            <Link href="https://codoacademy.com" target="_blank" className="flex-shrink-0 h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-codo-green flex items-center justify-center text-white shadow-lg hover:shadow-codo-green/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105 group/arrow">
                                <ArrowRight className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover/arrow:translate-x-0.5" />
                            </Link>
                        </div>
                    </SpotlightCard>
                </motion.div>

            </div>
        </section>
    );
}
