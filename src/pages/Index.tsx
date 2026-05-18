import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InvisibleSection from "@/components/InvisibleSection";
import WhyWiseCleanSection from "@/components/WhyWiseCleanSection";
import ProtocolSection from "@/components/ProtocolSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <InvisibleSection />
      <WhyWiseCleanSection />
      <ProtocolSection />
      <TestimonialsSection />
      <ServicesSection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
