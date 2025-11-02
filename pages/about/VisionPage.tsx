

import React from 'react';
// Fix: Corrected import path to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';

const VisionPage: React.FC = () => {
  return (
    <>
      <PageHeader title="رؤيتنا" breadcrumb="عن الجمعية / رؤيتنا" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-extrabold text-primary mb-6 text-center">رؤيتنا</h2>
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              التميز في تحقيق التنمية الشاملة لمجتمع حيوي، مترابط طموح وفق رؤية المملكة 2030
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionPage;
