import { useState } from 'react';

const NAV_LINKS = ['Home', 'Studio', 'Services', 'Contact', 'FAQs'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100">
      <nav className="site-container">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="text-lg font-semibold tracking-tight text-gray-900 shrink-0">
            Elementum
          </a>

          {/* Desktop links — always centred between logo and hamburger */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(label => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger — visible on mobile */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            className="flex flex-col gap-[5px] p-2 rounded-md hover:bg-gray-100 transition-colors shrink-0"
          >
            <span className={`block w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-64 pb-4' : 'max-h-0'}`}>
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map(label => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
