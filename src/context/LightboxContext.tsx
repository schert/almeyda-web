import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { LightboxImage } from '../types';

interface LightboxContextType {
  isOpen: boolean;
  images: LightboxImage[];
  currentIndex: number;
  openLightbox: (images: LightboxImage[], startIndex?: number) => void;
  closeLightbox: () => void;
  goToNext: () => void;
  goToPrevious: () => void;
  goToIndex: (index: number) => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((imgs: LightboxImage[], startIndex: number = 0) => {
    if (!imgs || imgs.length === 0) return;
    setImages(imgs);
    setCurrentIndex(Math.max(0, Math.min(startIndex, imgs.length - 1)));
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const goToNext = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToIndex = useCallback((index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  }, [images.length]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  return (
    <LightboxContext.Provider
      value={{
        isOpen,
        images,
        currentIndex,
        openLightbox,
        closeLightbox,
        goToNext,
        goToPrevious,
        goToIndex,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightbox = (): LightboxContextType => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};
