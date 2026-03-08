"use client";

import { motion } from "framer-motion";

export default function AboutBrief() {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Subtle Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-codo-green/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-sm font-bold tracking-widest text-codo-green uppercase mb-8">
                        About CODO AI Innovations
                    </h2>
                    <p className="text-2xl md:text-4xl font-medium text-foreground/90 dark:text-white/90 leading-tight md:leading-tight tracking-tight">
                        We <span className="text-foreground dark:text-white font-bold">engineer elite custom software</span>, AI-powered solutions, and empower the next generation of digital leaders from <span className="text-codo-green italic">Malappuram to the world</span>.
                    </p>

                    <div className="mt-12 h-1 w-20 mx-auto bg-gradient-to-r from-transparent via-codo-green/40 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
