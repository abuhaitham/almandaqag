

import React from 'react';
// Fix: Corrected import paths to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';
import { VOLUNTEERING_OPPORTUNITIES } from '../../constants';

const VolunteeringOpportunitiesPage: React.FC = () => {
  return (
    <>
      <PageHeader title="الفرص التطوعية" breadcrumb="التطوع / الفرص التطوعية" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                انضم إلى فريق المتطوعين
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                ساهم بوقتك وجهدك في خدمة دينك ومجتمعك. تصفح الفرص المتاحة وكن جزءًا من فريق الخير.
              </p>
            </div>
            <div className="space-y-6">
              {VOLUNTEERING_OPPORTUNITIES.map((opportunity, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{opportunity.title}</h3>
                      <p className="text-gray-700">{opportunity.description}</p>
                    </div>
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      opportunity.status === 'open' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {opportunity.status === 'open' ? 'متاحة' : 'مغلقة'}
                    </span>
                  </div>
                  {opportunity.status === 'open' && (
                    <div className="mt-4 text-left">
                        <a href="#" className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-5 rounded-md text-sm transition-colors">
                            سجل الآن
                        </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunteeringOpportunitiesPage;
