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
     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Speciality Products
     </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our business prides itself on serving you spices, pulses, lentils,
          grains, and canned products of the very best quality.
        </p>
      </div>

       <div className="relative z-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
