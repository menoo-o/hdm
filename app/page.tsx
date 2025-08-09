import AboutSection from "@/components/about-section/About";
import HeroSection from "@/components/hero-section/Hero";
// import ProductSection from "@/components/products-section/product";
import TrustedBrands from "@/components/trusted-section/TrustByBrands";
import PureFood from "@/components/pure-section/PureFood";
import More from "@/components/Product-Range/More";
import ProductBlock from "@/components/Product-Range/products-section";

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
     
      {/* Additional content can be added here */}
      <AboutSection />
      <ProductBlock />
      <More />
      <PureFood />
      <TrustedBrands />


      
    </div>
    </>
  );
}
