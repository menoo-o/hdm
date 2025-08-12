

import IntroProductRange from "./Intro";
// import PulsesCategory from "./pulses";
import ProductRangeSection from "./category";
import SectionDivider from "../SectionDivider";





const ProductBlock = () => {
    
  return (
    <section className="relative py-16 px-4 md:px-20 overflow-hidden">
      <IntroProductRange />
      {/* Pulses */}
      <ProductRangeSection
            title="Premium"
            highlight="Pulses"
            description="Discover nature's protein powerhouses. Our carefully selected collection of pulses offers exceptional nutrition, incredible versatility, and authentic flavors."
            imageSrc="/pulses.jpg"
            stats={{ varieties: "8+", protein: "25g", natural: "100%" }}
            primaryCta={{ label: "Shop Collection", href: "/shop" }}
            secondaryCta={{ label: "Learn More", href: "/about" }}
        />

        <SectionDivider />

        

        {/* Besan */}
         <ProductRangeSection
            title="Premium"
            highlight="Besan"
            description="Discover nature's protein powerhouses. Our carefully selected collection of pulses offers exceptional nutrition, incredible versatility, and authentic flavors."
            imageSrc="/products/besan-intro.jpeg"
            stats={{  protein: "25g", natural: "100%" }}
            primaryCta={{ label: "Shop Collection", href: "/shop" }}
            secondaryCta={{ label: "Learn More", href: "/about" }}
              reverse 
          
        />    
        <SectionDivider />     

        {/* RICE */}
         <ProductRangeSection
            title="Premium"
            highlight="Rice"
            description="Discover nature's protein powerhouses. Our carefully selected collection of pulses offers exceptional nutrition, incredible versatility, and authentic flavors."
            imageSrc="/products/rice-category.jpg"
            stats={{ varieties: "8+", protein: "25g", natural: "100%" }}
            primaryCta={{ label: "Shop Collection", href: "/shop" }}
            secondaryCta={{ label: "Learn More", href: "/about" }}
             
        />

        <div
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, #ccc, transparent)",
          margin: "3rem 0 0 0",
        }}
/>


      


   

    </section>
  );
};

export default ProductBlock;
