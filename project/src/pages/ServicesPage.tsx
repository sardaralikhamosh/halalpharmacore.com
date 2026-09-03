import { FileSearch, ShieldCheck, FlaskConical, Factory, Award, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: FileSearch,
    title: 'New Market Analysis',
    description: 'Comprehensive market research and opportunity assessment for halal pharmaceutical expansion.',
    details: [
      'Market size and growth projections',
      'Competitive landscape analysis',
      'Regulatory environment review',
      'Entry strategy development',
      'Risk assessment and mitigation',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Halal Compliance',
    description: 'Expert guidance on meeting halal standards and regulatory requirements across global markets.',
    details: [
      'Halal certification audit',
      'Supply chain assessment',
      'Documentation preparation',
      'Regulatory compliance review',
      'Ongoing compliance monitoring',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Halal Process Development',
    description: 'Custom process design and optimization for halal pharmaceutical manufacturing.',
    details: [
      'Process design consultation',
      'Formulation development',
      'Manufacturing optimization',
      'Quality system design',
      'Validation support',
    ],
  },
  {
    icon: Factory,
    title: 'Halal Manufacturing',
    description: 'End-to-end manufacturing solutions with complete halal compliance and quality assurance.',
    details: [
      'Contract manufacturing',
      'Facility management',
      'Production scaling',
      'Quality assurance programs',
      'Supply chain management',
    ],
  },
  {
    icon: Award,
    title: 'Halal Drug Certification',
    description: 'Official certification services ensuring your products meet international halal standards.',
    details: [
      'Certification application support',
      'Documentation review',
      'Audit coordination',
      'Certificate issuance',
      'Renewal management',
    ],
  },
  {
    icon: TrendingUp,
    title: 'New Market Development',
    description: 'Strategic market entry planning and business development for halal pharmaceutical markets.',
    details: [
      'Market entry strategy',
      'Distribution channel development',
      'Partner identification',
      'Regulatory pathway planning',
      'Business development support',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-3 mb-4">
              Comprehensive Halal Pharmaceutical Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial market analysis to certification and manufacturing, we provide complete support for your halal pharmaceutical journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                  {isEven ? (
                    <>
                      <div>
                        <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                          <Icon className="text-emerald-600" size={32} />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                        <ul className="space-y-3 mb-8">
                          {service.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-700">
                              <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <button className="text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 group">
                          Learn More
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-12 aspect-square flex items-center justify-center border border-emerald-200">
                        <Icon className="text-emerald-400" size={120} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-12 aspect-square flex items-center justify-center border border-teal-200">
                        <Icon className="text-teal-400" size={120} />
                      </div>
                      <div>
                        <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                          <Icon className="text-teal-600" size={32} />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                        <ul className="space-y-3 mb-8">
                          {service.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-700">
                              <div className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <button className="text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 group">
                          Learn More
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">
            Contact our team to discuss which services best fit your halal pharmaceutical goals
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
            Contact Us Today
          </button>
        </div>
      </section>
    </main>
  );
}
