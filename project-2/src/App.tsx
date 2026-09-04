import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DirectorySection from '@/components/DirectorySection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MarketNews from '@/components/MarketNews';

type Page = 'home' | 'news';

function App() {
  const [page, setPage] = useState<Page>('home');

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={page} onNavigate={navigate} />
      <main>
        {page === 'home' ? (
          <>
            <Hero />
            <DirectorySection />
            <WhyChooseUs />
            <ContactSection />
          </>
        ) : (
          <MarketNews />
        )}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
