import React from 'react';
import PageHeader from '../../components/PageHeader';
import { PORTRAIT_PLACEHOLDER } from '../../assets/images';

const ExecutiveDirectorPage: React.FC = () => {
  return (
    <>
      <PageHeader title="المدير التنفيذي" breadcrumb="عن الجمعية / المدير التنفيذي" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8">
            <img 
              src={PORTRAIT_PLACEHOLDER} 
              alt="المدير التنفيذي"
              className="w-48 h-48 rounded-full shadow-lg border-4 border-secondary object-cover"
            />
            <div>
              <h2 className="text-3xl font-extrabold text-primary mb-2">
                المدير التنفيذي للجمعية
              </h2>
              <p className="text-2xl font-bold text-gray-800 mb-4">المدير التنفيذي</p>
              <div className="space-y-2">
                <p className="text-lg text-gray-700">
                  <strong>الجوال:</strong> <a href="tel:0505677925" className="hover:text-secondary">0505677925</a>
                </p>
                <p className="text-lg text-gray-700">
                  <strong>البريد الإلكتروني:</strong> <a href="mailto:Mandq.farmer@hotmail.com" className="hover:text-secondary">Mandq.farmer@hotmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExecutiveDirectorPage;