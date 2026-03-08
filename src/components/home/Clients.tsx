"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "../ui/spotlight-card";

const clients = [
    { name: "Meridian Tech" },
    { name: "Vantage AI" },
    { name: "Pinnacle Systems" },
    { name: "NovaSpark" },
    { name: "Arclight Digital" },
    { name: "Zenith Labs" },
];

export default function Clients() {
    // Duplicate the clients array to create a seamless infinite scroll effect
    const duplicatedClients = [...clients, ...clients, ...clients];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-sm font-bold text-foreground/50 tracking-[0.2em] uppercase">
                        Trusted by Innovative Companies Worldwide
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Glass Pill Container */}
                    <SpotlightCard className="relative overflow-hidden rounded-full bg-slate-50/50 dark:bg-[#00101f]/40 backdrop-blur-xl border border-slate-200/50 dark:border-white/5 shadow-sm py-8 md:py-10">

                        {/* Gradient Fade Edges inside the glass */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent dark:from-[#00101f] dark:via-[#00101f]/80 z-20 pointer-events-none rounded-l-full" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent dark:from-[#00101f] dark:via-[#00101f]/80 z-20 pointer-events-none rounded-r-full" />

                        {/* Scrolling Track */}
                        <div className="flex w-[200%] sm:w-[150%] animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] group/marquee">
                            {duplicatedClients.map((client, index) => (
                                <div
                                    key={index}
                                    className="w-36 md:w-48 flex-shrink-0 flex items-center justify-center px-4 transition-all duration-300"
                                >
                                    <span className="text-sm md:text-base font-bold tracking-wide text-foreground/30 dark:text-white/25 whitespace-nowrap transition-all duration-300 hover:text-foreground/70 dark:hover:text-white/70 select-none">
                                        {client.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
}
