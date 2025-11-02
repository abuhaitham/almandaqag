
import React from 'react';
// Fix: Corrected import paths to be relative.
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import type { Page } from '../App';
import Achievements from '../components/Achievements';
import Values from '../components/Values';
import VolunteerCTA from '../components/VolunteerCTA';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <>
      <Hero setCurrentPage={setCurrentPage} />
      <Values />
      <Achievements />
      <Partners />
      <VolunteerCTA setCurrentPage={setCurrentPage} />
    </>
  );
};

export default HomePage;
