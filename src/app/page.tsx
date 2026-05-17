import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Lore } from "@/components/Lore";
import { Tokenomics } from "@/components/Tokenomics";
import { Roadmap } from "@/components/Roadmap";
import { HowToBuy } from "@/components/HowToBuy";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <StatsBar />
        <Lore />
        <Tokenomics />
        <Roadmap />
        <HowToBuy />
        <Footer />
      </main>
    </>
  );
}
