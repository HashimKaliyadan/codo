"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight, Globe } from "lucide-react";

const footerLinks = {
    company: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ],
    services: [
        { name: "Web Development", href: "/#services" },
        { name: "Custom Software", href: "/#services" },
        { name: "Mobile Apps", href: "/#services" },
        { name: "AI Solutions", href: "/#services" },
    ],
    ecosystem: [
        { name: "CODO Agency", href: "/portfolio" },
        { name: "CODO Academy", href: "https://codoacademy.com", external: true },
        { name: "Student Portal", href: "https://codoacademy.com", external: true },
        { name: "Partner Program", href: "/contact" },
    ],
};

const socials = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden">

            {/* ─── TOP CTA BAND ─── */}
            <div className="bg-codo-green relative">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                Ready to build something extraordinary?
                            </h3>
                            <p className="text-white/70 text-sm md:text-base">
                                Let&apos;s discuss your project and bring your vision to life.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white text-codo-blue font-semibold px-8 py-3.5 rounded-2xl hover:-translate-y-0.5 hover:shadow-xl transition-all active:scale-95 shrink-0"
                        >
                            Get in Touch <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* ─── MAIN FOOTER BODY ─── */}
            <div className="bg-codo-blue text-white">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28 md:pb-12">

                    {/* ── 5-Column Mega Footer Grid ── */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

                        {/* Brand Column — Wider */}
                        <div className="col-span-2 md:col-span-3 lg:col-span-4 pr-0 lg:pr-8">
                            <Link href="/" className="inline-block mb-5">
                                <img
                                    src="https://www.codoacademy.com/assets/@logo3-Btghxk3u.png"
                                    alt="CODO logo"
                                    className="h-9 opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </Link>
                            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
                                Engineering elite software solutions and empowering the next generation of digital leaders from Malappuram to the world.
                            </p>

                            {/* Contact Details */}
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2.5 text-white/50 text-sm">
                                    <MapPin size={15} className="text-codo-green shrink-0 mt-0.5" />
                                    <span>123 Innovation Drive, Tech Park<br />Malappuram, Kerala 676505</span>
                                </li>
                                <li className="flex items-center gap-2.5 text-white/50 text-sm">
                                    <Phone size={15} className="text-codo-green shrink-0" />
                                    <a href="tel:+918848676627" className="hover:text-white transition-colors">+91 88486 76627</a>
                                </li>
                                <li className="flex items-center gap-2.5 text-white/50 text-sm">
                                    <Mail size={15} className="text-codo-green shrink-0" />
                                    <a href="mailto:hello@codo.ai" className="hover:text-white transition-colors">hello@codo.ai</a>
                                </li>
                            </ul>

                            {/* Social Icons */}
                            <div className="flex gap-3">
                                {socials.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.name}
                                            className="h-9 w-9 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-codo-green hover:text-white transition-all hover:-translate-y-0.5"
                                        >
                                            <Icon size={16} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Company Column */}
                        <div className="col-span-1 lg:col-span-2">
                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/80 mb-5">Company</h4>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-white/45 hover:text-codo-green text-sm transition-colors hover:translate-x-0.5 inline-block">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Column */}
                        <div className="col-span-1 lg:col-span-2">
                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/80 mb-5">Services</h4>
                            <ul className="space-y-3">
                                {footerLinks.services.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-white/45 hover:text-codo-green text-sm transition-colors hover:translate-x-0.5 inline-block">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Ecosystem Column */}
                        <div className="col-span-2 md:col-span-1 lg:col-span-4">
                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/80 mb-5">Ecosystem</h4>
                            <ul className="space-y-3 mb-8">
                                {footerLinks.ecosystem.map((link) => (
                                    <li key={link.name}>
                                        {link.external ? (
                                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/45 hover:text-codo-green text-sm transition-colors inline-flex items-center gap-1.5 hover:translate-x-0.5">
                                                {link.name} <Globe size={12} className="opacity-40" />
                                            </a>
                                        ) : (
                                            <Link href={link.href} className="text-white/45 hover:text-codo-green text-sm transition-colors hover:translate-x-0.5 inline-block">
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            {/* Newsletter Mini-Form */}
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/80 mb-3">Stay Updated</h4>
                                <p className="text-white/40 text-xs mb-3">Get the latest insights on AI and tech.</p>
                                <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-codo-green/50 focus:ring-1 focus:ring-codo-green/30 transition-all"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-codo-green text-white px-4 py-2.5 rounded-xl hover:bg-codo-green/90 transition-colors active:scale-95 shrink-0"
                                    >
                                        <ArrowRight size={16} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* ── Bottom Bar ── */}
                    <div className="pt-8 border-t border-white/8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-white/30 text-xs text-center md:text-left">
                                &copy; {new Date().getFullYear()} CODO AI Innovations Pvt. Ltd. All rights reserved.
                            </p>
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
                                <Link href="/privacy" className="text-white/30 hover:text-white/70 transition-colors">Privacy Policy</Link>
                                <Link href="/terms" className="text-white/30 hover:text-white/70 transition-colors">Terms of Service</Link>
                                <Link href="/sitemap" className="text-white/30 hover:text-white/70 transition-colors">Sitemap</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ambient Background Glows */}
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-codo-green/8 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-codo-aqua/5 blur-[100px] rounded-full pointer-events-none" />
            </div>
        </footer>
    );
}
