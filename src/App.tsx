import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ForestLayersSection } from './components/ForestLayersSection';
import { BiodiversitySection } from './components/BiodiversitySection';
import { ClimateSection } from './components/ClimateSection';
import { ConservationSection } from './components/ConservationSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-[#0b1c0f] text-white font-sans overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ForestLayersSection />
        <BiodiversitySection />
        <ClimateSection />
        <ConservationSection />
      </main>
      <Footer />
    </div>;
}