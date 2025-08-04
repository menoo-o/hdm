import Image from "next/image";
import productsData from "@/data/Products";


const ProductSection = () => {
  return (
    <section className="relative py-16 px-4 md:px-20 overflow-hidden">
    {/* Pattern Background (leaves) */}
    <div
      className="absolute inset-0 bg-repeat pointer-events-none"
      style={{
        backgroundImage: "url('/pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-hidden="true"
    ></div>
     {/* Actual Content */}
    <div className="relative z-10 max-w-7xl mx-auto text-center mb-12">
     <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-moss)] mb-4">
          Our Speciality Products
     </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our business prides itself on serving you spices, pulses, lentils,
          grains, and canned products of the very best quality.
        </p>
      </div>

      <div className="relative z-10 grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
      {productsData.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300"
        >
          {/* Image */}
          <div className="relative w-full h-55 bg-white">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-1"
            />
          </div>

          {/* Content */}
          <div className="p-4 text-center space-y-2">
            <h3 className="md:text-xl text:lg font-semibold text-[var(--dark-moss)]">
              {product.title}
            </h3>

            <p className="text-gray-600 text-base">{product.description}</p>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <p className="text-sm text-gray-500">
                <span className="font-medium">Available in: </span>
                {product.variants.map((variant, index) => (
                  <span key={index} className="font-semibold text-gray-700">
                    {variant}
                    {index < product.variants.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
         )}
      </div>
    </div>
  ))}
    </div>

   

    </section>
  );
};

export default ProductSection;
