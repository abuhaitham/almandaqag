

import React from 'react';
// Fix: Corrected import paths to be relative.
import PageHeader from '../components/PageHeader';
import { EVALUATION_RESULTS } from '../constants';

const EvaluationResultsPage: React.FC = () => {
  return (
    <>
      <PageHeader title="نتائج تقييم الجهات المشرفة" breadcrumb="الشفافية / نتائج تقييم الجهات المشرفة" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                نتائج تقييم الجهات المشرفة
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                نعرض لكم نتائج تقييم أداء الجمعية من قبل الجهات المشرفة، التزامًا منا بأعلى معايير الشفافية والحوكمة.
              </p>
            </div>
            <div className="space-y-4">
              {EVALUATION_RESULTS.length > 0 ? (
                EVALUATION_RESULTS.map((result) => (
                  <div key={result.year} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
                    <p className="text-xl font-semibold text-gray-800">
                      نتيجة تقييم عام {result.year}
                    </p>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{result.score}%</p>
                      <a href={result.href} className="text-sm text-secondary hover:underline">
                        عرض التقرير
                      </a>
                    </div>
                  </div>
                ))
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
                      لا توجد نتائج تقييم متاحة حالياً
                    </p>
                    <p className="text-gray-500 text-sm max-w-md">
                      نحن جمعية ناشئة وسيتم نشر نتائج التقييم من الجهات المشرفة فور توفرها
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EvaluationResultsPage;
