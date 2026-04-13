import React from 'react';
import type { Page } from '../App';
import { HERO_IMAGE } from '../assets/images';

interface HeroProps {
  setCurrentPage: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  return (
    <section className="relative h-[60vh] text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
          الجمعية التعاونية الزراعية بالمندق
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in-up">
          رائدة في تحقيق التنمية الزراعية المستدامة بمحافظة المندق، من خلال تعزيز الابتكار ودعم المزارعين بالتقنيات الحديثة.
        </p>
        <button
          onClick={() => setCurrentPage('about')}
          className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-md transition-transform transform hover:scale-105"
        >
          اكتشف المزيد
        </button>
      </div>
    </section>
  );
};

export default Hero;