import AboutSection from "@/components/sections/AboutSection";
import AdditionalInfoSection from "@/components/sections/additional-info-section";
import BeforeAfterCarousel from "@/components/sections/before-after-carousel";
import BenefitsSection from "@/components/sections/benefits-sections";
import ContactSection from "@/components/sections/ContactSection";
import HomeSection from "@/components/sections/HomeSection";
import LipoCavitationInfo from "@/components/sections/lipocavitation-info";
import LipoShapeDualCare from "@/components/sections/LipoShapeDualCare";
import PressotherapyFeature from "@/components/sections/PressotherapyFeature";
 import ServicesSection from "@/components/sections/ServicesSection";
import Testimonials from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <AdditionalInfoSection/>
      <BeforeAfterCarousel />
      <PressotherapyFeature/>
      <BenefitsSection />
      <LipoShapeDualCare/>
      <LipoCavitationInfo/>
      <Testimonials/>
      <ContactSection />
    </>
  );
}
