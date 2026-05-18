import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyWiseCleanSection from "@/components/WhyWiseCleanSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <TestimonialsSection />
      <ServicesSection />
      <WhyWiseCleanSection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
