import RotatingScrollImage from "@/components/ImageScroll";

const AboutSection = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Hafiz Dal Mills
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold">Hafiz Dal Mills (HDM)</span> — established in 1980 — is one of Punjab and Rawalpindi’s
            leading grain trading companies. Specializing in the nationwide export
            of pulses, lentils, and besan, we’ve built a trusted network of farmers and suppliers
            who share our dedication to quality and sustainability.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            All our products are <span className="font-semibold">100% natural, non-GMO</span>, and free from artificial
            colors, flavors, and preservatives. With dependable nationwide delivery,
            HDM ensures consistency, freshness, and service you can count on.
          </p>
        </div>

        {/* Rotating Image Scroll (visible on desktop) */}
        <div className="hidden md:block">
          <RotatingScrollImage />
        </div>
      </div>

      {/* Background version of RotatingScrollImage (visible on mobile only) */}
      <div className="md:hidden absolute inset-0 z-0 opacity-10 pointer-events-none">
        <RotatingScrollImage />
      </div>
    </section>
  );
};

export default AboutSection;
