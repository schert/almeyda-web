import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { AlmeydaLogo } from './AlmeydaLogo';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Voci di Navigazione
  const navLinks = [
    { label: t.navbar.home, href: '#home' },
    { label: t.navbar.about, href: '#chi-siamo' },
    { label: t.navbar.carta, href: '#sapori' },
    { label: t.navbar.location, href: '#ambientazione' },
    { label: t.navbar.store, href: '#negozio' },
    { label: t.navbar.experiences, href: '#esperienze' },
    { label: t.navbar.spazioArte, href: '#spazio-arte' },
    { label: t.navbar.eventi, href: '#eventi' },
    { label: t.navbar.contattaci, href: '#contattaci' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0A0B0D]/95 backdrop-blur-md py-3.5 border-b border-white/5 shadow-2xl'
            : 'bg-gradient-to-b from-[#0A0B0D]/90 via-[#0A0B0D]/50 to-transparent py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Brand Sinistra */}
          <div className="flex items-center space-x-3">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="group flex items-center space-x-3 focus:outline-none py-0.5"
              aria-label="Almeyda - Antico Bistrot Siciliano"
            >
              <div className="h-7 sm:h-8 md:h-9 w-auto max-w-[100px] sm:max-w-[120px] flex items-center transition-transform duration-300 group-hover:scale-105">
                <AlmeydaLogo id="nav-brand-logo" className="h-full w-auto max-h-9 object-contain" glow={false} />
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.24em] uppercase font-light text-white/50 hidden xl:inline-block border-l border-white/15 pl-3 self-center">
                {t.common.brandSubtitle}
              </span>
            </a>
          </div>

          {/* Navigazione Desktop Completa (8 voci) */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-[10px] xl:text-[11px] tracking-[0.16em] uppercase font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[#F5F2ED]/80 hover:text-[#D4AF37] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}

            {/* Pulsante Prenotazione */}
            <button
              id="nav-book-button"
              onClick={onOpenReservation}
              className="px-3.5 py-1.5 bg-[#D4AF37] hover:bg-white text-[#0A0B0D] font-bold transition-all text-[10px] tracking-[0.15em] uppercase shadow-sm"
            >
              {t.navbar.book}
            </button>

            {/* Selettore Lingua Desktop */}
            <div className="flex items-center space-x-1 pl-2 border-l border-white/15 text-[10px] tracking-[0.15em] font-medium">
              <button
                onClick={() => setLanguage('it')}
                className={`px-1 py-0.5 transition-colors ${
                  language === 'it'
                    ? 'text-[#D4AF37] font-bold border-b border-[#D4AF37]'
                    : 'text-white/40 hover:text-white'
                }`}
                aria-label="Lingua Italiana"
              >
                IT
              </button>
              <span className="text-white/20">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`px-1 py-0.5 transition-colors ${
                  language === 'en'
                    ? 'text-[#D4AF37] font-bold border-b border-[#D4AF37]'
                    : 'text-white/40 hover:text-white'
                }`}
                aria-label="English Language"
              >
                EN
              </button>
            </div>
          </nav>

          {/* Controllo Mobile */}
          <div className="flex items-center space-x-3 lg:hidden">
            {/* Selettore Lingua Mobile */}
            <div className="flex items-center space-x-1 text-[10px] tracking-wider font-semibold border border-white/10 px-2 py-1 bg-[#121316]">
              <button
                onClick={() => setLanguage('it')}
                className={`${language === 'it' ? 'text-[#D4AF37] font-bold' : 'text-white/40'}`}
              >
                IT
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`${language === 'en' ? 'text-[#D4AF37] font-bold' : 'text-white/40'}`}
              >
                EN
              </button>
            </div>

            <button
              onClick={onOpenReservation}
              className="text-[10px] tracking-[0.18em] uppercase text-[#D4AF37] border-b border-[#D4AF37]/40 pb-0.5 font-semibold"
            >
              {t.navbar.book}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F2ED] hover:text-[#D4AF37] focus:outline-none"
              aria-label={mobileMenuOpen ? t.navbar.closeMenu : t.navbar.openMenu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </header>

      {/* Menu a schermo intero Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0B0D]/98 backdrop-blur-xl flex flex-col justify-between px-8 py-24 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-light">
                  {t.common.brandSubtitle}
                </span>

                {/* Selettore lingua dentro il menu mobile */}
                <div className="flex items-center space-x-2 text-xs tracking-[0.2em]">
                  <button
                    onClick={() => setLanguage('it')}
                    className={`px-2 py-1 ${
                      language === 'it' ? 'bg-[#D4AF37] text-black font-bold' : 'text-white/60 border border-white/10'
                    }`}
                  >
                    ITALIANO
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-1 ${
                      language === 'en' ? 'bg-[#D4AF37] text-black font-bold' : 'text-white/60 border border-white/10'
                    }`}
                  >
                    ENGLISH
                  </button>
                </div>
              </div>

              {/* 8 Voci di Menu */}
              <div className="flex flex-col space-y-3 pt-2">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.04, duration: 0.25 }}
                    className="font-serif text-xl tracking-[0.12em] italic text-[#F5F2ED] hover:text-[#D4AF37] transition-colors py-1"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Parte Inferiore Menu Mobile */}
            <div className="pt-6 border-t border-white/10 space-y-4 mt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3.5 text-center text-[11px] tracking-[0.2em] uppercase font-bold text-[#0A0B0D] bg-[#D4AF37] hover:bg-white transition-all shadow-lg"
              >
                {t.common.bookTable}
              </button>

              <div className="grid grid-cols-2 gap-4 text-xs text-[#F5F2ED]/70 pt-1 font-light">
                <div className="flex items-center space-x-2">
                  <MapPin size={14} className="text-[#D4AF37] shrink-0" />
                  <span className="truncate">{t.common.city}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={14} className="text-[#D4AF37] shrink-0" />
                  <span className="truncate">{t.navbar.openFrom}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
