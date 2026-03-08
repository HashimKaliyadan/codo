"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Monitor, Smartphone, Code, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { SpotlightCard } from "../ui/spotlight-card";

const services = [
    {
        num: "01",
        title: "Custom Website Development",
        description: "High-performance, visually stunning websites built with modern web standards.",
        icon: <Monitor className="h-5 w-5 md:h-6 md:w-6" />,
        color: "text-codo-blue dark:text-codo-aqua",
        bgColor: "bg-codo-blue/8 dark:bg-codo-aqua/10",
        spanClass: "md:col-span-7",
    },
    {
        num: "02",
        title: "Software Development",
        description: "Scalable enterprise applications and complex software architectures.",
        icon: <Code className="h-5 w-5 md:h-6 md:w-6" />,
        color: "text-codo-green",
        bgColor: "bg-codo-green/8 dark:bg-codo-green/10",
        spanClass: "md:col-span-5",
    },
    {
        num: "03",
        title: "AI-Based Solutions",
        description: "Intelligent automation and machine learning integrations to future-proof your business.",
        icon: <BrainCircuit className="h-5 w-5 md:h-6 md:w-6" />,
        color: "text-codo-green",
        bgColor: "bg-codo-green/8 dark:bg-codo-green/10",
        spanClass: "md:col-span-5",
    },
    {
        num: "04",
        title: "Mobile Application Development",
        description: "Native and cross-platform mobile apps delivering seamless user experiences.",
        icon: <Smartphone className="h-5 w-5 md:h-6 md:w-6" />,
        color: "text-codo-blue dark:text-codo-aqua",
        bgColor: "bg-codo-blue/8 dark:bg-codo-aqua/10",
        spanClass: "md:col-span-7",
    }
];

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Desktop-only parallax
    const yLeft = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const yRight = useTransform(scrollYProgress, [0, 1], [40, -80]);

    return (
        <section id="services" ref={sectionRef} className="py-24 relative overflow-hidden">
            {/* Ambient Animated Glowing Orb */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <div
                    className="absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 dark:opacity-20 blur-[140px]"
                    style={{
                        background: "radial-gradient(circle, rgba(0,135,100,0.3) 0%, rgba(0,32,63,0.15) 40%, transparent 70%)",
                        animation: "meshFloat 12s ease-in-out infinite alternate",
                    }}
                />
            </div>

            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-wider text-codo-green uppercase mb-4"
                    >
                        Agency Services
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-foreground mb-6"
                    >
                        Engineering Digital Excellence
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-lg text-foreground/70"
                    >
                        We build custom, scalable solutions that drive real business results.
                    </motion.p>
                </div>

                {/* ─── MOBILE: Compact Vertical List ─── */}
                <div className="md:hidden">
                    <div className="rounded-3xl bg-white/60 dark:bg-[#00101f]/60 backdrop-blur-xl border border-border/40 overflow-hidden divide-y divide-border/30">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <div
                                    className="flex items-center gap-4 p-4 transition-colors"
                                >
                                    {/* Icon */}
                                    <div className={`h-11 w-11 rounded-2xl ${service.bgColor} flex items-center justify-center ${service.color} shrink-0`}>
                                        {service.icon}
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-[15px] font-bold text-foreground leading-tight mb-0.5">
                                            {service.title}
                                        </h4>
                                        <p className="text-xs text-foreground/50 leading-relaxed line-clamp-1">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ─── DESKTOP: Premium Bento Grid Layout ─── */}
                <div className="hidden md:grid md:grid-cols-12 gap-6 relative">
                    {services.map((service, index) => {
                        const isLeftCol = index === 0 || index === 3;
                        const cardY = isLeftCol ? yLeft : yRight;

                        return (
                            <motion.div
                                key={index}
                                style={{ y: cardY }}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className={`${service.spanClass} group relative rounded-[32px] overflow-hidden p-[1px]`}
                            >
                                <SpotlightCard className="relative h-full flex flex-col bg-slate-50/80 dark:bg-[#00101f]/70 backdrop-blur-2xl rounded-[31px] p-10 transition-colors duration-500 hover:bg-slate-100/90 dark:hover:bg-[#00101f]/80 border border-slate-200/60 dark:border-white/10 shadow-sm dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] z-10">

                                    {/* Top Header: Icon */}
                                    <div className="flex items-start mb-12">
                                        <div className={`h-12 w-12 rounded-2xl ${service.bgColor} flex items-center justify-center transition-colors duration-500 ${service.color} shadow-sm`}>
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* Bottom Body: Typography */}
                                    <div className="mt-auto relative z-10">
                                        <h4 className="text-2xl font-bold text-foreground mb-3">{service.title}</h4>
                                        <p className="text-foreground/70 leading-relaxed max-w-sm">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Large Typographic Watermark Number */}
                                    <div className="absolute bottom-4 right-6 text-[8rem] font-black leading-none text-foreground/[0.03] dark:text-white/[0.02] -z-0 select-none transition-transform duration-700 group-hover:-translate-y-4">
                                        {service.num}
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
