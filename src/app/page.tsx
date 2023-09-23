import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCard";
import InfoSec from "@/components/InfoSec";
import HowToBuy from "@/components/HowToBuy";
import HowToBuyCard from "@/components/HowToBuyCard";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";
import ScrollToUp from "@/components/ScrollToUp";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <InfoSec />
      <InfoCard />
      <HowToBuy />
      <HowToBuyCard />
      <Roadmap />
      <Footer />
      <ScrollToUp />
    </main>
  );
}
