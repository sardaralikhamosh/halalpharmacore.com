import { Globe, CheckCircle2, TrendingUp, Award, Zap, Users, ArrowRight } from 'lucide-react';

const markets = [
  {
    name: 'Malaysia',
    region: 'Southeast Asia',
    description: 'Industry leader in halal pharmaceutical standards with a vibrant and well-established market presence.',
    highlights: [
      'First to establish halal pharma standards',
      'Mature regulatory framework',
      'Leading innovation hub',
      'Strong enforcement and compliance',
    ],
    image: 'linear-gradient(135deg, #059669 0%, #0891b2 100%)',
    icon: Award,
  },
  {
    name: 'Indonesia',
    region: 'Southeast Asia',
    description: 'Largest Muslim population globally with mandatory halal certification requirements for pharmaceuticals.',
    highlights: [
      'Largest Muslim market',
      'Growing pharmaceutical sector',
      'Mandatory certification',
      'Expanding distribution channels',
    ],
    image: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    icon: Users,
  },
  {
    name: 'Turkey',
    region: 'Middle East & Europe',
    description: 'Large pharmaceutical consumer base with leading government harmonization initiatives.',
    highlights: [
      'Strong consumer base',
      'Government initiatives',
      'EU proximity advantages',
      'Growing export potential',
    ],
    image: 'linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)',
    icon: TrendingUp,
  },
  {
    name: 'UAE',
    region: 'Middle East',
    description: 'Fourth-largest pharmaceutical importer in OIC countries with the best-developed halal pharmaceutical ecosystem.',
    highlights: [
      'Best-developed ecosystem',
      'Major import hub',
      'Regional distribution center',
      'High regulatory standards',
    ],
    image: 'linear-gradient(135deg, #0284c7 0%, #1e40af 100%)',
    icon: Globe,
  },
  {
    name: 'Saudi Arabia',
    region: 'Middle East',
    description: 'Top OIC pharmaceutical importer positioned for a major market role with significant growth potential.',
    highlights: [
      'Top OIC importer',
      'Strategic positioning',
      'High market value',
      'Growing healthcare sector',
    ],
    image: 'linear-gradient(135deg, #1e40af 0%, #0f766e 100%)',
    icon: Zap,
  },
  {
    name: 'Iran',
    region: 'Middle East',
    description: '$3.7 billion pharmaceutical sector pursuing regional halal hub status and market expansion.',
    highlights: [
      '$3.7B sector size',
      'Regional hub ambitions',
      'Growing infrastructure',
      'Emerging opportunities',
    ],
    image: 'linear-gradient(135deg, #0f766e 0%, #047857 100%)',
    icon: CheckCircle2,
  },
];

const certificationSteps = [
  {
    number: '01',
    title: 'Market Assessment',
    description: 'Evaluate your product requirements and target market regulations',
    icon: Globe,
  },
  {
    number: '02',
    title: 'Documentation',
    description: 'Prepare comprehensive compliance documentation and certifications',
    icon: CheckCircle2,
  },
  {
    number: '03',
    title: 'Certification Process',
    description: 'Guide through halal certification authority requirements',
    icon: Award,
  },
  {
    number: '04',
    title: 'Market Launch',
    description: 'Support successful product entry into target markets',
    icon: TrendingUp,
  },
];

export default function HalalDrugCertificationPage() {
  return (
    <main className="pt-20">
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-teal-800 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30">
              <Globe className="text-blue-300" size={24} />
              <span className="font-semibold">Global Certification Services</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Halal Drug Certification
            </h1>
            <p className="text-xl lg:text-2xl text-blue-50 max-w-4xl mx-auto leading-relaxed">
              Navigate global halal pharmaceutical certification with confidence. Expert guidance for international market access.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Approach</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              The Certification Journey
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Pharmaceutical products require certification from reputable halal bodies to ensure compliance with Islamic principles. Our expert team guides your company through every requirement in your target markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-200 h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-lg mb-4 font-bold text-lg">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  {index < certificationSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 z-10">
                      <ArrowRight className="text-blue-300" size={32} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Global Markets</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Key Market Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the world's leading halal pharmaceutical markets with unique opportunities and growth potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {markets.map((market, index) => {
              const Icon = market.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div
                    className="h-32 relative overflow-hidden group-hover:scale-105 transition-transform duration-300"
                    style={{ background: market.image }}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="text-white opacity-30" size={48} />
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{market.name}</h3>
                        <p className="text-sm text-teal-600 font-semibold mt-1">{market.region}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{market.description}</p>

                    <ul className="space-y-3">
                      {market.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-600"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full mt-6 px-4 py-3 rounded-lg border border-teal-600 text-teal-600 font-semibold hover:bg-teal-50 transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 border border-blue-200">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Why Choose Halal Pharmacore?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Market Expertise</h3>
                    <p className="text-gray-600">Deep knowledge of halal requirements across all major pharmaceutical markets</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">End-to-End Support</h3>
                    <p className="text-gray-600">Complete guidance from documentation through market launch and beyond</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Proven Track Record</h3>
                    <p className="text-gray-600">Successfully guided numerous companies through certification processes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Global Network</h3>
                    <p className="text-gray-600">Established relationships with certification authorities worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-blue-600 text-white rounded-2xl p-8 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Start Your Certification Today</h3>
                <p className="text-teal-50 mb-8 leading-relaxed">
                  Connect with our team to discuss your pharmaceutical certification needs and market expansion strategy.
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300 outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300 outline-none"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300 outline-none">
                    <option value="" className="bg-gray-800">Select Target Market</option>
                    <option value="malaysia" className="bg-gray-800">Malaysia</option>
                    <option value="indonesia" className="bg-gray-800">Indonesia</option>
                    <option value="turkey" className="bg-gray-800">Turkey</option>
                    <option value="uae" className="bg-gray-800">UAE</option>
                    <option value="saudi-arabia" className="bg-gray-800">Saudi Arabia</option>
                    <option value="iran" className="bg-gray-800">Iran</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl mt-6"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">6+</div>
              <p className="text-blue-100">Major Markets Covered</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <p className="text-blue-100">Companies Certified</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <p className="text-blue-100">Success Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Expert Support</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
