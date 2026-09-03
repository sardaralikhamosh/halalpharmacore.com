import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    if (servicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [servicesDropdownOpen]);

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

            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Services
                <ChevronDown size={18} className={`transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {servicesLinks.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors font-medium"
                      onClick={() => setServicesDropdownOpen(false)}
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

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
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

            <div className="py-2">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center gap-1 w-full text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Services
                <ChevronDown size={18} className={`transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  {servicesLinks.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium py-1.5"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setServicesDropdownOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button className="w-full bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-medium">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}