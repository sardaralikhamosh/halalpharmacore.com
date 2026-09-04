import { useState } from 'react';
import { ChevronDown, MapPin, Globe, ExternalLink, Building2 } from 'lucide-react';
import { directoryData } from '@/data/directoryData';

export default function DirectorySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="directory" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(13 148 136) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-6">
            <Globe size={16} />
            Major Players in the Halal Pharmaceutical Market
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Global Halal Pharmaceutical
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Market Directory
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A comprehensive listing of key pharmaceutical companies driving halal compliance
            across the world's most important markets.
          </p>
        </div>

        {/* Directory accordions */}
        <div className="space-y-4">
          {directoryData.map((entry, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={entry.country}
                className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                  isOpen
                    ? 'border-teal-200 shadow-xl shadow-teal-900/5 bg-white'
                    : 'border-gray-200 bg-white hover:border-teal-200 hover:shadow-md'
                }`}
              >
                {/* Country header button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Flag badge */}
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-white text-lg flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-gradient-to-br from-teal-500 to-emerald-600 shadow-lg shadow-teal-500/30'
                          : 'bg-gradient-to-br from-teal-400 to-emerald-500 group-hover:shadow-md'
                      }`}
                    >
                      {entry.flag}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                        {entry.country}
                      </h3>
                      <p className="text-sm text-gray-400 mt-0.5">
                        {entry.companies.length} {entry.companies.length === 1 ? 'company' : 'companies'} listed
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      isOpen ? 'bg-teal-50 text-teal-600 rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-teal-50 group-hover:text-teal-600'
                    }`}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {/* Expandable content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-teal-100 via-teal-50 to-transparent mb-6" />

                      {/* Market info */}
                      <div className="bg-gradient-to-br from-teal-50 to-emerald-50/50 rounded-xl p-5 mb-6 border border-teal-100/50">
                        <div className="flex items-start gap-3">
                          <MapPin className="text-teal-600 flex-shrink-0 mt-0.5" size={20} />
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {entry.marketInfo}
                          </p>
                        </div>
                      </div>

                      {/* Company cards */}
                      <div className="grid gap-4">
                        {entry.companies.map((company) => (
                          <div
                            key={company.name}
                            className="bg-white rounded-xl border border-gray-200 p-6 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-300 group/card"
                          >
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <div className="flex items-start gap-3">
                                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 flex items-center justify-center flex-shrink-0 group-hover/card:from-teal-100 group-hover/card:to-emerald-100 transition-all duration-300">
                                  <Building2 className="text-teal-600" size={20} />
                                </div>
                                <div>
                                  <h4 className="font-bold text-gray-900 text-lg leading-tight group-hover/card:text-teal-700 transition-colors">
                                    {company.name}
                                  </h4>
                                  {company.website && (
                                    <a
                                      href={`https://${company.website}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700 mt-1 font-medium"
                                    >
                                      {company.website}
                                      <ExternalLink size={12} />
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed text-sm mb-4">
                              {company.description}
                            </p>

                            {/* Specialty tags */}
                            <div className="flex flex-wrap gap-2">
                              {company.specialties.map((spec) => (
                                <span
                                  key={spec}
                                  className="px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-medium border border-teal-100"
                                >
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Get listed CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            If you would like to be added to our Directory, please{' '}
            <a href="#contact" className="text-teal-600 font-semibold hover:text-teal-700 underline underline-offset-2 decoration-teal-300">
              Contact Us
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
