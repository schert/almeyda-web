import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Navigation, Clock } from 'lucide-react';
import { businessConfig } from '../config/almeydaConfig';
import { useTranslation } from '../context/LanguageContext';

export const Location: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="siracusa" className="py-24 md:py-36 bg-[#0A0B0D] text-[#F5F2ED] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 text-[#D4AF37] mb-3">
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold">{t.locationSection.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] font-light tracking-wide">
            {t.locationSection.title}
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-light mt-4 font-sans">
            {t.locationSection.subtitle}
          </p>
          <div className="w-16 h-[1px] bg-[#D4AF37]/40 mx-auto mt-6" />
        </div>

        {/* Location & Contacts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Contact & Hours Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 bg-[#121316] border border-white/5 p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              {/* Address card */}
              <div className="mb-8 pb-8 border-b border-white/5">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] block font-bold mb-2">
                  {t.locationSection.addressTitle}
                </span>
                <div className="flex items-start space-x-3 mt-3">
                  <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-2xl text-[#F5F2ED] font-light">
                      {businessConfig.address}
                    </h3>
                    <p className="text-xs text-white/60 font-light mt-1">
                      {businessConfig.addressNote}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <a
                    href={`tel:${businessConfig.phone}`}
                    className="flex items-center space-x-3 text-xs text-white/80 hover:text-[#D4AF37] transition-colors group p-3 bg-[#0A0B0D] border border-white/5"
                  >
                    <Phone size={15} className="text-[#D4AF37]" />
                    <span className="font-mono tracking-wider">{businessConfig.phoneDisplay}</span>
                  </a>

                  <a
                    href={`mailto:${businessConfig.email}`}
                    className="flex items-center space-x-3 text-xs text-white/80 hover:text-[#D4AF37] transition-colors group p-3 bg-[#0A0B0D] border border-white/5"
                  >
                    <Mail size={15} className="text-[#D4AF37]" />
                    <span className="truncate">{businessConfig.email}</span>
                  </a>
                </div>
              </div>

              {/* Opening Hours Table */}
              <div>
                <div className="flex items-center space-x-2 text-[#D4AF37] mb-4">
                  <Clock size={16} />
                  <span className="text-[10px] tracking-[0.25em] uppercase font-bold">
                    {t.locationSection.hoursTitle}
                  </span>
                </div>

                <div className="space-y-3">
                  {t.locationSection.openingHours.map((slot) => (
                    <div
                      key={slot.days}
                      className="flex items-center justify-between py-2 border-b border-white/5 text-xs font-light"
                    >
                      <span className="text-white/80">{slot.days}</span>
                      <span className="font-mono text-[#D4AF37]">{slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Maps Direction Button */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#D4AF37] hover:bg-white text-[#0A0B0D] text-[11px] tracking-[0.2em] uppercase font-bold transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <Navigation size={15} />
                <span>{t.locationSection.directionsBtn}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Dark Map & City Mood */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative bg-[#121316] border border-white/5 overflow-hidden flex flex-col min-h-[380px]"
          >
            {/* Background image representing Siracusa nocturnal beauty */}
            <img
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop"
              alt="Siracusa Serale - Atmosfera Almeyda"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] contrast-[1.1]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-[#0A0B0D]/60 to-transparent" />

            {/* Dark Styled Map Pin Card Overlay */}
            <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between flex-grow">
              <div className="flex justify-between items-start">
                <span className="text-[10px] tracking-[0.3em] uppercase px-3 py-1 bg-[#0A0B0D]/80 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] font-bold">
                  Siracusa · Sicilia
                </span>

                <a
                  href={businessConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#0A0B0D]/80 backdrop-blur-md border border-white/10 text-[#F5F2ED] hover:text-[#D4AF37] transition-colors"
                  aria-label="Instagram di Almeyda"
                >
                  <Instagram size={18} />
                </a>
              </div>

              <div className="bg-[#0A0B0D]/90 backdrop-blur-md border border-white/10 p-6 mt-12">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping" />
                  <span className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] font-medium">
                    Siracusa
                  </span>
                </div>
                <h4 className="font-serif text-2xl text-[#F5F2ED] font-light">
                  ALMEYDA
                </h4>
                <p className="text-xs text-white/70 font-light mt-1">
                  {t.hero.description}
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-white/40 font-mono">
                  Coordinate: 37° 03′ 54″ N, 15° 17′ 38″ E
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
