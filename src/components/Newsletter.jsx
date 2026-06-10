import { useState } from "react";

const FOOTER_COLS = [
  {
    heading: "Resource",
    links: ["Blog", "Help Center", "Release Notes", "Status"],
  },
  {
    heading: "Community",
    links: ["Twitter", "LinkedIn", "Facebook", "Dribbble"],
  },
  {
    heading: "Company",
    links: ["About", "Press", "Careers", "Contact"],
  },
  {
    heading: "Legal",
    links: ["Terms", "Privacy", "Policies", "Settings"],
  },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative w-full bg-gray-950 text-white">
      {/* ── Subscribe band ─────────────────────────────────────── */}
      <div className="relative w-full py-16 md:py-24 lg:py-28 overflow-hidden">
        {/* Coral triangles — purely decorative */}
        <svg
          className="absolute top-8 left-[5%] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-70 pointer-events-none"
          viewBox="0 0 100 100"
          fill="none"
        >
          <polygon points="50,0 100,100 0,100" fill="#ff6b6b" />
        </svg>
        <svg
          className="absolute bottom-10 right-[4%] w-10 h-10 sm:w-14 sm:h-14 opacity-55 rotate-45 pointer-events-none"
          viewBox="0 0 100 100"
          fill="none"
        >
          <polygon points="50,0 100,100 0,100" fill="#ff6b6b" />
        </svg>
        <svg
          className="hidden lg:block absolute top-1/2 right-[22%] w-9 h-9 -rotate-12 opacity-30 pointer-events-none"
          viewBox="0 0 100 100"
          fill="none"
        >
          <polygon points="50,0 100,100 0,100" fill="#ff6b6b" />
        </svg>

        {/* Text + form — centred */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="mx-auto text-center max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Subscribe to our newsletter
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-10 leading-relaxed">
              Stay informed with the latest industry changes and insights.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="w-full flex flex-col sm:flex-row gap-3 justify-center"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 w-full min-w-0 px-5 py-3 rounded-full bg-gray-900 border border-gray-700
                           text-white text-sm placeholder-gray-500
                           focus:outline-none focus:border-red-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold
                           text-sm text-white bg-red-500 hover:bg-red-600 transition-colors cursor-pointer flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Divider ───────────────────────────────────────────── */}
      <div className="w-full border-t border-gray-800" />

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="w-full py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
          <div className="w-full flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
            {/* Brand block */}
            <div className="w-full lg:w-60 lg:flex-shrink-0">
              <p className="text-2xl font-bold mb-4 text-white">Elementum</p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Crafting digital experiences that empower businesses to grow and
                thrive in a connected world.
              </p>
            </div>

            {/* Link columns grid */}
            <div className="w-full flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
              {FOOTER_COLS.map(({ heading, links }) => (
                <div key={heading} className="flex flex-col min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
                    {heading}
                  </p>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white text-sm transition-colors duration-200 break-words"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── Bottom bar ────────────────────────────────────────── */}
      <div className="w-full border-t border-gray-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Elementum. All rights reserved.
          </span>
          <span className="text-gray-500 text-xs">
            Designed with <span style={{ color: "#ff6b6b" }}>&hearts;</span> by
            Elementum Team
          </span>
        </div>
      </div>
    </section>
  );
}
