
import React from 'react';
import { ABOUT_IMAGE_URL } from '../constants';
import type { Page } from '../App';

interface AboutProps {
  setCurrentPage: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={ABOUT_IMAGE_URL} alt="About Us" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-primary mb-4">
              عن جمعيتنا
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              جمعية أهلية مسجلة بالمركز الوطني لتنمية القطاع غير الربحي برقم (1234)، تسعى لتنمية المجتمع المحلي في بلخزمر عبر برامج ومشاريع مستدامة تساهم في بناء مجتمع حيوي ومنتج.
            </p>
            <button
              onClick={() => setCurrentPage('about')}
              className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              اعرف المزيد
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
