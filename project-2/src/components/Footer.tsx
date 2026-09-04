import { Globe, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

type Page = 'home' | 'news';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const socialIcons = [Linkedin, Twitter, Facebook];

export default function Footer({ onNavigate }: FooterProps) {
  const companyLinks: { label: string; page?: Page; anchor?: string }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', anchor: '#' },
    { label: 'Our Services', anchor: '#' },
    { label: 'Contact Us', anchor: '#contact' },
  ];

  const resourceLinks: { label: string; page?: Page; anchor?: string }[] = [
    { label: 'Market Directory', anchor: '#directory' },
    { label: 'Market News', page: 'news' },
    { label: 'Certification', anchor: '#certification' },
    { label: 'Halal Assurance System', anchor: '#has' },
  ];

  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];

  return (
    <footer className="bg-gray-900 text-gray-400 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px]" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
                <Globe className="text-white" size={24} strokeWidth={2.2} />
              </div>
              <div>
                <span className="font-bold text-lg text-white">Halal Pharmacore</span>
                <p className="text-xs text-teal-400 uppercase tracking-wide font-medium">
                  Your Halal Pharmaceutical Market Experts
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              We provide comprehensive services to help companies enter the halal pharmaceutical
              market, including market research, halal-compliant drug manufacturing processes,
              and acquiring halal certifications in various markets of interest.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="text-teal-500" size={16} />
                <span>info@halalpharmacore.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-teal-500" size={16} />
                <span>+1 (858) 555-0100</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-teal-500" size={16} />
                <span>La Jolla, California, USA</span>
              </div>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {link.page ? (
                    <button
                      onClick={() => onNavigate(link.page!)}
                      className="text-sm hover:text-teal-400 transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.anchor}
                      className="text-sm hover:text-teal-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  {link.page ? (
                    <button
                      onClick={() => onNavigate(link.page!)}
                      className="text-sm hover:text-teal-400 transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.anchor}
                      className="text-sm hover:text-teal-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm hover:text-teal-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Halal Pharmacore. All rights reserved.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialIcons.map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-teal-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
