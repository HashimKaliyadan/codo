"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home, Image, MessageCircle, Menu, X,
    Info, BookOpen, Briefcase, Mail
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const fullNavLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Portfolio", href: "/portfolio", icon: Image },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Careers", href: "/careers", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Mail },
];

export default function MobileBottomNav() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const bottomItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "Portfolio", href: "/portfolio", icon: Image },
    ];

    return (
        <>
            {/* ── Mobile Glass Drawer Overlay ── */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-background/60 backdrop-blur-md z-40 md:hidden"
                        />

                        {/* Drawer Menu — pinned between top nav (top-[104px]) and bottom nav (bottom-[88px]) */}
                        <motion.div
                            initial={{ opacity: 0, y: 60, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 60, scale: 0.97 }}
                            transition={{ duration: 0.25, ease: "circOut" }}
                            className="fixed top-[104px] bottom-[88px] left-4 right-4 z-40 md:hidden flex flex-col"
                        >
                            <div className="rounded-3xl bg-white/95 dark:bg-[#001a30]/95 backdrop-blur-2xl border border-border/40 shadow-2xl overflow-hidden flex flex-col h-full">
                                {/* Header */}
                                <div className="flex justify-between items-center px-5 py-3 border-b border-border/30 shrink-0">
                                    <span className="text-xs font-bold opacity-60 uppercase tracking-[0.2em]">Navigation</span>
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="h-8 w-8 rounded-full bg-foreground/5 flex items-center justify-center active:scale-90 transition-transform"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>

                                {/* Nav Links */}
                                <div className="flex-1 overflow-y-auto hide-scrollbar px-3 py-2">
                                    {fullNavLinks.map((link) => {
                                        const isActive = pathname === link.href;
                                        const Icon = link.icon;
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-semibold transition-all active:scale-[0.98] ${isActive
                                                    ? "bg-codo-green text-white shadow-md shadow-codo-green/20"
                                                    : "text-foreground/70 active:bg-foreground/5"
                                                    }`}
                                            >
                                                <Icon size={18} className={isActive ? "opacity-90" : "opacity-40"} />
                                                {link.name}
                                            </Link>
                                        );
                                    })}
                                </div>

                                {/* Theme Toggle Footer */}
                                <div className="px-5 py-3 border-t border-border/30 flex items-center justify-between shrink-0">
                                    <span className="text-xs font-medium opacity-50">Appearance</span>
                                    <ThemeToggle />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* ── Native Sticky Bottom Bar ── */}
            <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-in slide-in-from-bottom-6 duration-500">
                <div className="flex items-center justify-between bg-white/80 dark:bg-[#001529]/90 backdrop-blur-2xl border border-border/40 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.3)] rounded-3xl p-2 px-4">

                    <div className="flex items-center gap-2 sm:gap-6 flex-1 justify-around">
                        {bottomItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex flex-col items-center justify-center gap-1 w-14 h-12 rounded-2xl transition-all active:scale-90 ${isActive
                                        ? "text-codo-green"
                                        : "text-foreground/50 hover:text-foreground hover:bg-foreground/5"
                                        }`}
                                >
                                    <Icon size={20} className={isActive ? "fill-codo-green/20" : ""} />
                                    <span className="text-[10px] font-medium leading-none">{item.name}</span>
                                </Link>
                            );
                        })}

                        {/* Menu Toggle Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`flex flex-col items-center justify-center gap-1 w-14 h-12 rounded-2xl transition-all active:scale-90 ${isMenuOpen
                                ? "text-codo-green"
                                : "text-foreground/50 hover:text-foreground hover:bg-foreground/5"
                                }`}
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            <span className="text-[10px] font-medium leading-none">Menu</span>
                        </button>
                    </div>

                    {/* Prominent Native Action Button (WhatsApp/Call) */}
                    <div className="pl-2 border-l border-foreground/10 dark:border-white/10 ml-2">
                        <a
                            href="https://wa.me/918848676627"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 rounded-2xl bg-codo-green text-white shadow-lg shadow-codo-green/30 active:scale-90 transition-transform"
                            aria-label="Chat on WhatsApp"
                        >
                            <MessageCircle size={22} className="fill-white/20" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
