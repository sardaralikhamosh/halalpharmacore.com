import { FileSearch, ShieldCheck, FlaskConical, Factory, Award, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: FileSearch,
    title: 'New Market Analysis',
    description: 'Comprehensive market research and opportunity assessment for halal pharmaceutical expansion.',
    color: 'emerald',
  },
  {
    icon: ShieldCheck,
    title: 'Halal Compliance',
    description: 'Expert guidance on meeting halal standards and regulatory requirements across global markets.',
    color: 'teal',
  },
  {
    icon: FlaskConical,
    title: 'Halal Process Development',
    description: 'Custom process design and optimization for halal pharmaceutical manufacturing.',
    color: 'cyan',
  },
  {
    icon: Factory,
    title: 'Halal Manufacturing',
    description: 'End-to-end manufacturing solutions with complete halal compliance and quality assurance.',
    color: 'emerald',
  },
  {
    icon: Award,
    title: 'Halal Drug Certification',
    description: 'Official certification services ensuring your products meet international halal standards.',
    color: 'teal',
  },
  {
    icon: TrendingUp,
    title: 'New Market Development',
    description: 'Strategic market entry planning and business development for halal pharmaceutical markets.',
    color: 'cyan',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Comprehensive Halal Pharmaceutical Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From compliance to certification, we provide end-to-end support for your halal pharmaceutical journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-${service.color}-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`text-${service.color}-600`} size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <button className="mt-6 text-emerald-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <span>→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
