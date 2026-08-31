import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { Coffee, Sun, Feather, Sparkles } from 'lucide-react';

interface CafeteriaSectionProps {
  onOpenReservation: () => void;
}

type CafeteriaCategory = 'all' | 'caffe' | 'pasticceria' | 'infusi';

export const CafeteriaSection: React.FC<CafeteriaSectionProps> = ({ onOpenReservation }) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<CafeteriaCategory>('all');

  const categories = [
    { key: 'all' as CafeteriaCategory, label: t.caffetteriaSection.categories.all },
    { key: 'caffe' as CafeteriaCategory, label: t.caffetteriaSection.categories.caffe },
    { key: 'pasticceria' as CafeteriaCategory, label: t.caffetteriaSection.categories.pasticceria },
    { key: 'infusi' as CafeteriaCategory, label: t.caffetteriaSection.categories.infusi }
  ];

  const filteredItems = activeCategory === 'all'
    ? t.caffetteriaSection.items
    : t.caffetteriaSection.items.filter((item) => item.category === activeCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#D4AF37]" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#D4AF37]" />;
      case 'Feather':
      default:
        return <Feather className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="caffetteria" className="py-24 md:py-32 bg-[#0E1013] text-[#F5F2ED] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intestazione */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#D4AF37]/30 bg-[#0A0B0D] text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-4">
            <Coffee className="w-3 h-3" />
            <span>{t.caffetteriaSection.badge}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] tracking-wide mb-4">
            {t.caffetteriaSection.title}
          </h2>

          <p className="text-[#D4AF37] font-serif italic text-lg sm:text-xl mb-4">
            {t.caffetteriaSection.subtitle}
          </p>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            {t.caffetteriaSection.description}
          </p>
        </div>

        {/* I 3 Pilastri della Caffetteria */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {t.caffetteriaSection.highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#131519] border border-white/10 hover:border-[#D4AF37]/40 transition-all text-center flex flex-col items-center justify-center shadow-lg"
            >
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center mb-4">
                {getIcon(item.iconName)}
              </div>
              <h3 className="font-serif text-xl text-[#F5F2ED] mb-2">{item.title}</h3>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Carta Caffetteria & Dolci */}
        <div className="bg-[#121418] border border-white/10 p-6 sm:p-10 md:p-12 shadow-2xl relative">
          <div className="text-center mb-8 pb-6 border-b border-white/10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-medium block mb-1">
              {t.common.brandSubtitle}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2ED]">
              {t.caffetteriaSection.title} & Pasticceria del Teatro
            </h3>
          </div>

          {/* Filtri Categoria Caffetteria */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-2xl mx-auto mb-10 px-2">
            {categories.map((cat) => {
              const count = cat.key === 'all'
                ? t.caffetteriaSection.items.length
                : t.caffetteriaSection.items.filter((item) => item.category === cat.key).length;

              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] transition-all flex items-center space-x-2 border cursor-pointer ${
                    activeCategory === cat.key
                      ? 'bg-[#D4AF37] text-[#0A0B0D] border-[#D4AF37] font-bold shadow-lg ring-1 ring-[#D4AF37]/50'
                      : 'bg-[#181A20] text-white/75 border-white/10 hover:border-[#D4AF37]/60 hover:text-white hover:bg-[#20232B]'
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="flex items-start justify-between border-b border-white/5 pb-4 group"
                >
                  <div className="pr-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-serif text-lg text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-white/60 text-xs font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {item.price && (
                    <span className="font-serif text-base text-[#D4AF37] whitespace-nowrap pl-2">
                      {item.price}
                    </span>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <span className="flex items-center space-x-2 text-[#E8D5B5]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Servizio al tavolo nella sala storica o nel dehors di Ortigia</span>
            </span>
            <button
              onClick={onOpenReservation}
              className="text-[#D4AF37] hover:text-white transition-colors underline underline-offset-4 tracking-[0.15em] uppercase text-[11px]"
            >
              {t.common.bookTable} →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
