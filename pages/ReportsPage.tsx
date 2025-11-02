
import React from 'react';
// Fix: Corrected import paths to be relative.
import PageHeader from '../components/PageHeader';
import type { Page } from '../App';
import { ANNUAL_REPORTS_DATA, DocumentTextIcon } from '../constants';

interface ReportsPageProps {
  setCurrentPage: (page: Page) => void;
}

const ReportsPage: React.FC<ReportsPageProps> = ({ setCurrentPage }) => {
    const reportSections = [
        { title: 'التقارير السنوية', page: 'annualReports' as Page },
        { title: 'التقارير المالية', page: 'financialReports' as Page },
    ];
  return (
    <>
      <PageHeader title="التقارير" breadcrumb="التقارير" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                    تقارير الجمعية
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    التزاماً بالشفافية، نعرض لكم تقارير الجمعية السنوية والمالية.
                </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-12">
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-4 text-center">التقارير السنوية</h3>
                    {ANNUAL_REPORTS_DATA.length > 0 ? (
                        <ul className="space-y-4">
                            {ANNUAL_REPORTS_DATA.map((report, index) => (
                                <li key={index} className="bg-white border-r-4 border-secondary rounded-lg p-6 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center">
                                        <DocumentTextIcon className="w-8 h-8 text-secondary ml-4" />
                                        <span className="font-semibold text-xl text-gray-800">{report.title}</span>
                                    </div>
                                    <a href={report.href} target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-5 rounded-md text-sm transition-colors">
                                        تحميل
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="bg-white p-12 rounded-lg shadow-md text-center">
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <svg 
                                    className="w-20 h-20 text-gray-300" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                                    />
                                </svg>
                                <h3 className="text-2xl font-bold text-gray-700">قريباً</h3>
                                <p className="text-gray-600 text-lg">
                                    لا توجد تقارير سنوية متاحة حالياً
                                </p>
                                <p className="text-gray-500 text-sm max-w-md">
                                    نحن جمعية ناشئة وسيتم نشر التقارير السنوية فور اكتمالها
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                 <div>
                    <h3 className="text-2xl font-bold text-primary mb-4 text-center">التقارير المالية</h3>
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                        <p className="text-gray-700 mb-4">للاطلاع على القوائم المالية والتقارير الربعية والموازنات التقديرية.</p>
                        <button
                            onClick={() => setCurrentPage('financialReports')}
                            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-md transition-colors mt-auto"
                        >
                            الانتقال للتقارير المالية
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default ReportsPage;
