// components/hero/HeroWithVideo.tsx

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import APSLogo from '@/public/logos/Atlas-logo.svg'

export default function HeroWithVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden"> {/* // Sets section to full viewport height */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover z-[-1]" // // Places video behind content, covers entire section
        autoPlay
        loop
        muted
        playsInline
        src="/videos/hero-background.mp4" // // Replace with actual path to video file
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white px-6 text-center"> {/* // Centered content with padding */}
        <Image
          src={APSLogo}
          alt="Atlas Power Solutions"
          className="mb-6 w-32" // // Logo sizing
        />
        <h1 className="text-4xl font-bold md:text-6xl leading-tight"> {/* // Large heading with responsive scale */}
          Powering Progress with Precision
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/90"> {/* // Subtitle with transparency */}
          Trusted Sunshine Coast Electricians for Homes, Businesses & Projects
        </p>
        <div className="mt-6 flex gap-4 flex-wrap justify-center"> {/* // CTA Buttons */}
          <Link
            href="/contact"
            className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
          >
            Get a Quote
          </Link>
          <Link
            href="tel:123456789"
            className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-black transition"
          >
            Call Now
          </Link>
        </div>

        {/* Trust badge from Elfsight */}
        <div className="mt-8">
          <div className="elfsight-app-0d0c94b2-2da1-4fcb-ade7-1827253f201b" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  )
}
