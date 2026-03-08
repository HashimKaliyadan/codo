"use client";

import Link from "next/link";
import { ArrowRight, Code2, GraduationCap } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback, useLayoutEffect } from "react";

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
        <section ref={sectionRef} className="container max-w-7xl mx-auto px-4 md:px-8 pb-16 relative">

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

            {/* ─── PART 5: Premium Ecosystem Cards ─── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                {/* CODO Agency Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative group perspective-1000"
                >
                    {/* Card Surface - High Contrast & Sharp Shadow */}
                    <div className="relative h-full overflow-hidden rounded-codo p-[1.5px] bg-gradient-to-b from-black/5 to-transparent dark:from-white/10 dark:to-transparent shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-transform duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-white/80 dark:bg-[#00152b]/80 backdrop-blur-sm" />

                        {/* Light Sweep Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20">
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 dark:via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                        </div>

                        {/* Content Container */}
                        <div className="relative h-full p-8 md:p-10 flex flex-col z-10">
                            {/* Background Watermark Icon */}
                            <Code2 className="absolute -right-8 -bottom-8 w-64 h-64 text-codo-blue/[0.03] dark:text-codo-aqua/5 rotate-[-15deg] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-0 pointer-events-none" />

                            <div className="h-16 w-16 rounded-2xl bg-codo-blue/5 dark:bg-gradient-to-br dark:from-codo-aqua/20 dark:to-transparent border border-black/5 dark:border-white/20 flex items-center justify-center mb-8 text-codo-blue dark:text-codo-aqua shadow-sm relative overflow-hidden">
                                <Code2 className="h-8 w-8 relative z-10" />
                            </div>

                            <h3 className="text-3xl font-extrabold text-foreground mb-4 tracking-tight">CODO Agency</h3>

                            <p className="text-foreground/75 leading-relaxed text-lg mb-8 flex-grow">
                                Our service arm delivering elite custom web development, complex software architectures, mobile applications, and cutting-edge AI integrations for visionaries.
                            </p>

                            <Link href="/portfolio" className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-codo-green px-6 py-3 font-semibold text-white transition-all shadow-md hover:shadow-codo-green/30 hover:-translate-y-0.5 w-max">
                                <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 ease-out group-hover/btn:translate-y-0" />
                                <span className="relative flex items-center">
                                    View Digital Portfolio
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* CODO Academy Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="relative group perspective-1000"
                >
                    {/* Card Surface - High Contrast & Sharp Shadow */}
                    <div className="relative h-full overflow-hidden rounded-codo p-[1.5px] bg-gradient-to-b from-black/5 to-transparent dark:from-white/10 dark:to-transparent shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-transform duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-white/80 dark:bg-[#00152b]/80 backdrop-blur-sm" />

                        {/* Light Sweep Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20">
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 dark:via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                        </div>

                        {/* Content Container */}
                        <div className="relative h-full p-8 md:p-10 flex flex-col z-10">
                            {/* Background Watermark Icon */}
                            <GraduationCap className="absolute -right-8 -bottom-8 w-64 h-64 text-codo-green/[0.03] rotate-[-15deg] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-0 pointer-events-none" />

                            <div className="h-16 w-16 rounded-2xl bg-codo-green/5 dark:bg-gradient-to-br dark:from-codo-green/20 dark:to-transparent border border-black/5 dark:border-white/20 flex items-center justify-center mb-8 text-codo-green shadow-sm relative overflow-hidden">
                                <GraduationCap className="h-8 w-8 relative z-10" />
                            </div>

                            <h3 className="text-3xl font-extrabold text-foreground mb-4 tracking-tight">CODO Academy</h3>

                            <p className="text-foreground/75 leading-relaxed text-lg mb-8 flex-grow">
                                Our education arm dedicated to catalyzing a digital revolution by training 100,000 individuals in Python Full-Stack, Machine Learning, and Robotics.
                            </p>

                            <Link href="https://codoacademy.com" target="_blank" className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-codo-green px-6 py-3 font-semibold text-white transition-all shadow-md hover:shadow-codo-green/30 hover:-translate-y-0.5 w-max">
                                <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 ease-out group-hover/btn:translate-y-0" />
                                <span className="relative flex items-center">
                                    Visit Academy Hub
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
