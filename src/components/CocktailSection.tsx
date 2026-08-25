import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { Cocktail } from '../types';

interface CocktailSectionProps {
  onOpenCocktailMenu: () => void;
  onSelectCocktail?: (cocktail: Cocktail) => void;
}

export const CocktailSection: React.FC<CocktailSectionProps> = ({ onOpenCocktailMenu }) => {
  const { t } = useTranslation();
  const featuredCocktails = t.cocktails.slice(0, 4);

  return (
    <section id="cocktail" className="py-24 md:py-36 bg-[#0A0B0D] text-[#F5F2ED] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-white/5">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#D4AF37] mb-3">
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold">{t.cocktailSection.badge}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] font-light tracking-wide">
              {t.cocktailSection.title}
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-light mt-3 max-w-xl">
              {t.cocktailSection.subtitle}
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={onOpenCocktailMenu}
              className="group inline-flex items-center space-x-3 text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] hover:text-white transition-colors py-2 border-b border-[#D4AF37]/40 hover:border-white"
            >
              <span>{t.cocktailSection.viewMenuBtn}</span>
              <div className="h-[1px] w-6 bg-[#D4AF37] group-hover:w-10 group-hover:bg-white transition-all" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredCocktails.map((cocktail, index) => (
            <motion.div
              key={cocktail.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="group flex flex-col bg-[#121316] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Cocktail Photography */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1A1C20]">
                <img
                  src={cocktail.image}
                  alt={cocktail.name}
                  className="w-full h-full object-cover object-center filter contrast-105 brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Profile Badge */}
                {cocktail.profile && (
                  <div className="absolute top-3 left-3 bg-[#0A0B0D]/80 backdrop-blur-md px-2.5 py-1 text-[9px] tracking-[0.2em] uppercase text-[#D4AF37] border border-[#D4AF37]/20 font-medium">
                    {cocktail.profile}
                  </div>
                )}

                {/* Price Pill - white-space nowrap to prevent line break */}
                <div className="absolute bottom-3 right-3 bg-[#0A0B0D]/90 backdrop-blur-md px-3 py-1 font-serif text-sm tracking-wider text-[#F5F2ED] border border-white/10 italic whitespace-nowrap">
                  {cocktail.price}
                </div>
              </div>

              {/* Cocktail Info */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-xl tracking-[0.05em] text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors">
                      {cocktail.name}
                    </h3>
                  </div>
                  <p className="text-xs text-white/50 font-light leading-relaxed mt-2.5 line-clamp-3">
                    {cocktail.description}
                  </p>
                </div>

                {/* Ingredients tags */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#D4AF37] block mb-1 font-bold">
                    {t.common.ingredients}
                  </span>
                  <p className="text-[11px] text-white/70 font-light truncate">
                    {cocktail.ingredients.join(' · ')}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to open full menu */}
        <div className="mt-16 text-center">
          <button
            id="cocktail-section-full-menu-btn"
            onClick={onOpenCocktailMenu}
            className="px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-bold text-[#0A0B0D] bg-[#D4AF37] hover:bg-white transition-all shadow-md focus:outline-none"
          >
            {t.cocktailSection.viewMenuBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

