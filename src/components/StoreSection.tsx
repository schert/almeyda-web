import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { 
  ShoppingBag, 
  Sparkles, 
  ZoomIn, 
  MessageCircle, 
  Package, 
  Check, 
  Gift, 
  Wine, 
  Flame,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { businessConfig } from '../config/almeydaConfig';
import { useLightbox } from '../context/LightboxContext';
import { LightboxImage } from '../types';

interface StoreSectionProps {
  onOpenInquiry?: (message?: string) => void;
}

export const StoreSection: React.FC<StoreSectionProps> = ({ onOpenInquiry }) => {
  const { t } = useTranslation();
  const { openLightbox } = useLightbox();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const products = t.storeSection.products;
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const storeLightboxImages: LightboxImage[] = products.map((prod) => ({
    url: prod.imageUrl,
    title: prod.title,
    caption: `${prod.description} (${prod.origin}) — ${prod.details || ''}`,
    category: "Negozio & Bottega Almeyda",
    alt: prod.title,
  }));

  const handleProductWhatsApp = (productTitle: string) => {
    const msg = encodeURIComponent(
      `Salve Almeyda! Desidero richiedere informazioni / disponibilità per il prodotto "${productTitle}" della vostra Bottega.`
    );
    window.open(`https://wa.me/${businessConfig.whatsappNumber}?text=${msg}`, '_blank');
  };

  const handleGeneralInquiry = (customMsg?: string) => {
    if (onOpenInquiry) {
      onOpenInquiry(customMsg || "Desidero richiedere informazioni sull'acquisto, disponibilità e spedizione dei prodotti della Bottega Almeyda.");
    } else {
      const contactEl = document.getElementById('contattaci');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'oli':
        return <Flame className="w-3.5 h-3.5" />;
      case 'dispensa':
        return <Package className="w-3.5 h-3.5" />;
      case 'vini':
        return <Wine className="w-3.5 h-3.5" />;
      case 'ceramiche':
        return <Gift className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="negozio" className="py-24 md:py-32 bg-[#0A0B0D] text-[#F5F2ED] relative border-t border-white/5 scroll-mt-20 overflow-hidden w-full">
      {/* Anchor retrocompatibile */}
      <span id="store" className="absolute -top-24" />

      {/* Bagliori e trame di sfondo */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Intestazione Sezione */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#D4AF37]/30 bg-[#121418] text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-4 shadow-sm">
            <ShoppingBag className="w-3 h-3" />
            <span>{t.storeSection.badge}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] tracking-wide mb-4">
            {t.storeSection.title}
          </h2>

          <p className="text-[#D4AF37] font-serif italic text-lg sm:text-xl mb-4 max-w-2xl mx-auto">
            "{t.storeSection.subtitle}"
          </p>

          <p className="text-white/70 font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t.storeSection.description}
          </p>
        </div>

        {/* Categorie di Filtro Bottega */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {Object.entries(t.storeSection.categories).map(([key, label]) => {
            const isSelected = selectedCategory === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`inline-flex items-center space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer font-medium ${
                  isSelected
                    ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 border border-[#D4AF37] font-bold'
                    : 'bg-[#121418] text-white/70 hover:text-white border border-white/10 hover:border-[#D4AF37]/40'
                }`}
              >
                {getCategoryIcon(key)}
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Griglia Prodotti Bottega */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <AnimatePresence>
            {filteredProducts.map((product, index) => {
              const fullIndex = products.findIndex(p => p.id === product.id);
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-[#121418] border border-white/10 hover:border-[#D4AF37]/60 group flex flex-col justify-between transition-all duration-500 shadow-xl overflow-hidden relative"
                >
                  {/* Angoli Liberty sottili */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#D4AF37]/0 group-hover:border-[#D4AF37] transition-all duration-300 z-20" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#D4AF37]/0 group-hover:border-[#D4AF37] transition-all duration-300 z-20" />

                  <div>
                    {/* Immagine con click per Lightbox */}
                    <div 
                      onClick={() => openLightbox(storeLightboxImages, fullIndex !== -1 ? fullIndex : 0)}
                      className="relative aspect-4/3 overflow-hidden bg-black cursor-pointer"
                      title={`${product.title} — Clicca per ingrandire`}
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.92] contrast-[1.05]"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent opacity-80" />

                      {/* Tag d'eccellenza */}
                      <span className="absolute top-3 right-3 text-[9px] uppercase tracking-wider text-[#D4AF37] bg-black/85 backdrop-blur-xs px-2.5 py-1 border border-[#D4AF37]/40 font-semibold shadow-md">
                        {product.tag}
                      </span>

                      <span className="absolute bottom-3 right-3 inline-flex items-center space-x-1 text-[9px] text-[#D4AF37] tracking-wider uppercase font-mono font-medium bg-black/75 px-2 py-0.5 border border-white/10">
                        <ZoomIn className="w-3 h-3" />
                        <span>Foto</span>
                      </span>
                    </div>

                    {/* Dettagli Prodotto */}
                    <div className="p-5 sm:p-6">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-mono block mb-1">
                        {product.origin}
                      </span>

                      <h3 className="font-serif text-lg text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors mb-2 leading-snug font-medium">
                        {product.title}
                      </h3>

                      <p className="text-white/70 text-xs font-light leading-relaxed mb-4">
                        {product.description}
                      </p>

                      {product.details && (
                        <div className="text-[10px] text-white/50 border-t border-white/5 pt-2.5 mb-2 font-mono flex items-center space-x-1.5">
                          <Check className="w-3 h-3 text-[#D4AF37]" />
                          <span>{product.details}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pulsante Richiesta / Acquisto */}
                  <div className="p-5 sm:p-6 pt-0">
                    <button
                      onClick={() => handleProductWhatsApp(product.title)}
                      className="w-full py-2.5 px-3 bg-white/5 hover:bg-[#D4AF37] hover:text-black border border-white/10 hover:border-[#D4AF37] text-[#F5F2ED] text-[10px] uppercase tracking-[0.16em] font-semibold transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Richiedi / Prenota</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ========================================================================= */}
        {/* BANNER INFORMAZIONI BOTTEGA, CONFEZIONI & SPEDIZIONI */}
        {/* ========================================================================= */}
        <div className="bg-[#13151A] border border-[#D4AF37]/35 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Angoli decorativi */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center space-x-2 text-[#D4AF37] mb-2 text-xs uppercase tracking-[0.2em] font-bold">
                <Gift className="w-4 h-4" />
                <span>Bottega in Sede & Gift Box Personalizzate</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2ED] mb-3">
                Disponibilità al Bistrot & Confezioni da Viaggio
              </h3>
              <p className="text-white/80 text-sm font-light leading-relaxed mb-4">
                {t.storeSection.inStoreNotice}
              </p>
              <div className="flex flex-wrap gap-3 text-[11px] tracking-wider uppercase text-white/70">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/5 border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Imballaggi Protetti per Aereo</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/5 border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Sigillo in Ceralacca Almeyda</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/5 border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Spedizioni in Tutta Italia & Europa</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent("Salve Almeyda! Vorrei informazioni sui prodotti del vostro negozio / gift box.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-bold text-xs uppercase tracking-[0.18em] transition-all flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.storeSection.ctaWhatsapp}</span>
              </a>

              <button
                onClick={() => handleGeneralInquiry()}
                className="w-full py-3.5 px-6 bg-white/5 hover:bg-white/10 border border-white/20 text-[#F5F2ED] font-semibold text-xs uppercase tracking-[0.18em] transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{t.storeSection.ctaInquire}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
