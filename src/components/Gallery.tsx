import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { LightboxModal } from './LightboxModal';

export const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = t.gallerySection.items;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-24 md:py-36 bg-[#0A0B0D] text-[#F5F2ED] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/5">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#D4AF37] mb-3">
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold">{t.gallerySection.badge}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] font-light tracking-wide">
              {t.gallerySection.title}
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-light mt-3 max-w-xl">
              {t.gallerySection.subtitle}
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-bold">
              {t.gallerySection.clickToEnlarge}
            </span>
          </div>
        </div>
      </div>

      {/* Full-width Asymmetrical Editorial Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.12 }}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden bg-[#121316] border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-500 cursor-pointer ${
                index === 0 || index === 4 ? 'sm:col-span-2 lg:col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center filter brightness-90 contrast-[1.05] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D]/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9px] tracking-[0.25em] uppercase text-[#D4AF37] block font-bold">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-xl text-[#F5F2ED] font-light mt-0.5">
                      {item.title}
                    </h4>
                  </div>
                  <div className="p-2.5 bg-[#0A0B0D]/90 border border-[#D4AF37]/30 text-[#D4AF37]">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={galleryItems}
        currentIndex={currentIndex}
        onSelectIndex={setCurrentIndex}
      />
    </section>
  );
};
