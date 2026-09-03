import { Search, Filter, Globe, Building2, Award, MapPin } from 'lucide-react';
import { useState } from 'react';

const companies = [
  {
    name: 'Crescent Pharmaceuticals',
    category: 'Manufacturer',
    location: 'Malaysia',
    certification: 'Halal Certified',
    specialization: 'Injectable Solutions',
    logo: '🏭',
  },
  {
    name: 'Ummah Medical Group',
    category: 'Distribution',
    location: 'Saudi Arabia',
    certification: 'ISO 9001',
    specialization: 'Regional Distribution',
    logo: '📦',
  },
  {
    name: 'Nur Pharma Solutions',
    category: 'Manufacturer',
    location: 'Turkey',
    certification: 'Halal Certified',
    specialization: 'Tablet Manufacturing',
    logo: '🏭',
  },
  {
    name: 'Al Shifa Trading',
    category: 'Trading',
    location: 'UAE',
    certification: 'ISO 13485',
    specialization: 'Medical Devices',
    logo: '🏢',
  },
  {
    name: 'Baraka Biotech',
    category: 'Manufacturer',
    location: 'Indonesia',
    certification: 'Halal Certified',
    specialization: 'Biologics & Vaccines',
    logo: '🏭',
  },
  {
    name: 'Safa Trading Corporation',
    category: 'Distribution',
    location: 'Pakistan',
    certification: 'ISO 9001',
    specialization: 'Multi-category Distribution',
    logo: '📦',
  },
  {
    name: 'Mercy Pharmaceuticals',
    category: 'Manufacturer',
    location: 'Egypt',
    certification: 'Halal Certified',
    specialization: 'Capsule Manufacturing',
    logo: '🏭',
  },
  {
    name: 'Habiba Health Services',
    category: 'Distribution',
    location: 'Nigeria',
    certification: 'ISO 9001',
    specialization: 'West Africa Distribution',
    logo: '📦',
  },
  {
    name: 'Aman Labs & Research',
    category: 'R&D',
    location: 'Bangladesh',
    certification: 'GMP Certified',
    specialization: 'Drug Formulation',
    logo: '🔬',
  },
];

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Manufacturer', 'Distribution', 'Trading', 'R&D'];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || company.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="pt-20">
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Market Participants</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-3 mb-4">
              Halal Pharmaceutical Directory
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with leading manufacturers, distributors, and service providers in the halal pharmaceutical ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by company name, location, or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-lg"
              />
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Filter size={16} className="inline mr-2" />
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600 font-medium">
              Showing {filteredCompanies.length} of {companies.length} companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{company.logo}</div>
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                    {company.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">{company.name}</h3>

                <div className="space-y-3 mb-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} className="text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">{company.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award size={16} className="text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">{company.certification}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Globe size={16} className="text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">{company.specialization}</span>
                  </div>
                </div>

                <button className="w-full bg-emerald-50 text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-100 transition-all duration-300 font-semibold text-sm">
                  View Profile
                </button>
              </div>
            ))}
          </div>

          {filteredCompanies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No companies found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 text-emerald-600 font-semibold hover:text-emerald-700"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="text-center">
              <Building2 className="mx-auto text-emerald-600 mb-4" size={48} />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Is Your Company Listed?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our directory to connect with partners across the halal pharmaceutical industry. Increase your visibility and expand your business network.
              </p>
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                Register Your Company
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
