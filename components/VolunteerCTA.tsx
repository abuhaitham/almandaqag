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
          كن جزءًا من التغيير
        </h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          تطوعك يصنع فرقًا في حياة الكثيرين. انضم إلى فريقنا وساهم في بناء مستقبل أفضل لمجتمعنا.
        </p>
        <button
          onClick={() => setCurrentPage('volunteering')}
          className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-md transition-transform transform hover:scale-105"
        >
          انضم إلينا الآن
        </button>
      </div>
    </section>
  );
};

export default VolunteerCTA;