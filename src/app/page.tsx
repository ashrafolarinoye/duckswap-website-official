import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCard";
import InfoSec from "@/components/InfoSec";
import HowToBuy from "@/components/HowToBuy";
import HowToBuyCard from "@/components/HowToBuyCard";
import Footer from "@/components/Footer";
import ScrollToUp from "@/components/ScrollToUp";
import { Duckonomics } from "@/components/Duckonomics";
import Duckmap from "@/components/Duckmap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duckcoin - A Web3 Blockchain Ecosystem for Real-Life Solutions",
  description: 'Duckcoin is a blockchain ecosystem that integrates institutions, people, groups, and businesses into the web3 economy. Join the Duckies community and explore the world of decentralized finance (DeFi).',
}

export default function Home() {
  return (
    <main className="">
      <Hero />
      <InfoSec />
      <InfoCard />
      <Duckonomics />
      <Duckmap />
      <HowToBuy />
      <HowToBuyCard />
      <Footer />
      <ScrollToUp />
    </main>
  );
}
