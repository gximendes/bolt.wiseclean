import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyWiseCleanSection from "@/components/WhyWiseCleanSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Coimbra = () => (
  <>
    <Navbar />
    <main>
      <HeroSection
        eyebrow="Centro de Higienização Técnica · Coimbra"
        subline={
          <>
            Higienização técnica profunda em <span className="text-gold">Coimbra</span> —
            Solum, Vale das Flores, Santa Clara e Celas. Padrão interno{" "}
            <span className="text-gold">Safe pH™</span> e recolha 100% da água.
          </>
        }
      />
      <TestimonialsSection />
      <ServicesSection
        footerNote={<>Zona 3 — taxa fixa 30 € · mínimo 2 serviços por dia de deslocação.</>}
      />
      <WhyWiseCleanSection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Coimbra;
