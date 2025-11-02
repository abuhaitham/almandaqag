import React from 'react';
import PageHeader from '../../components/PageHeader';

const StructurePage: React.FC = () => {
  return (
    <>
      <PageHeader title="الهيكل التنظيمي" breadcrumb="عن الجمعية / الهيكل التنظيمي" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-3xl font-extrabold text-primary mb-6">
              الهيكل التنظيمي للجمعية
            </h2>
            <div className="w-full">
              <div className="flex flex-col items-center gap-6">
                <div className="w-full max-w-xl text-center bg-primary text-white font-bold py-4 px-6 rounded-lg shadow">
                  الجمعية العمومية
                </div>
                <div className="w-1 h-6 bg-primary/30 rounded" />
                <div className="w-full max-w-xl text-center bg-secondary text-white font-bold py-4 px-6 rounded-lg shadow">
                  مجلس الإدارة
                </div>
                <div className="w-1 h-6 bg-secondary/30 rounded" />
                <div className="w-full max-w-xl text-center bg-gray-100 text-gray-800 font-bold py-4 px-6 rounded-lg border border-gray-200 shadow">
                  الإدارة التنفيذية
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StructurePage;