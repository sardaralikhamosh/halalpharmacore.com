import { CheckCircle2, Award, Zap, Leaf, Users, Shield } from 'lucide-react';

const facilities = [
  {
    name: 'Advanced Research Lab',
    description: 'State-of-the-art R&D facilities for halal pharmaceutical formulation and testing',
    features: ['ISO 9001 Certified', 'GMP Compliant', '24/7 Monitoring'],
  },
  {
    name: 'Production Unit',
    description: 'Full-scale manufacturing with complete halal compliance and quality control',
    features: ['Halal Supply Chain', 'Quality Assurance', 'Process Validation'],
  },
  {
    name: 'Testing & Quality Center',
    description: 'Comprehensive testing laboratories meeting international pharmaceutical standards',
    features: ['Certified Testing', 'Documentation', 'Compliance Reporting'],
  },
];

const certifications = [
  { icon: Award, title: 'ISO 9001:2015', subtitle: 'Quality Management' },
  { icon: Shield, title: 'GMP Certified', subtitle: 'Good Manufacturing Practice' },
  { icon: Leaf, title: 'Eco-Certified', subtitle: 'Sustainable Manufacturing' },
  { icon: Zap, title: 'CE Marked', subtitle: 'European Standards' },
];

export default function ManufacturingPage() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Manufacturing Excellence</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-3 mb-4">
              World-Class Halal Pharmaceutical Manufacturing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced facilities combine cutting-edge technology with stringent halal compliance protocols to deliver pharmaceutical products of the highest quality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Manufacturing Facilities</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-emerald-600 font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{facility.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{facility.description}</p>
                <ul className="space-y-2">
                  {facility.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Certifications & Compliance</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200">
                  <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-emerald-600" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-600 text-sm">{cert.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Halal Compliance Process</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Source Assessment</h4>
                    <p className="text-gray-600">Verify all raw materials and suppliers meet halal standards</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Process Validation</h4>
                    <p className="text-gray-600">Ensure manufacturing processes comply with halal requirements</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Quality Control</h4>
                    <p className="text-gray-600">Continuous testing and monitoring throughout production</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Certification</h4>
                    <p className="text-gray-600">Official halal certification issued upon compliance verification</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-12 text-center">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">99.9%</h3>
              <p className="text-gray-700 font-semibold mb-8">Quality Compliance Rate</p>
              <p className="text-gray-600 leading-relaxed">
                Our manufacturing processes maintain the highest quality standards with continuous monitoring and rigorous testing protocols to ensure every product meets our halal pharmaceutical excellence criteria.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our manufacturing solutions can support your halal pharmaceutical needs
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </main>
  );
}
