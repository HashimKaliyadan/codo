import Hero from "@/components/home/Hero";
import Ecosystem from "@/components/home/Ecosystem";
import AboutBrief from "@/components/home/AboutBrief";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Team from "@/components/home/Team";
import Clients from "@/components/home/Clients";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Hero />
      <AboutBrief />
      <Ecosystem />
      <Services />
      <Portfolio />
      <Team />
      <Clients />
      <CtaSection />
    </main>
  );
}