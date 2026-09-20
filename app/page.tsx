import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Hero />
      <InfoSection />
      <Services />
      <Products />
      <Clients />
      <About />
      <Contact />
      <WhatsAppFloat />
    </main>
  );
}