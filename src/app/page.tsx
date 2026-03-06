import Hero from "@/components/home/Hero";
import Ecosystem from "@/components/home/Ecosystem";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-[#00152b] text-foreground overflow-hidden">
      <Hero />
      <Ecosystem />
    </main>
  );
}