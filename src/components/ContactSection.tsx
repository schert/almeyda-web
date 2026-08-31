import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '../config/almeydaConfig';

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'tavolo' as 'tavolo' | 'evento' | 'informazioni',
    date: '',
    time: '20:00',
    guests: '2',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Salve Almeyda, vorrei informazioni o prenotare per ${formData.name ? formData.name : 'un tavolo'}. Data: ${formData.date || 'a breve'}, Persone: ${formData.guests}.`
    );
    window.open(`https://wa.me/${businessConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contattaci" className="py-24 md:py-32 bg-[#0E1013] text-[#F5F2ED] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intestazione Sezione */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#D4AF37]/30 bg-[#0A0B0D] text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-4">
            <Mail className="w-3 h-3" />
            <span>{t.contattaciSection.badge}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2ED] tracking-wide mb-4">
            {t.contattaciSection.title}
          </h2>

          <p className="text-[#D4AF37] font-serif italic text-lg sm:text-xl">
            {t.contattaciSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Colonna Sinistra: Recapiti & Canali Diretti */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121418] border border-white/10 p-8 shadow-xl">
              <h3 className="font-serif text-2xl text-[#F5F2ED] mb-6 border-b border-white/10 pb-4">
                Recapiti & Informazioni
              </h3>

              <div className="space-y-6">
                {/* Indirizzo */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-1">
                      {t.contattaciSection.addressLabel}
                    </h4>
                    <p className="text-white/90 text-sm font-light leading-relaxed">
                      {businessConfig.address}
                    </p>
                    <p className="text-white/50 text-xs">
                      {businessConfig.addressNote}
                    </p>
                  </div>
                </div>

                {/* Telefono Diretto */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-1">
                      {t.contattaciSection.phoneLabel}
                    </h4>
                    <a
                      href={`tel:${businessConfig.phone}`}
                      className="text-white/90 hover:text-[#D4AF37] text-sm font-serif transition-colors"
                    >
                      {businessConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-1">
                      {t.contattaciSection.whatsappLabel}
                    </h4>
                    <button
                      onClick={handleWhatsAppDirect}
                      className="text-white/90 hover:text-[#D4AF37] text-sm font-light underline underline-offset-4 transition-colors"
                    >
                      Avvia conversazione WhatsApp
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-1">
                      {t.contattaciSection.emailLabel}
                    </h4>
                    <a
                      href={`mailto:${businessConfig.email}`}
                      className="text-white/90 hover:text-[#D4AF37] text-sm font-light transition-colors"
                    >
                      {businessConfig.email}
                    </a>
                  </div>
                </div>

                {/* Orari */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-1">
                      {t.contattaciSection.hoursLabel}
                    </h4>
                    <p className="text-white/90 text-xs leading-relaxed font-medium">
                      Mer — Dom: 10:00 — 15:00 | 18:30 — 00:30
                    </p>
                    <p className="text-white/60 text-[11px] leading-relaxed">
                      Lun: 12:00 — 15:00 | 19:00 — 23:30 (Mar: Chiuso)
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Colonna Destra: Modulo di Richiesta */}
          <div className="lg:col-span-7">
            <div className="bg-[#121418] border border-white/10 p-8 sm:p-10 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2ED] mb-1">
                        {t.contattaciSection.form.title}
                      </h3>
                      <p className="text-white/60 text-xs sm:text-sm font-light">
                        {t.contattaciSection.form.subtitle}
                      </p>
                    </div>

                    {/* Selezione Oggetto Richiesta */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-medium">
                        {t.contattaciSection.form.subjectLabel}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          { id: 'tavolo', label: t.contattaciSection.form.subjectOptions.tavolo },
                          { id: 'evento', label: t.contattaciSection.form.subjectOptions.evento },
                          { id: 'informazioni', label: t.contattaciSection.form.subjectOptions.informazioni }
                        ].map((opt) => (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => setFormData({ ...formData, subject: opt.id as any })}
                            className={`p-3 text-left text-xs border transition-all ${
                              formData.subject === opt.id
                                ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white font-medium'
                                : 'bg-[#0A0B0D] border-white/10 text-white/70 hover:border-white/30'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Nome & Telefono */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.18em] text-white/70 mb-1.5 font-medium">
                          {t.contattaciSection.form.nameLabel} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t.contattaciSection.form.namePlaceholder}
                          className="w-full bg-[#0A0B0D] border border-white/15 px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.18em] text-white/70 mb-1.5 font-medium">
                          {t.contattaciSection.form.phoneLabel} *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={t.contattaciSection.form.phonePlaceholder}
                          className="w-full bg-[#0A0B0D] border border-white/15 px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.18em] text-white/70 mb-1.5 font-medium">
                        {t.contattaciSection.form.emailLabel}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contattaciSection.form.emailPlaceholder}
                        className="w-full bg-[#0A0B0D] border border-white/15 px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    {/* Dati Prenotazione Tavolo o Evento */}
                    {formData.subject !== 'informazioni' && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#0A0B0D]/60 border border-white/10">
                        <div>
                          <label className="block text-[9px] uppercase tracking-wider text-white/60 mb-1">
                            {t.contattaciSection.form.dateLabel}
                          </label>
                          <input
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full bg-[#121418] border border-white/15 px-3 py-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[9px] uppercase tracking-wider text-white/60 mb-1">
                            {t.contattaciSection.form.timeLabel}
                          </label>
                          <input
                            type="time"
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            className="w-full bg-[#121418] border border-white/15 px-3 py-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[9px] uppercase tracking-wider text-white/60 mb-1">
                            {t.contattaciSection.form.guestsLabel}
                          </label>
                          <select
                            value={formData.guests}
                            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                            className="w-full bg-[#121418] border border-white/15 px-3 py-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 10, 15, 20, 30].map((n) => (
                              <option key={n} value={n}>
                                {n} {n === 1 ? 'Persona' : 'Persone'}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Messaggio */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.18em] text-white/70 mb-1.5 font-medium">
                        {t.contattaciSection.form.messageLabel}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t.contattaciSection.form.messagePlaceholder}
                        className="w-full bg-[#0A0B0D] border border-white/15 px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#D4AF37] hover:bg-white text-[#0A0B0D] text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-xl flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t.contattaciSection.form.submitBtn}</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="confirmation"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div>
                      <h3 className="font-serif text-3xl text-[#F5F2ED] mb-2">
                        {t.contattaciSection.confirmation.title}
                      </h3>
                      <p className="text-white/70 text-sm max-w-md mx-auto leading-relaxed font-light">
                        {t.contattaciSection.confirmation.message}
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={handleWhatsAppDirect}
                        className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-white text-black font-bold text-[11px] tracking-wider uppercase transition-all flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{t.contattaciSection.confirmation.whatsappBtn}</span>
                      </button>

                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="w-full sm:w-auto px-6 py-3 border border-white/20 hover:bg-white hover:text-black text-white text-[11px] tracking-wider uppercase transition-all"
                      >
                        {t.contattaciSection.confirmation.newRequestBtn}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
