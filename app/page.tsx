import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GlowConnectShowcase from "@/components/GlowConnectShowcase";
import OtherProjects from "@/components/OtherProjects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <Hero />
        <GlowConnectShowcase />
        <OtherProjects />
        <Footer />
      </main>
    </>
  );
}
