
import { HeroSection } from '../components/HeroSection';
import { ForestLayersSection } from '../components/ForestLayersSection';
import { BiodiversitySection } from '../components/BiodiversitySection';
import { ClimateSection } from '../components/ClimateSection';
import { ConservationSection } from '../components/ConservationSection';
export const HomePage = () => {
  return <main>
      <HeroSection />
      <ForestLayersSection />
      <BiodiversitySection />
      <ClimateSection />
      <ConservationSection />
    </main>;
};