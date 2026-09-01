import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { AlmeydaLogo } from './AlmeydaLogo';
import { Sparkles, UtensilsCrossed, Compass } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onOpenMenu }) => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0A0B0D]"
    >
      {/* Sfondo con immagine d'atmosfera e velature scure */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop"
            alt="Almeyda - Antico Bistrot Siciliano | Teatro Comunale di Siracusa"
            className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.2]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Gradiente drammatico scuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-[#0A0B0D]/75 to-[#0A0B0D]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-[#0A0B0D]/90" />
      </div>

      {/* Contenuto Principale Hero */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-32 pb-16 flex flex-col items-center justify-center">

        {/* Logo Ufficiale Vettoriale in Alta Definizione */}
        <motion.div
          id="hero-main-logo"
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl px-2 my-2 flex justify-center items-center"
        >
          <h1 className="sr-only">Almeyda - Antico Bistrot Siciliano | Siracusa</h1>
          <AlmeydaLogo className="w-full h-auto drop-shadow-2xl" glow={true} />
        </motion.div>

        {/* Dicitura Primaria Antico Bistrot Siciliano */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#E8D5B5] tracking-wide my-3"
        >
          Antico Bistrot Siciliano
        </motion.p>

        {/* Sottotitolo evocativo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-sm sm:text-base md:text-lg text-white/70 font-light max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {t.hero.headline}
        </motion.p>

        {/* Pulsanti di Azione Diretta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md"
        >
          <button
            id="hero-book-cta"
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#D4AF37] hover:bg-white text-[#0A0B0D] text-[11px] font-bold tracking-[0.2em] uppercase transition-all shadow-xl hover:shadow-2xl focus:outline-none"
          >
            {t.hero.bookCta}
          </button>

          <button
            id="hero-menu-cta"
            onClick={onOpenMenu}
            className="w-full sm:w-auto px-8 py-3.5 border border-white/30 text-[#F5F2ED] hover:bg-white hover:text-black text-[11px] font-bold tracking-[0.2em] uppercase transition-all bg-[#0A0B0D]/50 focus:outline-none backdrop-blur-xs"
          >
            {t.hero.menuCta}
          </button>
        </motion.div>

        {/* =========================================================================
            TRIBUTO & MANIFESTO STORICO A GIUSEPPE DAMIANI ALMEYDA
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="mt-16 sm:mt-24 p-6 sm:p-10 md:p-12 border border-[#D4AF37]/25 bg-[#121317]/90 backdrop-blur-md shadow-2xl relative text-left max-w-4xl w-full"
        >
          {/* Angoli decorativi Liberty */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />

          <div className="flex items-center space-x-3 mb-6 border-b border-white/10 pb-4">
            <Compass className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="text-[12px] sm:text-[13px] tracking-[0.25em] uppercase font-bold text-[#D4AF37]">
              {t.hero.tributeTitle}
            </h2>
          </div>

          <div className="space-y-4 text-[#E2DFD8] text-sm sm:text-base leading-relaxed font-light font-sans">
            <p className="border-l-2 border-[#D4AF37]/50 pl-4 italic text-white/90">
              {t.hero.tributeParagraph1}
            </p>
            <p>
              {t.hero.tributeParagraph2}
            </p>
            <p>
              {t.hero.tributeParagraph3}
            </p>
            <div className="pt-2">
              <p className="font-medium text-[#E8D5B5]">
                {t.hero.tributeParagraph4}
              </p>
              <p className="text-white/80 mt-2">
                {t.hero.tributeParagraph5}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[11px] tracking-[0.18em] uppercase text-white/60">
            <span className="flex items-center space-x-2 text-[#D4AF37]">
              <UtensilsCrossed className="w-4 h-4" />
              <span>Baguette Calde · Oli & Vini · Homemade</span>
            </span>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-[#D4AF37] hover:text-white transition-colors underline underline-offset-4"
            >
              {t.menuSection.exploreMenuBtn} →
            </button>
          </div>
        </motion.div>

        {/* Indicatore di Scorrimento */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          onClick={() => scrollToSection('menu')}
          className="mt-12 flex flex-col items-center cursor-pointer group opacity-60 hover:opacity-100 transition-opacity"
          aria-label={t.hero.scrollHint}
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-white/50 group-hover:text-[#D4AF37] transition-colors mb-2 font-light">
            {t.common.explore}
          </span>
          <div className="w-[1px] h-8 bg-white/40 group-hover:bg-[#D4AF37] transition-colors" />
        </motion.div>

      </div>
    </section>
  );
};
