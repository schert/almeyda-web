import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Utensils } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

interface DiningMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const DiningMenuModal: React.FC<DiningMenuModalProps> = ({
  isOpen,
  onClose,
  onOpenReservation
}) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');

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

  const filteredDishes = activeCategory === 'all'
    ? t.dishes
    : t.dishes.filter((d) => d.category === activeCategory);

  const categories = [
    { key: 'all', label: t.diningModal.filters.all },
    { key: 'antipasti', label: t.diningModal.filters.antipasti },
    { key: 'primi', label: t.diningModal.filters.primi },
    { key: 'secondi', label: t.diningModal.filters.secondi },
    { key: 'dessert', label: t.diningModal.filters.dessert }
  ];

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
                <Utensils size={16} />
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold">
                  {t.diningModal.badge}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2ED] font-light mt-1">
                {t.diningModal.title}
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

          {/* Filter Tabs */}
          <div className="p-4 sm:p-6 border-b border-white/5 bg-[#121316] flex flex-wrap gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-1.5 text-[10px] tracking-[0.15em] uppercase transition-all ${
                  activeCategory === cat.key
                    ? 'bg-[#D4AF37] text-[#0A0B0D] font-bold shadow-xs'
                    : 'bg-[#0A0B0D] text-white/70 hover:text-white border border-white/10 hover:border-[#D4AF37]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Scrollable Dishes List */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-6 divide-y divide-white/5">
            {filteredDishes.map((dish) => (
              <div key={dish.id} className="pt-6 first:pt-0 flex flex-col sm:flex-row sm:items-start justify-between gap-4 group">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-serif text-xl text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors">
                      {dish.name}
                    </h4>
                    <span className="text-[9px] tracking-widest uppercase text-[#D4AF37] font-medium">
                      · {categories.find((c) => c.key === dish.category)?.label || dish.category}
                    </span>
                  </div>

                  <p className="text-xs text-white/60 font-light mt-1.5 leading-relaxed max-w-2xl">
                    {dish.description}
                  </p>

                  {dish.dietary && dish.dietary.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {dish.dietary.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] tracking-wider uppercase text-[#D4AF37] bg-[#0A0B0D] px-2 py-0.5 border border-[#D4AF37]/20 font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="font-serif text-lg text-[#D4AF37] shrink-0 sm:text-right italic whitespace-nowrap">
                  {dish.price}
                </div>
              </div>
            ))}
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 border-t border-white/5 bg-[#0A0B0D] flex flex-col sm:flex-row justify-between items-center gap-4 shrink-0">
            <span className="text-[11px] text-white/50 font-light">
              * Almeyda Contemporary Siracusa Dining
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-bold bg-[#D4AF37] hover:bg-white text-[#0A0B0D] transition-colors"
            >
              {t.diningModal.bookTable}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
