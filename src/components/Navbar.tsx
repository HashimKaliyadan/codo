"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState(false);

    useEffect(() => setMounted(true), []);
    useEffect(() => setIsMobileMenuOpen(false), [pathname]);

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

                            {/* Mobile Menu Button - Now hidden by default, replaced by bottom nav */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="hidden lg:hidden h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ── Mobile Glass Drawer ── */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        className="absolute top-[108px] left-4 right-4 sm:left-6 sm:right-6 lg:hidden z-40"
                    >
                        <div className="rounded-3xl bg-white/90 dark:bg-codo-blue/90 backdrop-blur-xl 
                                        border border-border p-4 shadow-2xl">
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`px-6 py-4 rounded-2xl text-[16px] font-semibold transition-all
                                                ${isActive
                                                    ? "bg-codo-green text-white shadow-lg"
                                                    : "bg-foreground/5 text-foreground/80 hover:bg-foreground/10 active:scale-[0.98]"}`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                                <div className="mt-2 pt-4 border-t border-border flex items-center justify-between px-6">
                                    <span className="text-sm font-medium opacity-60">Theme</span>
                                    <ThemeToggle />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <SalesAdvisorModal
                isOpen={isAdvisorModalOpen}
                onClose={() => setIsAdvisorModalOpen(false)}
            />
        </header>
    );
}
