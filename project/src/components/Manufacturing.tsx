import { CheckCircle2, Microscope, Users, Globe2 } from 'lucide-react';

const features = [
  'ISO-certified manufacturing facilities',
  'Complete halal supply chain management',
  'Advanced quality control systems',
  'Global regulatory compliance',
  'R&D and innovation support',
  'Sustainable manufacturing practices',
];

const stats = [
  { icon: Microscope, value: '50+', label: 'Certified Products' },
  { icon: Users, value: '100+', label: 'Global Partners' },
  { icon: Globe2, value: '25+', label: 'Countries Served' },
];

export default function Manufacturing() {
  return (
    <section id="manufacturing" className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Manufacturing Excellence</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
              World-Class Halal Manufacturing Standards
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our state-of-the-art facilities combine cutting-edge technology with strict halal compliance protocols to deliver pharmaceutical products of the highest quality.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              View Our Facilities
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl mb-6 flex items-center justify-center">
                <Factory className="text-emerald-600" size={80} />
              </div>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Icon className="text-emerald-600" size={24} />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <p className="text-3xl font-bold text-emerald-600 mb-2">99.9%</p>
                <p className="text-gray-600 font-medium">Quality Compliance</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <p className="text-3xl font-bold text-teal-600 mb-2">24/7</p>
                <p className="text-gray-600 font-medium">Quality Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Factory({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  );
}
