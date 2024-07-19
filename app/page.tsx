import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Hero />
    </div>
  );
}
