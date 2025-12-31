import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Authority from './components/Authority';
import Methodology from './components/Methodology';
import Cases from './components/Cases';
import WhyItWorks from './components/WhyItWorks';
import Differentials from './components/Differentials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import IdentityPage from './components/IdentityPage';
import LinkedinAdsPage from './components/LinkedinAdsPage';
import { BookingProvider } from './contexts/BookingContext';
import BookingModal from './components/BookingModal';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (path === '/identidade' || path === '/identidade/') {
    return <IdentityPage />;
  }

  if (path === '/linkedin-ads' || path === '/linkedin-ads/') {
    return <LinkedinAdsPage />;
  }

  return (
    <BookingProvider>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
        <div className="noise-overlay" />
        
        <Navbar />
        
        <main>
          <Hero />
          <ProblemSection />
          <Authority />
          <Methodology />
          <Cases />
          <WhyItWorks />
          <Differentials />
          <FinalCTA />
        </main>

        <Footer />
        <BookingModal />
        <Analytics />
      </div>
    </BookingProvider>
  );
}

export default App;
