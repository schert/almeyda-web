import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';
import { useTranslation } from '../context/LanguageContext';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onSelectIndex
}) => {
  const { t } = useTranslation();
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onSelectIndex((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onSelectIndex((currentIndex + 1) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onSelectIndex]);

  if (!isOpen || !currentItem) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex + 1) % items.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-[#0A0B0D]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
      >
        {/* Top Controls */}
        <div className="absolute top-6 inset-x-6 flex justify-between items-center z-50 text-[#F5F2ED]">
          <div className="flex items-center space-x-3">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-bold">
              {t.gallerySection.modalTitle}
            </span>
            <span className="text-xs text-white/40">·</span>
            <span className="text-xs text-white/60">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-[#D4AF37] transition-colors focus:outline-none"
            aria-label={t.common.close}
          >
            <X size={26} />
          </button>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 p-3 text-white/70 hover:text-[#D4AF37] transition-colors z-40 bg-[#0A0B0D]/60 hover:bg-[#0A0B0D] backdrop-blur-xs border border-white/10"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 p-3 text-white/70 hover:text-[#D4AF37] transition-colors z-40 bg-[#0A0B0D]/60 hover:bg-[#0A0B0D] backdrop-blur-xs border border-white/10"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>

        {/* Center Main Image Content */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl max-h-[82vh] flex flex-col items-center justify-center"
        >
          <motion.img
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-[72vh] w-auto max-w-full object-contain shadow-2xl border border-white/10"
            referrerPolicy="no-referrer"
          />

          {/* Caption & Category */}
          <div className="mt-4 text-center">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] block font-bold">
              {currentItem.category}
            </span>
            <h4 className="font-serif text-lg text-[#F5F2ED] font-light mt-0.5">
              {currentItem.title}
            </h4>
            {currentItem.caption && (
              <p className="text-xs text-white/60 font-light mt-1 max-w-lg mx-auto">
                {currentItem.caption}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
