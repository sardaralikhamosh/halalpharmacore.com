import { TrendingUp, DollarSign, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                Leading Halal Pharmaceutical Certification
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The Global Halal Pharmaceutical Market Has{' '}
              <span className="text-emerald-600">Tremendous Potential</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Partner with industry leaders to tap into the fastest-growing pharmaceutical market worldwide.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Explore Services
              </button>
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-300 font-semibold text-lg">
                Contact Us
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <DollarSign className="text-emerald-600" size={28} />
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Market Value 2021</p>
                  <p className="text-4xl font-bold text-gray-900">$100B</p>
                </div>
              </div>
              <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <TrendingUp className="text-teal-600" size={28} />
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Projected by 2026</p>
                  <p className="text-4xl font-bold text-gray-900">$132B</p>
                </div>
              </div>
              <div className="h-2 bg-teal-100 rounded-full overflow-hidden">
                <div className="h-full bg-teal-600 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 shadow-xl text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <Globe className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-emerald-50 text-sm font-medium">Annual Growth Rate</p>
                  <p className="text-5xl font-bold">6.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
