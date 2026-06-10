import p1 from '../assets/images/person1.png'
import p2 from '../assets/images/person2.png'
import p3 from '../assets/images/person3.png'
import p4 from '../assets/images/person4.png'
import p5 from '../assets/images/person5.png'
import p6 from '../assets/images/person6.png'
import p7 from '../assets/images/person7.png'
import p8 from '../assets/images/person8.png'
import p9 from '../assets/images/person9.png'

/* 
  Positions are percentages of the section width/height.
  We keep photos well away from centre so they don't collide with text.
  Left column:  left < 12%
  Right column: right < 12%  (use right property)
  Top row:      top < 20%
  Bottom row:   bottom < 20%
*/
const PHOTOS = [
  // left column
  { src: p1, size: 76,  style: { top: '14%', left: '2%' },   anim: 'anim-float' },
  { src: p4, size: 54,  style: { top: '38%', left: '0%' },   anim: 'anim-float-delayed' },
  { src: p5, size: 100, style: { bottom: '16%', left: '2%' }, anim: 'anim-float' },
  // top
  { src: p2, size: 90,  style: { top: '10%', left: '22%' },  anim: 'anim-float-delayed' },
  { src: p3, size: 76,  style: { top: '10%', right: '22%' }, anim: 'anim-float' },
  // right column
  { src: p6, size: 62,  style: { top: '20%', right: '1%' },  anim: 'anim-float-delayed' },
  { src: p7, size: 90,  style: { bottom: '20%', right: '2%' }, anim: 'anim-float' },
  // bottom
  { src: p8, size: 56,  style: { bottom: '22%', left: '20%' }, anim: 'anim-float-delayed' },
  { src: p9, size: 80,  style: { bottom: '18%', right: '18%' }, anim: 'anim-float' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center"
      style={{ paddingTop: '80px' }}   /* clear fixed navbar */
    >
      {/* ── Purple half-moon ── */}
      <div className="absolute top-[6%] right-0 pointer-events-none overflow-hidden"
           style={{ width: 160, height: 160 }}>
        <svg viewBox="0 0 160 160" width="160" height="160" fill="none">
          <path d="M160 80 A80 80 0 0 1 0 80" fill="url(#hg)" />
          <defs>
            <linearGradient id="hg" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f9a8d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── Coral flowing line ── */}
      <svg
        className="absolute w-full pointer-events-none"
        style={{ top: '22%', left: 0, height: 260, zIndex: 0 }}
        viewBox="0 0 1200 260"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M-20 160 C200 55,400 240,600 140 S1000 35,1220 180"
          stroke="#ff8a7a" strokeWidth="2.5" strokeLinecap="round"
          opacity="0.35"
          strokeDasharray="1200" strokeDashoffset="1200"
          style={{ animation: 'drawLine 2.5s ease-out 0.4s forwards' }}
        />
      </svg>

      {/* ── Mint glow blob behind "status" ── */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 220, height: 220,
          top: '46%', left: '50%',
          transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(circle,rgba(200,247,220,.65) 0%,transparent 70%)',
          filter: 'blur(28px)',
        }}
      />

      {/* ── Scattered photos — hidden on mobile ── */}
      <div className="hidden sm:block">
        {PHOTOS.map((p, i) => (
          <img
            key={i}
            src={p.src}
            alt=""
            className={`circle-img absolute shadow-md ${p.anim}`}
            style={{ ...p.style, width: p.size, height: p.size, zIndex: 10 }}
          />
        ))}
      </div>

      {/* ── Hero text centred ── */}
      <div className="relative z-20 text-center px-6 sm:px-12 max-w-[820px] mx-auto">
        <h1 className="text-display text-[2.4rem] sm:text-6xl md:text-7xl text-gray-900 anim-fade-up leading-[1.12]">
          The thinkers and doers were{' '}
          <span className="highlight-pink">changing</span> the{' '}
          <span className="highlight-mint">status</span> Quo with
        </h1>

        <p className="mt-8 text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto anim-fade-up-delay">
          We are a team of strategists, designers, communicators, researchers.
          Together, we believe that progress only happens when you refuse to
          play things safe.
        </p>
      </div>
    </section>
  )
}
