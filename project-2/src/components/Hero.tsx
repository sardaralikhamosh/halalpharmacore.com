import { MapPin, TrendingUp, Building2, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900"
    >
      {/* Decorative grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse-slow-delay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-teal-100 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Global Halal Pharmaceutical Industry Directory
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 animate-fade-in-up animation-delay-100">
          Halal Pharmaceutical
          <br />
          <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            Market Directory
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-teal-100/80 max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-in-up animation-delay-200">
          Explore the world's leading halal pharmaceutical companies across major markets.
          Discover key players shaping the future of halal-compliant drug manufacturing,
          certification, and distribution worldwide.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-300">
          {[
            { icon: Building2, value: '13+', label: 'Companies Listed' },
            { icon: MapPin, value: '6', label: 'Countries Covered' },
            { icon: TrendingUp, value: '$132B', label: 'Market Value' },
            { icon: TrendingUp, value: '6.2%', label: 'Annual Growth' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 p-5 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              <stat.icon className="text-teal-300 mx-auto mb-2" size={24} />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-teal-200/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <a
            href="#directory"
            className="px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            Explore Directory
            <ArrowDown size={18} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl text-white font-semibold bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Listed in Directory
          </a>
        </div>
      </div>
    </section>
  );
}
