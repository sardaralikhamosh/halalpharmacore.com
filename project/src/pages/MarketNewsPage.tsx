import { useState, useEffect } from 'react';
import { Calendar, ArrowRight, X, ExternalLink, Loader } from 'lucide-react';

// Define the news article type
interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  originalLink: string; // Added original article link
  category?: string;
  fullContent?: string;
}

// Updated news data with original article links
const newsData: NewsArticle[] = [
  {
    id: 1,
    title: "Duopharma Biotech: A Beacon of Innovation in Malaysia's Healthcare Landscape, Celebrated by Frost & Sullivan",
    excerpt: "Duopharma Biotech Berhad, a leading pharmaceutical company in Malaysia, was awarded the 2022 Malaysian Company of the Year by Frost & Sullivan for its contributions to the halal pharmaceutical industry.",
    date: "2025-12-30",
    link: "https://halalpharmacore.com/2025/12/30/duopharma-biotech-a-beacon-of-innovation-in-malaysias-healthcare-landscape-celebrated-by-frost-sullivan/",
    originalLink: "https://menafn.com/1107731268/Duopharma-Biotech-Applauded-By-Frost-Sullivan-For-Providing-Innovative-Healthcare-Solutions-In-The-Malaysian-Market",
    category: "Industry Awards"
  },
  {
    id: 2,
    title: "Halal Horizons: Future of Pharmaceutical Science at Taylor's University",
    excerpt: "Taylor's University in Malaysia has launched a new Bachelor of Pharmaceutical Science (Honours) programme, the first in Malaysia to incorporate Work-Based Learning (WBL) and studies in Cosmetic Science.",
    date: "2025-12-30",
    link: "https://halalpharmacore.com/2025/12/30/halal-horizons-future-of-pharmaceutical-science-at-taylors-university/",
    originalLink: "https://www.dailyexpress.com.my/news/231922/taylor-s-university-leads-future-ready-workforce-with-industry-focused-pharmaceutical-science-programme",
    category: "Education"
  },
  {
    id: 3,
    title: "HDC Malaysia Calls for Expansion of its Halal Pharmaceutical into MENA Region",
    excerpt: "The Halal Development Corporation Berhad (HDC) in Malaysia is pushing to expand the country's halal pharmaceutical market, particularly in the Middle East and North Africa (MENA) region.",
    date: "2025-12-30",
    link: "https://halalpharmacore.com/2025/12/30/hdc-malaysia-calls-for-expansion-of-its-halal-pharmaceutical-into-mena-region/",
    originalLink: "https://www.navlindaily.com/article/21571/hdc-malaysia-calls-for-expansion-of-its-halal-pharmaceutical-into-mena-region",
    category: "Market Expansion"
  },
  {
    id: 4,
    title: "Duopharma Biotech Sees Promising Collaboration Opportunities in Qatar",
    excerpt: "Duopharma Biotech Berhad sees promising collaboration opportunities following a recent roundtable in Qatar, led by Group Managing Director Leonard Ariff Abdul Shatar.",
    date: "2025-12-30",
    link: "https://halalpharmacore.com/2025/12/30/duopharma-biotech-sees-promising-collaboration-opportunities-in-qatar/",
    originalLink: "https://sme.asia/duopharma-biotech-sees-promising-collaboration-opportunities-in-qatar/",
    category: "Partnerships"
  },
  {
    id: 5,
    title: "Malaysia Set to Help Others Build Halal Ecosystem",
    excerpt: "Halal Development Corporation Bhd (HDC) CEO Hairol Ariffein Sahari outlined Malaysia's strategy to enhance its halal economy by increasing halal experts, boosting investments in halal industrial parks, and creating job opportunities.",
    date: "2025-12-30",
    link: "https://halalpharmacore.com/2025/12/30/malaysia-set-to-help-others-build-halal-ecosystem/",
    originalLink: "https://www.nst.com.my/news/nation/2024/07/1083957/malaysia-set-help-others-build-halal-ecosystem",
    category: "Policy"
  },
  {
    id: 6,
    title: "Launching the Iranian Medicine 'CinnoRA', a Humira Biosimilar",
    excerpt: "CinnoRA is biosimilar form of Humira which is produced by AbbVie. All qualitative, quantitative and clinical tests show the similarity of CinnoRA and Humira.",
    date: "2025-12-30",
    link: "https://halalpharmacore.com/2025/12/30/launching-the-iranian-medicine-cinnora-a-humira-biosimilar/",
    originalLink: "https://www.cinnagen.com/",
    category: "Product Launch"
  },
  {
    id: 7,
    title: "CinnaGen Obtained Halal Certification for its Medicinal Products",
    excerpt: "The Iranian biopharmaceutical company can now manufacture halal certified medicinal products.",
    date: "2025-12-30",
    link: "https://halalpharmacore.com/2025/12/30/cinnagen-obtained-halal-certification-for-its-medicinal-products/",
    originalLink: "https://www.cinnagen.com/News.aspx?t=1&l=1&Id=478",
    category: "Certification"
  },
  {
    id: 8,
    title: "Iranian Global Medicine Giant CinnaGen Opens $100M Biotech Plant in Çerkezköy Turkey",
    excerpt: "The factory, built with a total investment of $100 million, looks to achieve $100 million in annual exports to 20 countries.",
    date: "2025-12-30",
    link: "https://halalpharmacore.com/2025/12/30/iranian-global-medicine-giant-cinnagen-opens-100m-biotech-plant-in-cerkezkoy-turkey/",
    originalLink: "https://www.dailysabah.com/business/2019/06/13/global-medicine-giant-cinnagen-opens-100m-biotech-plant-in-cerkezkoy/amp",
    category: "Industry News"
  },
  {
    id: 9,
    title: "BRICS expansion: What's in store for the global halal industry?",
    excerpt: "The BRICS group is expanding by admitting six new countries, including Argentina, Saudi Arabia, Egypt, UAE, Ethiopia, and Iran.",
    date: "2025-12-30",
    link: "https://halalpharmacore.com/2025/12/30/brics-expansion-whats-in-store-for-the-global-halal-industry/",
    originalLink: "https://salaamgateway.com/story/brics-expansion-whats-in-store-for-the-global-halal-industry",
    category: "Global Trade"
  },
  {
    id: 10,
    title: "Capitalizing on Halal Pharmaceuticals: The Billion-Dollar Path to Ethical Healthcare",
    excerpt: "The halal pharmaceutical market, guided by the holistic approach of nearly two billion Muslims worldwide, is growing significantly.",
    date: "2025-12-30",
    link: "https://halalpharmacore.com/2025/12/30/capitalizing-on-halal-pharmaceuticals-the-billion-dollar-path-to-ethical-healthcare/",
    originalLink: "https://www.nst.com.my/opinion/columnists/2023/12/991384/halal-pharmaceuticals-booming-market-navigating-ethical-and",
    category: "Market Analysis"
  },
  {
    id: 11,
    title: "State of the Global Islamic Economy Report 23/2024: A $142 Billion Opportunity",
    excerpt: "The State of the Global Islamic Economy 2023/24 Report underscores the significant growth and potential in the halal pharmaceutical industry, with spending projected to reach $142 billion by 2027.",
    date: "2025-12-30",
    link: "https://halalpharmacore.com/2025/12/30/state-of-the-global-islamic-economy-report-23-2024-a-142-billion-opportunity/",
    originalLink: "https://salaamgateway.com/story/sgie-report-202324-halal-pharma-thrives-with-growing-consumer-spend",
    category: "Market Report"
  },
  {
    id: 12,
    title: "UAE's Prime Healthcare Wants to Make a Breakthrough into Halal Pharmaceuticals",
    excerpt: "Prime, a UAE-based healthcare company, entered into a partnership with Pharmaniaga Partners to gain rights to register, import, market, sell, and distribute pharmaceutical products from PMB.",
    date: "2025-12-30",
    link: "https://halalpharmacore.com/2025/12/30/uaes-prime-healthcare-wants-to-make-a-breakthrough-into-halal-pharmaceuticals/",
    originalLink: "https://gulfnews.com/business/uaes-prime-healthcare-wants-to-make-a-breakthrough-into-halal-pharmaceuticals-",
    category: "Partnerships"
  }
];

const ITEMS_PER_PAGE = 6;

export default function MarketNewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articleContent, setArticleContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get unique categories
  const categories = [...new Set(newsData.map(item => item.category).filter(Boolean))];

  // Filter and paginate data
  const filteredData = newsData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Fetch article content when modal opens
  const openArticleModal = async (article: NewsArticle) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
    setIsLoading(true);
    setError(null);
    setArticleContent('');

    try {
      // Use a CORS proxy service to fetch the content
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(article.link)}`;
      
      const response = await fetch(proxyUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch article: ${response.status}`);
      }
      
      const html = await response.text();
      
      // Extract the main content from the HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Try to find the main content - common selectors for WordPress sites
      let contentElement = doc.querySelector('.entry-content') || 
                          doc.querySelector('.post-content') || 
                          doc.querySelector('.article-content') ||
                          doc.querySelector('article .content') ||
                          doc.querySelector('main article');
      
      if (contentElement) {
        // Remove unwanted elements
        const unwantedSelectors = ['.ads', '.advertisement', '.social-share', '.related-posts', '.comments'];
        unwantedSelectors.forEach(selector => {
          const elements = contentElement?.querySelectorAll(selector);
          elements?.forEach(el => el.remove());
        });
        
        setArticleContent(contentElement.innerHTML);
      } else {
        // If no specific content found, try to get the main article text
        const articleElement = doc.querySelector('article');
        if (articleElement) {
          setArticleContent(articleElement.innerHTML);
        } else {
          // Fallback: get the body content
          const bodyContent = doc.querySelector('body');
          if (bodyContent) {
            // Remove header, footer, navigation etc.
            const unwantedTags = ['header', 'footer', 'nav', 'script', 'style'];
            unwantedTags.forEach(tag => {
              const elements = bodyContent.querySelectorAll(tag);
              elements.forEach(el => el.remove());
            });
            setArticleContent(bodyContent.innerHTML);
          } else {
            throw new Error('Could not extract article content');
          }
        }
      }
    } catch (err) {
      console.error('Error fetching article:', err);
      setError('Failed to load article content. Please try again or visit the original source.');
      // Set a fallback message
      setArticleContent(`
        <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p class="text-yellow-800">Unable to load the full article content. Please click the button below to read it on the original website.</p>
        </div>
      `);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
    setArticleContent('');
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Market News</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments in the halal pharmaceutical industry
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            <div className="md:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* News Grid */}
        {currentItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No news articles found matching your criteria.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentItems.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {article.category && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          {article.category}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-1" />
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <button
                        onClick={() => openArticleModal(article)}
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        currentPage === page
                          ? 'bg-emerald-600 text-white'
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
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Modal/Popup */}
      {isModalOpen && selectedArticle && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={closeModal}
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Backdrop */}
            <div className="fixed inset-0 transition-opacity bg-black bg-opacity-50" />

            {/* Modal */}
            <div 
              className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 pr-8 line-clamp-1">
                  {selectedArticle.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="px-6 py-6 max-h-[70vh] overflow-y-auto">
                {isLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader size={32} className="animate-spin text-emerald-600" />
                    <span className="ml-3 text-gray-600">Loading article...</span>
                  </div>
                ) : (
                  <>
                    {error && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600">{error}</p>
                      </div>
                    )}
                    <div 
                      className="prose prose-emerald max-w-none"
                      dangerouslySetInnerHTML={{ __html: articleContent }}
                    />
                    {/* Fallback if no content */}
                    {!articleContent && !error && (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No content available for this article.</p>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Modal Footer - Updated with Original Article button */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
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
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
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
    </div>
  );
}