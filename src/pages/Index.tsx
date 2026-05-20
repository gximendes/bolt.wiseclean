import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProvocationSection from "@/components/ProvocationSection";
import ForWhomSection from "@/components/ForWhomSection";
import PackagesSection from "@/components/PackagesSection";
import ProtocolSection from "@/components/ProtocolSection";
import PriceCalculator from "@/components/PriceCalculator";
import DifferenceSection from "@/components/DifferenceSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";

const Index = () => (
  <>
    <Navbar />
    <main className="w-full overflow-x-hidden bg-cream">
      <HeroSection />
      <ProvocationSection />
      <ForWhomSection />
      <ProtocolSection />
      <PackagesSection />
      <PriceCalculator />
      <DifferenceSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton />
    <CookieBanner />
  </>
);

export default Index;
