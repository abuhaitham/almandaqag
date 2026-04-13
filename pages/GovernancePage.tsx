
import React from 'react';
import PageHeader from '../components/PageHeader';
import { DocumentTextIcon } from '../constants';
import type { Page } from '../App';

interface GovernancePageProps {
  setCurrentPage: (page: Page) => void;
}

const GovernancePage: React.FC<GovernancePageProps> = ({ setCurrentPage }) => {
    const governanceSections = [
        {
            title: 'وثائق الحوكمة',
            description: 'أدلة الحوكمة، النماذج، اللوائح، السياسات، ووثائق الجمعية العمومية.',
            page: 'governanceGuides' as Page,
        },
        {
            title: 'التقارير المالية',
            description: 'التقارير المالية السنوية والقوائم المالية للجمعية.',
            page: 'financialReports' as Page,
        },
    ];

  return (
    <>
      <PageHeader title="الحوكمة" breadcrumb="الحوكمة" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                    حوكمة الجمعية
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    التزاما بأعلى معايير الشفافية والمساءلة، نعرض لكم وثائق الحوكمة والتقارير المالية للجمعية.
                </p>
            </div>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {governanceSections.map((section) => (
                    <div key={section.page} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                        <DocumentTextIcon className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-2xl font-bold text-primary mb-3">{section.title}</h3>
                        <p className="text-gray-600 mb-6">{section.description}</p>
                        <button
                            onClick={() => setCurrentPage(section.page)}
                            className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-6 rounded-md transition-colors mt-auto"
                        >
                            استعراض
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default GovernancePage;
