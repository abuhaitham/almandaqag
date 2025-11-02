
import React from 'react';
// Fix: Corrected import path to be relative.
import { ACHIEVEMENTS_DATA } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section className="bg-light py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                إنجازات الجمعية
            </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ACHIEVEMENTS_DATA.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="bg-primary text-white p-4 rounded-full mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className={`font-extrabold mb-2 ${stat.value === "سيتم الاعلان لاحقا" ? 'text-base italic text-gray-500' : 'text-3xl text-primary'}`}>
                {stat.value}
              </h3>
              <p className="text-gray-600 font-semibold text-md">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
