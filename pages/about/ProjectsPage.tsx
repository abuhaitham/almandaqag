import React from 'react';
import PageHeader from '../../components/PageHeader';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <PageHeader title="مشاريعنا" breadcrumb="عن الجمعية / مشاريعنا" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                    سيتم الإعلان عن المشاريع قريباً
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    نعمل حالياً على تطوير مشاريعنا، ترقبوا الإعلان عنها قريباً. (TBD)
                </p>
            </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;