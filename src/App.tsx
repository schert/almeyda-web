/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { CocktailSection } from './components/CocktailSection';
import { DiningSection } from './components/DiningSection';
import { Atmosphere } from './components/Atmosphere';
import { Experience } from './components/Experience';
import { Gallery } from './components/Gallery';
import { Reservation } from './components/Reservation';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { CocktailMenuModal } from './components/CocktailMenuModal';
import { DiningMenuModal } from './components/DiningMenuModal';

function MainApp() {
  const [cocktailMenuOpen, setCocktailMenuOpen] = useState(false);
  const [diningMenuOpen, setDiningMenuOpen] = useState(false);

  const handleOpenReservation = () => {
    const reservationSection = document.getElementById('prenotazione');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-[#F5F2ED] selection:bg-[#D4AF37]/30 selection:text-[#F5F2ED] relative font-sans">
      {/* Top Navbar */}
      <Navbar
        onOpenReservation={handleOpenReservation}
        onOpenCocktailMenu={() => setCocktailMenuOpen(true)}
        onOpenDiningMenu={() => setDiningMenuOpen(true)}
      />

      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero
          onOpenReservation={handleOpenReservation}
          onOpenDiningMenu={() => setDiningMenuOpen(true)}
        />

        {/* 2. Intro Statement Section */}
        <Intro />

        {/* 3. Cocktail Showcase Section */}
        <CocktailSection
          onOpenCocktailMenu={() => setCocktailMenuOpen(true)}
        />

        {/* 4. Dining Cuisine Section */}
        <DiningSection
          onOpenDiningMenu={() => setDiningMenuOpen(true)}
        />

        {/* 5. Atmosphere Editorial Photography Section */}
        <Atmosphere />

        {/* 6. Experience Three Pillars Section */}
        <Experience
          onOpenCocktailMenu={() => setCocktailMenuOpen(true)}
          onOpenDiningMenu={() => setDiningMenuOpen(true)}
          onOpenReservation={handleOpenReservation}
        />

        {/* 7. Gallery with Lightbox Section */}
        <Gallery />

        {/* 8. Reservation Section */}
        <Reservation />

        {/* 9. Siracusa Location & Contacts Section */}
        <Location />
      </main>

      {/* 10. Footer */}
      <Footer
        onOpenReservation={handleOpenReservation}
        onOpenCocktailMenu={() => setCocktailMenuOpen(true)}
        onOpenDiningMenu={() => setDiningMenuOpen(true)}
      />

      {/* Full Cocktail Menu Modal */}
      <CocktailMenuModal
        isOpen={cocktailMenuOpen}
        onClose={() => setCocktailMenuOpen(false)}
        onOpenReservation={() => {
          setCocktailMenuOpen(false);
          handleOpenReservation();
        }}
      />

      {/* Full Dining Menu Modal */}
      <DiningMenuModal
        isOpen={diningMenuOpen}
        onClose={() => setDiningMenuOpen(false)}
        onOpenReservation={() => {
          setDiningMenuOpen(false);
          handleOpenReservation();
        }}
      />
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
