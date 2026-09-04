import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    };

    if (desktopDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [desktopDropdownOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Manufacturing', path: '/manufacturing' },
    { label: 'Events', path: '/events' },
    { label: 'Directory', path: '/directory' },
    { label: 'Market News', path: '/market-news' },
  ];

  const servicesLinks = [
    { label: 'Services Overview', path: '/services' },
    { label: 'Halal Compliance', path: '/halal-compliance' },
    { label: 'Drug Certification', path: '/halal-drug-certification' },
    { label: 'HAS Management', path: '/halal-assurance-system' },
    { label: 'Market Analysis', path: '/market-analysis' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="HalalPharmaCare Logo" 
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}

            <div className="relative" ref={desktopDropdownRef}>
              <button
                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Services
                <ChevronDown size={18} className={`transition-transform duration-300 ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {desktopDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {servicesLinks.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors font-medium"
                      onClick={() => setDesktopDropdownOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-100">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="py-2" ref={mobileDropdownRef}>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="flex items-center gap-1 w-full text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Services
                <ChevronDown size={18} className={`transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileDropdownOpen && (
                <div className="mt-2 pl-4 space-y-2 border-l-2 border-emerald-200">
                  {servicesLinks.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium py-1.5"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button 
              className="w-full bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}