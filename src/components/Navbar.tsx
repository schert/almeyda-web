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

  // Close mobile menu on ESC and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0B0D]/95 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl'
            : 'bg-gradient-to-b from-[#0A0B0D]/95 via-[#0A0B0D]/60 to-transparent py-3.5 sm:py-4 border-b border-white/5'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Brand Sinistra */}
          <div className="flex items-center min-w-0">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="group flex items-center space-x-2.5 focus:outline-none py-0.5"
              aria-label="Almeyda - Antico Bistrot Siciliano"
            >
              <div className="h-7 sm:h-8 md:h-9 w-auto max-w-[95px] sm:max-w-[120px] flex items-center transition-transform duration-300 group-hover:scale-105">
                <AlmeydaLogo id="nav-brand-logo" className="h-full w-auto max-h-8 sm:max-h-9 object-contain" glow={false} />
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-light text-white/50 hidden 2xl:inline-block border-l border-white/15 pl-3 self-center">
                {t.common.brandSubtitle}
              </span>
            </a>
          </div>

          {/* Navigazione Desktop Completa (Solo schermi ampi >= xl) */}
          <nav className="hidden xl:flex items-center space-x-3 2xl:space-x-5 text-[10px] 2xl:text-[11px] tracking-[0.12em] 2xl:tracking-[0.15em] uppercase font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[#F5F2ED]/85 hover:text-[#D4AF37] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}

            {/* Pulsante Prenotazione Desktop */}
            <button
              id="nav-book-button"
              onClick={onOpenReservation}
              className="px-3.5 py-1.5 bg-[#D4AF37] hover:bg-white text-[#0A0B0D] font-bold transition-all text-[10px] tracking-[0.15em] uppercase shadow-sm cursor-pointer whitespace-nowrap"
            >
              {t.navbar.book}
            </button>

            {/* Selettore Lingua Desktop */}
            <div className="flex items-center space-x-1 pl-2 border-l border-white/15 text-[10px] tracking-[0.15em] font-medium">
              <button
                onClick={() => setLanguage('it')}
                className={`px-1 py-0.5 transition-colors cursor-pointer ${
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
                className={`px-1 py-0.5 transition-colors cursor-pointer ${
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

          {/* Controllo Mobile & Tablet (< xl) */}
          <div className="flex items-center space-x-2 sm:space-x-3 xl:hidden shrink-0">
            {/* Selettore Lingua Mobile Compatto */}
            <div className="flex items-center text-[10px] tracking-wider font-semibold border border-white/15 bg-[#121316] rounded-none">
              <button
                onClick={() => setLanguage('it')}
                className={`px-1.5 py-0.5 transition-colors ${
                  language === 'it' ? 'bg-[#D4AF37] text-black font-bold' : 'text-white/50 hover:text-white'
                }`}
                aria-label="IT"
              >
                IT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 transition-colors ${
                  language === 'en' ? 'bg-[#D4AF37] text-black font-bold' : 'text-white/50 hover:text-white'
                }`}
                aria-label="EN"
              >
                EN
              </button>
            </div>

            {/* CTA Prenota Mobile */}
            <button
              onClick={onOpenReservation}
              className="px-2.5 py-1 bg-[#D4AF37] hover:bg-white text-[#0A0B0D] text-[9px] sm:text-[10px] font-bold tracking-wider uppercase transition-colors whitespace-nowrap shadow-sm"
            >
              {t.navbar.book}
            </button>

            {/* Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#F5F2ED] hover:text-[#D4AF37] focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? t.navbar.closeMenu : t.navbar.openMenu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* Menu a schermo intero Mobile / Tablet Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#0A0B0D]/98 backdrop-blur-2xl flex flex-col justify-between px-5 sm:px-8 pt-6 pb-8 xl:hidden overflow-y-auto w-full max-w-full"
          >
            {/* Header del Menu Mobile con Logo e pulsante Chiusura */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-2">
                <div className="h-7 w-auto max-w-[100px]">
                  <AlmeydaLogo className="h-full w-auto max-h-7 object-contain" glow={false} />
                </div>
              </div>

              <div className="flex items-center space-x-3">
                {/* Selettore lingua dentro il menu mobile */}
                <div className="flex items-center text-[10px] tracking-wider font-semibold border border-white/15 bg-[#121316]">
                  <button
                    onClick={() => setLanguage('it')}
                    className={`px-2 py-1 ${
                      language === 'it' ? 'bg-[#D4AF37] text-black font-bold' : 'text-white/60'
                    }`}
                  >
                    IT
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-1 ${
                      language === 'en' ? 'bg-[#D4AF37] text-black font-bold' : 'text-white/60'
                    }`}
                  >
                    EN
                  </button>
                </div>

                {/* Pulsante di Chiusura */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-white/70 hover:text-white focus:outline-none"
                  aria-label="Chiudi menu"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Voci di Menu */}
            <div className="flex flex-col space-y-2.5 py-6 my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 + idx * 0.03, duration: 0.2 }}
                  className="font-serif text-lg sm:text-xl tracking-[0.08em] italic text-[#F5F2ED] hover:text-[#D4AF37] transition-colors py-1 border-b border-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Parte Inferiore Menu Mobile */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3.5 text-center text-xs tracking-[0.2em] uppercase font-bold text-[#0A0B0D] bg-[#D4AF37] hover:bg-white transition-all shadow-lg"
              >
                {t.common.bookTable}
              </button>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-[#F5F2ED]/70 pt-1 font-light">
                <div className="flex items-center space-x-1.5">
                  <MapPin size={13} className="text-[#D4AF37] shrink-0" />
                  <span className="truncate">{t.common.city}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock size={13} className="text-[#D4AF37] shrink-0" />
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
