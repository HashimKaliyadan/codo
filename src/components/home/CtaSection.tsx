"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { CodoButton } from "../ui/codo-button";
import SalesAdvisorModal from "./SalesAdvisorModal";

export default function CtaSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative group p-[1px] rounded-[2.5rem] overflow-hidden"
                >
                    {/* Animated Rotating Border Shine */}
                    <div className="absolute -inset-[2px] rounded-[2.5rem] overflow-hidden pointer-events-none z-0">
                        <div
                            className="absolute inset-[-150%] opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                            style={{
                                background: "conic-gradient(from 0deg, transparent 0%, transparent 60%, rgba(0,135,100,0.8) 75%, rgba(0,32,63,0.6) 85%, transparent 100%)",
                                animation: "borderSpin 5s linear infinite",
                            }}
                        />
                    </div>

                    {/* Glass Card Surface */}
                    <div className="relative h-full w-full overflow-hidden rounded-[2.45rem] bg-white/60 dark:bg-[#00101f]/70 backdrop-blur-3xl border border-white/20 dark:border-white/10 p-10 md:p-16 text-center shadow-2xl z-10">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                            <Sparkles className="w-32 h-32 text-codo-aqua" />
                        </div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-codo-green/30 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-codo-aqua/20 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-6 leading-tight">
                                Ready to Transform Your Digital Presence?
                            </h2>
                            <p className="text-lg text-foreground/70 dark:text-codo-aqua/80 mb-10 max-w-2xl">
                                Partner with CODO AI Agency to build intelligent, scalable, and visually stunning software solutions that set you apart.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <CodoButton
                                    size="lg"
                                    className="gap-2 bg-codo-green text-white hover:bg-codo-green/90 shadow-lg shadow-codo-green/20"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    <Phone size={18} /> Talk to an Advisor
                                </CodoButton>

                                <CodoButton
                                    size="lg"
                                    variant="outline"
                                    className="gap-2 text-foreground dark:text-white border-foreground/20 dark:border-white/20 hover:bg-foreground/5 dark:hover:bg-white/10"
                                >
                                    View Portfolio <ArrowRight size={18} />
                                </CodoButton>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <SalesAdvisorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
