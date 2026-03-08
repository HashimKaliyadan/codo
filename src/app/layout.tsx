import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { Toaster } from "sonner";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // DM Sans required weights [cite: 74, 76]
  variable: "--font-font-dm-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CODO AI Innovations | Mother Company of Academy & Agency",
  description: "Empowering 100K Digital Nomads from Malappuram through AI, Robotics & Digital Mastery",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "CODO AI Innovations | Custom Software & AI Solutions",
    description: "We engineer elite custom software, AI-powered solutions, and empower the next generation of digital leaders.",
    url: "https://codo.ai",
    siteName: "CODO AI Innovations",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODO AI Innovations | Custom Software & AI Solutions",
    description: "We engineer elite custom software, AI-powered solutions, and empower the next generation of digital leaders.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} font-sans subpixel-antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <MobileBottomNav />
        </ThemeProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
