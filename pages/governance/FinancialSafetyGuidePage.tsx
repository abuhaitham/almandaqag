

import React from 'react';
// Fix: Corrected import paths to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';
import { GOVERNANCE_GUIDES } from '../../constants';

const FinancialSafetyGuidePage: React.FC = () => {
    const guide = GOVERNANCE_GUIDES.find(g => g.title.includes('السلامة المالية'));
  return (
    <>
      <PageHeader title="دليل السلامة المالية" breadcrumb="الحوكمة / أدلة الحوكمة / دليل السلامة المالية" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-extrabold text-primary mb-6 text-center">
              دليل معيار السلامة المالية
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              يوضح هذا الدليل السياسات والإجراءات المتبعة لضمان السلامة المالية للجمعية، وحماية أصولها، واستخدام الموارد بكفاءة وفعالية لتحقيق أهدافها.
            </p>
             {guide && (
                 <div className="text-center">
                    <a href={guide.href} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition-colors inline-block">
                        تحميل الدليل
                    </a>
                </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialSafetyGuidePage;
