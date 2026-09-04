import { useState, useMemo } from 'react';
import { Calendar, ExternalLink, Tag, X, ArrowLeft, Search, Newspaper } from 'lucide-react';
import { newsArticles, type NewsArticle } from '@/data/newsData';

const categories = ['All', 'Malaysia', 'Iran', 'Turkey', 'Global', 'Industry', 'Collaboration', 'Market Expansion', 'Education'];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function MarketNews() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const filtered = useMemo(() => {
    return newsArticles.filter((article) => {
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
      const matchesSearch =
        search === '' ||
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 overflow-hidden">
        {/* Grid overlay */}
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

        {/* Glow orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse-slow-delay" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-teal-100 text-sm font-medium mb-8 animate-fade-in-up">
            <Newspaper size={16} />
            Halal Pharmaceutical Market News & Events
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 animate-fade-in-up animation-delay-100">
            Halal Market
            <br />
            <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              News & Events
            </span>
          </h1>
          <p className="text-lg text-teal-100/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Stay informed with the latest developments, collaborations, and breakthroughs
            shaping the global halal pharmaceutical industry.
          </p>
        </div>
      </section>

      {/* Filters & search */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            {/* Category pills */}
            <div className="flex flex-wrap items-center gap-2 flex-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-500/25'
                      : 'bg-gray-50 text-gray-600 hover:bg-teal-50 hover:text-teal-600 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-64 flex-shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all duration-300 outline-none text-sm text-gray-900 placeholder:text-gray-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No articles found matching your search.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((article) => (
                  <article
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className="group cursor-pointer bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    {/* Top accent bar */}
                    <div className="h-2 bg-gradient-to-r from-teal-400 to-emerald-500 group-hover:from-teal-500 group-hover:to-emerald-600 transition-all duration-300" />

                    <div className="p-6 flex flex-col flex-1">
                      {/* Category & date */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-medium border border-teal-100">
                          <Tag size={12} />
                          {article.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                          <Calendar size={12} />
                          {formatDate(article.date)}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-gray-900 text-lg leading-snug mb-3 group-hover:text-teal-700 transition-colors line-clamp-3">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
                        {article.excerpt}
                      </p>

                      {/* Read more */}
                      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm font-semibold text-teal-600 group-hover:text-teal-700 transition-colors">
                          Read More
                        </span>
                        <span className="text-xs text-gray-400">{article.sourceName}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Article modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in-up"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
              <button
                onClick={() => setSelectedArticle(null)}
                className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors text-sm font-medium"
              >
                <ArrowLeft size={18} />
                Back
              </button>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-9 h-9 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal content */}
            <div className="p-8">
              {/* Category & date */}
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-medium border border-teal-100">
                  <Tag size={12} />
                  {selectedArticle.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                  <Calendar size={12} />
                  {formatDate(selectedArticle.date)}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-6">
                {selectedArticle.title}
              </h2>

              {/* Highlights */}
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50/50 rounded-2xl p-6 border border-teal-100/50 mb-6">
                <h3 className="font-semibold text-teal-700 text-sm uppercase tracking-wide mb-3">
                  Highlights
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {selectedArticle.highlights}
                </p>
              </div>

              {/* Source link */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-400">
                  Source: <span className="font-medium text-gray-600">{selectedArticle.sourceName}</span>
                </span>
                <a
                  href={selectedArticle.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 shadow-lg shadow-teal-500/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  View Original Article
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
