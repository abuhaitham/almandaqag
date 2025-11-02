
import React from 'react';
// Fix: Corrected import path to be relative.
import PageHeader from '../components/PageHeader';
import type { Page } from '../App';

interface GovernancePageProps {
  setCurrentPage: (page: Page) => void;
}

const GovernancePage: React.FC<GovernancePageProps> = ({ setCurrentPage }) => {
    const governanceSections = [
        { title: 'أدلة الحوكمة', page: 'governanceGuides' as Page, icon: '📜' },
        { title: 'الخطط', page: 'plans' as Page, icon: '🎯' },
        { title: 'الأنظمة', page: 'systems' as Page, icon: '⚖️' },
        { title: 'النماذج', page: 'forms' as Page, icon: '📄' },
        { title: 'اللوائح', page: 'regulations' as Page, icon: '📑' },
        { title: 'السياسات', page: 'policies' as Page, icon: ' Gavel' },
        { title: 'اللجان والمجالس', page: 'committees' as Page, icon: '👥' },
        { title: 'الجمعية العمومية', page: 'generalAssemblyGov' as Page, icon: '🏛️' },
        { title: 'التقارير المالية', page: 'financialReports' as Page, icon: '📊' },
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
                    التزامًا بأعلى معايير الشفافية والمساءلة، نعرض لكم كل ما يتعلق بحوكمة الجمعية من أدلة وسياسات وتقارير.
                </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {governanceSections.map((section) => (
                    <div key={section.page} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                        <span className="text-4xl mb-4" role="img" aria-label="icon">{section.icon}</span>
                        <h3 className="text-2xl font-bold text-primary mb-4 flex-grow">{section.title}</h3>
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
