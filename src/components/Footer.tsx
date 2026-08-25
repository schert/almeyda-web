import React from 'react';
import { Instagram, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { businessConfig } from '../config/almeydaConfig';
import { useTranslation } from '../context/LanguageContext';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenCocktailMenu: () => void;
  onOpenDiningMenu: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenReservation,
  onOpenCocktailMenu,
  onOpenDiningMenu
}) => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
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

  return (
    <footer className="bg-[#07080A] text-[#F5F2ED] border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <span className="font-serif text-3xl md:text-4xl tracking-[0.18em] text-[#F5F2ED] font-light block italic uppercase">
                  Almeyda
                </span>
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-bold">
                  {t.footer.tagline}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed max-w-sm mt-4 font-sans">
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

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] block font-bold mb-6">
              {t.footer.exploreTitle}
            </span>
            <ul className="space-y-3 text-xs tracking-wider text-white/70 font-light">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => scrollToSection(e, '#hero')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {t.navbar.home}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCocktailMenu}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  {t.navbar.cocktail}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDiningMenu}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  {t.navbar.dining}
                </button>
              </li>
              <li>
                <a
                  href="#atmosfera"
                  onClick={(e) => scrollToSection(e, '#atmosfera')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {t.navbar.atmosphere}
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => scrollToSection(e, '#gallery')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {t.navbar.gallery}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenReservation}
                  className="text-[#D4AF37] hover:text-white font-medium transition-colors text-left"
                >
                  {t.navbar.book}
                </button>
              </li>
              <li>
                <a
                  href="#siracusa"
                  onClick={(e) => scrollToSection(e, '#siracusa')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {t.navbar.siracusa}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening & Location details */}
          <div className="lg:col-span-4">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] block font-bold mb-6">
              {t.footer.contactsTitle}
            </span>
            <div className="space-y-4 text-xs text-white/70 font-light">
              <div className="flex items-start space-x-3">
                <MapPin size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#F5F2ED]">{businessConfig.address}</span>
                  <span className="block text-white/50">{businessConfig.city} — Sicilia</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone size={14} className="text-[#D4AF37] shrink-0" />
                <span className="font-mono">{businessConfig.phoneDisplay}</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={14} className="text-[#D4AF37] shrink-0" />
                <span>{businessConfig.email}</span>
              </div>

              <div className="pt-2 text-[11px] text-white/50">
                {t.locationSection.openingHours[0]?.days}: {t.locationSection.openingHours[0]?.hours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and back-to-top */}
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
