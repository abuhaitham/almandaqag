import React from 'react';
import type { Page } from '../App';
import { CTA_IMAGE } from '../assets/images';

interface VolunteerCTAProps {
  setCurrentPage: (page: Page) => void;
}

const VolunteerCTA: React.FC<VolunteerCTAProps> = ({ setCurrentPage }) => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-20"
      style={{ backgroundImage: `url(${CTA_IMAGE})` }}
    >
      <div className="absolute inset-0 bg-primary opacity-80"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          تواصل معنا
        </h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          نحن نعمل باستمرار لجعل تجربتك من خلال موقع الجمعية أسهل، سنقوم بالرد على رسائلكم خلال 24 ساعة.
        </p>
        <button
          onClick={() => setCurrentPage('contact')}
          className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-md transition-transform transform hover:scale-105"
        >
          تواصل معنا
        </button>
      </div>
    </section>
  );
};

export default VolunteerCTA;