import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { MapPin, Clock, Navigation, Landmark } from 'lucide-react';
import { businessConfig } from '../config/almeydaConfig';

export const LocationSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="location" className="py-24 md:py-32 bg-[#0A0B0D] text-[#F5F2ED] relative border-t border-white/5">
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

          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            {t.locationSection.description}
          </p>
        </div>

        {/* Scheda Teatro & Architettura */}
        <div className="bg-[#121418] border border-[#D4AF37]/25 p-8 sm:p-12 mb-16 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#D4AF37] font-semibold block mb-2">
                Patrimonio & Bellezza
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2ED] mb-4">
                {t.locationSection.theatreTitle}
              </h3>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed font-light mb-6">
                {t.locationSection.theatreDescription}
              </p>
              <div className="flex flex-wrap gap-4 text-xs tracking-wider uppercase text-white/60">
                <span className="px-3 py-1 bg-white/5 border border-white/10">Ortigia Storica</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10">Architettura Liberty</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10">Giuseppe Damiani Almeyda</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-16/10 rounded-sm overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop"
                alt="Teatro Comunale di Siracusa - Ortigia"
                className="w-full h-full object-cover filter brightness-[0.85]"
              />
            </div>
          </div>
        </div>

        {/* Racconto Visivo / Galleria Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {t.locationSection.gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-4/3 overflow-hidden bg-black border border-white/10"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white text-xs font-serif font-medium">{img.title}</p>
                <p className="text-white/60 text-[10px]">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dettagli Indirizzo & Orari */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#111317] border border-white/10 p-8 md:p-12 shadow-xl">
          {/* Indirizzo & Navigazione */}
          <div>
            <div className="flex items-center space-x-3 text-[#D4AF37] mb-4">
              <MapPin className="w-5 h-5" />
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold">
                {t.locationSection.addressTitle}
              </h3>
            </div>
            <p className="font-serif text-xl sm:text-2xl text-[#F5F2ED] mb-1">
              Almeyda Caffè del Teatro
            </p>
            <p className="text-[#D4AF37] text-sm font-medium mb-1">
              {businessConfig.address}, 96100 Siracusa SR
            </p>
            <p className="text-white/60 text-xs font-light mb-6">
              {businessConfig.addressNote}
            </p>
            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-[#D4AF37] hover:text-black border border-white/20 text-[#F5F2ED] text-[11px] font-bold tracking-[0.18em] uppercase transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>{t.locationSection.directionsBtn}</span>
            </a>
          </div>

          {/* Orari di Apertura */}
          <div>
            <div className="flex items-center space-x-3 text-[#D4AF37] mb-4">
              <Clock className="w-5 h-5" />
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold">
                {t.locationSection.hoursTitle}
              </h3>
            </div>
            <div className="space-y-3">
              {t.locationSection.openingHours.map((slot, idx) => (
                <div key={idx} className="border-b border-white/5 pb-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-white/90 font-medium">{slot.days}</span>
                    <span className="text-[#D4AF37] font-serif">{slot.hours}</span>
                  </div>
                  {slot.note && (
                    <span className="text-[10px] text-white/50 block mt-0.5">
                      {slot.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
