

import React from 'react';
// Fix: Corrected import paths to be relative.
import PageHeader from '../components/PageHeader';
import type { Page } from '../App';

interface TransparencyPageProps {
  setCurrentPage: (page: Page) => void;
}

const TransparencyPage: React.FC<TransparencyPageProps> = ({ setCurrentPage }) => {
    const sections = [
        { title: 'البيانات الأساسية', page: 'basicData' as Page },
        { title: 'التقارير المالية', page: 'financialReports' as Page },
        { title: 'محاضر الاجتماعات', page: 'meetingMinutes' as Page },
        { title: 'نتائج تقييم الجهات المشرفة', page: 'evaluationResults' as Page },
        { title: 'نتائج قياس الرضا', page: 'satisfactionResults' as Page },
    ];
  return (
    <>
      <PageHeader title="الشفافية والإفصاح" breadcrumb="الشفافية" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                    الشفافية والإفصاح
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    إيماناً منا بأهمية الشفافية، نضع بين أيديكم كافة المعلومات والتقارير التي تعكس أداء الجمعية.
                </p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sections.map((section) => (
                    <div key={section.page} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold text-primary mb-4">{section.title}</h3>
                        <button
                            onClick={() => setCurrentPage(section.page)}
                            className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-6 rounded-md transition-colors"
                        >
                            عرض
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default TransparencyPage;
