import { Search, Filter, Globe, Building2, Award, MapPin, TrendingUp, ArrowDown, ExternalLink } from 'lucide-react';
import { useState } from 'react';

// Company data from your provided file
export interface Company {
  name: string;
  country: string;
  description: string;
  specialties: string[];
  website?: string;
}

export interface CountryDirectory {
  country: string;
  flag: string;
  marketInfo: string;
  companies: Company[];
}

export const directoryData: CountryDirectory[] = [
  {
    country: "United Arab Emirates",
    flag: "AE",
    marketInfo:
      "A strategic hub for halal pharmaceuticals in the MENA region, the UAE combines strong regulatory frameworks with world-class logistics infrastructure. The government actively promotes halal certification standards and serves as a gateway for pharmaceutical trade across the Gulf and beyond.",
    companies: [
      {
        name: "Julphar (Gulf Pharmaceutical Industries)",
        country: "United Arab Emirates",
        description:
          "The largest pharmaceutical manufacturer in the UAE and one of the largest in the Middle East, Julphar operates state-of-the-art facilities producing a wide range of generic and branded pharmaceuticals. The company has been expanding its halal-certified product portfolio across multiple therapeutic categories.",
        specialties: ["Generic Medicines", "Branded Pharmaceuticals", "Halal Certification"],
        website: "julphar.net",
      },
      {
        name: "Neopharma",
        country: "United Arab Emirates",
        description:
          "A leading UAE-based pharmaceutical company with advanced manufacturing facilities in Abu Dhabi. Neopharma produces a broad range of products and has been actively pursuing halal compliance across its product lines to serve the growing regional demand.",
        specialties: ["Generic Drugs", "Contract Manufacturing", "Halal Compliance"],
        website: "neopharma.ae",
      },
      {
        name: "Al Hayat Pharmaceuticals",
        country: "United Arab Emirates",
        description:
          "Established in 1982, Al Hayat Pharmaceuticals is one of the leading pharmaceutical and medical companies in the UAE, headquartered in Sharjah. The company distributes a wide portfolio of pharmaceutical products across the Emirates and the wider region.",
        specialties: ["Pharmaceutical Distribution", "Medical Devices", "Regional Supply"],
        website: "alhayatuae.com",
      },
      {
        name: "Acino Pharmaceuticals FZ-LLC",
        country: "United Arab Emirates",
        description:
          "A Swiss-headquartered pharmaceutical company with a strong presence in the UAE, Acino focuses on emerging markets and offers a range of products in cardiovascular, gastrointestinal, and respiratory therapeutic areas with growing halal compliance initiatives.",
        specialties: ["Cardiovascular", "Gastrointestinal", "Respiratory"],
        website: "acino.com",
      },
    ],
  },
  {
    country: "Malaysia",
    flag: "MY",
    marketInfo:
      "Malaysia is the global pioneer and leader in halal pharmaceutical standards, having established the world's first halal pharmaceutical standard (MS 2424). With strong government backing through the Halal Development Corporation (HDC), Malaysia aims to boost its halal pharmaceutical output to US$5.9 billion by 2030.",
    companies: [
      {
        name: "Duopharma Biotech Berhad",
        country: "Malaysia",
        description:
          "Duopharma is at the forefront of the halal pharmaceutical industry in Malaysia. The company has obtained halal certification for a wide range of its products, including antibiotics, analgesics, and other prescription medicines. It is the leading halal pharmaceutical manufacturer in Southeast Asia with a strong export presence.",
        specialties: ["Antibiotics", "Analgesics", "Prescription Medicines", "Halal-Certified"],
        website: "duopharmabiotech.com",
      },
      {
        name: "Pharmaniaga Berhad",
        country: "Malaysia",
        description:
          "A major Malaysian pharmaceutical company and the country's largest pharmaceutical manufacturer. Pharmaniaga has been actively pursuing halal certification for its products and operates one of the most advanced pharmaceutical manufacturing facilities in the region.",
        specialties: ["Generic Medicines", "Halal Manufacturing", "Government Supply"],
        website: "pharmaniaga.com",
      },
    ],
  },
  {
    country: "Indonesia",
    flag: "ID",
    marketInfo:
      "Indonesia has the largest Muslim population globally and mandates halal certification for pharmaceuticals. The Indonesian Ulema Council (MUI) oversees certification, making it one of the most important and strictly regulated halal pharmaceutical markets in the world.",
    companies: [
      {
        name: "Etana Biotechnologies Indonesia",
        country: "Indonesia",
        description:
          "Etana is an emerging producer of high-quality, affordable and innovative biopharmaceuticals to treat a range of metabolic, autoimmune and other major life-threatening diseases, including cancer. Its facilities have the capability to produce biological therapeutics with halal certification from the Indonesian Ulema Council (MUI).",
        specialties: ["Biopharmaceuticals", "Biosimilars", "Cancer Therapeutics", "MUI Halal Certified"],
        website: "etanabiotech.com",
      },
      {
        name: "Kalbe Farma",
        country: "Indonesia",
        description:
          "One of the largest pharmaceutical companies in Southeast Asia, Kalbe Farma has been progressively adopting halal standards across its extensive product portfolio. The company operates across prescription drugs, consumer health, and nutrition divisions.",
        specialties: ["Prescription Drugs", "Consumer Health", "Nutrition", "Halal Initiatives"],
        website: "kalbe.co.id",
      },
    ],
  },
  {
    country: "Turkey",
    flag: "TR",
    marketInfo:
      "Turkey has a well-established pharmaceutical industry and serves as a bridge between European and Middle Eastern markets. The country's pharmaceutical sector benefits from strong manufacturing capabilities and increasing focus on halal compliance for export markets.",
    companies: [
      {
        name: "Abdi Ibrahim",
        country: "Turkey",
        description:
          "Abdi Ibrahim has been the leader of Turkey's pharmaceutical industry since 2002. The company operates in 16 countries outside Turkey, with exports to over 60 countries. It has been actively pursuing halal certification for its products to serve Muslim-majority markets globally.",
        specialties: ["Generic Pharmaceuticals", "Export to 60+ Countries", "Halal Certification"],
        website: "abdiibrahim.com.tr",
      },
      {
        name: "Bilim Pharmaceuticals",
        country: "Turkey",
        description:
          "A major Turkish pharmaceutical manufacturer with a strong focus on research and development. Bilim produces a wide range of pharmaceutical products and has been expanding its halal-compliant product lines for both domestic and international markets.",
        specialties: ["R&D Focused", "Generic Drugs", "Halal-Compliant Lines"],
        website: "bilim.com.tr",
      },
    ],
  },
  {
    country: "Iran",
    flag: "IR",
    marketInfo:
      "Iran has a rapidly growing pharmaceutical manufacturing sector with significant expertise in biopharmaceuticals. The country's pharmaceutical industry has developed considerable domestic capability in producing biosimilars and recombinant proteins.",
    companies: [
      {
        name: "CinnaGen",
        country: "Iran",
        description:
          "CinnaGen is an Iran-based biopharmaceutical company that manufactured biosimilar drugs, laboratory diagnostic reagents for in vitro use, and recombinant proteins. The company is a major player in the region's biopharmaceutical sector with significant export activities.",
        specialties: ["Biosimilars", "Diagnostic Reagents", "Recombinant Proteins"],
        website: "cinnagen.com",
      },
    ],
  },
  {
    country: "Saudi Arabia",
    flag: "SA",
    marketInfo:
      "Saudi Arabia is a top OIC pharmaceutical importer positioned for a major market role with significant growth potential. The Saudi Food and Drug Authority (SFDA) has been strengthening halal pharmaceutical regulations, creating substantial opportunities for halal-certified manufacturers.",
    companies: [
      {
        name: "Tabuk Pharmaceuticals",
        country: "Saudi Arabia",
        description:
          "One of the largest Saudi pharmaceutical companies, Tabuk Pharmaceuticals manufactures and distributes a wide range of pharmaceutical products. The company has been expanding its halal-certified product portfolio and has a growing international presence.",
        specialties: ["Generic Medicines", "Halal Portfolio", "International Export"],
        website: "tabuk.com.sa",
      },
      {
        name: "Spimaco (Saudi Pharmaceutical Industries & Medical Appliances Corporation)",
        country: "Saudi Arabia",
        description:
          "A leading Saudi pharmaceutical manufacturer producing a broad range of pharmaceutical products. Spimaco has been actively working toward halal compliance across its manufacturing processes and product lines.",
        specialties: ["Pharmaceutical Manufacturing", "Medical Appliances", "Halal Compliance"],
        website: "spimaco.com.sa",
      },
    ],
  },
];

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);

  // Get unique countries
  const countries = ['All', ...new Set(directoryData.map(item => item.country))];

  // Filter countries based on search and selected country
  const filteredData = directoryData.filter(countryData => {
    const matchesCountry = selectedCountry === 'All' || countryData.country === selectedCountry;
    const matchesSearch = 
      countryData.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      countryData.companies.some(company => 
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    return matchesCountry && matchesSearch;
  });

  // Calculate stats
  const totalCompanies = directoryData.reduce((acc, curr) => acc + curr.companies.length, 0);
  const totalCountries = directoryData.length;

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section - Same style as reference */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900">
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

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-teal-100 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Global Halal Pharmaceutical Market Directory
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6">
            Halal Pharmaceutical
            <br />
            <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              Market Directory
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-teal-100/80 max-w-3xl mx-auto leading-relaxed mb-10">
            Explore the world's leading halal pharmaceutical companies across major markets.
            Discover key players shaping the future of halal-compliant drug manufacturing,
            certification, and distribution worldwide.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {[
              { icon: Building2, value: `${totalCompanies}+`, label: 'Companies Listed' },
              { icon: MapPin, value: totalCountries, label: 'Countries Covered' },
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

      {/* Search and Filter Section */}
      <section id="directory" className="py-12 bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by country, company name, or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-lg"
              />
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2">
              {countries.map(country => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                    selectedCountry === country
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {country === 'All' ? <Filter size={16} className="inline mr-2" /> : null}
                  {country}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Directory Listing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600 font-medium">
              Showing {filteredData.reduce((acc, curr) => acc + curr.companies.length, 0)} companies from {filteredData.length} countries
            </p>
          </div>

          {filteredData.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
              <p className="text-gray-600 text-lg">No companies found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCountry('All');
                }}
                className="mt-4 text-emerald-600 font-semibold hover:text-emerald-700"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredData.map((countryData) => (
                <div key={countryData.country} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
                  {/* Country Header */}
                  <div 
                    className="bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-5 cursor-pointer hover:from-emerald-100 hover:to-teal-100 transition-all duration-300"
                    onClick={() => setExpandedCountry(expandedCountry === countryData.country ? null : countryData.country)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{countryData.flag}</span>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">{countryData.country}</h2>
                          <p className="text-sm text-gray-600">
                            {countryData.companies.length} company{countryData.companies.length > 1 ? 's' : ''} listed
                          </p>
                        </div>
                      </div>
                      <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm">
                        {expandedCountry === countryData.country ? 'Show Less ↑' : 'Show More ↓'}
                      </button>
                    </div>
                  </div>

                  {/* Market Info - Always visible */}
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                    <p className="text-gray-700 text-sm leading-relaxed">{countryData.marketInfo}</p>
                  </div>

                  {/* Companies */}
                  <div className={`grid md:grid-cols-2 gap-6 p-6 transition-all duration-300 ${
                    expandedCountry === countryData.country || expandedCountry === null ? '' : 'max-h-64 overflow-hidden'
                  }`}>
                    {countryData.companies.map((company, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
                          <Globe size={18} className="text-emerald-600 flex-shrink-0 ml-2" />
                        </div>

                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{company.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {company.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>

                        {company.website && (
                          <a
                            href={`https://${company.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                          >
                            Visit Website
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>

                  {expandedCountry !== countryData.country && countryData.companies.length > 4 && (
                    <div className="text-center py-3 bg-gray-50 border-t border-gray-200">
                      <button
                        onClick={() => setExpandedCountry(countryData.country)}
                        className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                      >
                        View all {countryData.companies.length} companies
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Halal Pharmacare?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive services to help companies enter and succeed in the halal pharmaceutical market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="text-emerald-600" size={40} />,
                title: "Market Expertise",
                description: "Deep knowledge of halal requirements across all major pharmaceutical markets."
              },
              {
                icon: <Building2 className="text-emerald-600" size={40} />,
                title: "End-to-End Support",
                description: "Complete guidance from documentation through market launch and beyond."
              },
              {
                icon: <TrendingUp className="text-emerald-600" size={40} />,
                title: "Proven Track Record",
                description: "Successfully guided numerous companies through certification processes."
              },
              {
                icon: <Globe className="text-emerald-600" size={40} />,
                title: "Global Network",
                description: "Established relationships with certification authorities worldwide."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="text-center">
              <Award className="mx-auto text-emerald-600 mb-4" size={48} />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Achieve Halal Certification?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Our expert team can guide you through every step of the halal compliance process,
                from initial assessment to final certification.
              </p>
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}