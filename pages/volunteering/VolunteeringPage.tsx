

import React from 'react';
// Fix: Corrected import paths to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';
import type { Page } from '../../App';

interface VolunteeringPageProps {
  setCurrentPage: (page: Page) => void;
}

const VolunteeringPage: React.FC<VolunteeringPageProps> = ({ setCurrentPage }) => {
  return (
    <>
      <PageHeader title="التطوع" breadcrumb="التطوع" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                    كن جزءاً من فريق الخير
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    التطوع قيمة إنسانية عظيمة، ووسيلة للمشاركة المجتمعية الفاعلة. ندعوكم للانضمام إلينا والمساهمة في تحقيق رسالتنا.
                </p>
                
                {/* زر المنصة الوطنية للعمل التطوعي */}
                <div className="mt-8">
                    <a
                        href="https://nvg.gov.sa/public"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <span className="text-lg">سجل في المنصة الوطنية للعمل التطوعي</span>
                    </a>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default VolunteeringPage;
