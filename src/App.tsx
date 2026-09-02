/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { LightboxProvider } from './context/LightboxContext';
import { LightboxModal } from './components/LightboxModal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { UnifiedCartaSection } from './components/UnifiedCartaSection';
import { LocationSection } from './components/LocationSection';
import { StoreSection } from './components/StoreSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { ArtSpaceSection } from './components/ArtSpaceSection';
import { EventsSection } from './components/EventsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactSubject } from './config/translations/types';

function MainApp() {
  const [contactSubject, setContactSubject] = useState<ContactSubject>('tavolo');
  const [contactMessage, setContactMessage] = useState<string>('');

  const handleScrollToContact = (subject: ContactSubject = 'tavolo', customMessage: string = '') => {
    setContactSubject(subject);
    setContactMessage(customMessage);
    const contactSection = document.getElementById('contattaci');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToMenu = () => {
    const menuSection = document.getElementById('sapori') || document.getElementById('la-carta') || document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#0A0B0D] text-[#F5F2ED] selection:bg-[#D4AF37]/30 selection:text-[#F5F2ED] relative font-sans">
      {/* Barra di Navigazione Superiore */}
      <Navbar onOpenReservation={() => handleScrollToContact('tavolo')} />

      <main id="main-content" className="w-full max-w-full overflow-x-hidden">
        {/* 1. Sezione Home */}
        <Hero
          onOpenReservation={() => handleScrollToContact('tavolo')}
          onOpenMenu={handleScrollToMenu}
        />

        {/* 2. Sezione Chi Siamo & L'Idea */}
        <AboutSection onOpenReservation={() => handleScrollToContact('tavolo')} />

        {/* 3. Sezione Sapori (Bistrot, Cocktail Bar & Caffetteria) */}
        <UnifiedCartaSection
          onOpenReservation={() => handleScrollToContact('tavolo')}
        />

        {/* 4. Sezione Ambientazione & Sale del Teatro */}
        <LocationSection />

        {/* 5. Sezione Negozio / Bottega Almeyda */}
        <StoreSection
          onOpenInquiry={(msg) => handleScrollToContact('store', msg)}
        />

        {/* 6. Sezione Esperienze Sensoriali */}
        <ExperiencesSection
          onOpenReservation={(msg) => handleScrollToContact('esperienze', msg)}
        />

        {/* 7. Sezione Spazio all'Arte */}
        <ArtSpaceSection
          onOpenArtInquiry={(msg) => handleScrollToContact('arte', msg)}
        />

        {/* 8. Sezione Eventi, Catering & B2B */}
        <EventsSection
          onOpenReservation={(msg) => handleScrollToContact('evento', msg)}
        />

        {/* 9. Sezione Contattaci con Preselezione Automatica */}
        <ContactSection
          selectedSubject={contactSubject}
          prefilledMessage={contactMessage}
          onSubjectChange={setContactSubject}
        />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => handleScrollToContact('tavolo')} />

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
