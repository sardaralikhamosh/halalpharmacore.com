import { useState, useEffect } from 'react';
import { Calendar, ArrowRight, X, ExternalLink, Search, Filter, TrendingUp, Globe, Newspaper } from 'lucide-react';

// Define the news article type
interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  originalLink: string;
  category?: string;
  content: string;
}

// Updated news data with embedded content
const newsData: NewsArticle[] = [
  {
    id: 1,
    title: "Duopharma Biotech: A Beacon of Innovation in Malaysia's Healthcare Landscape, Celebrated by Frost & Sullivan",
    excerpt: "Duopharma Biotech Berhad, a leading pharmaceutical company in Malaysia, was awarded the 2022 Malaysian Company of the Year by Frost & Sullivan for its contributions to the halal pharmaceutical industry.",
    date: "2025-12-30",
    originalLink: "https://menafn.com/1107731268/Duopharma-Biotech-Applauded-By-Frost-Sullivan-For-Providing-Innovative-Healthcare-Solutions-In-The-Malaysian-Market",
    category: "Industry Awards",
    content: `
      <div class="prose max-w-none">
        <h2>Duopharma Biotech: A Beacon of Innovation in Malaysia's Healthcare Landscape</h2>
        <p>Duopharma Biotech Berhad, a leading pharmaceutical company in Malaysia, was awarded the 2022 Malaysian Company of the Year by Frost & Sullivan for its contributions to the halal pharmaceutical industry.</p>
        <p>The company, established in 1978, specializes in manufacturing, R&D, and marketing of over 300 generic drugs and consumer healthcare products. It has diversified into halal pharmaceuticals and has been recognized for its innovative healthcare solutions in the Malaysian market.</p>
        <p>This recognition highlights Duopharma Biotech's commitment to providing high-quality, halal-certified pharmaceutical products that meet international standards.</p>
      </div>
    `
  },
  {
    id: 2,
    title: "Halal Horizons: Future of Pharmaceutical Science at Taylor's University",
    excerpt: "Taylor's University in Malaysia has launched a new Bachelor of Pharmaceutical Science (Honours) programme, the first in Malaysia to incorporate Work-Based Learning (WBL) and studies in Cosmetic Science.",
    date: "2025-12-30",
    originalLink: "https://www.dailyexpress.com.my/news/231922/taylor-s-university-leads-future-ready-workforce-with-industry-focused-pharmaceutical-science-programme",
    category: "Education",
    content: `
      <div class="prose max-w-none">
        <h2>Halal Horizons: Future of Pharmaceutical Science at Taylor's University</h2>
        <p>Taylor's University in Malaysia has launched a new Bachelor of Pharmaceutical Science (Honours) programme. This innovative programme is the first in Malaysia to incorporate Work-Based Learning (WBL) and studies in Cosmetic Science.</p>
        <p>The WBL mode allows students to apply theoretical knowledge in real-world settings, giving them a competitive edge. The Cosmetic Science component provides students with specialized knowledge in the growing halal cosmetics industry.</p>
        <p>This programme is designed to meet the growing demand for pharmaceutical professionals with expertise in halal compliance and cosmetic science.</p>
      </div>
    `
  },
  {
    id: 3,
    title: "HDC Malaysia Calls for Expansion of its Halal Pharmaceutical into MENA Region",
    excerpt: "The Halal Development Corporation Berhad (HDC) in Malaysia is pushing to expand the country's halal pharmaceutical market, particularly in the Middle East and North Africa (MENA) region.",
    date: "2025-12-30",
    originalLink: "https://www.navlindaily.com/article/21571/hdc-malaysia-calls-for-expansion-of-its-halal-pharmaceutical-into-mena-region",
    category: "Market Expansion",
    content: `
      <div class="prose max-w-none">
        <h2>HDC Malaysia Calls for Expansion of its Halal Pharmaceutical into MENA Region</h2>
        <p>The Halal Development Corporation Berhad (HDC) in Malaysia is pushing to expand the country's halal pharmaceutical market, particularly in the Middle East and North Africa (MENA) region.</p>
        <p>HDC's CEO, Hairol Ariffein Sahari, emphasized the potential benefits of tapping into the rapidly growing halal pharmaceutical industry, which could enhance Malaysia's trade, investment, and innovation in the pharmaceutical sector.</p>
        <p>This expansion strategy aims to position Malaysia as a global leader in halal pharmaceuticals.</p>
      </div>
    `
  },
  {
    id: 4,
    title: "Duopharma Biotech Sees Promising Collaboration Opportunities in Qatar",
    excerpt: "Duopharma Biotech Berhad sees promising collaboration opportunities following a recent roundtable in Qatar, led by Group Managing Director Leonard Ariff Abdul Shatar.",
    date: "2025-12-30",
    originalLink: "https://sme.asia/duopharma-biotech-sees-promising-collaboration-opportunities-in-qatar/",
    category: "Partnerships",
    content: `
      <div class="prose max-w-none">
        <h2>Duopharma Biotech Sees Promising Collaboration Opportunities in Qatar</h2>
        <p>Duopharma Biotech Berhad sees promising collaboration opportunities following a recent roundtable in Qatar, led by Group Managing Director Leonard Ariff Abdul Shatar.</p>
        <p>The discussions emphasized the importance of integrating Halal pharmaceutical standards, such as Malaysia's MS 2424 and the OIC SMIIC 50-1, to enhance healthcare among OIC and GCC members.</p>
        <p>The visit, aligned with Malaysia's efforts to strengthen economic ties with Gulf nations, opens new avenues for pharmaceutical collaboration.</p>
      </div>
    `
  },
  {
    id: 5,
    title: "Malaysia Set to Help Others Build Halal Ecosystem",
    excerpt: "Halal Development Corporation Bhd (HDC) CEO Hairol Ariffein Sahari outlined Malaysia's strategy to enhance its halal economy by increasing halal experts, boosting investments in halal industrial parks, and creating job opportunities.",
    date: "2025-12-30",
    originalLink: "https://www.nst.com.my/news/nation/2024/07/1083957/malaysia-set-help-others-build-halal-ecosystem",
    category: "Policy",
    content: `
      <div class="prose max-w-none">
        <h2>Malaysia Set to Help Others Build Halal Ecosystem</h2>
        <p>Halal Development Corporation Bhd (HDC) CEO Hairol Ariffein Sahari outlined Malaysia's strategy to enhance its halal economy by increasing halal experts, boosting investments in halal industrial parks, and creating job opportunities.</p>
        <p>Speaking at the WCIT2024 forum, he highlighted HDC's global influence in promoting halal economic development and the government's efforts to internationalize the halal economy.</p>
        <p>This initiative aims to position Malaysia as a global hub for halal innovation and expertise.</p>
      </div>
    `
  },
  {
    id: 6,
    title: "Launching the Iranian Medicine 'CinnoRA', a Humira Biosimilar",
    excerpt: "CinnoRA is biosimilar form of Humira which is produced by AbbVie. All qualitative, quantitative and clinical tests show the similarity of CinnoRA and Humira.",
    date: "2025-12-30",
    originalLink: "https://www.cinnagen.com/",
    category: "Product Launch",
    content: `
      <div class="prose max-w-none">
        <h2>Launching the Iranian Medicine 'CinnoRA', a Humira Biosimilar</h2>
        <p>CinnoRA is biosimilar form of Humira which is produced by AbbVie. All qualitative, quantitative and clinical tests show the similarity of CinnoRA and Humira.</p>
        <p>Now patients who suffer from autoimmune diseases can use Iranian adalimumab which is more cost effective than other brands.</p>
        <p>This launch represents a significant advancement in biosimilar medicines in the region.</p>
      </div>
    `
  },
  {
    id: 7,
    title: "CinnaGen Obtained Halal Certification for its Medicinal Products",
    excerpt: "The Iranian biopharmaceutical company can now manufacture halal certified medicinal products.",
    date: "2025-12-30",
    originalLink: "https://www.cinnagen.com/News.aspx?t=1&l=1&Id=478",
    category: "Certification",
    content: `
      <div class="prose max-w-none">
        <h2>CinnaGen Obtained Halal Certification for its Medicinal Products</h2>
        <p>The Iranian biopharmaceutical company can now manufacture halal certified medicinal products.</p>
        <p>This certification marks a significant milestone in the company's commitment to meeting the needs of Muslim consumers and expanding into halal pharmaceutical markets.</p>
        <p>This achievement opens new opportunities for CinnaGen in the growing halal pharmaceutical sector.</p>
      </div>
    `
  },
  {
    id: 8,
    title: "Iranian Global Medicine Giant CinnaGen Opens $100M Biotech Plant in Çerkezköy Turkey",
    excerpt: "The factory, built with a total investment of $100 million, looks to achieve $100 million in annual exports to 20 countries.",
    date: "2025-12-30",
    originalLink: "https://www.dailysabah.com/business/2019/06/13/global-medicine-giant-cinnagen-opens-100m-biotech-plant-in-cerkezkoy/amp",
    category: "Industry News",
    content: `
      <div class="prose max-w-none">
        <h2>Iranian Global Medicine Giant CinnaGen Opens $100M Biotech Plant in Çerkezköy Turkey</h2>
        <p>The factory, built with a total investment of $100 million, looks to achieve $100 million in annual exports to 20 countries.</p>
        <p>It will focus on the development and manufacturing of rare drugs and will prevent billions of dollars of imports.</p>
        <p>The plant will also produce monoclonal antibody (mAb) based orphan drugs for the treatment of various diseases.</p>
      </div>
    `
  },
  {
    id: 9,
    title: "BRICS expansion: What's in store for the global halal industry?",
    excerpt: "The BRICS group is expanding by admitting six new countries, including Argentina, Saudi Arabia, Egypt, UAE, Ethiopia, and Iran.",
    date: "2025-12-30",
    originalLink: "https://salaamgateway.com/story/brics-expansion-whats-in-store-for-the-global-halal-industry",
    category: "Global Trade",
    content: `
      <div class="prose max-w-none">
        <h2>BRICS expansion: What's in store for the global halal industry?</h2>
        <p>The BRICS group is expanding by admitting six new countries, including Argentina, Saudi Arabia, Egypt, UAE, Ethiopia, and Iran. This decision was made during the 15th BRICS summit in Johannesburg, South Africa.</p>
        <p>The expansion is seen as a strategic move to reshape global trade and the economic landscape. It's based on the economic potential and strategic importance of the new members, aligning with BRICS values of economic cooperation.</p>
        <p>This expansion could significantly impact the global halal industry, opening new markets and opportunities.</p>
      </div>
    `
  },
  {
    id: 10,
    title: "Capitalizing on Halal Pharmaceuticals: The Billion-Dollar Path to Ethical Healthcare",
    excerpt: "The halal pharmaceutical market, guided by the holistic approach of nearly two billion Muslims worldwide, is growing significantly.",
    date: "2025-12-30",
    originalLink: "https://www.nst.com.my/opinion/columnists/2023/12/991384/halal-pharmaceuticals-booming-market-navigating-ethical-and",
    category: "Market Analysis",
    content: `
      <div class="prose max-w-none">
        <h2>Capitalizing on Halal Pharmaceuticals: The Billion-Dollar Path to Ethical Healthcare</h2>
        <p>The halal pharmaceutical market, guided by the holistic approach of nearly two billion Muslims worldwide, is growing.</p>
        <p>It's not just about avoiding certain ingredients like pork or alcohol, but ensuring ethical principles are followed throughout the production process. This includes using ingredients from halal animals, maintaining hygiene, minimizing animal testing, and avoiding contamination with non-halal substances.</p>
        <p>The ethical framework of halal pharmaceuticals aligns with growing consumer demand for ethical and sustainable healthcare products.</p>
      </div>
    `
  },
  {
    id: 11,
    title: "State of the Global Islamic Economy Report 23/2024: A $142 Billion Opportunity",
    excerpt: "The State of the Global Islamic Economy 2023/24 Report underscores the significant growth and potential in the halal pharmaceutical industry, with spending projected to reach $142 billion by 2027.",
    date: "2025-12-30",
    originalLink: "https://salaamgateway.com/story/sgie-report-202324-halal-pharma-thrives-with-growing-consumer-spend",
    category: "Market Report",
    content: `
      <div class="prose max-w-none">
        <h2>State of the Global Islamic Economy Report 23/2024: A $142 Billion Opportunity</h2>
        <p>The State of the Global Islamic Economy 2023/24 Report underscores the significant growth and potential in the halal pharmaceutical industry.</p>
        <p>In 2022, Muslim consumer spending on pharmaceuticals reached a substantial $108 billion, marking a 7.8% increase from the previous year. This spending is projected to reach $142 billion by 2027, with a compound annual growth rate of 5.6%.</p>
        <p>The report highlights the immense opportunities in the halal pharmaceutical sector for businesses and investors.</p>
      </div>
    `
  },
  {
    id: 12,
    title: "UAE's Prime Healthcare Wants to Make a Breakthrough into Halal Pharmaceuticals",
    excerpt: "Prime, a UAE-based healthcare company, entered into a partnership with Pharmaniaga Partners to gain rights to register, import, market, sell, and distribute pharmaceutical products from PMB.",
    date: "2025-12-30",
    originalLink: "https://gulfnews.com/business/uaes-prime-healthcare-wants-to-make-a-breakthrough-into-halal-pharmaceuticals-",
    category: "Partnerships",
    content: `
      <div class="prose max-w-none">
        <h2>UAE's Prime Healthcare Wants to Make a Breakthrough into Halal Pharmaceuticals</h2>
        <p>In 2022, Prime, a UAE-based healthcare company, entered into a partnership with Pharmaniaga Partners, a prominent name in the industry from Malaysia.</p>
        <p>Under the agreement, Prime has gained the rights to register, import, market, sell, and distribute pharmaceutical products from PMB, a halal-certified manufacturing plant by the Department of Islamic Development Malaysia (JAKIM).</p>
        <p>This partnership marks a significant step in expanding halal pharmaceutical products into the UAE and broader Middle East market.</p>
      </div>
    `
  }
];

const ITEMS_PER_PAGE = 6;

export default function MarketNewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get unique categories
  const categories = ['All', ...new Set(newsData.map(item => item.category).filter(Boolean))];

  // Filter and paginate data
  const filteredData = newsData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.category?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Open modal with article content
  const openArticleModal = (article: NewsArticle) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section - Matching Directory Page Style */}
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
            Halal Pharmaceutical Market News & Events
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6">
            Halal Market
            <br />
            <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              News & Events
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-teal-100/80 max-w-3xl mx-auto leading-relaxed mb-10">
            Stay informed with the latest developments, collaborations, and breakthroughs
            shaping the global halal pharmaceutical industry.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Newspaper, value: newsData.length, label: 'Total Articles' },
              { icon: Globe, value: '5+', label: 'Countries Covered' },
              { icon: TrendingUp, value: '$132B', label: 'Market Value' },
              { icon: Filter, value: categories.length - 1, label: 'Categories' },
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
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles by title, category, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all duration-300 text-sm ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'All' ? <Filter size={14} className="inline mr-1.5" /> : null}
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600 font-medium">
              Showing {filteredData.length} of {newsData.length} articles
              {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
            </p>
          </div>

          {filteredData.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
              <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
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
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentItems.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
                  >
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-3">
                        {article.category && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                            {article.category}
                          </span>
                        )}
                        <span className="text-xs text-gray-400">
                          {new Date(article.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={14} className="mr-1.5" />
                          {new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                        <button
                          onClick={() => openArticleModal(article)}
                          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm group-hover:gap-2 transition-all"
                        >
                          Read More
                          <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-5 py-2.5 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors font-medium"
                  >
                    Previous
                  </button>
                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2.5 rounded-lg transition-colors font-medium min-w-[44px] ${
                          currentPage === page
                            ? 'bg-emerald-600 text-white shadow-md'
                            : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-5 py-2.5 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors font-medium"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Stay Updated with Market News
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get the latest halal pharmaceutical industry news, market insights, and event updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
              />
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-semibold whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal/Popup */}
      {isModalOpen && selectedArticle && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={closeModal}
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Backdrop */}
            <div className="fixed inset-0 transition-opacity bg-black bg-opacity-50 backdrop-blur-sm" />

            {/* Modal */}
            <div 
              className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 flex items-start justify-between px-6 py-5 bg-white border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 pr-8 line-clamp-2 flex-1">
                  {selectedArticle.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="px-6 py-8 max-h-[65vh] overflow-y-auto">
                {selectedArticle.category && (
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                      {selectedArticle.category}
                    </span>
                  </div>
                )}
                <div 
                  className="prose prose-emerald max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar size={14} className="mr-1.5" />
                    {new Date(selectedArticle.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <a
                    href={selectedArticle.originalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Original Article
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}