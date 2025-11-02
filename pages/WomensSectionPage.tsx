

import React from 'react';
// Fix: Corrected import path to be relative.
import PageHeader from '../components/PageHeader';

const WomensSectionPage: React.FC = () => {
  return (
    <>
      <PageHeader title="القسم النسائي" breadcrumb="القسم النسائي" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary mb-6">
              برامج وأنشطة القسم النسائي
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              يهتم القسم النسائي بتقديم برامج دعوية وثقافية واجتماعية موجهة للنساء والفتيات، تساهم في بناء أسرة مسلمة واعية ومجتمع مترابط.
            </p>
            {/* More content can be added here, like specific programs, schedules, etc. */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WomensSectionPage;
