import AboutSection from "@/components/about-section/About";
import HeroSection from "@/components/hero-section/Hero";
import TrustedBrands from "@/components/trusted-section/TrustByBrands";

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
     
      {/* Additional content can be added here */}
      <AboutSection />
      <TrustedBrands />

      
    </div>
    </>
  );
}
