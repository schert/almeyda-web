import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { Sparkles, Wine, Utensils, Compass } from 'lucide-react';

interface ExperiencesSectionProps {
  onOpenReservation?: (message?: string) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ onOpenReservation }) => {
  const { t } = useTranslation();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Wine':
        return <Wine className="w-6 h-6 text-[#D4AF37]" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-[#D4AF37]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="esperienze" className="py-24 md:py-32 bg-[#0E1013] text-[#F5F2ED] relative border-t border-white/5 scroll-mt-20">
      {/* Anchor per retrocompatibilità link #experiences */}
      <span id="experiences" className="absolute -top-24" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intestazione Sezione */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#D4AF37]/30 bg-[#0A0B0D] text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-4">
            <Compass className="w-3 h-3" />
            <span>{t.experiencesSection.badge}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] tracking-wide mb-4">
            {t.experiencesSection.title}
          </h2>

          <p className="text-[#D4AF37] font-serif italic text-lg sm:text-xl mb-4">
            {t.experiencesSection.subtitle}
          </p>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            {t.experiencesSection.description}
          </p>
        </div>

        {/* Griglia Esperienze Sensoriali */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.experiencesSection.items.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#131519] border border-white/10 hover:border-[#D4AF37]/40 p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#0A0B0D] border border-[#D4AF37]/30 flex items-center justify-center">
                    {getIcon(exp.iconName)}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 font-medium">
                    {exp.tag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors mb-2">
                  {exp.title}
                </h3>

                <p className="text-[#E8D5B5] text-xs uppercase tracking-wider mb-4 font-medium">
                  {exp.subtitle}
                </p>

                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-white/50 tracking-wider">
                  {exp.duration}
                </span>
                <button
                  onClick={() => onOpenReservation?.(`Desidero richiedere la prenotazione per l'esperienza: "${exp.title}" (${exp.duration} - ${exp.subtitle}).`)}
                  className="text-[#D4AF37] group-hover:text-white text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <span>{t.experiencesSection.bookBtn}</span>
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
