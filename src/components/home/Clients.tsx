"use client";

import { motion } from "framer-motion";

const clients = [
    { name: "Acme Corp", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png" },
    { name: "Global Tech", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg" },
    { name: "Nexus Systems", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Zenith Solutions", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
    { name: "Apex Dynamics", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    { name: "Quantum Innovations", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg" },
];

export default function Clients() {
    return (
        <section className="py-20 bg-zinc-50 dark:bg-[#000d1a] border-y border-border/50 overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <p className="text-sm font-semibold text-foreground/60 tracking-widest uppercase">
                        Trusted by Innovative Companies Worldwide
                    </p>
                </div>

                <div className="relative">
                    {/* Gradient Fade Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-50 to-transparent dark:from-[#000d1a] z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-50 to-transparent dark:from-[#000d1a] z-10 pointer-events-none" />

                    {/* Logo Grid / Flex Container */}
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="w-24 md:w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-w-full max-h-full object-contain filter invert-0 dark:invert opacity-80"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
