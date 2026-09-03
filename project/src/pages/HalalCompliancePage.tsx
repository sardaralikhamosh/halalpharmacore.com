import { Shield, CheckCircle2, FileText, Package, Truck, ClipboardCheck, AlertCircle, Beaker, Leaf } from 'lucide-react';

const requirements = [
  {
    icon: Leaf,
    title: 'Ingredients',
    description: 'All components must be halal-compliant with strict adherence to Islamic dietary laws.',
    details: [
      'No pork-derived ingredients or by-products',
      'Animal-derived ingredients must come from halal-slaughtered sources',
      'Plant-based and synthetic ingredients must be verified',
      'Complete supply chain documentation required',
    ],
    color: 'emerald',
  },
  {
    icon: Beaker,
    title: 'Production Process',
    description: 'Manufacturing must adhere to halal standards throughout the entire production cycle.',
    details: [
      'Dedicated or thoroughly cleaned equipment',
      'No cross-contamination with non-halal products',
      'Halal-certified production facilities',
      'Trained staff on halal compliance requirements',
    ],
    color: 'teal',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    description: 'Rigorous quality assurance processes ensure consistent halal compliance.',
    details: [
      'Good Manufacturing Practices (GMP) compliance',
      'Regular audits and inspections',
      'Hygiene and sanitation standards',
      'Quality testing at every production stage',
    ],
    color: 'cyan',
  },
  {
    icon: Package,
    title: 'Packaging & Labeling',
    description: 'Products must be properly packaged and clearly labeled with halal certification.',
    details: [
      'Clear halal certification mark display',
      'Complete ingredient disclosure',
      'Batch and expiration date tracking',
      'Tamper-evident packaging',
    ],
    color: 'emerald',
  },
  {
    icon: Truck,
    title: 'Storage & Transportation',
    description: 'Proper segregation and handling throughout the supply chain.',
    details: [
      'Separate storage from non-halal products',
      'Dedicated or cleaned transportation',
      'Temperature-controlled environments when required',
      'Chain of custody documentation',
    ],
    color: 'teal',
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Comprehensive record-keeping ensures full traceability and accountability.',
    details: [
      'Complete production batch records',
      'Supplier certification documentation',
      'Ingredient traceability reports',
      'Regular compliance reporting',
    ],
    color: 'cyan',
  },
];

const growthMediaData = [
  { component: 'Human-derived', halal: 'Haram', makrooh: '-', mashbooh: '-', halal_cell: '-' },
  { component: 'Animal-derived', halal: '-', makrooh: '-', mashbooh: 'Mashbooh', halal_cell: 'Halal' },
  { component: 'Plant-derived', halal: '-', makrooh: '-', mashbooh: '-', halal_cell: 'Halal' },
  { component: 'Chemically synthesized', halal: '-', makrooh: '-', mashbooh: '-', halal_cell: 'Halal' },
  { component: 'Fermentation-derived', halal: '-', makrooh: '-', mashbooh: 'Mashbooh', halal_cell: 'Halal' },
];

const hostCellsData = [
  { type: 'Human cells', status: 'Haram', notes: 'Not permissible' },
  { type: 'Primate cells', status: 'Haram', notes: 'Not permissible' },
  { type: 'Porcine cells', status: 'Haram', notes: 'Not permissible' },
  { type: 'Non-halal animal cells', status: 'Mashbooh', notes: 'Questionable source' },
  { type: 'Halal-slaughtered animal cells', status: 'Halal', notes: 'Permissible with certification' },
  { type: 'Plant cells', status: 'Halal', notes: 'Fully permissible' },
  { type: 'Microbial cells', status: 'Halal*', notes: 'Subject to growth media verification' },
];

export default function HalalCompliancePage() {
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
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30">
              <Shield className="text-emerald-300" size={24} />
              <span className="font-semibold">Certification Standards</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Halal Compliance Requirements
            </h1>
            <p className="text-xl lg:text-2xl text-emerald-50 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guidelines for achieving and maintaining halal certification in pharmaceutical manufacturing
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">The Process</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Six Pillars of Halal Certification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To become a certified halal pharmaceutical drug, manufacturers must comply with a set of requirements that ensure the product aligns with Islamic principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => {
              const Icon = req.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`bg-${req.color}-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`text-${req.color}-600`} size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{req.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{req.description}</p>
                  <ul className="space-y-3">
                    {req.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Technical Reference</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Islamic Classification of Growth Media
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the halal status of various growth media components used in pharmaceutical production
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Growth Media Component</th>
                    <th className="px-6 py-4 text-center font-semibold">Haram</th>
                    <th className="px-6 py-4 text-center font-semibold">Makrooh</th>
                    <th className="px-6 py-4 text-center font-semibold">Mashbooh</th>
                    <th className="px-6 py-4 text-center font-semibold">Halal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {growthMediaData.map((row, index) => (
                    <tr key={index} className="hover:bg-emerald-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.component}</td>
                      <td className="px-6 py-4 text-center">
                        {row.halal !== '-' ? (
                          <span className="inline-flex items-center justify-center w-full px-3 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-sm">
                            {row.halal}
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.makrooh !== '-' ? (
                          <span className="inline-flex items-center justify-center w-full px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm">
                            {row.makrooh}
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.mashbooh !== '-' ? (
                          <span className="inline-flex items-center justify-center w-full px-3 py-1 rounded-full bg-amber-100 text-amber-700 font-semibold text-sm">
                            {row.mashbooh}
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.halal_cell !== '-' ? (
                          <span className="inline-flex items-center justify-center w-full px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm">
                            {row.halal_cell}
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Classification Guide</h4>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div><span className="font-semibold text-red-700">Haram:</span> Prohibited and not permissible</div>
                  <div><span className="font-semibold text-orange-700">Makrooh:</span> Discouraged but not forbidden</div>
                  <div><span className="font-semibold text-amber-700">Mashbooh:</span> Doubtful, requires investigation</div>
                  <div><span className="font-semibold text-emerald-700">Halal:</span> Permissible and compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Host Cell Classification</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Halal Status of Host Cells
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Classification of various host cells used in pharmaceutical biotechnology processes
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Host Cell Type</th>
                      <th className="px-6 py-4 text-center font-semibold">Status</th>
                      <th className="px-6 py-4 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {hostCellsData.map((row, index) => (
                      <tr key={index} className="hover:bg-teal-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">{row.type}</td>
                        <td className="px-6 py-4 text-center">
                          <span
                            className={`inline-flex items-center px-4 py-1.5 rounded-full font-semibold text-sm ${
                              row.status === 'Haram'
                                ? 'bg-red-100 text-red-700'
                                : row.status === 'Mashbooh'
                                ? 'bg-amber-100 text-amber-700'
                                : row.status === 'Halal*'
                                ? 'bg-teal-100 text-teal-700'
                                : 'bg-emerald-100 text-emerald-700'
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-xl">
              <div className="flex items-start gap-4">
                <AlertCircle className="text-teal-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Important Note</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    * Microbial cells are generally considered halal, but their halal status is contingent upon the growth media used. The media must be verified to ensure it does not contain haram or mashbooh components.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Achieve Halal Certification?
              </h2>
              <p className="text-emerald-50 text-lg mb-8 leading-relaxed">
                Our expert team can guide you through every step of the halal compliance process, from initial assessment to final certification.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                  <span className="text-emerald-50">Complete compliance audit</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                  <span className="text-emerald-50">Documentation preparation support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                  <span className="text-emerald-50">Ongoing certification maintenance</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Certification Journey</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 outline-none text-gray-900"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 outline-none text-gray-900"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your needs
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 outline-none resize-none text-gray-900"
                    placeholder="What products do you need certified?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white px-6 py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
