

import React from 'react';
// Fix: Corrected import paths to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';
import { VOLUNTEERING_CHARTER_DATA } from '../../constants';

const VolunteeringCharterPage: React.FC = () => {
  return (
    <>
      <PageHeader title="ميثاق العمل التطوعي" breadcrumb="التطوع / ميثاق العمل التطوعي" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-extrabold text-primary mb-6">
              ميثاق العمل التطوعي
            </h2>
            <p className="text-lg text-gray-700 mb-8">
                يوضح هذا الميثاق الحقوق والواجبات لكل من المتطوع والجمعية، بهدف تنظيم العلاقة وضمان توفير بيئة تطوعية آمنة ومحفزة للجميع.
            </p>
            <a 
                href={VOLUNTEERING_CHARTER_DATA[0].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition-colors inline-block"
            >
                {VOLUNTEERING_CHARTER_DATA[0].title}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunteeringCharterPage;
