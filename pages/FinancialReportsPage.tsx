

import React from 'react';
// Fix: Corrected import path to be relative.
import PageHeader from '../components/PageHeader';
import { DocumentTextIcon } from '../constants';

interface FinancialReportsPageProps {
  setCurrentPage?: (page: any) => void;
}

const FinancialReportsPage: React.FC<FinancialReportsPageProps> = () => {
    const reports = [
        { title: 'التقرير المالي للجمعية لعام 2024', href: '/docs/التقرير-المالي-2024.pdf' },
        { title: 'التقرير المالي لعام 2023', href: '/docs/التقرير-المالي-2023.pdf' },
    ];
  return (
    <>
      <PageHeader title="التقارير المالية" breadcrumb="الحوكمة / التقارير المالية" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                    الشفافية المالية
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    نؤمن بأهمية الشفافية في جميع تعاملاتنا المالية. يمكنكم الاطلاع على تقاريرنا المالية من خلال الروابط التالية.
                </p>
            </div>
            <ul className="space-y-4">
              {reports.map((item, index) => (
                <li key={index} className="bg-white border-r-4 border-primary rounded-lg p-6 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                        <DocumentTextIcon className="w-8 h-8 text-primary ml-4" />
                        <span className="font-semibold text-xl text-gray-800">{item.title}</span>
                    </div>
                  {item.href === '#' ? (
                    <span className="bg-gray-400 text-white font-bold py-2 px-5 rounded-md text-sm">قريبا</span>
                  ) : (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-5 rounded-md text-sm transition-colors">
                      تحميل
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialReportsPage;
