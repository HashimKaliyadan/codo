import Hero from "@/components/home/Hero";
import Ecosystem from "@/components/home/Ecosystem";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Team from "@/components/home/Team";
import Clients from "@/components/home/Clients";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-[#00152b] text-foreground overflow-hidden">
      <Hero />
      <Ecosystem />
      <Services />
      <Portfolio />
      <Team />
      <Clients />
      <CtaSection />
    </main>
  );
}