import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">HalalPharmaCare</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Leading the way in halal pharmaceutical certification and manufacturing excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-all duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link to="/manufacturing" className="hover:text-emerald-400 transition-colors">Manufacturing</Link></li>
              <li><Link to="/events" className="hover:text-emerald-400 transition-colors">Events</Link></li>
              <li><Link to="/directory" className="hover:text-emerald-400 transition-colors">Directory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with industry news and insights.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-emerald-500 focus:outline-none transition-colors"
              />
              <button className="bg-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HalalPharmaCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
