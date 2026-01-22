import Crypto from "@/components/Home/Crypto";
import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/Home/Hero";
import MarketTrend from "@/components/Home/MarketTrend";
import Image from "next/image";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <div className="w-[1225px] mt-16 space-y-16">
        <Crypto />
        <MarketTrend />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
