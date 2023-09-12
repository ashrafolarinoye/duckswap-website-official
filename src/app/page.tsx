import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCard";
import InfoSec from "@/components/InfoSec";
import ScrollToUp from "@/components/ScrollToUp";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <InfoSec />
      <InfoCard />
      <ScrollToUp/>
    </main>
  );
}
