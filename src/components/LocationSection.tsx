import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { 
  Landmark, 
  ZoomIn, 
  Sparkles, 
  Palette, 
  Compass, 
  Music, 
  Drama,
  Layers
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';
import { useLightbox } from '../context/LightboxContext';
import { LightboxImage } from '../types';

export const LocationSection: React.FC = () => {
  const { t } = useTranslation();
  const { openLightbox } = useLightbox();

  // Collezione completa immagini per il visualizzatore a tutto schermo
  const locationLightboxImages: LightboxImage[] = [
    {
      url: getAssetUrl('images/teatro-comunale-siracusa-interno.jpg'),
      title: "Teatro Comunale di Siracusa — Sala Storica",
      caption: "La magnifica sala storica all'italiana: volta affrescata da Gustavo Mancinelli con il rosone centrale e i tre ordini di palchi in velluto rosso.",
      category: "Teatro Comunale",
      alt: "Interno del Teatro Comunale di Siracusa - Volta affrescata e Palchetti",
    },
    ...t.locationSection.gallery.map((img) => ({
      url: img.imageUrl,
      title: img.title,
      caption: img.caption,
      category: "Ortigia & Location",
      alt: img.title,
    })),
  ];

  const getRoomIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#D4AF37]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#D4AF37]" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-[#D4AF37]" />;
      case 'Music':
        return <Music className="w-5 h-5 text-[#D4AF37]" />;
      case 'Theater':
      case 'Drama':
        return <Drama className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Layers className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="ambientazione" className="py-24 md:py-32 bg-[#0A0B0D] text-[#F5F2ED] relative border-t border-white/5 scroll-mt-20">
      {/* Anchor per retrocompatibilità link #location */}
      <span id="location" className="absolute -top-24" />

      {/* Bagliore decorativo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4/5 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intestazione Sezione */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#D4AF37]/30 bg-[#121317] text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-4">
            <Landmark className="w-3 h-3" />
            <span>{t.locationSection.badge}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] tracking-wide mb-4">
            {t.locationSection.title}
          </h2>

          <p className="text-[#D4AF37] font-serif italic text-lg sm:text-xl mb-4">
            {t.locationSection.subtitle}
          </p>
        </div>

        {/* Scheda Monumentale: Teatro Comunale & Omaggio ad Almeyda */}
        <div className="bg-[#121418] border border-[#D4AF37]/30 p-8 sm:p-12 mb-16 relative overflow-hidden shadow-2xl">
          {/* Angoli decorativi */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#D4AF37] font-semibold block mb-2">
                Ortigia · Teatro Comunale di Siracusa
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2ED] mb-4">
                {t.locationSection.theatreTitle}
              </h3>
              
              <div className="space-y-4 text-white/85 text-sm sm:text-base leading-relaxed font-light">
                <p className="border-l-2 border-[#D4AF37] pl-4 italic text-[#E8D5B5]">
                  Situato nel cuore del centro storico, nell'isola di Ortigia e all'interno delle suggestive sale del Teatro Comunale di Siracusa.
                </p>
                <p>
                  Almeyda e il Teatro Massimo, in omaggio ad uno dei più celebri rappresentanti del panorama architettonico in Sicilia tra la seconda metà dell’Ottocento ed i primi del Novecento, <strong>Giuseppe Damiani Almeyda (1834 - 1911)</strong>.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 mt-6 text-[11px] tracking-wider uppercase text-white/70">
                <span className="px-3 py-1.5 bg-white/5 border border-white/10">Ortigia Storica</span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10">Architettura Liberty</span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10">Giuseppe Damiani Almeyda</span>
              </div>
            </div>

            <div 
              id="teatro-siracusa-photo-card"
              onClick={() => openLightbox(locationLightboxImages, 0)}
              className="lg:col-span-5 relative aspect-16/10 rounded-sm overflow-hidden border border-white/15 group shadow-2xl cursor-pointer"
              title="Clicca per aprire la foto a tutto schermo"
            >
              <img
                src={getAssetUrl('images/teatro-comunale-siracusa-interno.jpg')}
                alt="Interno del Teatro Comunale di Siracusa - Volta affrescata e Palchetti"
                className="w-full h-full object-cover filter brightness-[0.98] group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Badge Sala Storica */}
              <span className="absolute top-3 right-3 text-[9px] uppercase tracking-wider text-[#D4AF37] bg-black/80 backdrop-blur-xs px-2.5 py-1 border border-[#D4AF37]/40 font-semibold z-10 shadow-md">
                Sala Storica
              </span>

              {/* Gradiente testo inferiore */}
              <div className="absolute inset-x-0 bottom-0 pt-12 pb-3.5 px-3.5 sm:pb-4 sm:px-4 bg-gradient-to-t from-black/95 via-black/75 to-transparent flex flex-col justify-end z-10">
                <p className="text-white text-xs sm:text-sm font-serif font-medium mb-0.5">Teatro Comunale di Siracusa</p>
                <p className="text-white/80 text-[10px] sm:text-[11px] line-clamp-1 font-light mb-1.5">Volta affrescata da Gustavo Mancinelli e palchi storici</p>
                <span className="inline-flex items-center space-x-1.5 text-[9px] sm:text-[10px] text-[#D4AF37] tracking-wider uppercase font-mono font-medium">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Clicca per ingrandire</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LE SALE & GLI SPAZI DEL TEATRO */}
        {/* ========================================================================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F2ED] tracking-wide mb-3">
              {t.locationSection.roomsTitle}
            </h3>
            <p className="text-[#D4AF37] font-serif italic text-base sm:text-lg">
              {t.locationSection.roomsSubtitle}
            </p>
          </div>

          {/* 1. Fotografie degli Spazi del Teatro (Prima) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {t.locationSection.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => openLightbox(locationLightboxImages, i + 1)}
                className="group relative aspect-4/3 overflow-hidden bg-black border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer shadow-lg"
                title={`${img.title} — Clicca per aprire a tutto schermo`}
              >
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* Gradiente testo */}
                <div className="absolute inset-x-0 bottom-0 pt-10 pb-3.5 px-3.5 sm:pb-4 sm:px-4 bg-gradient-to-t from-black/95 via-black/75 to-transparent flex flex-col justify-end">
                  <p className="text-white text-xs font-serif font-medium mb-0.5">{img.title}</p>
                  <p className="text-white/80 text-[10px] line-clamp-2 mb-1.5 leading-snug">{img.caption}</p>
                  <span className="inline-flex items-center space-x-1.5 text-[9px] text-[#D4AF37] tracking-wider uppercase font-mono font-medium">
                    <ZoomIn className="w-3 h-3 text-[#D4AF37]" />
                    <span>Clicca per ingrandire</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. I Box delle 6 Sale Storiche (Dopo, Senza Numerazione) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.locationSection.rooms.map((room, index) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#13151A] border border-white/10 hover:border-[#D4AF37]/60 p-6 sm:p-7 relative group transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-[#1A1D24] border border-[#D4AF37]/30 flex items-center justify-center shadow-inner">
                      {getRoomIcon(room.iconName)}
                    </div>
                    <span className="text-[9px] uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 border border-[#D4AF37]/20 font-semibold">
                      {room.tag}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors mb-2.5">
                    {room.name}
                  </h4>

                  <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                    {room.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-white/40 uppercase tracking-widest font-mono">
                  <span>Spazio Storico</span>
                  <span className="text-[#D4AF37] flex items-center space-x-1">
                    <Sparkles className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
