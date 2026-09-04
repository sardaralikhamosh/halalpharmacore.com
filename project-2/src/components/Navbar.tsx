import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

type Page = 'home' | 'news';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  const navLinks: { label: string; page: Page; anchor?: string }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Market News', page: 'news' },
  ];

  const anchorLinks = [
    { label: 'Directory', anchor: '#directory' },
    { label: 'Certification', anchor: '#certification' },
    { label: 'Contact', anchor: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || currentPage === 'news'
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-teal-900/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:shadow-teal-500/50 transition-shadow duration-300">
              <Globe className="text-white" size={24} strokeWidth={2.2} />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-bold text-lg leading-tight tracking-tight transition-colors duration-300 ${
                scrolled || currentPage === 'news' ? 'text-gray-900' : 'text-white'
              }`}
            >
              Halal Pharmacore
            </span>
            <span
              className={`text-[11px] font-medium tracking-wide uppercase transition-colors duration-300 ${
                scrolled || currentPage === 'news' ? 'text-teal-600' : 'text-teal-200'
              }`}
            >
              {currentPage === 'news' ? 'Market News' : 'Market Directory'}
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.page)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                currentPage === link.page
                  ? scrolled || currentPage === 'news'
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-white bg-white/15'
                  : scrolled || currentPage === 'news'
                    ? 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
          {anchorLinks.map((link) => (
            <a
              key={link.label}
              href={link.anchor}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                scrolled || currentPage === 'news'
                  ? 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => handleNav('home')}
            className="ml-3 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Listed
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled || currentPage === 'news'
              ? 'text-gray-900 hover:bg-gray-100'
              : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.page)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  currentPage === link.page
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            {anchorLinks.map((link) => (
              <a
                key={link.label}
                href={link.anchor}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-600 hover:text-teal-600 hover:bg-teal-50 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => handleNav('home')}
              className="block w-full mt-2 px-4 py-3 rounded-lg text-center text-white bg-gradient-to-r from-teal-500 to-emerald-600 font-semibold"
            >
              Get Listed
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
