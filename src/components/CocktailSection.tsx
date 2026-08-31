import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { Wine, Sparkles } from 'lucide-react';

interface CocktailSectionProps {
  onOpenReservation: () => void;
}

type CocktailCategory = 'all' | 'signature' | 'classici' | 'analcolici';

export const CocktailSection: React.FC<CocktailSectionProps> = ({ onOpenReservation }) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<CocktailCategory>('all');

  const categories = [
    { key: 'all' as CocktailCategory, label: t.cocktailSection.categories.all },
    { key: 'signature' as CocktailCategory, label: t.cocktailSection.categories.signature },
    { key: 'classici' as CocktailCategory, label: t.cocktailSection.categories.classici },
    { key: 'analcolici' as CocktailCategory, label: t.cocktailSection.categories.analcolici }
  ];

  const filteredCocktails = activeCategory === 'all'
    ? t.cocktailSection.cocktails
    : t.cocktailSection.cocktails.filter((c) => c.category === activeCategory);

  return (
    <section id="cocktail-bar" className="py-24 md:py-32 bg-[#0A0B0D] text-[#F5F2ED] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intestazione Sezione */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#D4AF37]/30 bg-[#121317] text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-4">
            <Wine className="w-3 h-3" />
            <span>{t.cocktailSection.badge}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] tracking-wide mb-4">
            {t.cocktailSection.title}
          </h2>

          <p className="text-[#D4AF37] font-serif italic text-lg sm:text-xl mb-4">
            {t.cocktailSection.subtitle}
          </p>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            {t.cocktailSection.description}
          </p>
        </div>

        {/* Filtri Categoria */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl mx-auto mb-10 sm:mb-12 px-2">
          {categories.map((cat) => {
            const count = cat.key === 'all'
              ? t.cocktailSection.cocktails.length
              : t.cocktailSection.cocktails.filter((c) => c.category === cat.key).length;

            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] transition-all flex items-center space-x-2 border cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-[#D4AF37] text-[#0A0B0D] border-[#D4AF37] font-bold shadow-lg ring-1 ring-[#D4AF37]/50'
                    : 'bg-[#14161A] text-white/75 border-white/10 hover:border-[#D4AF37]/60 hover:text-white hover:bg-[#1C1F26]'
                }`}
                aria-pressed={activeCategory === cat.key}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.5 font-mono ${
                    activeCategory === cat.key
                      ? 'bg-[#0A0B0D]/20 text-[#0A0B0D] font-bold'
                      : 'bg-white/10 text-white/60'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Griglia Cocktails */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCocktails.map((cocktail, index) => (
              <motion.div
                key={cocktail.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-[#111317] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col overflow-hidden shadow-xl"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-black">
                  <img
                    src={cocktail.image}
                    alt={cocktail.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.85]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-3 right-3 bg-[#0A0B0D]/90 text-[#D4AF37] font-serif text-base sm:text-lg font-semibold px-3 py-1 border border-[#D4AF37]/30">
                    {cocktail.price}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-xl sm:text-2xl text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors">
                        {cocktail.name}
                      </h3>
                    </div>

                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-light mb-4">
                      {cocktail.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cocktail.ingredients.map((ing, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[10px] bg-white/5 border border-white/10 text-white/70 font-light"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] tracking-[0.18em] uppercase text-white/50">
                    <span className="flex items-center space-x-1 text-[#E8D5B5]">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                      <span>{cocktail.profile}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Chiamata all'azione */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenReservation}
            className="px-8 py-3.5 bg-[#D4AF37] hover:bg-white text-[#0A0B0D] text-[11px] font-bold tracking-[0.2em] uppercase transition-all shadow-xl"
          >
            {t.common.bookTable}
          </button>
        </div>

      </div>
    </section>
  );
};
