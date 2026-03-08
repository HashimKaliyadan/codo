"use client";

import { motion } from "framer-motion";
import { Zap, Globe, Shield } from "lucide-react";
import { SpotlightCard } from "../ui/spotlight-card";

const pillars = [
    {
        icon: Zap,
        title: "Innovation First",
        description: "Pioneering AI-driven solutions that redefine industry standards.",
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Serving visionaries from Malappuram to enterprises worldwide.",
    },
    {
        icon: Shield,
        title: "Elite Quality",
        description: "Enterprise-grade architecture built for scale and resilience.",
    },
];

export default function AboutBrief() {
    return (
        <section className="pt-20 pb-12 relative overflow-hidden">
            <div className="container max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                {/* ── Heading Block ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-sm font-bold tracking-widest text-codo-green uppercase mb-5">
                        About CODO AI Innovations
                    </h2>
                    <p className="text-2xl md:text-4xl font-semibold text-foreground dark:text-white leading-tight md:leading-tight tracking-tight">
                        We{" "}
                        <span className="text-codo-green">engineer elite custom software</span>,
                        AI&#8209;powered solutions, and empower the next generation of digital
                        leaders from{" "}
                        <span className="italic text-codo-aqua dark:text-codo-aqua">
                            Malappuram&nbsp;to&nbsp;the&nbsp;world
                        </span>
                        .
                    </p>
                </motion.div>

                {/* ── Three-Pillar Cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.12,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <SpotlightCard className="relative overflow-hidden rounded-2xl bg-codo-blue/[0.04] dark:bg-[#00101f]/70 backdrop-blur-2xl border border-codo-blue/15 dark:border-white/8 shadow-[0_8px_40px_rgba(0,32,63,0.06)] dark:shadow-[0_8px_40px_rgb(0,0,0,0.25)] p-8 h-full transition-transform duration-500 ease-out hover:-translate-y-1">
                                <div className="h-12 w-12 rounded-xl bg-codo-green/10 dark:bg-codo-green/15 border border-codo-green/20 dark:border-codo-green/25 flex items-center justify-center text-codo-green mb-5">
                                    <pillar.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground dark:text-white mb-2 tracking-tight">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-foreground/60 dark:text-white/55 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
