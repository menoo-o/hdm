import React from 'react'
import Image from 'next/image'

function PureFood() {
  return (
    <>
     <section className="bg-[var(--bg-ivory)] py-16 px-4 md:px-20 text-[var(--text)]">
  <div className="max-w-5xl mx-auto text-center md:text-left space-y-6">
    <h2 className="text-3xl md:text-4xl font-bold">
      How We Bring The Best Purest Food To Your Table?
    </h2>
    <p className="text-base md:text-lg leading-relaxed">
      What began as a modest venture has blossomed into a trusted name in the pulse industry.
      HDM was born from a passion for providing households and businesses with the finest pulses and grains.
      Since our inception, we have dedicated ourselves to sourcing, processing, and distributing a wide range
      of products, including various types of dal, beans, and essential kitchen staples.
    </p>
  </div>

  {/* Image */}
 <div className="mt-12">
  <Image
    src="/footer-bg.png"
    alt="How HDM Works"
    width={1920}
    height={800}
    className="w-full h-auto object-cover"
  />
</div>
</section>
 
    </>
  )
}

export default PureFood
