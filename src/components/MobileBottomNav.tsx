"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, Image, MessageCircle } from "lucide-react";

export default function MobileBottomNav() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "Services", href: "/services", icon: Layers },
        { name: "Portfolio", href: "/portfolio", icon: Image },
    ];

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-in slide-in-from-bottom-6 duration-500">
            <div className="flex items-center justify-between bg-white/80 dark:bg-[#001529]/80 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.3)] rounded-3xl p-2 px-4">

                {/* Standard Nav Elements */}
                <div className="flex items-center gap-2 sm:gap-6 flex-1 justify-around">
                    {navItems.map((item) => {
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
    );
}
