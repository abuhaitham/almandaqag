
import React from 'react';
// Fix: Corrected import paths to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';
import { REGULATIONS_DATA, DocumentTextIcon } from '../../constants';

const FinancialRegulationPage: React.FC = () => {
    const document = REGULATIONS_DATA.find(d => d.title.includes('اللائحة المالية'));
  return (
    <>
      <PageHeader title="اللائحة المالية" breadcrumb="الحوكمة / اللوائح / اللائحة المالية" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-primary">
                        اللائحة المالية للجمعية
                    </h2>
                    <p className="text-gray-600 mt-4">
                        تنظم هذه اللائحة جميع الشؤون المالية للجمعية، بما في ذلك الموارد المالية والمصروفات، وإعداد الميزانيات والقوائم المالية، بما يضمن الشفافية والمساءلة.
                    </p>
                </div>
                {document ? (
                    <div className="bg-light p-6 rounded-lg flex justify-between items-center">
                        <div className="flex items-center">
                            <DocumentTextIcon className="w-8 h-8 text-primary ml-4" />
                            <span className="font-semibold text-xl text-gray-800">{document.title}</span>
                        </div>
                        <a href={document.href} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-5 rounded-md text-sm transition-colors">
                            تحميل
                        </a>
                    </div>
                ) : (
                    <p className="text-center text-red-500">لم يتم العثور على مستند اللائحة المالية.</p>
                )}
            </div>
        </div>
      </section>
    </>
  );
};

export default FinancialRegulationPage;
