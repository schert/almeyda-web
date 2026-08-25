import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenDiningMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onOpenDiningMenu }) => {
  const { t } = useTranslation();

  const scrollToNextSection = () => {
    const nextEl = document.getElementById('intro');
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0B0D]"
    >
      {/* Background Image with slow luxury atmospheric zoom */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop"
            alt="Almeyda Cocktail Bar & Dining Siracusa - Atmosfera Serale"
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.15]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0B0D] via-[#1A1C20]/60 to-[#0A0B0D]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-[#0A0B0D]/50 to-transparent" />
        
        {/* Subtle Decorative Center Circle */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-[520px] h-[520px] rounded-full border border-white/20" />
        </div>
      </div>

      {/* Decorative Subtle Gold Frame Lines */}
      <div className="absolute inset-6 md:inset-12 border border-white/5 pointer-events-none z-10 hidden sm:block" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-32 pb-16 flex flex-col items-center justify-center min-h-screen">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-block mb-6 px-4 py-1 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase bg-[#0A0B0D]/60 backdrop-blur-xs"
        >
          {t.hero.badge}
        </motion.div>

        {/* Grand Brand Name ALMEYDA */}
        <motion.h1
          id="hero-main-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.18em] italic uppercase text-[#F5F2ED] select-none my-2"
        >
          Almeyda
        </motion.h1>

        {/* Subtitle / Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-sm sm:text-base md:text-lg text-white/60 font-light max-w-xl mx-auto mt-4 mb-8 leading-relaxed font-sans"
        >
          {t.hero.headline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-lg"
        >
          <button
            id="hero-book-cta"
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-white text-[#0A0B0D] text-[11px] font-bold tracking-[0.2em] uppercase transition-all shadow-lg focus:outline-none"
          >
            {t.hero.bookCta}
          </button>

          <button
            id="hero-menu-cta"
            onClick={onOpenDiningMenu}
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-[#F5F2ED] hover:bg-white hover:text-black text-[11px] font-bold tracking-[0.2em] uppercase transition-all bg-transparent focus:outline-none"
          >
            {t.hero.menuCta}
          </button>
        </motion.div>

        {/* Scroll to explore indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          onClick={scrollToNextSection}
          className="mt-12 sm:mt-16 flex flex-col items-center cursor-pointer group opacity-60 hover:opacity-100 transition-opacity"
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
