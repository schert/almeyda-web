import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { 
  UtensilsCrossed, 
  Wine, 
  Coffee, 
  Sparkles, 
  Sun, 
  Feather,
  ArrowRight,
  Droplets
} from 'lucide-react';

interface UnifiedCartaSectionProps {
  onOpenReservation: () => void;
}

type MasterTab = 'bistrot' | 'cocktail' | 'caffetteria';
type MenuCategory = 'all' | 'baguette' | 'antipasti' | 'primi' | 'secondi' | 'dessert' | 'viniOli';
type CocktailCategory = 'all' | 'signature' | 'classici' | 'analcolici';
type CafeteriaCategory = 'all' | 'caffe' | 'pasticceria' | 'infusi';

export const UnifiedCartaSection: React.FC<UnifiedCartaSectionProps> = ({ onOpenReservation }) => {
  const { t } = useTranslation();
  
  // Tab Master principale
  const [activeTab, setActiveTab] = useState<MasterTab>('bistrot');

  // Filtri interni per ciascuna sezione
  const [activeMenuCat, setActiveMenuCat] = useState<MenuCategory>('all');
  const [activeCocktailCat, setActiveCocktailCat] = useState<CocktailCategory>('all');
  const [activeCafeteriaCat, setActiveCafeteriaCat] = useState<CafeteriaCategory>('all');

  // Categorie Bistrot / Menù
  const menuCategories = [
    { key: 'all' as MenuCategory, label: t.menuSection.categories.all },
    { key: 'baguette' as MenuCategory, label: t.menuSection.categories.baguette },
    { key: 'antipasti' as MenuCategory, label: t.menuSection.categories.antipasti },
    { key: 'primi' as MenuCategory, label: t.menuSection.categories.primi },
    { key: 'secondi' as MenuCategory, label: t.menuSection.categories.secondi },
    { key: 'dessert' as MenuCategory, label: t.menuSection.categories.dessert },
    { key: 'viniOli' as MenuCategory, label: t.menuSection.categories.viniOli },
  ];

  // Categorie Cocktail
  const cocktailCategories = [
    { key: 'all' as CocktailCategory, label: t.cocktailSection.categories.all },
    { key: 'signature' as CocktailCategory, label: t.cocktailSection.categories.signature },
    { key: 'classici' as CocktailCategory, label: t.cocktailSection.categories.classici },
    { key: 'analcolici' as CocktailCategory, label: t.cocktailSection.categories.analcolici },
  ];

  // Categorie Caffetteria
  const cafeteriaCategories = [
    { key: 'all' as CafeteriaCategory, label: t.caffetteriaSection.categories.all },
    { key: 'caffe' as CafeteriaCategory, label: t.caffetteriaSection.categories.caffe },
    { key: 'pasticceria' as CafeteriaCategory, label: t.caffetteriaSection.categories.pasticceria },
    { key: 'infusi' as CafeteriaCategory, label: t.caffetteriaSection.categories.infusi }
  ];

  // Dati filtrati
  const filteredDishes = activeMenuCat === 'all'
    ? t.menuSection.dishes
    : t.menuSection.dishes.filter((d) => d.category === activeMenuCat);

  const filteredCocktails = activeCocktailCat === 'all'
    ? t.cocktailSection.cocktails
    : t.cocktailSection.cocktails.filter((c) => c.category === activeCocktailCat);

  const filteredCafeteria = activeCafeteriaCat === 'all'
    ? t.caffetteriaSection.items
    : t.caffetteriaSection.items.filter((item) => item.category === activeCafeteriaCat);

  const getCafeteriaHighlightIcon = (name: string) => {
    switch (name) {
      case 'Coffee':
        return <Coffee className="w-5 h-5" />;
      case 'Sun':
        return <Sun className="w-5 h-5" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5" />;
      default:
        return <Feather className="w-5 h-5" />;
    }
  };

  return (
    <section id="la-carta" className="py-24 md:py-32 bg-[#0C0E12] text-[#F5F2ED] relative border-t border-white/5 scroll-mt-20">
      {/* Anchor per retrocompatibilità con link e bookmark */}
      <span id="menu" className="absolute -top-24" />
      <span id="cocktail-bar" className="absolute -top-24" />
      <span id="caffetteria" className="absolute -top-24" />

      {/* Bagliori e trame di sfondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intestazione Sezione Unificata */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#D4AF37]/30 bg-[#14161B] text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-4 shadow-sm">
            <Sparkles className="w-3 h-3" />
            <span>La Carta di Almeyda</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] tracking-wide mb-4">
            La Carta del Teatro
          </h2>

          <p className="text-[#D4AF37] font-serif italic text-lg sm:text-xl mb-4">
            Bistrot Siciliano · Cocktail Bar d'Autore · Caffetteria Storica
          </p>

          <p className="text-white/70 font-light text-sm sm:text-base leading-relaxed">
            Una proposta organica e artigianale pensata per scandire ogni momento: dalla prima colazione al pranzo leggero, dall'aperitivo al tramonto fino alla cena e ai cocktail dopocena.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SELETTORE DELLE 3 MACRO AREE (Bistrot / Cocktail / Caffetteria) */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-1.5 bg-[#14161C] border border-[#D4AF37]/25 shadow-2xl">
            {/* Tab 1: Bistrot & Cucina */}
            <button
              onClick={() => setActiveTab('bistrot')}
              className={`py-3.5 px-4 text-xs uppercase tracking-[0.18em] transition-all flex items-center justify-center space-x-2.5 cursor-pointer ${
                activeTab === 'bistrot'
                  ? 'bg-[#D4AF37] text-[#0A0B0D] font-bold shadow-lg ring-1 ring-[#D4AF37]'
                  : 'text-white/75 hover:text-white hover:bg-white/5'
              }`}
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>Bistrot & Piatti</span>
            </button>

            {/* Tab 2: Cocktail Bar */}
            <button
              onClick={() => setActiveTab('cocktail')}
              className={`py-3.5 px-4 text-xs uppercase tracking-[0.18em] transition-all flex items-center justify-center space-x-2.5 cursor-pointer ${
                activeTab === 'cocktail'
                  ? 'bg-[#D4AF37] text-[#0A0B0D] font-bold shadow-lg ring-1 ring-[#D4AF37]'
                  : 'text-white/75 hover:text-white hover:bg-white/5'
              }`}
            >
              <Wine className="w-4 h-4" />
              <span>Cocktail Bar</span>
            </button>

            {/* Tab 3: Caffetteria */}
            <button
              onClick={() => setActiveTab('caffetteria')}
              className={`py-3.5 px-4 text-xs uppercase tracking-[0.18em] transition-all flex items-center justify-center space-x-2.5 cursor-pointer ${
                activeTab === 'caffetteria'
                  ? 'bg-[#D4AF37] text-[#0A0B0D] font-bold shadow-lg ring-1 ring-[#D4AF37]'
                  : 'text-white/75 hover:text-white hover:bg-white/5'
              }`}
            >
              <Coffee className="w-4 h-4" />
              <span>Caffetteria</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CONTENUTO MACRO AREA: BISTROT & CUCINA */}
        {/* ========================================================================= */}
        {activeTab === 'bistrot' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Sottotitolo descrittivo Bistrot */}
            <div className="text-center max-w-2xl mx-auto mb-8">
              <p className="text-white/75 text-sm font-light leading-relaxed">
                {t.menuSection.description}
              </p>
            </div>

            {/* Filtri Categorie Menù */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-10 sm:mb-12 px-2">
              {menuCategories.map((cat) => {
                const count = cat.key === 'all'
                  ? t.menuSection.dishes.length
                  : t.menuSection.dishes.filter((d) => d.category === cat.key).length;

                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveMenuCat(cat.key)}
                    className={`px-3.5 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] transition-all flex items-center space-x-2 border cursor-pointer ${
                      activeMenuCat === cat.key
                        ? 'bg-[#D4AF37] text-[#0A0B0D] border-[#D4AF37] font-bold shadow-lg ring-1 ring-[#D4AF37]/50'
                        : 'bg-[#14161A] text-white/75 border-white/10 hover:border-[#D4AF37]/60 hover:text-white hover:bg-[#1C1F26]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.5 font-mono ${
                        activeMenuCat === cat.key
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

            {/* Griglia Piatti Bistrot */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredDishes.map((dish, index: number) => (
                  <motion.div
                    key={dish.id || dish.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="bg-[#14161B] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 relative group"
                  >
                    <div>
                      {dish.featured && (
                        <div className="mb-3.5">
                          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] text-[10px] tracking-wider uppercase font-semibold">
                            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                            <span>{t.menuSection.featuredBadge}</span>
                          </span>
                        </div>
                      )}

                      <div className="mb-3">
                        <h3 className="font-serif text-xl sm:text-2xl text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors leading-snug">
                          {dish.name}
                        </h3>
                      </div>

                      <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed mb-6">
                        {dish.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2.5">
                      {dish.notes && (
                        <span className="text-[10px] uppercase tracking-wider text-white/60 bg-white/5 px-2.5 py-1 border border-white/10 max-w-[calc(100%-80px)] leading-tight">
                          {dish.notes}
                        </span>
                      )}
                      {dish.price && (
                        <span className="font-serif text-lg text-[#D4AF37] ml-auto font-medium whitespace-nowrap pl-2">
                          {dish.price}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* CONTENUTO MACRO AREA: COCKTAIL BAR */}
        {/* ========================================================================= */}
        {activeTab === 'cocktail' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Sottotitolo descrittivo Cocktail */}
            <div className="text-center max-w-2xl mx-auto mb-8">
              <p className="text-white/75 text-sm font-light leading-relaxed">
                {t.cocktailSection.description}
              </p>
            </div>

            {/* Filtri Categorie Cocktail */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl mx-auto mb-10 sm:mb-12 px-2">
              {cocktailCategories.map((cat) => {
                const count = cat.key === 'all'
                  ? t.cocktailSection.cocktails.length
                  : t.cocktailSection.cocktails.filter((c) => c.category === cat.key).length;

                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCocktailCat(cat.key)}
                    className={`px-3.5 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] transition-all flex items-center space-x-2 border cursor-pointer ${
                      activeCocktailCat === cat.key
                        ? 'bg-[#D4AF37] text-[#0A0B0D] border-[#D4AF37] font-bold shadow-lg ring-1 ring-[#D4AF37]/50'
                        : 'bg-[#14161A] text-white/75 border-white/10 hover:border-[#D4AF37]/60 hover:text-white hover:bg-[#1C1F26]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.5 font-mono ${
                        activeCocktailCat === cat.key
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

            {/* Griglia Cocktails */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredCocktails.map((cocktail, index: number) => (
                  <motion.div
                    key={cocktail.id || cocktail.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="bg-[#14161B] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 relative group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-2 py-0.5 border border-[#D4AF37]/20">
                          {cocktail.profile}
                        </span>
                        {cocktail.price && (
                          <span className="font-serif text-lg text-[#D4AF37] font-medium">
                            {cocktail.price}
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors leading-snug mb-3">
                        {cocktail.name}
                      </h3>

                      <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed mb-4">
                        {cocktail.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 space-y-2 text-xs">
                      <div className="text-white/50 text-[11px]">
                        <span className="text-[#D4AF37] font-medium mr-1.5">Ingredienti:</span>
                        <span className="text-white/75">{cocktail.ingredients.join(', ')}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* CONTENUTO MACRO AREA: CAFFETTERIA & DOLCI */}
        {/* ========================================================================= */}
        {activeTab === 'caffetteria' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Sottotitolo descrittivo Caffetteria */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-white/75 text-sm font-light leading-relaxed">
                {t.caffetteriaSection.description}
              </p>
            </div>

            {/* In evidenza: Highlights Caffetteria */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {t.caffetteriaSection.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#14161C] border border-white/10 p-6 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center text-[#D4AF37]">
                        {getCafeteriaHighlightIcon(item.iconName)}
                      </div>
                    </div>

                    <h4 className="font-serif text-lg text-[#F5F2ED] mb-2">
                      {item.title}
                    </h4>

                    <p className="text-white/65 text-xs font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carta Caffetteria con Filtri */}
            <div className="bg-[#121418] border border-white/10 p-6 sm:p-10 md:p-12 shadow-2xl relative">
              <div className="text-center mb-8 pb-6 border-b border-white/10">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-medium block mb-1">
                  {t.common.brandSubtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2ED]">
                  {t.caffetteriaSection.title}
                </h3>
              </div>

              {/* Filtri Categoria Caffetteria */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-2xl mx-auto mb-10 px-2">
                {cafeteriaCategories.map((cat) => {
                  const count = cat.key === 'all'
                    ? t.caffetteriaSection.items.length
                    : t.caffetteriaSection.items.filter((item) => item.category === cat.key).length;

                  return (
                    <button
                      key={cat.key}
                      onClick={() => setActiveCafeteriaCat(cat.key)}
                      className={`px-3.5 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] transition-all flex items-center space-x-2 border cursor-pointer ${
                        activeCafeteriaCat === cat.key
                          ? 'bg-[#D4AF37] text-[#0A0B0D] border-[#D4AF37] font-bold shadow-lg ring-1 ring-[#D4AF37]/50'
                          : 'bg-[#181A20] text-white/75 border-white/10 hover:border-[#D4AF37]/60 hover:text-white hover:bg-[#20232B]'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-[9px] px-1.5 py-0.5 font-mono ${
                          activeCafeteriaCat === cat.key
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

              {/* Elenco Piatti & Voci Caffetteria */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <AnimatePresence mode="popLayout">
                  {filteredCafeteria.map((item, index) => (
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
                <span>Servizio di caffetteria e lievitati disponibile dalle ore 10:00.</span>
                <span className="text-[#D4AF37]">Miscele macinate fresche al momento</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA Prenotazione Tavolo / Esperienza */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenReservation}
            className="px-8 py-4 bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0B0D] font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-xl hover:shadow-2xl cursor-pointer inline-flex items-center space-x-3"
          >
            <span>{t.common.bookTable}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
