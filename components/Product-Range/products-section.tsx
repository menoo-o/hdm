

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
    description="From hearty lentils to flavorful chickpeas, our premium pulses are rich in protein, fiber, and natural goodness — perfect for wholesome everyday meals."
    imageSrc="/pulses.jpg"
    stats={{ varieties: "8+", protein: "25g", natural: "100%" }}
    primaryCta={{ label: "Explore Pulses", href: "/pulses" }}
  />

  <SectionDivider />

  {/* Besan */}
  <ProductRangeSection
    title="Finest"
    highlight="Besan"
    description="Stone-ground from top-quality chickpeas, our besan delivers a naturally nutty flavor and silky texture — ideal for pakoras, sweets, and traditional recipes."
    imageSrc="/products/besan-intro.jpeg"
    stats={{ protein: "22g", natural: "100%" }}
    primaryCta={{ label: "Explore Besan", href: "/besan" }}
    reverse
  />

  <SectionDivider />

  {/* Rice */}
  <ProductRangeSection
    title="Premium"
    highlight="Rice"
    description="Carefully harvested and perfectly aged, our aromatic rice offers unmatched taste, fluffiness, and quality for your favorite biryanis, pulaos, and everyday dishes."
    imageSrc="/products/rice-category.jpg"
    stats={{ varieties: "5+", protein: "7g", natural: "100%" }}
    primaryCta={{ label: "Explore Rice", href: "/rice" }}
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
