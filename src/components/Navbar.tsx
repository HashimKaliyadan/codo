"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import SalesAdvisorModal from "./home/SalesAdvisorModal";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full pt-4">
            <nav className="mx-auto max-w-[1280px] px-6 lg:px-8">
                {/* ── Liquid Glass Main Bar ── */}
                <div className="relative bg-white/70 dark:bg-codo-blue/70 
                                backdrop-blur-xl 
                                border border-white/20 dark:border-white/10 
                                shadow-codo 
                                rounded-3xl overflow-hidden">

                    {/* Flexbox container for mathematically perfect horizontal distribution */}
                    <div className="h-[72px] flex justify-between items-center px-4 sm:px-6 lg:px-8">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center gap-2 group/logo w-fit">
                                <img
                                    src={mounted && theme === "dark"
                                        ? "https://www.codoacademy.com/assets/@logo3-Btghxk3u.png"
                                        : "https://www.codoacademy.com/assets/@logoq-B0Racrff.png"}
                                    alt="CODO logo"
                                    className="h-8 sm:h-9 md:h-10 transition-transform group-hover/logo:scale-105 duration-300 pointer-events-none"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation – Hidden until 'lg' to prevent squishing */}
                        <div className="hidden lg:flex items-center justify-center gap-x-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`relative px-4 py-2 text-[14px] font-medium tracking-tight transition-colors duration-300
                                            ${isActive ? "text-codo-green" : "text-foreground/70 hover:text-foreground hover:scale-105 active:scale-95"}`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activePill"
                                                className="absolute inset-0 z-[-1] rounded-xl bg-codo-green/10 
                                                           border border-codo-green/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                                                transition={{
                                                    type: "spring",
                                                    bounce: 0.2,
                                                    duration: 0.6
                                                }}
                                            />
                                        )}
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-end gap-3 sm:gap-4 flex-shrink-0">
                            <div className="hidden sm:block">
                                <ThemeToggle />
                            </div>

                            <button
                                onClick={() => setIsAdvisorModalOpen(true)}
                                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full 
                                           bg-codo-green text-white shadow-md 
                                           transition-all hover:brightness-110 active:scale-[0.92] group/phone"
                                aria-label="Talk to advisor"
                            >
                                <Phone size={20} className="group-hover/phone:rotate-12 transition-transform" />
                            </button>

                        </div>
                    </div>
                </div>
            </nav>

            <SalesAdvisorModal
                isOpen={isAdvisorModalOpen}
                onClose={() => setIsAdvisorModalOpen(false)}
            />
        </header>
    );
}
