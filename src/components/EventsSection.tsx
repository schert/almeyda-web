import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { Sparkles, PartyPopper, Music, Users, Palette, Calendar } from 'lucide-react';

interface EventsSectionProps {
  onOpenReservation: () => void;
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
      case 'Palette':
      default:
        return <Palette className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="eventi" className="py-24 md:py-32 bg-[#0A0B0D] text-[#F5F2ED] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
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

        {/* Focus Sala Eventi */}
        <div className="bg-[#121418] border border-[#D4AF37]/30 p-8 sm:p-12 mb-16 shadow-2xl relative">
          <div className="max-w-3xl">
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#D4AF37] font-semibold block mb-2">
              Spazio Esclusivo nel Teatro
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2ED] mb-4">
              {t.eventiSection.salaEventiTitle}
            </h3>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed font-light mb-8">
              {t.eventiSection.salaEventiDescription}
            </p>
            <button
              onClick={onOpenReservation}
              className="px-8 py-3.5 bg-[#D4AF37] hover:bg-white text-[#0A0B0D] text-[11px] font-bold tracking-[0.2em] uppercase transition-all shadow-xl"
            >
              {t.eventiSection.ctaBtn}
            </button>
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
