

import React from 'react';
// Fix: Corrected import path to be relative.
import PageHeader from '../components/PageHeader';

const WomensSectionPage: React.FC = () => {
  return (
    <>
      <PageHeader title="مميزات العضوية" breadcrumb="مميزات العضوية" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary mb-6">
              مميزات العضوية في الجمعية
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              يحصل أعضاء الجمعية التعاونية الزراعية بالمندق على مميزات عديدة منها: الاستفادة من متجر الجمعية بأسعار مناسبة، اختبار جودة المنتجات الزراعية، الاستفادة من مهندسي الزراعة التابعين، تخزين المنتجات بطريقة حديثة وعلمية، وتسويق المنتجات داخل وخارج المنطقة بأسعار مناسبة.
            </p>
            {/* More content can be added here, like specific programs, schedules, etc. */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WomensSectionPage;
