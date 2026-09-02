import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { Sparkles, PartyPopper, Music, Users, Palette, Calendar, Utensils, Truck, Compass, CheckCircle2 } from 'lucide-react';

interface EventsSectionProps {
  onOpenReservation?: (message?: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onOpenReservation }) => {
  const { t } = useTranslation();

  const getIcon = (name: string) => {
    switch (name) {
      case 'PartyPopper':
        return <PartyPopper className="w-5 h-5 text-[#D4AF37]" />;
      case 'Music':
        return <Music className="w-5 h-5 text-[#D4AF37]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#D4AF37]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Palette':
      default:
        return <Palette className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="eventi" className="py-24 md:py-32 bg-[#0A0B0D] text-[#F5F2ED] relative border-t border-white/5 scroll-mt-20 overflow-hidden w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Intestazione Sezione */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#D4AF37]/30 bg-[#121317] text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-4">
            <Calendar className="w-3 h-3" />
            <span>{t.eventiSection.badge}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] tracking-wide mb-4">
            {t.eventiSection.title}
          </h2>

          <p className="text-[#D4AF37] font-serif italic text-lg sm:text-xl mb-4">
            {t.eventiSection.subtitle}
          </p>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            {t.eventiSection.description}
          </p>
        </div>

        {/* Focus Sala Eventi & Servizi Chiavi in Mano */}
        <div className="bg-[#121418] border border-[#D4AF37]/30 p-8 sm:p-12 mb-12 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#D4AF37] font-semibold block mb-2">
                Spazio Esclusivo nel Teatro
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2ED] mb-4">
                {t.eventiSection.salaEventiTitle}
              </h3>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed font-light mb-6">
                {t.eventiSection.salaEventiDescription}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs text-white/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Catering Sartoriale</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Allestimenti & Scenografia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Logistica Completa</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-[#0A0B0D] border border-white/10">
              <Sparkles className="w-8 h-8 text-[#D4AF37] mb-3" />
              <h4 className="font-serif text-lg text-white mb-2">Pianifica con Noi</h4>
              <p className="text-white/60 text-xs font-light mb-6">
                Creiamo la formula perfetta per le tue ricorrenze e meeting aziendali.
              </p>
              <button
                onClick={() => onOpenReservation?.("Desidero richiedere disponibilità e dettagli per l'organizzazione di un evento privato / catering / allestimenti al Teatro.")}
                className="w-full px-6 py-3.5 bg-[#D4AF37] hover:bg-white text-[#0A0B0D] text-[11px] font-bold tracking-[0.2em] uppercase transition-all shadow-xl cursor-pointer"
              >
                {t.eventiSection.ctaBtn}
              </button>
            </div>
          </div>
        </div>

        {/* Sezione B2B, Catering, Allestimenti, Logistica & Tour Operator */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-8 bg-[#13161C] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center mb-4">
                <Utensils className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h4 className="font-serif text-xl text-white mb-3">
                {t.eventiSection.cateringLogisticaTitle}
              </h4>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed mb-4">
                {t.eventiSection.cateringLogisticaDescription}
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center space-x-2 text-[11px] text-[#D4AF37] uppercase tracking-wider">
              <Truck className="w-4 h-4" />
              <span>Servizi Indoor & Outdoor</span>
            </div>
          </div>

          <div className="p-8 bg-[#13161C] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center mb-4">
                <Compass className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h4 className="font-serif text-xl text-white mb-3">
                {t.eventiSection.tourOperatorTitle}
              </h4>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed mb-4">
                {t.eventiSection.tourOperatorDescription}
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center space-x-2 text-[11px] text-[#D4AF37] uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>Accoglienza Gruppi & Esperienze B2B</span>
            </div>
          </div>
        </div>

        {/* Tipologie di Eventi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.eventiSection.eventTypes.map((ev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 bg-[#131519] border border-white/10 hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center mb-4">
                  {getIcon(ev.iconName)}
                </div>
                <h4 className="font-serif text-lg text-[#F5F2ED] mb-2">{ev.title}</h4>
                <p className="text-white/60 text-xs font-light leading-relaxed">
                  {ev.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center space-x-1.5 text-[#D4AF37] text-[10px] tracking-wider uppercase">
                <Sparkles className="w-3 h-3" />
                <span>Servizio Dedicato</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

