import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div class=" container mx-auto mt-24 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
