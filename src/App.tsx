/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { CocktailSection } from './components/CocktailSection';
import { CafeteriaSection } from './components/CafeteriaSection';
import { LocationSection } from './components/LocationSection';
import { ExperiencesSection } from './components/ExperiencesSection';
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
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-[#F5F2ED] selection:bg-[#D4AF37]/30 selection:text-[#F5F2ED] relative font-sans">
      {/* Barra di Navigazione Superiore con le 8 voci richieste */}
      <Navbar onOpenReservation={handleScrollToContact} />

      <main id="main-content">
        {/* 1. Sezione Home */}
        <Hero
          onOpenReservation={handleScrollToContact}
          onOpenMenu={handleScrollToMenu}
        />

        {/* 2. Sezione Menù */}
        <MenuSection
          onOpenReservation={handleScrollToContact}
        />

        {/* 3. Sezione Cocktail Bar */}
        <CocktailSection
          onOpenReservation={handleScrollToContact}
        />

        {/* 4. Sezione Caffetteria */}
        <CafeteriaSection
          onOpenReservation={handleScrollToContact}
        />

        {/* 5. Sezione Location */}
        <LocationSection />

        {/* 6. Sezione Experiences */}
        <ExperiencesSection
          onOpenReservation={handleScrollToContact}
        />

        {/* 7. Sezione Eventi */}
        <EventsSection
          onOpenReservation={handleScrollToContact}
        />

        {/* 8. Sezione Contattaci */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={handleScrollToContact} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
