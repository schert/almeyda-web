import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
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
  
  // Data odierna per default del date picker
  const todayStr = useMemo(() => {
    const d = new Date();
    return d.toISOString().split('T')[0];
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: selectedSubject as ContactSubject,
    date: todayStr,
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
    }
  }, [selectedSubject, prefilledMessage]);

  const handleSubjectSelect = (subj: ContactSubject) => {
    setFormData((prev) => ({ ...prev, subject: subj }));
    if (onSubjectChange) {
      onSubjectChange(subj);
    }
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

  // Genera il testo precompilato WhatsApp strutturato
  const compiledWhatsAppText = useMemo(() => {
    const subjectLabel = t.contattaciSection.form.subjectOptions[formData.subject] || formData.subject;
    
    let text = `Salve Almeyda! Desidero mettermi in contatto.\n\n`;
    text += `📌 *Oggetto*: ${subjectLabel}\n`;
    if (formData.name.trim()) {
      text += `👤 *Nome*: ${formData.name.trim()}\n`;
    }
    if (formData.phone.trim()) {
      text += `📞 *Telefono*: ${formData.phone.trim()}\n`;
    }

    if (requiresBookingDetails) {
      if (formData.date) {
        text += `📅 *Data*: ${formData.date}\n`;
      }
      if (formData.time) {
        text += `⏰ *Orario*: ${formData.time}\n`;
      }
      if (formData.guests) {
        text += `👥 *Ospiti*: ${formData.guests} ${Number(formData.guests) === 1 ? 'persona' : 'persone'}\n`;
      }
    }

    if (formData.message.trim()) {
      text += `\n💬 *Note / Richiesta*: ${formData.message.trim()}\n`;
    }

    return text;
  }, [formData, t, requiresBookingDetails]);

  // Invio diretto su WhatsApp
  const handleOpenWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const url = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(compiledWhatsAppText)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contattaci" className="py-20 sm:py-24 md:py-32 bg-[#0E1013] text-[#F5F2ED] relative border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Intestazione Sezione */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F5F2ED] tracking-wide mb-3 sm:mb-4">
            {t.contattaciSection.title}
          </h2>

          <p className="text-[#D4AF37] font-serif italic text-base sm:text-xl">
            {t.contattaciSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Colonna Sinistra: Recapiti & Canali Diretti */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Box Canale WhatsApp Primario */}
            <div className="p-6 sm:p-7 bg-gradient-to-br from-[#121418] to-[#0A0B0D] border-2 border-[#25D366]/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#25D366]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#25D366] font-bold block">
                    Canale Ufficiale Esclusivo
                  </span>
                  <h3 className="font-serif text-xl text-white">
                    WhatsApp Almeyda
                  </h3>
                </div>
              </div>

              <p className="text-xs text-white/70 font-light leading-relaxed mb-6">
                Gestiamo tutte le prenotazioni, richieste di disponibilità ed eventi direttamente su WhatsApp per garantirti una risposta immediata e personalizzata.
              </p>

              <button
                onClick={() => handleOpenWhatsApp()}
                className="w-full px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Apri Chat WhatsApp Diretta</span>
              </button>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50 font-mono">
                <span>Numero: {businessConfig.phoneDisplay}</span>
                <span className="inline-flex items-center text-[#25D366]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] mr-1.5 animate-pulse" />
                  Attivo
                </span>
              </div>
            </div>

            {/* Recapiti e Orari */}
            <div className="bg-[#121418] border border-white/10 p-6 sm:p-7 shadow-xl space-y-6">
              <h4 className="font-serif text-lg text-[#F5F2ED] border-b border-white/10 pb-3">
                Recapiti & Informazioni
              </h4>

              <div className="space-y-5 text-sm">
                {/* Indirizzo */}
                <div className="flex items-start space-x-4">
                  <div className="w-9 h-9 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-white/50 block font-mono">
                      {t.contattaciSection.addressLabel}
                    </span>
                    <p className="font-serif text-sm text-[#F5F2ED] font-medium">
                      {businessConfig.address}
                    </p>
                    <p className="text-xs text-white/60">
                      {businessConfig.addressNote}
                    </p>
                  </div>
                </div>

                {/* Telefono */}
                <div className="flex items-start space-x-4">
                  <div className="w-9 h-9 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-white/50 block font-mono">
                      {t.contattaciSection.phoneLabel}
                    </span>
                    <a
                      href={`tel:${businessConfig.phone}`}
                      className="font-mono text-sm text-[#D4AF37] hover:underline"
                    >
                      {businessConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Orari */}
                <div className="flex items-start space-x-4 pt-3 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full border border-[#D4AF37]/30 bg-[#0A0B0D] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div className="w-full">
                    <span className="text-[9px] uppercase tracking-wider text-white/50 block font-mono mb-1.5">
                      {t.contattaciSection.hoursLabel}
                    </span>
                    <div className="space-y-1 text-xs text-white/70">
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

          </div>

          {/* Colonna Destra: Compositore Richiesta */}
          <div className="lg:col-span-7">
            <div className="bg-[#121418] border border-white/10 p-5 sm:p-7 md:p-9 shadow-2xl relative">
              
              <div className="mb-6 sm:mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2ED] mb-1.5">
                  {t.contattaciSection.form.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                  {t.contattaciSection.form.subtitle}
                </p>
              </div>

              <form onSubmit={handleOpenWhatsApp} className="space-y-5 sm:space-y-6">
                
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
                            ? 'bg-[#25D366]/10 border-[#25D366] text-[#F5F2ED] font-semibold ring-1 ring-[#25D366]/40'
                            : 'bg-[#0A0B0D] border-white/10 text-white/70 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{opt.label}</span>
                          {formData.subject === opt.id && (
                            <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0 ml-2" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Nome & Recapito */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-white/70 mb-1.5 font-medium">
                      {t.contattaciSection.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contattaciSection.form.namePlaceholder}
                      className="w-full bg-[#0A0B0D] border border-white/15 px-3.5 sm:px-4 py-3 text-sm text-white focus:border-[#25D366] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-white/70 mb-1.5 font-medium">
                      {t.contattaciSection.form.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contattaciSection.form.phonePlaceholder}
                      className="w-full bg-[#0A0B0D] border border-white/15 px-3.5 sm:px-4 py-3 text-sm text-white focus:border-[#25D366] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Dati Prenotazione (Tavolo / Esperienza / Evento) */}
                {requiresBookingDetails && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 p-3.5 sm:p-4 bg-[#0A0B0D]/90 border border-white/10">
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider text-white/60 mb-1 font-medium">
                        {t.contattaciSection.form.dateLabel}
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-[#121418] border border-white/15 px-3 py-2 text-xs text-white focus:border-[#25D366] focus:outline-none"
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
                        className="w-full bg-[#121418] border border-white/15 px-3 py-2 text-xs text-white focus:border-[#25D366] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] uppercase tracking-wider text-white/60 mb-1 font-medium">
                        {t.contattaciSection.form.guestsLabel}
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-[#121418] border border-white/15 px-3 py-2 text-xs text-white focus:border-[#25D366] focus:outline-none"
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

                {/* Note / Messaggio */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-white/70 mb-1.5 font-medium">
                    {t.contattaciSection.form.messageLabel}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contattaciSection.form.messagePlaceholder}
                    className="w-full bg-[#0A0B0D] border border-white/15 px-3.5 sm:px-4 py-3 text-sm text-white focus:border-[#25D366] focus:outline-none resize-none"
                  />
                </div>

                {/* Box di Anteprima Messaggio WhatsApp */}
                <div className="p-3.5 sm:p-4 bg-[#0A0B0D] border border-[#25D366]/30 rounded-none">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#25D366] font-mono font-medium flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{t.contattaciSection.form.previewLabel}</span>
                    </span>
                    <span className="text-[9px] text-white/40 font-mono">wa.me/{businessConfig.whatsappNumber}</span>
                  </div>
                  <pre className="text-xs text-white/80 font-sans whitespace-pre-wrap break-words bg-[#121418] p-3 border border-white/5 rounded-none max-h-32 overflow-y-auto">
                    {compiledWhatsAppText}
                  </pre>
                </div>

                {/* Bottone di Invio Principale */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full px-4 sm:px-6 py-4 bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.99] text-black text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span className="text-center font-bold tracking-wider">{t.contattaciSection.form.submitBtn}</span>
                  </button>
                </div>

                <p className="text-[11px] text-white/50 text-center font-light leading-relaxed px-2">
                  {t.contattaciSection.form.whatsappNotice}
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
