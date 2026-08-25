import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, MessageSquare, Phone, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '../config/almeydaConfig';
import { useTranslation } from '../context/LanguageContext';
import { ReservationFormData } from '../types';

export const Reservation: React.FC = () => {
  const { t, language } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '20:30',
    guests: 2,
    area: 'dining_room',
    experienceType: 'cena',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate WhatsApp booking link with pre-filled message
  const handleWhatsAppBooking = () => {
    const isEn = language === 'en';
    const areaText = {
      cocktail_bar: isEn ? 'Cocktail Bar & Counter' : 'Bancone Mixology',
      dining_room: isEn ? 'Dining Room' : 'Sala Dining',
      dehors: isEn ? 'Outdoor Dehors / Terrace' : 'Dehors Estivo'
    }[formData.area];

    const expText = {
      aperitivo: isEn ? 'Aperitivo & Cocktail' : 'Aperitivo & Cocktail',
      cena: isEn ? 'Dinner Dining' : 'Cena Dining',
      dopocena: isEn ? 'After Dinner & Cocktails' : 'Cocktail Dopo Cena'
    }[formData.experienceType];

    const customMessage = isEn
      ? `Hello Almeyda Syracuse, I would like to reserve a table:
- Date: ${formData.date}
- Time: ${formData.time}
- Guests: ${formData.guests} people
- Experience: ${expText} (${areaText})
- Name: ${formData.name || 'Website Inquiry'}
${formData.phone ? `- Phone: ${formData.phone}` : ''}
${formData.notes ? `- Notes: ${formData.notes}` : ''}`
      : `Salve Almeyda Siracusa, desidero prenotare un tavolo per:
- Data: ${formData.date}
- Orario: ${formData.time}
- Ospiti: ${formData.guests} persone
- Esperienza: ${expText} (${areaText})
- Nome: ${formData.name || 'Richiesta da Sito Web'}
${formData.phone ? `- Recapito: ${formData.phone}` : ''}
${formData.notes ? `- Note: ${formData.notes}` : ''}`;

    const encoded = encodeURIComponent(customMessage);
    const url = `https://wa.me/${businessConfig.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePhoneBooking = () => {
    window.location.href = `tel:${businessConfig.phone}`;
  };

  const scrollToReservationCard = () => {
    setTimeout(() => {
      if (cardRef.current) {
        const navbarHeight = 90;
        const elementPosition = cardRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });
      }
    }, 50);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    scrollToReservationCard();
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    scrollToReservationCard();
  };

  return (
    <section id="prenotazione" className="py-24 md:py-36 bg-[#0A0B0D] text-[#F5F2ED] relative overflow-hidden border-t border-white/5">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 text-[#D4AF37] mb-3">
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold">{t.reservationSection.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] font-light tracking-wide">
            {t.reservationSection.title}
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-light mt-4 font-sans">
            {t.reservationSection.subtitle}
          </p>
          <div className="w-16 h-[1px] bg-[#D4AF37]/40 mx-auto mt-6" />
        </div>

        {/* Interactive Reservation Card */}
        <div ref={cardRef} className="bg-[#121316] border border-white/10 p-8 sm:p-12 shadow-2xl relative min-h-[460px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmitForm}
                className="space-y-8"
              >
                {/* 1. Experience Type Selection */}
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] block mb-3 font-bold">
                    {t.reservationSection.form.experienceTypeLabel}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { key: 'aperitivo', label: t.reservationSection.form.experienceTypes.aperitivo.title, sub: t.reservationSection.form.experienceTypes.aperitivo.desc },
                      { key: 'cena', label: t.reservationSection.form.experienceTypes.cena.title, sub: t.reservationSection.form.experienceTypes.cena.desc },
                      { key: 'dopocena', label: t.reservationSection.form.experienceTypes.dopocena.title, sub: t.reservationSection.form.experienceTypes.dopocena.desc }
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setFormData({ ...formData, experienceType: item.key as any })}
                        className={`p-4 text-left transition-all border ${
                          formData.experienceType === item.key
                            ? 'bg-[#D4AF37] text-[#0A0B0D] border-[#D4AF37] font-medium shadow-md'
                            : 'bg-[#0A0B0D] border-white/10 text-white/70 hover:border-[#D4AF37]/40'
                        }`}
                      >
                        <span className="block text-xs font-bold tracking-wider">{item.label}</span>
                        <span className={`block text-[10px] mt-1 ${formData.experienceType === item.key ? 'text-[#0A0B0D]/80' : 'text-[#D4AF37]'}`}>{item.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Grid with Date, Time, Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Date */}
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] block mb-2 font-bold">
                      {t.reservationSection.form.dateLabel}
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-[#0A0B0D] border border-white/15 px-4 py-3 text-xs tracking-wider text-[#F5F2ED] focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] block mb-2 font-bold">
                      {t.reservationSection.form.timeLabel}
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#0A0B0D] border border-white/15 px-4 py-3 text-xs tracking-wider text-[#F5F2ED] focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="18:30" className="bg-[#0A0B0D] text-[#F5F2ED]">18:30 (Aperitivo)</option>
                      <option value="19:30" className="bg-[#0A0B0D] text-[#F5F2ED]">19:30</option>
                      <option value="20:00" className="bg-[#0A0B0D] text-[#F5F2ED]">20:00</option>
                      <option value="20:30" className="bg-[#0A0B0D] text-[#F5F2ED]">20:30</option>
                      <option value="21:30" className="bg-[#0A0B0D] text-[#F5F2ED]">21:30</option>
                      <option value="22:30" className="bg-[#0A0B0D] text-[#F5F2ED]">22:30</option>
                      <option value="23:30" className="bg-[#0A0B0D] text-[#F5F2ED]">23:30 (After dinner)</option>
                    </select>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] block mb-2 font-bold">
                      {t.reservationSection.form.guestsLabel}
                    </label>
                    <div className="flex items-center bg-[#0A0B0D] border border-white/15 px-4 py-2">
                      <Users size={14} className="text-[#D4AF37] mr-3" />
                      <input
                        type="number"
                        min={1}
                        max={16}
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 1 })}
                        className="w-full bg-transparent text-xs tracking-wider text-[#F5F2ED] focus:outline-none"
                      />
                      <span className="text-[10px] text-white/40 uppercase tracking-widest">{t.reservationSection.form.guestsOption}</span>
                    </div>
                  </div>
                </div>

                {/* 3. Name, Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] block mb-2 font-bold">
                      {t.reservationSection.form.nameLabel} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.reservationSection.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0A0B0D] border border-white/15 px-4 py-3 text-xs tracking-wider text-[#F5F2ED] placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] block mb-2 font-bold">
                      {t.reservationSection.form.phoneLabel} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.reservationSection.form.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0A0B0D] border border-white/15 px-4 py-3 text-xs tracking-wider text-[#F5F2ED] placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Direct Action Booking Buttons */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    {/* WhatsApp Fast Booking */}
                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="px-6 py-3.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 text-[10px] tracking-[0.2em] uppercase font-bold transition-colors inline-flex items-center justify-center space-x-2"
                    >
                      <MessageSquare size={15} />
                      <span>WhatsApp</span>
                    </button>

                    {/* Direct Call */}
                    <button
                      type="button"
                      onClick={handlePhoneBooking}
                      className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-[#F5F2ED] border border-white/15 text-[10px] tracking-[0.2em] uppercase font-bold transition-colors inline-flex items-center justify-center space-x-2"
                    >
                      <Phone size={14} className="text-[#D4AF37]" />
                      <span>{t.reservationSection.confirmation.callBtn}</span>
                    </button>
                  </div>

                  {/* Submit online form */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-white text-[#0A0B0D] text-[11px] font-bold tracking-[0.2em] uppercase transition-all shadow-md"
                  >
                    {t.reservationSection.form.submitBtn}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center max-w-lg mx-auto"
              >
                <div className="w-16 h-16 bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center mx-auto mb-6 border border-[#D4AF37]/40">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-3xl text-[#F5F2ED] font-light">
                  {t.reservationSection.confirmation.badge}
                </h3>
                <p className="text-sm text-white/70 mt-3 font-light leading-relaxed">
                  {t.reservationSection.confirmation.title} {formData.name || ''}. {t.reservationSection.confirmation.greeting}{' '}
                  <strong className="text-[#D4AF37]">{formData.date}</strong> —{' '}
                  <strong className="text-[#D4AF37]">{formData.time}</strong> ({formData.guests} {t.reservationSection.form.guestsOption.toLowerCase()}).
                </p>
                <p className="text-xs text-white/40 mt-2 font-light">
                  {t.reservationSection.confirmation.summaryNote}
                </p>

                <div className="mt-8 flex justify-center space-x-4">
                  <button
                    onClick={handleResetForm}
                    className="px-6 py-3 text-[10px] tracking-[0.2em] uppercase border border-white/20 text-[#F5F2ED] hover:bg-white hover:text-black transition-colors"
                  >
                    {t.reservationSection.confirmation.newRequestBtn}
                  </button>
                  <button
                    onClick={handleWhatsAppBooking}
                    className="px-6 py-3 text-[10px] tracking-[0.2em] uppercase bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366]/30 transition-colors"
                  >
                    WhatsApp
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
