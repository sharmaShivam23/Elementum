import meeting1  from '../assets/images/meeting1.png'
import working1  from '../assets/images/working1.png'

function ReadMore() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 mt-8 text-sm font-semibold text-gray-900 group hover:text-gray-600 transition-colors"
    >
      Read more
      <span className="flex items-center">
        <span className="block h-px bg-current transition-all duration-300"
              style={{ width: 52 }} />
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="-ml-0.5">
          <path d="M1 5h8M6 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </a>
  )
}

function Triangle({ pos }) {
  /* pos: 'tr' | 'bl' */
  const base = 'absolute w-24 h-24 md:w-28 md:h-28 rotate-45 rounded-sm pointer-events-none'
  const placement = pos === 'tr'
    ? '-top-5 -right-5'
    : '-bottom-5 -left-5'
  return (
    <div
      className={`${base} ${placement}`}
      style={{ backgroundColor: '#ff6b6b', opacity: 0.82, zIndex: 0 }}
    />
  )
}

export default function About() {
  return (
    <section id="about" className="relative bottom-11 bg-white overflow-hidden py-24 md:py-32">

      {/* Radial pink glow — purely decorative */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(255,180,190,.18) 0%, transparent 70%)',
        }}
      />

      {/* Dashed flowing line (desktop only) */}
      <svg
        className="absolute pointer-events-none hidden lg:block"
        style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}
        width="520" height="520" viewBox="0 0 520 520" fill="none"
      >
        <path
          d="M80 0 C80 130,440 110,440 260 C440 410,80 390,80 520"
          stroke="#ff6b6b" strokeWidth="2" opacity=".3"
          strokeDasharray="10 7" strokeLinecap="round"
        />
      </svg>

      {/* ── CONTAINER ── */}
      <div className="site-container relative" style={{ zIndex: 2 }}>

        {/* ── ROW 1  Text left | Image right ── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-display text-4xl sm:text-5xl text-gray-900">
              Tomorrow should be better than{' '}
              <span className="highlight-mint">today</span>
            </h2>
            <p className="mt-6 text-gray-500 text-base sm:text-[1.05rem] leading-relaxed max-w-md">
              We are a team of strategists, designers, communicators, researchers.
              Together, we believe that progress only happens when you refuse to
              play things safe.
            </p>
            <ReadMore />
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative" style={{ width: 340, height: 340, maxWidth: '100%' }}>
              <Triangle pos="tr" />
              <img
                src={meeting1}
                alt="Team meeting"
                className="circle-img relative shadow-xl"
                style={{ width: '100%', height: '100%', zIndex: 1 }}
              />
            </div>
          </div>
        </div>

        {/* ── ROW 2  Image left | Text right  (reversed on mobile) ── */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 mt-24 md:mt-32">

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative" style={{ width: 340, height: 340, maxWidth: '100%' }}>
              <Triangle pos="bl" />
              <img
                src={working1}
                alt="Team working"
                className="circle-img relative shadow-xl"
                style={{ width: '100%', height: '100%', zIndex: 1 }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-display text-4xl sm:text-5xl text-gray-900">
              <span className="highlight-mint">See</span> how we can help you{' '}
              <span className="underline-orange">progress</span>
            </h2>
            <p className="mt-6 text-gray-500 text-base sm:text-[1.05rem] leading-relaxed max-w-md">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design,
              digital platforms and social research.
            </p>
            <ReadMore />
          </div>
        </div>
      </div>
    </section>
  )
}
