

import React from 'react';
// Fix: Corrected import path to be relative.
import PageHeader from '../components/PageHeader';

const MensSectionPage: React.FC = () => {
  return (
    <>
      <PageHeader title="القسم الرجالي" breadcrumb="القسم الرجالي" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary mb-6">
              برامج وأنشطة القسم الرجالي
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              يقدم القسم الرجالي مجموعة متنوعة من البرامج الدعوية والتعليمية والاجتماعية التي تستهدف جميع فئات المجتمع من الرجال والشباب.
            </p>
            {/* More content can be added here, like specific programs, schedules, etc. */}
          </div>
        </div>
      </section>
    </>
  );
};

export default MensSectionPage;
