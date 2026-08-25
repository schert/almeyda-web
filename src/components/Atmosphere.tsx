import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { atmospherePhotos } from '../config/almeydaConfig';

export const Atmosphere: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="atmosfera" className="py-24 md:py-36 bg-[#0A0B0D] text-[#F5F2ED] relative overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center space-x-2 text-[#D4AF37] mb-3">
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold">{t.atmosphereSection.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] font-light tracking-wide">
            {t.atmosphereSection.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/60 font-light mt-4 leading-relaxed font-sans">
            {t.atmosphereSection.description}
          </p>
          <div className="w-16 h-[1px] bg-[#D4AF37]/40 mx-auto mt-6" />
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Main Large Left Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="md:col-span-7 relative group"
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-[#121316] border border-white/10 shadow-2xl">
              <img
                src={atmospherePhotos[0].url}
                alt={t.atmosphereSection.photos[0]?.title || atmospherePhotos[0].title}
                className="w-full h-full object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D]/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] block font-bold">
                  {t.atmosphereSection.photos[0]?.subtitle || atmospherePhotos[0].subtitle}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#F5F2ED] font-light mt-1">
                  {t.atmosphereSection.photos[0]?.title || atmospherePhotos[0].title}
                </h4>
              </div>
            </div>
          </motion.div>

          {/* Right Stacked Photos */}
          <div className="md:col-span-5 flex flex-col space-y-6 md:space-y-8">
            {/* Top Right Photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#121316] border border-white/10 shadow-xl">
                <img
                  src={atmospherePhotos[1].url}
                  alt={t.atmosphereSection.photos[1]?.title || atmospherePhotos[1].title}
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D]/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] block font-bold">
                    {t.atmosphereSection.photos[1]?.subtitle || atmospherePhotos[1].subtitle}
                  </span>
                  <h4 className="font-serif text-lg text-[#F5F2ED] font-light mt-0.5">
                    {t.atmosphereSection.photos[1]?.title || atmospherePhotos[1].title}
                  </h4>
                </div>
              </div>
            </motion.div>

            {/* Bottom Right Photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#121316] border border-white/10 shadow-xl">
                <img
                  src={atmospherePhotos[2].url}
                  alt={t.atmosphereSection.photos[2]?.title || atmospherePhotos[2].title}
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D]/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] block font-bold">
                    {t.atmosphereSection.photos[2]?.subtitle || atmospherePhotos[2].subtitle}
                  </span>
                  <h4 className="font-serif text-lg text-[#F5F2ED] font-light mt-0.5">
                    {t.atmosphereSection.photos[2]?.title || atmospherePhotos[2].title}
                  </h4>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

