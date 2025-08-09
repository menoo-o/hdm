const More = () => {
  return (
    <section className="w-full bg-[var(--bg-green)] py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--dark-moss)] mb-4">
          Looking for something specific?
        </h2>
        <p className="text-gray-800 mb-6 text-sm md:text-base">
          Can’t find a particular pulse, grade, or packing option? Let us know your requirements.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[var(--dark-moss)] text-white px-6 py-3 rounded-full font-medium hover:bg-[var(--aqua)] transition"
        >
          Contact Us for Bulk Inquiry
        </a>
      </div>
    </section>
  );
};

export default More;
