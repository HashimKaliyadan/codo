"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Image, MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const fullNavLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
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
                            className="fixed inset-0 bg-background/40 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Drawer Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: 100, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "circOut" }}
                            className="fixed bottom-24 left-4 right-4 z-40 md:hidden pb-4"
                        >
                            <div className="rounded-3xl bg-white/90 dark:bg-codo-blue/95 backdrop-blur-2xl border border-border/50 p-4 shadow-2xl overflow-hidden">
                                <div className="flex justify-between items-center mb-4 px-2 pb-2 border-b border-border/50">
                                    <span className="text-sm font-bold opacity-80 uppercase tracking-widest">Menu</span>
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="h-8 w-8 rounded-full bg-foreground/5 flex items-center justify-center -mr-1"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>

                                <div className="flex flex-col gap-1 overflow-y-auto hide-scrollbar" style={{ maxHeight: 'calc(100svh - 220px)' }}>
                                    {fullNavLinks.map((link) => {
                                        const isActive = pathname === link.href;
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={`px-4 py-3 rounded-2xl text-[16px] font-semibold transition-all flex items-center
                                                    ${isActive
                                                        ? "bg-codo-green/10 text-codo-green"
                                                        : "text-foreground/80 active:bg-foreground/5"}`}
                                            >
                                                {link.name}
                                            </Link>
                                        );
                                    })}
                                </div>
                                <div className="mt-2 pt-4 border-t border-border flex items-center justify-between px-4">
                                    <span className="text-sm font-medium opacity-60">Theme</span>
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
                            <Menu size={20} className={isMenuOpen ? "fill-codo-green/20" : ""} />
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
