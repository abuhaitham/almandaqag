

import React from 'react';
// Fix: Corrected import paths to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';
import { GOVERNANCE_GUIDES } from '../../constants';

const ComplianceGuidePage: React.FC = () => {
    const guide = GOVERNANCE_GUIDES.find(g => g.title.includes('الامتثال والالتزام'));
  return (
    <>
      <PageHeader title="دليل الامتثال والالتزام" breadcrumb="الحوكمة / أدلة الحوكمة / دليل الامتثال والالتزام" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-extrabold text-primary mb-6 text-center">
              دليل معيار الامتثال والالتزام
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                يهدف هذا الدليل إلى توضيح متطلبات معيار الامتثال والالتزام وضمان تطبيق الجمعية للأنظمة واللوائح والتعليمات ذات العلاقة، مما يعزز من ثقة أصحاب المصلحة.
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

export default ComplianceGuidePage;
