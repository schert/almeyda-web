import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';

export const Intro: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="intro" className="relative py-28 md:py-36 bg-[#0A0B0D] text-[#F5F2ED] overflow-hidden border-t border-b border-white/5">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Subtle Brand Motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-8"
        >
          <div className="flex items-center justify-center space-x-3 text-[#D4AF37]">
            <span className="w-8 h-[1px] bg-[#D4AF37]/40" />
            <span className="text-[10px] tracking-[0.4em] uppercase font-light">{t.intro.philosophyBadge}</span>
            <span className="w-8 h-[1px] bg-[#D4AF37]/40" />
          </div>
        </motion.div>

        {/* Large Statement Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F5F2ED] font-light leading-[1.05] tracking-tight"
        >
          <span>{t.intro.statementLine1}</span>
          <br />
          <span className="italic font-normal text-[#D4AF37]">{t.intro.statementLine2}</span>
        </motion.h2>

        {/* Descriptive Body Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed max-w-xl mx-auto font-sans"
        >
          {t.intro.description}
        </motion.p>

        {/* Subtle Decorative Geometry */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-16 h-[1px] bg-[#D4AF37]/40 mx-auto mt-12"
        />
      </div>
    </section>
  );
};

