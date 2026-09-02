import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { 
  Users, 
  Sparkles, 
  Palette, 
  Compass, 
  HeartHandshake, 
  Clapperboard, 
  Heart, 
  Wine, 
  Flame, 
  UtensilsCrossed, 
  Wrench, 
  Clock, 
  Globe2, 
  BookOpen, 
  Music, 
  Waves, 
  BedDouble, 
  Utensils
} from 'lucide-react';

interface AboutSectionProps {
  onOpenReservation?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenReservation }) => {
  const { t } = useTranslation();

  const getStaffIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clapperboard':
        return <Clapperboard className="w-5 h-5 text-[#D4AF37]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#D4AF37]" />;
      case 'Wine':
        return <Wine className="w-5 h-5 text-[#D4AF37]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#D4AF37]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  const getIdeaIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#D4AF37]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#D4AF37]" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section 
      id="chi-siamo" 
      className="py-24 md:py-32 bg-[#0C0E11] text-[#F5F2ED] relative border-t border-white/5 scroll-mt-20 overflow-hidden"
    >
      {/* Anchor per retrocompatibilità #about */}
      <span id="about" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ================================================================= */}
        {/* 1. INTESTAZIONE SEZIONE */}
        {/* ================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#D4AF37]/30 bg-[#121418] text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>{t.aboutSection.badge}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] tracking-wide mb-4">
            {t.aboutSection.title}
          </h2>

          <p className="text-[#D4AF37] font-serif italic text-lg sm:text-xl">
            {t.aboutSection.subtitle}
          </p>
        </div>

        {/* ================================================================= */}
        {/* 2. ABOUT: LA NOSTRA STORIA & I GIOVANI IMPRENDITORI */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-[#13161B] border border-white/10 p-8 sm:p-10 shadow-2xl relative"
          >
            <span className="text-[10px] uppercase tracking-[0.26em] text-[#D4AF37] font-semibold block mb-3">
              {t.aboutSection.aboutTitle}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white mb-6 leading-snug">
              Dalla passione condivisa alla creazione di un sogno
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light mb-5">
              {t.aboutSection.aboutText1}
            </p>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light mb-8">
              {t.aboutSection.aboutText2}
            </p>

            {/* 4 Competenze Fondative */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10 text-xs">
              <div className="flex items-center space-x-2.5 text-white/90">
                <BedDouble className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-light">Soggiorni & Accoglienza</span>
              </div>
              <div className="flex items-center space-x-2.5 text-white/90">
                <Utensils className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-light">Ristorazione & Cucina</span>
              </div>
              <div className="flex items-center space-x-2.5 text-white/90">
                <Waves className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-light">Mare & Tradizione</span>
              </div>
              <div className="flex items-center space-x-2.5 text-white/90">
                <Music className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-light">Musica & Atmosfera</span>
              </div>
            </div>
          </motion.div>

          {/* Card L'Idea — Antico Arts Café Bistrot */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 bg-gradient-to-br from-[#181B22] to-[#101216] border border-[#D4AF37]/30 p-8 sm:p-10 shadow-2xl relative"
          >
            <span className="text-[10px] uppercase tracking-[0.26em] text-[#D4AF37] font-semibold block mb-3">
              {t.aboutSection.ideaTitle}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2ED] mb-4 leading-snug">
              {t.aboutSection.ideaSubtitle}
            </h3>

            <div className="p-4 bg-[#0A0B0D]/80 border-l-2 border-[#D4AF37] my-5">
              <p className="text-xs sm:text-sm text-[#E8D5B5] italic font-serif leading-relaxed">
                "{t.aboutSection.ideaQuote}"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {t.aboutSection.ideaPoints.map((point, idx) => (
                <div key={idx} className="p-4 bg-[#0D0F13] border border-white/5">
                  <div className="flex items-center space-x-2.5 mb-2">
                    {getIdeaIcon(point.iconName)}
                    <h4 className="text-xs font-semibold text-white tracking-wide uppercase">
                      {point.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-white/70 font-light leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================================================================= */}
        {/* 3. L'OFFERTA: SOSTA QUOTIDIANA & FOOD AND WINE EXPERIENCES */}
        {/* ================================================================= */}
        <div className="bg-[#121419] border border-white/10 p-8 sm:p-12 mb-24 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[10px] uppercase tracking-[0.26em] text-[#D4AF37] font-semibold block mb-2">
                {t.aboutSection.offerTitle}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">
                {t.aboutSection.offerSubtitle}
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light mb-4">
                {t.aboutSection.offerText1}
              </p>
              <p className="text-[#D4AF37]/90 text-sm sm:text-base leading-relaxed font-serif italic">
                {t.aboutSection.offerText2}
              </p>
            </div>
            
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="p-4 bg-[#0A0B0D] border border-white/5 text-center flex flex-col items-center justify-center">
                <BookOpen className="w-6 h-6 text-[#D4AF37] mb-2" />
                <span className="text-xs font-medium text-white">Studio & Lettura</span>
                <span className="text-[10px] text-white/50">Spazio calmo e accogliente</span>
              </div>
              <div className="p-4 bg-[#0A0B0D] border border-white/5 text-center flex flex-col items-center justify-center">
                <Music className="w-6 h-6 text-[#D4AF37] mb-2" />
                <span className="text-xs font-medium text-white">Buona Musica</span>
                <span className="text-[10px] text-white/50">Selezioni d'altri tempi</span>
              </div>
              <div className="p-4 bg-[#0A0B0D] border border-white/5 text-center flex flex-col items-center justify-center">
                <Wine className="w-6 h-6 text-[#D4AF37] mb-2" />
                <span className="text-xs font-medium text-white">Food & Wine</span>
                <span className="text-[10px] text-white/50">Esperienze sensoriali</span>
              </div>
              <div className="p-4 bg-[#0A0B0D] border border-white/5 text-center flex flex-col items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#D4AF37] mb-2" />
                <span className="text-xs font-medium text-white">Feste & Wedding</span>
                <span className="text-[10px] text-white/50">Indoor & Outdoor</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 4. LO STAFF: L'OROLOGIO DEL VOSTRO BENESSERE */}
        {/* ================================================================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-[0.26em] text-[#D4AF37] font-semibold block mb-2">
              Teatro & Accoglienza
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white mb-4">
              {t.aboutSection.staffTitle}
            </h3>
            <p className="text-[#D4AF37] font-serif italic text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              "{t.aboutSection.staffQuote}"
            </p>
          </div>

          {/* Griglia Ruoli Staff */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3.5 mb-10">
            {t.aboutSection.staffMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="p-4 bg-[#13151A] border border-white/10 hover:border-[#D4AF37]/50 transition-all text-center flex flex-col items-center justify-between group shadow-lg"
              >
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {getStaffIcon(member.iconName)}
                </div>
                
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-mono block mb-1">
                    {member.role}
                  </span>
                  <h4 className="font-serif text-base text-white font-medium group-hover:text-[#D4AF37] transition-colors">
                    {member.name}
                  </h4>
                </div>

                <span className="text-[9px] text-white/50 font-light mt-2 pt-2 border-t border-white/5 w-full">
                  {member.department}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Lingue Parlate & Assistenza Internazionale */}
          <div className="p-5 sm:p-6 bg-[#0E1014] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center space-x-3">
              <Globe2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                  {t.aboutSection.languagesLabel}
                </p>
                <p className="text-xs text-white/70 font-light">
                  Accogliamo con calore ospiti da tutto il mondo
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {t.aboutSection.languages.map((lang, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-[#15181E] border border-white/10 text-white text-xs font-light tracking-wide"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
