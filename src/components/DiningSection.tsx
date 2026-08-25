import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';

interface DiningSectionProps {
  onOpenDiningMenu: () => void;
}

type CategoryType = 'antipasti' | 'primi' | 'secondi' | 'dessert';

export const DiningSection: React.FC<DiningSectionProps> = ({ onOpenDiningMenu }) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<CategoryType>('antipasti');

  const categories: { key: CategoryType; label: string }[] = [
    { key: 'antipasti', label: t.diningSection.categories.antipasti },
    { key: 'primi', label: t.diningSection.categories.primi },
    { key: 'secondi', label: t.diningSection.categories.secondi },
    { key: 'dessert', label: t.diningSection.categories.dessert },
  ];

  // Get active dishes and featured dish for display
  const currentDishes = t.dishes.filter((d) => d.category === activeCategory);
  const featuredDish = currentDishes.find((d) => d.featured) || currentDishes[0];

  return (
    <section id="dining" className="py-24 md:py-36 bg-[#0A0B0D] text-[#F5F2ED] relative overflow-hidden border-t border-white/5">
      {/* Ambient background light */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-18 pb-8 border-b border-white/5">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#D4AF37] mb-3">
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold">{t.diningSection.badge}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] font-light tracking-wide">
              {t.diningSection.title}
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-light mt-3 max-w-2xl italic">
              {t.diningSection.subtitle}
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={onOpenDiningMenu}
              className="group inline-flex items-center space-x-3 text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] hover:text-white transition-colors py-2 border-b border-[#D4AF37]/40 hover:border-white"
            >
              <span>{t.diningSection.exploreMenuBtn}</span>
              <div className="h-[1px] w-6 bg-[#D4AF37] group-hover:w-10 group-hover:bg-white transition-all" />
            </button>
          </div>
        </div>

        {/* Category Navigation Grid/Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-12" role="tablist" aria-label="Categorie Dining">
          {categories.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={activeCategory === cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`p-3 text-[10px] tracking-[0.15em] uppercase text-center transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-[#D4AF37] text-[#0A0B0D] font-bold shadow-md'
                  : 'bg-[#121316] text-white/60 hover:text-white border border-white/10 hover:border-[#D4AF37]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Showcase: Featured Large Photo + Courses List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Large Hero Food Photo */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + (featuredDish?.id || '')}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#121316] border border-white/10 shadow-2xl group"
              >
                <img
                  src={featuredDish?.image || 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop'}
                  alt={featuredDish?.name || 'Piatto Almeyda Siracusa'}
                  className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Overlay Badge */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A0B0D] via-[#0A0B0D]/80 to-transparent p-6 pt-12 flex justify-between items-end gap-4">
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-light">
                      {t.diningSection.featuredBadge} · {categories.find((c) => c.key === activeCategory)?.label}
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl text-[#F5F2ED] mt-1 font-light truncate sm:whitespace-normal">
                      {featuredDish?.name}
                    </h4>
                  </div>
                  <span className="font-serif text-lg text-[#D4AF37] italic whitespace-nowrap shrink-0">
                    {featuredDish?.price}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Menu Items List */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {currentDishes.map((dish) => (
                  <div
                    key={dish.id}
                    className="p-5 bg-[#121316] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-baseline gap-4">
                      <h4 className="font-serif text-lg sm:text-xl text-[#F5F2ED] font-normal group-hover:text-[#D4AF37] transition-colors">
                        {dish.name}
                      </h4>
                      <span className="font-serif text-sm text-[#D4AF37] shrink-0 italic whitespace-nowrap">
                        {dish.price}
                      </span>
                    </div>

                    <p className="text-xs text-white/50 font-light leading-relaxed mt-2">
                      {dish.description}
                    </p>

                    {dish.dietary && dish.dietary.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {dish.dietary.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] tracking-wider uppercase text-[#D4AF37]/90 bg-[#0A0B0D] px-2 py-0.5 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="pt-2">
              <button
                id="dining-section-full-menu-btn"
                onClick={onOpenDiningMenu}
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-[#F5F2ED] hover:bg-white hover:text-black text-[11px] font-bold tracking-[0.2em] uppercase transition-all bg-transparent focus:outline-none"
              >
                {t.diningSection.exploreMenuBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

