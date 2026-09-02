import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2, ZoomIn } from 'lucide-react';
import { useLightbox } from '../context/LightboxContext';

export const LightboxModal: React.FC = () => {
  const { isOpen, images, currentIndex, closeLightbox, goToNext, goToPrevious, goToIndex } = useLightbox();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const currentImage = images[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, goToNext, goToPrevious]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const diff = touchStartXRef.current - touchEndXRef.current;
      const threshold = 45; // min swipe distance in px
      if (diff > threshold) {
        goToNext();
      } else if (diff < -threshold) {
        goToPrevious();
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Browser fullscreen toggle
  const toggleBrowserFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (!isOpen || !currentImage) return null;

  const hasMultiple = images.length > 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="fullscreen-lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label={currentImage.title || "Visualizzatore foto a tutto schermo"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-500 bg-[#07080A]/95 backdrop-blur-xl flex flex-col justify-between select-none overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* ================================================================= */}
          {/* BARRA SUPERIORE CONTROLLI */}
          {/* ================================================================= */}
          <div className="relative z-20 flex items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4 border-b border-white/10 bg-[#0A0B0D]/80">
            {/* Sinistra: Contatore foto e Categoria */}
            <div className="flex items-center space-x-3">
              {hasMultiple && (
                <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-white/5 border border-white/10 font-mono text-[11px] sm:text-xs text-[#D4AF37]">
                  <span className="font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
                  <span className="text-white/40">/</span>
                  <span className="text-white/60">{String(images.length).padStart(2, '0')}</span>
                </div>
              )}

              {currentImage.category && (
                <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.2em] text-white/70 px-2.5 py-1 border border-white/10 bg-black/40">
                  {currentImage.category}
                </span>
              )}
            </div>

            {/* Centro: Titolo compatto per schermi medi */}
            <div className="hidden md:block text-center truncate max-w-md px-4">
              <span className="font-serif text-sm text-[#F5F2ED] tracking-wide">
                {currentImage.title || "Almeyda — Teatro Comunale di Siracusa"}
              </span>
            </div>

            {/* Destra: Tasti Fullscreen & Chiudi */}
            <div className="flex items-center space-x-2">
              <button
                id="lightbox-fullscreen-toggle"
                onClick={toggleBrowserFullscreen}
                className="p-2 sm:px-3 sm:py-1.5 text-white/75 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-xs flex items-center space-x-1.5 cursor-pointer"
                title={isFullscreen ? "Esci da tutto schermo" : "Schermo intero"}
                aria-label={isFullscreen ? "Esci da tutto schermo" : "Schermo intero"}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                <span className="hidden sm:inline text-[11px] uppercase tracking-wider">
                  {isFullscreen ? "Riduci" : "Espandi"}
                </span>
              </button>

              <button
                id="lightbox-close-btn"
                onClick={closeLightbox}
                className="px-3 py-1.5 bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0B0D] transition-colors text-xs font-bold uppercase tracking-[0.16em] flex items-center space-x-1.5 cursor-pointer shadow-lg"
                title="Chiudi visualizzatore (Esc)"
                aria-label="Chiudi visualizzatore"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Chiudi</span>
                <span className="hidden md:inline text-[9px] opacity-75 font-mono ml-0.5">(ESC)</span>
              </button>
            </div>
          </div>

          {/* ================================================================= */}
          {/* AREA PRINCIPALE: IMMAGINE E FRECCE DI NAVIGAZIONE */}
          {/* ================================================================= */}
          <div 
            onClick={closeLightbox}
            className="relative flex-1 flex items-center justify-center p-2 sm:p-6 md:p-8 overflow-hidden cursor-zoom-out"
          >
            {/* Freccia Sinistra (Precedente) */}
            {hasMultiple && (
              <button
                id="lightbox-prev-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-2 sm:left-6 md:left-8 z-30 p-2.5 sm:p-3.5 bg-black/60 hover:bg-[#D4AF37] text-white hover:text-[#0A0B0D] border border-white/20 hover:border-[#D4AF37] transition-all duration-200 cursor-pointer shadow-2xl backdrop-blur-md group"
                aria-label="Foto precedente"
                title="Foto precedente (Freccia Sinistra)"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:-translate-x-0.5" />
              </button>
            )}

            {/* Immagine con animazione di transizione */}
            <div 
              className="relative max-h-[72vh] sm:max-h-[76vh] max-w-[94vw] sm:max-w-[85vw] flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage.url}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="relative group flex items-center justify-center"
                >
                  <img
                    src={currentImage.url}
                    alt={currentImage.alt || currentImage.title || "Foto a tutto schermo"}
                    className="max-h-[68vh] sm:max-h-[74vh] max-w-full object-contain shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/10 rounded-xs"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Freccia Destra (Successiva) */}
            {hasMultiple && (
              <button
                id="lightbox-next-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-2 sm:right-6 md:right-8 z-30 p-2.5 sm:p-3.5 bg-black/60 hover:bg-[#D4AF37] text-white hover:text-[#0A0B0D] border border-white/20 hover:border-[#D4AF37] transition-all duration-200 cursor-pointer shadow-2xl backdrop-blur-md group"
                aria-label="Foto successiva"
                title="Foto successiva (Freccia Destra)"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:translate-x-0.5" />
              </button>
            )}
          </div>

          {/* ================================================================= */}
          {/* BARRA INFERIORE: DIDASCALIA & STRISCIA MINIATURE (THUMBNAILS) */}
          {/* ================================================================= */}
          <div className="relative z-20 px-4 sm:px-8 py-3 sm:py-4 border-t border-white/10 bg-[#0A0B0D]/90">
            {/* Didascalia Testuale */}
            {(currentImage.title || currentImage.caption) && (
              <div className="text-center max-w-2xl mx-auto mb-2.5">
                {currentImage.title && (
                  <h3 className="font-serif text-base sm:text-xl text-[#F5F2ED] mb-0.5 font-medium">
                    {currentImage.title}
                  </h3>
                )}
                {currentImage.caption && (
                  <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                    {currentImage.caption}
                  </p>
                )}
              </div>
            )}

            {/* Striscia miniature scorrevole */}
            {hasMultiple && (
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 overflow-x-auto py-1 max-w-xl mx-auto scrollbar-none">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToIndex(idx)}
                    className={`relative shrink-0 w-12 sm:w-16 h-9 sm:h-11 overflow-hidden transition-all duration-200 cursor-pointer border ${
                      idx === currentIndex
                        ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50 scale-105 opacity-100'
                        : 'border-white/20 opacity-50 hover:opacity-90 hover:border-white/50'
                    }`}
                    aria-label={`Vai alla foto ${idx + 1}`}
                  >
                    <img
                      src={img.url}
                      alt={img.title || `Miniatura ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
