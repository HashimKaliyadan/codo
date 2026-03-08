"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Code, BrainCircuit } from "lucide-react";

const services = [
    {
        title: "Custom Website Development",
        description: "High-performance, visually stunning websites built with Next.js and modern web standards.",
        icon: <Monitor className="h-6 w-6" />,
        color: "text-codo-blue dark:text-codo-aqua",
        bg: "bg-codo-blue/10 dark:bg-codo-aqua/10"
    },
    {
        title: "Software Development",
        description: "Scalable enterprise applications and complex software architectures tailored to your needs.",
        icon: <Code className="h-6 w-6" />,
        color: "text-codo-green",
        bg: "bg-codo-green/10"
    },
    {
        title: "Mobile Application Development",
        description: "Native and cross-platform mobile apps delivering seamless user experiences.",
        icon: <Smartphone className="h-6 w-6" />,
        color: "text-codo-blue dark:text-codo-aqua",
        bg: "bg-codo-blue/10 dark:bg-codo-aqua/10"
    },
    {
        title: "AI-Based Solutions",
        description: "Intelligent automation and machine learning integrations to future-proof your business.",
        icon: <BrainCircuit className="h-6 w-6" />,
        color: "text-codo-green",
        bg: "bg-codo-green/10"
    }
];

export default function Services() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
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
                        className="text-lg text-foreground/70"
                    >
                        We build custom, scalable solutions that drive real business results.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/50 dark:bg-codo-blue/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 ${service.bg} ${service.color} transition-transform group-hover:scale-110`}>
                                {service.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-foreground mb-4">{service.title}</h4>
                            <p className="text-foreground/70 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Details */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-codo-green/5 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-codo-blue/5 blur-3xl rounded-full pointer-events-none" />
        </section>
    );
}
