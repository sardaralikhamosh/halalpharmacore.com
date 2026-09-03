import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    title: 'Malaysia Set to Help Others Build Halal Ecosystem',
    excerpt: 'Malaysia strengthens its position as a global halal hub by offering expertise and support to emerging markets.',
    date: 'March 15, 2024',
    category: 'Market Development',
    image: 'https://images.pexels.com/photos/3825367/pexels-photo-3825367.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Qatar Pharmaceutical Collaboration Opportunities',
    excerpt: 'New partnership opportunities emerge in Qatar\'s growing pharmaceutical sector with focus on halal certification.',
    date: 'March 10, 2024',
    category: 'Partnerships',
    image: 'https://images.pexels.com/photos/3912979/pexels-photo-3912979.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'China\'s Halal Market Expansion Accelerates',
    excerpt: 'Chinese pharmaceutical companies increase investment in halal-certified production facilities.',
    date: 'March 5, 2024',
    category: 'Industry News',
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function News() {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Latest Updates</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Market News & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest developments in the halal pharmaceutical industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.excerpt}</p>
                <button className="text-emerald-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}
