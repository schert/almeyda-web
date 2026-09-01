import React from 'react';
import { Instagram, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { businessConfig } from '../config/almeydaConfig';
import { useTranslation } from '../context/LanguageContext';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: t.navbar.home, href: '#home' },
    { label: t.navbar.carta, href: '#la-carta' },
    { label: t.navbar.location, href: '#ambientazione' },
    { label: t.navbar.experiences, href: '#esperienze' },
    { label: t.navbar.spazioArte, href: '#spazio-arte' },
    { label: t.navbar.eventi, href: '#eventi' },
    { label: t.navbar.contattaci, href: '#contattaci' }
  ];

  return (
    <footer className="bg-[#07080A] text-[#F5F2ED] border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Griglia Principale Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <span className="font-serif text-3xl md:text-4xl tracking-[0.18em] text-[#F5F2ED] font-light block italic uppercase">
                  Almeyda
                </span>
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-bold">
                  {t.footer.tagline}
                </span>
                <span className="block text-white/40 text-[10px] tracking-[0.2em] uppercase mt-0.5">
                  {t.footer.subTagline}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed max-w-sm mt-4 font-sans">
                {t.footer.description}
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-4">
              <a
                href={businessConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#D4AF37] text-[#F5F2ED] hover:text-[#D4AF37] transition-colors"
                aria-label="Instagram Almeyda"
              >
                <Instagram size={16} />
              </a>
              <a
                href={`tel:${businessConfig.phone}`}
                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#D4AF37] text-[#F5F2ED] hover:text-[#D4AF37] transition-colors"
                aria-label="Telefono Almeyda"
              >
                <Phone size={16} />
              </a>
              <a
                href={`mailto:${businessConfig.email}`}
                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#D4AF37] text-[#F5F2ED] hover:text-[#D4AF37] transition-colors"
                aria-label="Email Almeyda"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* 8 Sezioni */}
          <div className="lg:col-span-3">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] block font-bold mb-6">
              {t.footer.sectionsTitle}
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider text-white/70 font-light">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dettagli Contatti & Orari */}
          <div className="lg:col-span-4">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] block font-bold mb-6">
              {t.footer.contactsTitle}
            </span>
            <div className="space-y-4 text-xs text-white/70 font-light">
              <div className="flex items-start space-x-3">
                <MapPin size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#F5F2ED]">{businessConfig.address}</span>
                  <span className="block text-white/50">{businessConfig.addressNote}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone size={14} className="text-[#D4AF37] shrink-0" />
                <a href={`tel:${businessConfig.phone}`} className="font-mono hover:text-[#D4AF37] transition-colors">
                  {businessConfig.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={14} className="text-[#D4AF37] shrink-0" />
                <a href={`mailto:${businessConfig.email}`} className="hover:text-[#D4AF37] transition-colors">
                  {businessConfig.email}
                </a>
              </div>

              <div className="pt-3 text-[11px] text-white/70 border-t border-white/5 space-y-1.5">
                <span className="text-[#D4AF37] block font-medium uppercase tracking-wider text-[10px] mb-2">
                  {t.footer.hoursTitle}
                </span>
                {t.locationSection.openingHours.map((slot, idx) => (
                  <div key={idx} className="flex justify-between items-baseline gap-2">
                    <span className="text-white/60">{slot.days}:</span>
                    <span className="text-[#F5F2ED] font-mono text-[10px] sm:text-[11px] text-right">{slot.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright e torna su */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40 font-light">
          <div>
            © {new Date().getFullYear()} ALMEYDA Siracusa. {t.footer.rights}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-[#D4AF37]/80 hover:text-[#D4AF37] transition-colors group"
          >
            <span className="tracking-[0.15em] uppercase text-[10px] font-bold">{t.footer.backToTop}</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
