import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, CheckCircle2, Calendar, Users, Sparkles } from 'lucide-react';
import { businessConfig } from '../config/almeydaConfig';
import { ContactSubject } from '../config/translations/types';

export interface ContactSectionProps {
  selectedSubject?: ContactSubject;
  prefilledMessage?: string;
  onSubjectChange?: (subject: ContactSubject) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedSubject = 'tavolo',
  prefilledMessage = '',
  onSubjectChange
}) => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: selectedSubject as ContactSubject,
    date: '',
    time: '20:00',
    guests: '2',
    message: prefilledMessage
  });

  // Aggiorna lo stato del form se cambiano i parametri di navigazione
  useEffect(() => {
    if (selectedSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: selectedSubject,
        message: prefilledMessage || prev.message
      }));
      setIsSubmitted(false);
    }
  }, [selectedSubject, prefilledMessage]);

  const handleSubjectSelect = (subj: ContactSubject) => {
    setFormData((prev) => ({ ...prev, subject: subj }));
    if (onSubjectChange) {
      onSubjectChange(subj);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const subjectLabel = t.contattaciSection.form.subjectOptions[formData.subject] || formData.subject;
    let details = `Salve Almeyda! Richiesta per: ${subjectLabel}.\nNome: ${formData.name || 'Ospite'}`;
    if (formData.phone) details += `\nTelefono: ${formData.phone}`;
    if (formData.email) details += `\nEmail: ${formData.email}`;
    if (['tavolo', 'esperienze', 'evento'].includes(formData.subject)) {
      if (formData.date) details += `\nData desiderata: ${formData.date}`;
      if (formData.time) details += `\nOrario: ${formData.time}`;
      if (formData.guests) details += `\nNumero ospiti: ${formData.guests}`;
    }
    if (formData.message) details += `\nMessaggio / Note: ${formData.message}`;

    window.open(`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(details)}`, '_blank');
  };

  const subjectOptions: { id: ContactSubject; label: string }[] = [
    { id: 'tavolo', label: t.contattaciSection.form.subjectOptions.tavolo },
    { id: 'esperienze', label: t.contattaciSection.form.subjectOptions.esperienze },
    { id: 'evento', label: t.contattaciSection.form.subjectOptions.evento },
    { id: 'arte', label: t.contattaciSection.form.subjectOptions.arte },
    { id: 'store', label: t.contattaciSection.form.subjectOptions.store },
    { id: 'informazioni', label: t.contattaciSection.form.subjectOptions.informazioni }
  ];

  const requiresBookingDetails = ['tavolo', 'esperienze', 'evento'].includes(formData.subject);

  return (
    <section id="contattaci" className="py-24 md:py-32 bg-[#0E1013] text-[#F5F2ED] relative border-t border-white/5 scroll-mt-20">
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

              <div className="space-y-6 text-sm">
                
                {/* Indirizzo */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block font-mono">
                      {t.contattaciSection.addressLabel}
                    </span>
                    <p className="font-serif text-base text-[#F5F2ED] font-medium">
                      {businessConfig.address}
                    </p>
                    <p className="text-xs text-white/60 mt-0.5">
                      {businessConfig.addressNote}
                    </p>
                  </div>
                </div>

                {/* Telefono */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block font-mono">
                      {t.contattaciSection.phoneLabel}
                    </span>
                    <a
                      href={`tel:${businessConfig.phone}`}
                      className="font-mono text-base text-[#D4AF37] hover:underline"
                    >
                      {businessConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-[#25D366]/30 bg-[#0A0B0D] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block font-mono">
                      {t.contattaciSection.whatsappLabel}
                    </span>
                    <button
                      onClick={handleWhatsAppDirect}
                      className="text-xs text-[#25D366] hover:underline font-medium inline-flex items-center space-x-1"
                    >
                      <span>Avvia chat rapida WhatsApp</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block font-mono">
                      {t.contattaciSection.emailLabel}
                    </span>
                    <a
                      href={`mailto:${businessConfig.email}`}
                      className="text-sm text-white/80 hover:text-[#D4AF37] transition-colors"
                    >
                      {businessConfig.email}
                    </a>
                  </div>
                </div>

                {/* Orari */}
                <div className="flex items-start space-x-4 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="w-full">
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block font-mono mb-2">
                      {t.contattaciSection.hoursLabel}
                    </span>
                    <div className="space-y-1.5 text-xs text-white/70">
                      {t.locationSection.openingHours.map((slot, i) => (
                        <div key={i} className="flex justify-between items-baseline">
                          <span>{slot.days}:</span>
                          <span className="font-mono text-[#F5F2ED]">{slot.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Banner prenotazione diretta via WhatsApp */}
            <div className="p-6 bg-[#0A0B0D] border border-[#D4AF37]/40 text-center">
              <Sparkles className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <h4 className="font-serif text-lg text-white mb-1">Hai bisogno di una risposta immediata?</h4>
              <p className="text-white/60 text-xs font-light mb-4">
                Scrivici direttamente su WhatsApp per verificare in tempo reale la disponibilità di tavoli ed eventi.
              </p>
              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chatta su WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Colonna Destra: Modulo di Contatto Interattivo */}
          <div className="lg:col-span-7">
            <div className="bg-[#121418] border border-white/10 p-8 sm:p-10 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
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
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2.5 font-medium">
                        {t.contattaciSection.form.subjectLabel}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {subjectOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => handleSubjectSelect(opt.id)}
                            className={`p-3 text-left text-xs border transition-all cursor-pointer ${
                              formData.subject === opt.id
                                ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#F5F2ED] font-semibold ring-1 ring-[#D4AF37]/50'
                                : 'bg-[#0A0B0D] border-white/10 text-white/70 hover:border-white/30 hover:text-white'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{opt.label}</span>
                              {formData.subject === opt.id && (
                                <span className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0 ml-2" />
                              )}
                            </div>
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

                    {/* Dati Prenotazione (Tavolo / Esperienza / Evento) */}
                    {requiresBookingDetails && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#0A0B0D]/80 border border-white/10">
                        <div>
                          <label className="block text-[9px] uppercase tracking-wider text-white/60 mb-1 font-medium">
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
                          <label className="block text-[9px] uppercase tracking-wider text-white/60 mb-1 font-medium">
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
                          <label className="block text-[9px] uppercase tracking-wider text-white/60 mb-1 font-medium">
                            {t.contattaciSection.form.guestsLabel}
                          </label>
                          <select
                            value={formData.guests}
                            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                            className="w-full bg-[#121418] border border-white/15 px-3 py-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20, 30, 50].map((n) => (
                              <option key={n} value={n}>
                                {n} {n === 1 ? 'Persona' : 'Persone'}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Messaggio o Richieste Particolari */}
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
                      className="w-full py-4 bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0B0D] text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-xl flex items-center justify-center space-x-2 cursor-pointer"
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
                        className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-[11px] tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{t.contattaciSection.confirmation.whatsappBtn}</span>
                      </button>

                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="w-full sm:w-auto px-6 py-3 border border-white/20 hover:bg-white hover:text-black text-white text-[11px] tracking-wider uppercase transition-all cursor-pointer"
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
