"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
    {
        name: "Aisha Rahman",
        role: "Head of AI Engineering",
        bio: "Former lead researcher at top tech firms, specializing in generative AI and neural networks.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
        socials: { linkedin: "#", twitter: "#", mail: "#" }
    },
    {
        name: "David Chen",
        role: "Lead Systems Architect",
        bio: "Expert in building scalable, resilient cloud infrastructures and custom enterprise software.",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop",
        socials: { linkedin: "#", twitter: "#", mail: "#" }
    },
    {
        name: "Sarah Jenkins",
        role: "UX/UI Design Director",
        bio: "Award-winning designer focusing on creating intuitive, human-centric digital experiences.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
        socials: { linkedin: "#", twitter: "#", mail: "#" }
    },
    {
        name: "Marcus Johnson",
        role: "Full-Stack Lead Developer",
        bio: "Master of Next.js and modern web ecosystems with a passion for high-performance applications.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        socials: { linkedin: "#", twitter: "#", mail: "#" }
    }
];

export default function Team() {
    return (
        <section className="py-24 relative overflow-hidden bg-white dark:bg-[#00152b]">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-wider text-codo-blue dark:text-codo-aqua uppercase mb-4"
                    >
                        Our Agency Team
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-foreground mb-6"
                    >
                        The Minds Behind the Magic
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-foreground/70"
                    >
                        A collective of elite engineers, designers, and strategists dedicated to delivering digital excellence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/5] bg-zinc-100 dark:bg-codo-blue/20">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale hover:grayscale-0"
                                />

                                {/* Social Links Overlay */}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-4">
                                    <a href={member.socials.linkedin} className="text-white/80 hover:text-white transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href={member.socials.twitter} className="text-white/80 hover:text-white transition-colors">
                                        <Twitter size={20} />
                                    </a>
                                    <a href={member.socials.mail} className="text-white/80 hover:text-white transition-colors">
                                        <Mail size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="text-center">
                                <h4 className="text-xl font-bold text-foreground mb-1">{member.name}</h4>
                                <p className="text-sm text-codo-green font-medium mb-3">{member.role}</p>
                                <p className="text-sm text-foreground/70 line-clamp-3 px-2">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
