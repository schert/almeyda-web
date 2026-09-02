/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { LightboxProvider } from './context/LightboxContext';
import { LightboxModal } from './components/LightboxModal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UnifiedCartaSection } from './components/UnifiedCartaSection';
import { LocationSection } from './components/LocationSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { ArtSpaceSection } from './components/ArtSpaceSection';
import { EventsSection } from './components/EventsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function MainApp() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contattaci');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToMenu = () => {
    const menuSection = document.getElementById('la-carta') || document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-[#F5F2ED] selection:bg-[#D4AF37]/30 selection:text-[#F5F2ED] relative font-sans">
      {/* Barra di Navigazione Superiore */}
      <Navbar onOpenReservation={handleScrollToContact} />

      <main id="main-content">
        {/* 1. Sezione Home */}
        <Hero
          onOpenReservation={handleScrollToContact}
          onOpenMenu={handleScrollToMenu}
        />

        {/* 2. Sezione Unificata La Carta (Bistrot, Cocktail Bar & Caffetteria) */}
        <UnifiedCartaSection
          onOpenReservation={handleScrollToContact}
        />

        {/* 3. Sezione Ambientazione */}
        <LocationSection />

        {/* 4. Sezione Esperienze */}
        <ExperiencesSection
          onOpenReservation={handleScrollToContact}
        />

        {/* 5. Sezione Spazio all'Arte */}
        <ArtSpaceSection
          onOpenArtInquiry={handleScrollToContact}
        />

        {/* 6. Sezione Eventi */}
        <EventsSection
          onOpenReservation={handleScrollToContact}
        />

        {/* 7. Sezione Contattaci */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={handleScrollToContact} />

      {/* Visualizzatore Immagini a Tutto Schermo (Lightbox Modal) */}
      <LightboxModal />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <LightboxProvider>
        <MainApp />
      </LightboxProvider>
    </LanguageProvider>
  );
}
