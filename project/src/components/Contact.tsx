import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Let's Discuss Your Halal Pharmaceutical Needs
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Our team of experts is ready to help you navigate the halal pharmaceutical market and achieve your certification goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                  <Mail className="text-emerald-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email Us</p>
                  <a href="mailto:info@halalpharmacare.com" className="text-gray-600 hover:text-emerald-600 transition-colors">
                    info@halalpharmacare.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                  <Phone className="text-teal-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Call Us</p>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-emerald-600 transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="text-cyan-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Visit Us</p>
                  <p className="text-gray-600">
                    123 Pharmaceutical Avenue<br />
                    Business District, City 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 outline-none"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
