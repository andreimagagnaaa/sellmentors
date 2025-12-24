import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { useBooking } from '../contexts/BookingContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBookingModal } = useBooking();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-black/5' : 'bg-transparent';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="block" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <Logo orientation="horizontal" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('solutions')} className="text-sm text-foreground/80 hover:text-primary transition-colors">Soluções</button>
            <button onClick={() => scrollToSection('methodology')} className="text-sm text-foreground/80 hover:text-primary transition-colors">Metodologia</button>
            <button onClick={() => scrollToSection('cases')} className="text-sm text-foreground/80 hover:text-primary transition-colors">Cases</button>
            <Button variant="outline" className="h-10 px-6" onClick={openBookingModal}>
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-black/10"
        >
          <div className="container mx-auto py-8 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('solutions')} className="text-lg text-foreground/80 hover:text-primary text-left">Soluções</button>
            <button onClick={() => scrollToSection('methodology')} className="text-lg text-foreground/80 hover:text-primary text-left">Metodologia</button>
            <button onClick={() => scrollToSection('cases')} className="text-lg text-foreground/80 hover:text-primary text-left">Cases</button>
            <Button className="w-full mt-4" onClick={() => { openBookingModal(); setIsMobileMenuOpen(false); }}>
              Agendar Sessão
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
