"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {

    return (
        <footer className="bg-codo-blue pt-20 pb-28 md:pb-10 text-white relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <img
                                src="https://www.codoacademy.com/assets/@logo3-Btghxk3u.png"
                                alt="CODO logo"
                                className="h-10 opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-codo-aqua/70 text-sm leading-relaxed mb-6 pe-4">
                            Embracing a holistic approach to technological advancement.
                            We shape the future by delivering cutting-edge Agency solutions
                            and empowering digital leaders through our Academy.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-codo-aqua hover:bg-codo-green hover:text-white transition-all hover:-translate-y-1">
                                <Facebook size={18} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-codo-aqua hover:bg-codo-green hover:text-white transition-all hover:-translate-y-1">
                                <Twitter size={18} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-codo-aqua hover:bg-codo-green hover:text-white transition-all hover:-translate-y-1">
                                <Instagram size={18} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-codo-aqua hover:bg-codo-green hover:text-white transition-all hover:-translate-y-1">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-codo-aqua/70 hover:text-codo-green transition-colors text-sm">About CODO</Link></li>
                            <li><Link href="/portfolio" className="text-codo-aqua/70 hover:text-codo-green transition-colors text-sm">Agency Portfolio</Link></li>
                            <li><a href="https://codoacademy.com" target="_blank" rel="noopener noreferrer" className="text-codo-aqua/70 hover:text-codo-green transition-colors text-sm">CODO Academy</a></li>
                            <li><Link href="/careers" className="text-codo-aqua/70 hover:text-codo-green transition-colors text-sm">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Our Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="/services/web" className="text-codo-aqua/70 hover:text-codo-green transition-colors text-sm">Web Development</Link></li>
                            <li><Link href="/services/software" className="text-codo-aqua/70 hover:text-codo-green transition-colors text-sm">Custom Software</Link></li>
                            <li><Link href="/services/mobile" className="text-codo-aqua/70 hover:text-codo-green transition-colors text-sm">Mobile Applications</Link></li>
                            <li><Link href="/services/ai" className="text-codo-aqua/70 hover:text-codo-green transition-colors text-sm">AI Integrations</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-codo-aqua/70 text-sm">
                                <MapPin size={18} className="text-codo-green shrink-0 mt-0.5" />
                                <span>123 Innovation Drive, Tech Park<br />Malappuram, Kerala 676505</span>
                            </li>
                            <li className="flex items-center gap-3 text-codo-aqua/70 text-sm">
                                <Phone size={18} className="text-codo-green shrink-0" />
                                <a href="tel:+918848676627" className="hover:text-white transition-colors">+91 88486 76627</a>
                            </li>
                            <li className="flex items-center gap-3 text-codo-aqua/70 text-sm">
                                <Mail size={18} className="text-codo-green shrink-0" />
                                <a href="mailto:hello@codo.ai" className="hover:text-white transition-colors">hello@codo.ai</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-codo-aqua/50 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} CODO AI Innovations. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link href="/privacy" className="text-codo-aqua/50 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-codo-aqua/50 hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/sitemap" className="text-codo-aqua/50 hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>

            {/* Ambient Background glow */}
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-codo-green/10 blur-[120px] rounded-full pointer-events-none" />
        </footer>
    );
}
