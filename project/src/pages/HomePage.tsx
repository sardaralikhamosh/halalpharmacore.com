import Hero from '../components/Hero';
import Services from '../components/Services';
import Manufacturing from '../components/Manufacturing';
import News from '../components/News';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Manufacturing />
      <News />
      <Contact />
    </main>
  );
}
