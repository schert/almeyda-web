import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Wine } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

interface CocktailMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const CocktailMenuModal: React.FC<CocktailMenuModalProps> = ({
  isOpen,
  onClose,
  onOpenReservation
}) => {
  const { t } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCocktails = t.cocktails.filter((item) => {
    const matchesFilter = selectedFilter === 'all' || item.category === selectedFilter;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0A0B0D]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-[#121316] border border-white/10 w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl relative"
        >
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between shrink-0 bg-[#0A0B0D]">
            <div>
              <div className="flex items-center space-x-2 text-[#D4AF37]">
                <Wine size={16} />
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold">
                  {t.cocktailModal.badge}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2ED] font-light mt-1">
                {t.cocktailModal.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-[#D4AF37] transition-colors focus:outline-none"
              aria-label={t.common.close}
            >
              <X size={24} />
            </button>
          </div>

          {/* Filter Bar & Search */}
          <div className="p-4 sm:p-6 border-b border-white/5 bg-[#121316] flex flex-col sm:flex-row gap-4 justify-between items-center shrink-0">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {[
                { key: 'all', label: t.cocktailModal.filters.all },
                { key: 'signature', label: t.cocktailModal.filters.signature },
                { key: 'classic', label: t.cocktailModal.filters.classic },
                { key: 'twist', label: t.cocktailModal.filters.twist },
                { key: 'mocktail', label: t.cocktailModal.filters.mocktail },
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setSelectedFilter(filter.key)}
                  className={`px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase transition-all ${
                    selectedFilter === filter.key
                      ? 'bg-[#D4AF37] text-[#0A0B0D] font-bold shadow-xs'
                      : 'bg-[#0A0B0D] text-white/70 hover:text-white border border-white/10 hover:border-[#D4AF37]/30'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
              <input
                type="text"
                placeholder={t.cocktailModal.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0A0B0D] border border-white/15 pl-9 pr-4 py-2 text-xs text-[#F5F2ED] placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          {/* Scrollable Cocktail List */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-6 divide-y divide-white/5">
            {filteredCocktails.length > 0 ? (
              filteredCocktails.map((cocktail) => (
                <div key={cocktail.id} className="pt-6 first:pt-0 flex flex-col sm:flex-row sm:items-start justify-between gap-4 group">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-serif text-xl text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors">
                        {cocktail.name}
                      </h4>
                      {cocktail.profile && (
                        <span className="text-[9px] tracking-wider uppercase text-[#D4AF37] bg-[#0A0B0D] px-2 py-0.5 border border-[#D4AF37]/20 font-bold">
                          {cocktail.profile}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-white/60 font-light mt-1.5 leading-relaxed">
                      {cocktail.description}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-white/40">
                      <span className="text-[#D4AF37]">{t.common.ingredients}:</span>
                      {cocktail.ingredients.join(', ')}
                    </div>
                  </div>

                  <div className="font-serif text-lg text-[#D4AF37] shrink-0 sm:text-right italic whitespace-nowrap">
                    {cocktail.price}
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center text-sm text-white/50">
                {t.cocktailModal.noResults}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 border-t border-white/5 bg-[#0A0B0D] flex flex-col sm:flex-row justify-between items-center gap-4 shrink-0">
            <span className="text-[11px] text-white/50 font-light">
              * Siracusa Cocktail Experience
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-bold bg-[#D4AF37] hover:bg-white text-[#0A0B0D] transition-colors"
            >
              {t.cocktailModal.bookTable}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
