"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import SalesAdvisorModal from "./SalesAdvisorModal";
import { SpotlightCard } from "../ui/spotlight-card";

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
                    {/* Glass Card Surface */}
                    <SpotlightCard className="relative h-full w-full overflow-hidden rounded-[2.45rem] bg-codo-blue/[0.04] dark:bg-[#00101f]/70 backdrop-blur-3xl border border-codo-blue/15 dark:border-white/10 p-10 md:p-16 text-center shadow-2xl z-10">
                        {/* Decorative Background Elements */}
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-codo-green/30 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-codo-aqua/20 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-6 leading-tight">
                                Ready to Transform Your Digital Presence?
                            </h2>
                            <p className="text-lg text-foreground/70 dark:text-codo-aqua/80 mb-10 max-w-2xl">
                                Partner with CODO AI Agency to build intelligent, scalable, and visually stunning software solutions that set you apart.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto mt-4">
                                {/* Mobile: Native Action (WhatsApp) | Desktop: Modal */}
                                <div className="w-full sm:w-auto">
                                    <a
                                        href="https://wa.me/918848676627"
                                        className="sm:hidden group inline-flex h-12 w-full items-center justify-center rounded-2xl bg-codo-green px-8 font-medium text-white shadow-xl backdrop-blur-xl border border-white/20 transition-all active:scale-95 gap-3"
                                    >
                                        <Phone size={18} /> Talk to an Advisor
                                    </a>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="hidden sm:inline-flex group h-14 items-center justify-center rounded-2xl bg-codo-green px-8 font-medium text-white shadow-xl backdrop-blur-xl border border-white/20 transition-all hover:bg-codo-green/90 hover:-translate-y-1 hover:shadow-2xl active:scale-95 gap-3"
                                    >
                                        <Phone size={18} /> Talk to an Advisor
                                    </button>
                                </div>

                                <a
                                    href="/portfolio"
                                    className="group inline-flex h-12 md:h-14 items-center justify-center rounded-2xl bg-transparent px-8 font-medium text-foreground dark:text-white shadow-sm backdrop-blur-xl border border-foreground/20 dark:border-white/20 transition-all hover:bg-foreground/5 dark:hover:bg-white/10 hover:-translate-y-1 active:scale-95 gap-3 w-full sm:w-auto"
                                >
                                    View Portfolio <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>
            </div>

            <SalesAdvisorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
