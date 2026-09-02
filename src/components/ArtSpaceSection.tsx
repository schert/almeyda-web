import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { Palette, Music, ShieldCheck, Coffee, Users, Sparkles, MessageCircle, ArrowRight, HeartHandshake, ZoomIn } from 'lucide-react';
import { businessConfig } from '../config/almeydaConfig';
import { useLightbox } from '../context/LightboxContext';
import { LightboxImage } from '../types';

interface ArtSpaceSectionProps {
  onOpenArtInquiry?: (message?: string) => void;
}

export const ArtSpaceSection: React.FC<ArtSpaceSectionProps> = ({ onOpenArtInquiry }) => {
  const { t } = useTranslation();
  const { openLightbox } = useLightbox();

  const artLightboxImages: LightboxImage[] = [
    {
      url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
      title: "Spazio all'Arte — Almeyda & Teatro Comunale",
      caption: "Uno spazio monumentale aperto alla musica, alle parole, alle mostre d'arte e all'incontro umano nel cuore di Ortigia.",
      category: "Spazio all'Arte",
      alt: "Musica, arte e accoglienza al Teatro",
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Music':
        return <Music className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const handleArtistClick = () => {
    if (onOpenArtInquiry) {
      onOpenArtInquiry("Desidero presentare una proposta artistica / candidatura per esporre o esibirmi presso lo Spazio all'Arte Almeyda.");
    } else {
      const contactEl = document.getElementById('contattaci');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const whatsappArtistMessage = encodeURIComponent(
    "Salve Almeyda! Sono un artista e desidero proporre una collaborazione / richiedere informazioni sullo Spazio all'Arte del Teatro."
  );

  return (
    <section id="spazio-arte" className="py-24 md:py-32 bg-[#0C0E12] text-[#F5F2ED] relative border-t border-white/5 overflow-hidden">
      {/* Elementi decorativi di sfondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intestazione Sezione */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#D4AF37]/30 bg-[#14161B] text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-4 shadow-sm">
            <Palette className="w-3 h-3" />
            <span>{t.spazioArteSection.badge}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] tracking-wide mb-4">
            {t.spazioArteSection.title}
          </h2>

          <p className="text-[#D4AF37] font-serif italic text-lg sm:text-xl mb-6">
            {t.spazioArteSection.subtitle}
          </p>

          {/* Citazione Manifesto in Evidenza */}
          <div className="relative p-6 sm:p-8 bg-[#15181E] border border-[#D4AF37]/30 shadow-xl my-6">
            <div className="flex items-center justify-center space-x-2 mb-3 text-[#D4AF37]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-[#F5F2ED] leading-relaxed italic">
              "{t.spazioArteSection.quote}"
            </blockquote>
          </div>
        </div>

        {/* Blocco Racconto e Filosofia dell'Accoglienza */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-5 text-white/80 font-light text-sm sm:text-base leading-relaxed">
            <p>
              {t.spazioArteSection.description1}
            </p>
            <p>
              {t.spazioArteSection.description2}
            </p>
            <p className="text-white/90 font-normal">
              {t.spazioArteSection.description3}
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={handleArtistClick}
                className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0B0D] text-xs font-bold uppercase tracking-[0.18em] transition-all flex items-center space-x-2 shadow-lg cursor-pointer"
              >
                <span>{t.spazioArteSection.ctaArtist}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=${whatsappArtistMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-[#171A21] hover:bg-[#20242E] text-white border border-white/15 text-xs font-semibold uppercase tracking-[0.16em] transition-all flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>{t.spazioArteSection.ctaWhatsapp}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div 
              id="art-space-photo-card"
              onClick={() => openLightbox(artLightboxImages, 0)}
              className="relative aspect-4/3 overflow-hidden border border-[#D4AF37]/30 shadow-2xl group cursor-pointer"
              title="Clicca per aprire la foto a tutto schermo"
            >
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop"
                alt="Musica, arte e accoglienza al Teatro"
                className="w-full h-full object-cover filter brightness-[0.98] group-hover:scale-105 transition-all duration-700"
              />

              {/* Gradiente scuro e stile testo coerente con tutte le foto */}
              <div className="absolute inset-x-0 bottom-0 pt-12 pb-3.5 px-3.5 sm:pb-4 sm:px-4 bg-gradient-to-t from-black/95 via-black/75 to-transparent flex flex-col justify-end z-10">
                <p className="text-white text-xs sm:text-sm font-serif font-medium mb-0.5">
                  Teatro Comunale di Siracusa
                </p>
                <p className="text-white/80 text-[10px] sm:text-[11px] line-clamp-1 font-light mb-1.5">
                  Uno spazio aperto alla musica, alle parole e all'incontro umano.
                </p>
                <span className="inline-flex items-center space-x-1.5 text-[9px] sm:text-[10px] text-[#D4AF37] tracking-wider uppercase font-mono font-medium">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Clicca per ingrandire</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Griglia dei 4 Pilastri dell'Accoglienza per Artisti */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.spazioArteSection.features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#14161C] border border-white/10 p-6 sm:p-7 hover:border-[#D4AF37]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-none border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0A0B0D] transition-colors">
                    {getIcon(feat.iconName)}
                  </div>
                  <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-white/5 border border-white/10 text-white/60">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="font-serif text-lg text-[#F5F2ED] mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {feat.title}
                </h3>

                <p className="text-white/65 text-xs sm:text-sm font-light leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] uppercase tracking-widest text-[#D4AF37]/80 font-medium">
                Almeyda Ospitalità
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
