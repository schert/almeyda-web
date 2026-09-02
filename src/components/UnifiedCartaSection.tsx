import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { 
  Sparkles, 
  ArrowRight,
  ZoomIn,
  UtensilsCrossed,
  Heart
} from 'lucide-react';
import { useLightbox } from '../context/LightboxContext';
import { LightboxImage } from '../types';

interface UnifiedCartaSectionProps {
  onOpenReservation: () => void;
}

export const UnifiedCartaSection: React.FC<UnifiedCartaSectionProps> = ({ onOpenReservation }) => {
  const { t } = useTranslation();
  const { openLightbox } = useLightbox();

  // Immagini della galleria con supporto Lightbox a schermo intero
  const menuLightboxImages: LightboxImage[] = t.menuSection.gallery.map((item) => ({
    url: item.imageUrl,
    title: item.title,
    caption: `${item.description} — Preparato artigianalmente ad Almeyda`,
    category: "Homemade Menu",
    alt: item.title,
  }));

  return (
    <section id="sapori" className="py-24 md:py-32 bg-[#0C0E12] text-[#F5F2ED] relative border-t border-white/5 scroll-mt-20 overflow-hidden w-full">
      {/* Anchor per retrocompatibilità link */}
      <span id="la-carta" className="absolute -top-24" />
      <span id="menu" className="absolute -top-24" />
      <span id="cocktail-bar" className="absolute -top-24" />
      <span id="caffetteria" className="absolute -top-24" />

      {/* Bagliori e trame di sfondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Intestazione Sezione */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#D4AF37]/30 bg-[#14161B] text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-4 shadow-sm">
            <Sparkles className="w-3 h-3" />
            <span>{t.menuSection.badge}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] tracking-wide mb-5">
            {t.menuSection.title}
          </h2>

          {/* Dicitura Primaria Richiesta */}
          <div className="py-4 px-6 sm:px-8 bg-[#15181F]/90 border border-[#D4AF37]/35 shadow-xl inline-block max-w-2xl mx-auto mb-6">
            <p className="text-[#D4AF37] font-serif italic text-xl sm:text-2xl md:text-3xl font-medium tracking-wide">
              "{t.menuSection.subtitle}"
            </p>
          </div>

          <p className="text-white/75 font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t.menuSection.description}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* GRIGLIA FOTOGRAFICA CULINARIA HOMEMADE (SOLO FOTO CON DETTAGLI E LIGHTBOX) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 mb-16">
          {t.menuSection.gallery.map((item, index: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => openLightbox(menuLightboxImages, index)}
              className="group relative aspect-4/5 overflow-hidden bg-[#14161C] border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-2xl cursor-pointer flex flex-col justify-end"
              title={`${item.title} — Clicca per ingrandire la foto`}
            >
              {/* Immagine del Piatto / Proposta */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.92] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Tag in alto a destra se presente */}
              {item.highlight && (
                <span className="absolute top-3.5 right-3.5 text-[9px] uppercase tracking-wider text-[#D4AF37] bg-black/85 backdrop-blur-xs px-2.5 py-1 border border-[#D4AF37]/40 font-semibold z-10 shadow-md">
                  {item.highlight}
                </span>
              )}

              {/* Angolo decorativo Liberty in hover */}
              <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#D4AF37]/0 group-hover:border-[#D4AF37] transition-all duration-300 z-10" />

              {/* Sovrapposizione gradiente elegante per il testo */}
              <div className="relative z-10 pt-16 pb-4 px-4 sm:pb-5 sm:px-5 bg-gradient-to-t from-black/95 via-black/80 to-transparent flex flex-col justify-end">
                <h3 className="text-white text-base sm:text-lg font-serif font-medium mb-1 group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/75 text-xs font-light line-clamp-2 leading-relaxed mb-2.5">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <span className="inline-flex items-center space-x-1 text-[10px] text-[#D4AF37] tracking-wider uppercase font-mono font-medium">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Ingrandisci</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">
                    Homemade
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* BANNER CONCLUSIVO D'INVITO & PRENOTAZIONE */}
        {/* ========================================================================= */}
        <div className="bg-[#13151A] border border-[#D4AF37]/30 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl max-w-4xl mx-auto">
          {/* Angoli decorativi */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />

          <div className="inline-flex items-center justify-center space-x-2 text-[#D4AF37] mb-3">
            <UtensilsCrossed className="w-5 h-5" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold">Autenticità & Passione</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F5F2ED] mb-4">
            Scopri il nostro menu' homemade, vieni a trovarci.
          </h3>

          <p className="text-white/70 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Dal profumo delle baguette calde ai calici di vino selezionato, ogni giorno ad Almeyda è un'esperienza sensoriale da vivere di persona all'interno del Teatro Comunale di Siracusa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0B0D] font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-xl hover:shadow-2xl cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>{t.common.bookTable}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#ambientazione"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-[#F5F2ED] border border-white/20 font-semibold text-xs uppercase tracking-[0.18em] transition-all flex items-center justify-center space-x-2"
            >
              <span>Scopri la Location</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
