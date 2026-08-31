import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { Sparkles, Utensils, Award } from 'lucide-react';

interface MenuSectionProps {
  onOpenReservation: () => void;
}

type CategoryKey = 'all' | 'baguette' | 'antipasti' | 'primi' | 'secondi' | 'dessert' | 'viniOli';

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');

  const categories = [
    { key: 'all' as CategoryKey, label: t.menuSection.categories.all },
    { key: 'baguette' as CategoryKey, label: t.menuSection.categories.baguette },
    { key: 'antipasti' as CategoryKey, label: t.menuSection.categories.antipasti },
    { key: 'primi' as CategoryKey, label: t.menuSection.categories.primi },
    { key: 'secondi' as CategoryKey, label: t.menuSection.categories.secondi },
    { key: 'dessert' as CategoryKey, label: t.menuSection.categories.dessert },
    { key: 'viniOli' as CategoryKey, label: t.menuSection.categories.viniOli }
  ];

  const filteredDishes = activeCategory === 'all'
    ? t.menuSection.dishes
    : t.menuSection.dishes.filter((d) => d.category === activeCategory);

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#0E1013] text-[#F5F2ED] relative border-t border-white/5">
      {/* Texture decorativa di fondo */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intestazione Sezione */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#D4AF37]/30 bg-[#0A0B0D] text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-4">
            <Utensils className="w-3 h-3" />
            <span>{t.menuSection.badge}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] tracking-wide mb-4">
            {t.menuSection.title}
          </h2>

          <p className="text-[#D4AF37] font-serif italic text-lg sm:text-xl mb-4">
            {t.menuSection.subtitle}
          </p>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            {t.menuSection.description}
          </p>
        </div>

        {/* Categorie / Filtri Menù */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-10 sm:mb-12 px-2">
          {categories.map((cat) => {
            const count = cat.key === 'all'
              ? t.menuSection.dishes.length
              : t.menuSection.dishes.filter((d) => d.category === cat.key).length;

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

        {/* Griglia Piatti e Specialità */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-[#131519] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col overflow-hidden shadow-xl"
              >
                {/* Immagine Piatto */}
                <div className="relative aspect-16/10 overflow-hidden bg-black">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131519] via-transparent to-transparent opacity-80" />

                  {dish.featured && (
                    <div className="absolute top-3 left-3 bg-[#D4AF37] text-[#0A0B0D] text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 flex items-center space-x-1 shadow-md">
                      <Award className="w-3 h-3" />
                      <span>{t.menuSection.featuredBadge}</span>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 bg-[#0A0B0D]/90 text-[#D4AF37] font-serif text-base sm:text-lg font-semibold px-3 py-1 border border-[#D4AF37]/30">
                    {dish.price}
                  </div>
                </div>

                {/* Dettagli Piatto */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-light mb-4">
                      {dish.description}
                    </p>
                  </div>

                  {dish.notes && (
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] tracking-[0.18em] uppercase text-white/50">
                      <span className="flex items-center space-x-1.5 text-[#E8D5B5]">
                        <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                        <span>{dish.notes}</span>
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Chiamata all'azione Prenotazione Tavolo */}
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
