import React from 'react';
import { motion } from 'motion/react';
import { Wine, Utensils, Sparkles } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

interface ExperienceProps {
  onOpenCocktailMenu: () => void;
  onOpenDiningMenu: () => void;
  onOpenReservation: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({
  onOpenCocktailMenu,
  onOpenDiningMenu,
  onOpenReservation
}) => {
  const { t } = useTranslation();

  const iconMap = {
    Wine: <Wine size={24} className="text-[#D4AF37] stroke-[1.5]" />,
    Utensils: <Utensils size={24} className="text-[#D4AF37] stroke-[1.5]" />,
    Sparkles: <Sparkles size={24} className="text-[#D4AF37] stroke-[1.5]" />
  };

  const actionHandlers = [onOpenCocktailMenu, onOpenDiningMenu, onOpenReservation];

  return (
    <section id="esperienza" className="py-24 md:py-36 bg-[#0A0B0D] text-[#F5F2ED] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          {t.experienceSection.pillars.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              onClick={actionHandlers[idx]}
              className="group p-8 md:p-10 bg-[#121316] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                <div className="mb-8 w-12 h-12 flex items-center justify-center border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60 transition-colors">
                  {iconMap[exp.iconName as keyof typeof iconMap] || <Sparkles size={24} className="text-[#D4AF37]" />}
                </div>

                <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] block font-bold mb-2">
                  {exp.subtitle}
                </span>

                <h3 className="font-serif text-2xl md:text-3xl text-[#F5F2ED] font-light tracking-wide group-hover:text-[#D4AF37] transition-colors">
                  {exp.title}
                </h3>

                <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed mt-4 font-sans">
                  {exp.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1">
                  <span>{t.experienceSection.exploreBtn}</span>
                  <span>→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
