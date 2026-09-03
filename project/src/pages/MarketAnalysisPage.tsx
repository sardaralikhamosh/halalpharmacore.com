import { TrendingUp, Globe2, Search, BarChart3, Target, ArrowRight, DollarSign, Users, Building2 } from 'lucide-react';

const markets = [
  {
    country: 'Malaysia',
    flag: '🇲🇾',
    title: 'Industry Leader & First Mover',
    description: 'Positioned as the global pioneer in halal certification standards, Malaysia leads the industry with comprehensive regulatory frameworks and innovative halal pharmaceutical solutions.',
    highlights: ['Established certification standards', 'Regional hub for halal trade', 'Government support programs'],
    image: 'https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    country: 'Indonesia',
    flag: '🇮🇩',
    title: 'World\'s Largest Muslim Population',
    description: 'Home to the world\'s largest Muslim population with active government mandates on pharmaceutical certification, creating unprecedented market opportunities.',
    highlights: ['270+ million consumers', 'Mandatory halal certification', 'Rapid market expansion'],
    image: 'https://images.pexels.com/photos/3912379/pexels-photo-3912379.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    country: 'Turkey',
    flag: '🇹🇷',
    title: 'Large Consumer Market',
    description: 'Turkey represents a massive consumer market with government-led harmonization initiatives, bridging European and Middle Eastern pharmaceutical standards.',
    highlights: ['Strategic geographic position', 'Harmonization leadership', 'Growing domestic production'],
    image: 'https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    title: '4th Largest Pharmaceutical Importer',
    description: 'The UAE stands as the 4th largest pharmaceutical importer among OIC nations, offering a sophisticated healthcare infrastructure and strategic regional access.',
    highlights: ['Major import hub', 'Advanced healthcare system', 'Regional distribution center'],
    image: 'https://images.pexels.com/photos/3912982/pexels-photo-3912982.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    title: 'Top OIC Pharmaceutical Importer',
    description: 'Saudi Arabia leads all OIC nations in pharmaceutical imports, driven by substantial healthcare investments and ambitious Vision 2030 healthcare initiatives.',
    highlights: ['Largest OIC importer', 'Vision 2030 initiatives', 'Healthcare infrastructure growth'],
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    country: 'Iran',
    flag: '🇮🇷',
    title: '$3.7B Pharmaceutical Sector',
    description: 'Iran\'s robust $3.7 billion pharmaceutical sector demonstrates strong regional ambitions with significant domestic manufacturing capabilities.',
    highlights: ['$3.7B market size', 'Domestic manufacturing', 'Regional export potential'],
    image: 'https://images.pexels.com/photos/3912378/pexels-photo-3912378.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function MarketAnalysisPage() {
  return (
    <main className="pt-20">
      <section className="relative py-32 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/30">
                Strategic Market Intelligence
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              New Market Analysis
            </h1>
            <p className="text-xl lg:text-2xl text-emerald-50 max-w-4xl mx-auto mb-12 leading-relaxed">
              Comprehensive insights and intelligence on emerging halal pharmaceutical markets worldwide
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="text-white" size={32} />
                </div>
                <p className="text-4xl font-bold mb-2">$100B</p>
                <p className="text-emerald-100">Market Value 2021</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <p className="text-4xl font-bold mb-2">$2B</p>
                <p className="text-emerald-100">Investment Growth 2021-2022</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <p className="text-4xl font-bold mb-2">1.8B+</p>
                <p className="text-emerald-100">Muslim Consumers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Approach</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
                Continuous Market Monitoring & Intelligence
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We regularly monitor the halal pharmaceutical market for any updates and developments, which could potentially create new opportunities for companies to expand their reach and access new markets.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our comprehensive analysis covers regulatory changes, market trends, competitive landscapes, and emerging opportunities across key halal pharmaceutical markets worldwide.
              </p>
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center gap-2">
                Request Market Report
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-200">
                <Search className="text-emerald-600 mb-4" size={40} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Market Research</h3>
                <p className="text-gray-600 text-sm leading-relaxed">In-depth analysis of market dynamics and opportunities</p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-200 mt-8">
                <BarChart3 className="text-teal-600 mb-4" size={40} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data Analytics</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Advanced analytics for informed decision-making</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-200 -mt-8">
                <Target className="text-cyan-600 mb-4" size={40} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Planning</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Actionable strategies for market entry</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl border border-blue-200">
                <Globe2 className="text-blue-600 mb-4" size={40} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Insights</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Comprehensive coverage of international markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Key Markets</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Active Pharmaceutical Markets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover high-potential markets with established halal pharmaceutical ecosystems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {markets.map((market, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={market.image}
                    alt={market.country}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-5xl">{market.flag}</span>
                      <h3 className="text-3xl font-bold text-white">{market.country}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="bg-emerald-50 border-l-4 border-emerald-600 px-4 py-3 mb-6">
                    <h4 className="font-bold text-gray-900">{market.title}</h4>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{market.description}</p>

                  <div className="space-y-2 mb-6">
                    {market.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <button className="text-emerald-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="p-12 lg:p-16 text-white">
                <h2 className="text-4xl font-bold mb-6">Ready to Explore New Market Opportunities?</h2>
                <p className="text-emerald-50 text-lg mb-8 leading-relaxed">
                  Get comprehensive market analysis tailored to your business needs. Our experts will help you identify the most promising markets for expansion.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Building2 className="text-white" size={20} />
                    </div>
                    <span className="text-emerald-50">Customized market entry strategies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <BarChart3 className="text-white" size={20} />
                    </div>
                    <span className="text-emerald-50">Detailed competitive analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Target className="text-white" size={20} />
                    </div>
                    <span className="text-emerald-50">Regulatory pathway guidance</span>
                  </div>
                </div>

                <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                  Schedule Consultation
                </button>
              </div>

              <div className="hidden lg:block relative h-full min-h-[500px]">
                <img
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Market Analysis"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
