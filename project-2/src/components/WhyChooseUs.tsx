import { ShieldCheck, Award, Users, Globe2, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Market Expertise',
    description: 'Deep knowledge of halal requirements across all major pharmaceutical markets.',
  },
  {
    icon: Award,
    title: 'End-to-End Support',
    description: 'Complete guidance from documentation through market launch and beyond.',
  },
  {
    icon: Users,
    title: 'Proven Track Record',
    description: 'Successfully guided numerous companies through certification processes.',
  },
  {
    icon: Globe2,
    title: 'Global Network',
    description: 'Established relationships with certification authorities worldwide.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-teal-50/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Halal Pharmacore?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We provide comprehensive services to help companies enter and succeed in the
            halal pharmaceutical market.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 flex items-center justify-center mb-5 group-hover:from-teal-100 group-hover:to-emerald-100 transition-all duration-300">
                <feature.icon className="text-teal-600" size={26} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-600 to-emerald-600 p-8 sm:p-12">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Ready to Achieve Halal Certification?
              </h3>
              <p className="text-teal-50 leading-relaxed max-w-2xl">
                Our expert team can guide you through every step of the halal compliance process,
                from initial assessment to final certification.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 px-8 py-4 rounded-xl bg-white text-teal-700 font-semibold hover:bg-teal-50 transition-all duration-300 hover:-translate-y-0.5 shadow-lg flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
