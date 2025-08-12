import AboutSection from "@/components/about-section/About";
// import HeroSection from "@/components/hero-section/Hero";
// import ProductSection from "@/components/products-section/product";
import TrustedBrands from "@/components/trusted-section/TrustByBrands";


import ProductBlock from "@/components/Product-Range/products-section";
import HeroSection from "@/components/hero-block/HeroBlock"
import ProcessSection from "@/components/ProcessHow/Steps";



export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      {/* Additional content can be added here */}
      
      <ProductBlock />
      <AboutSection />
      <ProcessSection />
     
      
      <TrustedBrands />


      
    </div>
    </>
  );
}
