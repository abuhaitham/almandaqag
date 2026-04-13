

import React from 'react';
// Fix: Corrected import paths to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';
import { BASIC_DATA } from '../../constants';

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader title="عن الجمعية" breadcrumb="عن الجمعية" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-extrabold text-primary mb-6 text-center">
              الجمعية التعاونية الزراعية بالمندق
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              الجمعية التعاونية الزراعية بالمندق.. أنشئت عام ١٤٤٤هـ برقم (١٠١٤٠) لخدمة المزارعين وأصحاب المواشي بالمحافظة عن طريق استصلاح الأراضي الزراعية وعقد الدورات والندوات بهدف خدمة الزراعة وتحسينها.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BASIC_DATA.map((item) => (
                <div key={item.label} className="bg-light p-4 rounded-lg">
                  <p className="font-semibold text-primary">{item.label}</p>
                  <p className="text-gray-800">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
