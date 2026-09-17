import { Shield, Users, BarChart3, CheckCircle2, Zap, FileCheck, AlertCircle, TrendingUp, BookOpen } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Shield,
    title: 'HAS Setup',
    description: 'Establish a comprehensive Halal Assurance System tailored to your organization\'s needs.',
    features: [
      'Define clear halal criteria',
      'Create traceability systems',
      'Implement record-keeping practices',
      'Set up monitoring protocols',
      'Documentation and compliance framework',
      'Process standardization',
    ],
    color: 'emerald',
    gradientFrom: 'emerald-600',
    gradientTo: 'teal-600',
  },
  {
    icon: Users,
    title: 'Internal Halal Committee (IHC) Development',
    description: 'Form and organize a dedicated Internal Halal Committee with comprehensive training.',
    features: [
      'Committee structure and roles',
      'Staff training programs',
      'Expertise development',
      'Internal audit capabilities',
      'Decision-making framework',
      'Ongoing education',
    ],
    color: 'teal',
    gradientFrom: 'teal-600',
    gradientTo: 'cyan-600',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Support',
    description: 'Maintain and enhance your HAS with ongoing monitoring and regulatory updates.',
    features: [
      'Regular monitoring and audits',
      'Regulatory update tracking',
      'Industry standard adaptation',
      'Performance optimization',
      'Compliance verification',
      'Strategic guidance',
    ],
    color: 'cyan',
    gradientFrom: 'cyan-600',
    gradientTo: 'blue-600',
  },
];

const implementationPhases = [
  {
    phase: 'Assessment',
    title: 'Current State Analysis',
    description: 'Evaluate your existing processes and systems to identify gaps and opportunities.',
    icon: BarChart3,
  },
  {
    phase: 'Planning',
    title: 'System Design',
    description: 'Develop a customized HAS roadmap aligned with your organizational goals.',
    icon: BookOpen,
  },
  {
    phase: 'Implementation',
    title: 'Execution',
    description: 'Deploy the HAS framework across your organization with full support.',
    icon: Zap,
  },
  {
    phase: 'Monitoring',
    title: 'Continuous Improvement',
    description: 'Track performance, identify improvements, and ensure ongoing compliance.',
    icon: FileCheck,
  },
];

const benefits = [
  {
    title: 'Regulatory Compliance',
    description: 'Meet all halal regulatory requirements in target markets',
    icon: CheckCircle2,
  },
  {
    title: 'Market Confidence',
    description: 'Build trust with consumers and stakeholders through certified systems',
    icon: Shield,
  },
  {
    title: 'Operational Efficiency',
    description: 'Streamline processes and reduce compliance-related inefficiencies',
    icon: TrendingUp,
  },
  {
    title: 'Risk Mitigation',
    description: 'Identify and address halal-related risks before they impact business',
    icon: AlertCircle,
  },
];

export default function HalalAssuranceSystemPage() {
  const [formData, setFormData] = useState({
    orgName: '',
    email: '',
    sector: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Using mailto for simple implementation
    const subject = encodeURIComponent(`New HAS Inquiry from ${formData.orgName || 'Anonymous'}`);
    const body = encodeURIComponent(
      `Organization Name: ${formData.orgName}\n` +
      `Email: ${formData.email}\n` +
      `Industry Sector: ${formData.sector}\n` +
      `HAS Needs: ${formData.message}`
    );

    window.location.href = `mailto:info@halalpharmacore.com?subject=${subject}&body=${body}`;

    // Show success popup
    setPopupMessage('Your HAS inquiry has been submitted successfully! You will get a response within 24 hours.');
    setShowPopup(true);

    // Reset form
    setFormData({
      orgName: '',
      email: '',
      sector: '',
      message: '',
    });

    setIsSubmitting(false);

    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  return (
    <main className="pt-20">
      <section className="relative py-32 bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30">
              <Shield className="text-teal-300" size={24} />
              <span className="font-semibold">System Management</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Halal Assurance System Management
            </h1>
            <p className="text-xl lg:text-2xl text-teal-50 max-w-4xl mx-auto leading-relaxed">
              Build a robust and sustainable halal assurance framework with expert guidance and continuous support
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Three Pillars of HAS Excellence
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Halal Pharmacore provides comprehensive support to organizations looking to establish a robust Halal Assurance System and develop strong Internal Halal Committees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div
                    className={`h-2 bg-gradient-to-r from-${service.gradientFrom} to-${service.gradientTo}`}
                  ></div>

                  <div className="p-8">
                    <div className={`bg-${service.color}-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`text-${service.color}-600`} size={28} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    <ul className="space-y-2.5">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                          <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Implementation</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Four-Phase Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic methodology to establish and maintain your Halal Assurance System
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationPhases.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 border border-teal-200 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 text-white mb-4 font-bold text-lg">
                      {index + 1}
                    </div>

                    <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">
                      {item.phase}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>

                    <div className="flex justify-center mt-6">
                      <Icon className="text-teal-300" size={32} />
                    </div>
                  </div>

                  {index < implementationPhases.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 z-10 transform -translate-y-1/2">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-teal-300 to-transparent"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Benefits</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Why Implement HAS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the strategic advantages of a comprehensive Halal Assurance System
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-2xl p-8 border border-teal-200 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to Build Your HAS?
              </h2>
              <p className="text-teal-50 text-lg mb-8 leading-relaxed">
                Let our expert team guide you through establishing a comprehensive Halal Assurance System that meets international standards and regulatory requirements.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                  <span className="text-teal-50">Customized implementation roadmap</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                  <span className="text-teal-50">Expert staff training and development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                  <span className="text-teal-50">Ongoing compliance monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                  <span className="text-teal-50">Dedicated support throughout implementation</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="orgName" className="block text-sm font-semibold text-teal-100 mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    id="orgName"
                    value={formData.orgName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300 outline-none"
                    placeholder="Your Organization"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-teal-100 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300 outline-none"
                    placeholder="you@organization.com"
                  />
                </div>
                <div>
                  <label htmlFor="sector" className="block text-sm font-semibold text-teal-100 mb-2">
                    Industry Sector
                  </label>
                  <select
                    id="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300 outline-none"
                  >
                    <option value="" className="bg-gray-800">Select your sector</option>
                    <option value="pharmaceutical" className="bg-gray-800">Pharmaceutical</option>
                    <option value="food-beverage" className="bg-gray-800">Food & Beverage</option>
                    <option value="cosmetics" className="bg-gray-800">Cosmetics</option>
                    <option value="nutraceutical" className="bg-gray-800">Nutraceutical</option>
                    <option value="other" className="bg-gray-800">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-teal-100 mb-2">
                    Tell us about your HAS needs
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300 outline-none resize-none"
                    placeholder="What are your specific HAS requirements?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Request Consultation'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-gray-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Track Record</h2>
            <p className="text-teal-100 text-lg">Trusted by leading pharmaceutical organizations worldwide</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-teal-100">Systems Established</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-teal-100">Compliance Rate</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2">40+</div>
              <p className="text-teal-100">Countries Served</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-teal-100">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowPopup(false)}></div>
          <div className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fadeIn">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Success!</h3>
              <p className="text-gray-600 leading-relaxed">{popupMessage}</p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-6 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}