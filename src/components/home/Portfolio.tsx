"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { CodoButton } from "../ui/codo-button";

const projects = [
    {
        id: 1,
        title: "FinTech Dashboard",
        category: "Web Application",
        description: "A comprehensive financial analytics dashboard built for a leading investment firm.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "HealthCare App",
        category: "Mobile Application",
        description: "Patient management and telemedicine platform with real-time video consulting.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "AI Inventory System",
        category: "AI Integration",
        description: "Predictive inventory management system powered by machine learning algorithms.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    }
];

export default function Portfolio() {
    return (
        <section className="py-24 bg-zinc-100 dark:bg-codo-blue/20 relative">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold tracking-wider text-codo-green uppercase mb-4"
                        >
                            Featured Work
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold text-foreground"
                        >
                            Our Latest Digital Innovations
                        </motion.h3>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="/portfolio" passHref>
                            <CodoButton variant="outline" className="gap-2">
                                View Full Portfolio <ArrowRight size={16} />
                            </CodoButton>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-[#00203f]/50 border border-border shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="aspect-video overflow-hidden relative">
                                <div className="absolute inset-0 bg-codo-blue/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    <div className="h-10 w-10 rounded-full bg-white/90 dark:bg-codo-blue/90 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-codo-green hover:text-white transition-colors cursor-pointer shadow-lg">
                                        <ExternalLink size={18} />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <span className="text-xs font-semibold text-codo-green uppercase tracking-wider mb-2 block">
                                    {project.category}
                                </span>
                                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-codo-blue dark:group-hover:text-codo-aqua transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-foreground/70 text-sm line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
