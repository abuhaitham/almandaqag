

import React from 'react';
// Fix: Corrected import paths to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';
import { FEEDBACK_FORM_DATA } from '../../constants';

const VolunteerSatisfactionPage: React.FC = () => {
  return (
    <>
      <PageHeader title="قياس رضا المتطوعين" breadcrumb="التطوع / قياس رضا المتطوعين" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-extrabold text-primary mb-6">
              قياس رضا المتطوعين
            </h2>
            <p className="text-lg text-gray-700 mb-8">
                يهمنا رأي متطوعينا الكرام. تساهم ملاحظاتكم في تطوير بيئة العمل التطوعي وتحسين تجربتكم معنا.
            </p>
            <a 
                href={FEEDBACK_FORM_DATA[0].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition-colors inline-block"
            >
                تعبئة نموذج قياس الرضا
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunteerSatisfactionPage;
