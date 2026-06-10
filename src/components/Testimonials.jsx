import React from "react";

const TESTIMONIALS = [
  {
    sub: "Vanguard Digital Corp",
    title: "They completely transformed our cloud infrastructure. Deliveries went from days to absolute minutes.",
  },
  {
    sub: "AeroSpace Labs US",
    title: "An exceptional eye for premium UI/UX alignment and responsive systems. A masterclass in execution.",
  },
  {
    sub: "Hydra Flow Systems",
    title: "The strategic engineering insights provided saved us months of development overhead and cloud costs.",
  },
];

function Arrow() {
  return (
    <svg
      width="32"
      height="12"
      viewBox="0 0 32 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-black"
    >
      <path
        d="M0 6H30M30 6L25 1M30 6L25 11"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TestimonialsPage() {
  return (
    <section className="relative w-full min-h-screen bg-white pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden font-sans flex flex-col items-center">
      
      {/* Background Wavy Line Graphic - Matches exactly for layout continuity */}
      <div className="absolute top-0 right-0 w-full max-w-xs md:max-w-2xl pointer-events-none opacity-60 md:opacity-80">
        <svg
          viewBox="0 0 500 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M -50 180 C 150 220 200 20 350 50 C 450 70 500 120 600 90"
            stroke="#ff8f8f"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl px-6 md:px-12 flex flex-col justify-center">
        
        {/* Header Section - Identical Fluid Typography & Dynamic Badging */}
        <div className="mb-16 md:mb-24 w-full">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-light text-black leading-[1.15] md:leading-[1.1] tracking-wide">
            What they{" "}
            <span className="inline-block bg-[#e3f4e8] text-black px-4 py-0.5 sm:px-6 sm:py-1 rounded-[2rem] font-medium tracking-normal align-middle md:align-text-bottom text-3xl sm:text-4xl md:text-6xl mx-1">
              say
            </span>{" "}
            <br className="hidden sm:inline" />
            <span className="relative inline-block mt-1 sm:mt-2">
              about
              {/* Scratchy Yellow Underline SVG */}
              <svg
                className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4 overflow-visible"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M 2 12 Q 30 10 98 8 M 5 18 Q 50 14 95 15"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            us!
          </h2>
        </div>

        {/* Testimonials List - Asymmetric 12-Column Grid Split (3-8-1) */}
        <div className="w-full border-t border-gray-200">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="w-full grid grid-cols-1 md:grid-cols-12 items-start md:items-center border-b border-gray-200 py-8 md:py-12 gap-4 md:gap-4 hover:bg-gray-50/40 transition-colors duration-300 group cursor-pointer"
            >
              
              {/* Left Column (3 Cols) - Client Company / Context */}
              <div className="md:col-span-3">
                <p className="text-gray-500 md:text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium max-w-xs md:max-w-[220px]">
                  {testimonial.sub}
                </p>
              </div>

              {/* Middle Column (8 Cols) - Left-Aligned Premium Review Text */}
              <div className="md:col-span-8">
                <h3 className="text-xl sm:text-2xl md:text-[28px] font-light text-black tracking-wide leading-relaxed group-hover:text-neutral-700 transition-colors duration-200">
                  “{testimonial.title}”
                </h3>
              </div>

              {/* Right Column (1 Col) - Interactive Animated Arrow Alignment */}
              <div className="md:col-span-1 flex justify-start md:justify-end items-center pt-2 md:pt-0 transform group-hover:translate-x-2 transition-transform duration-300">
                <Arrow />
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}