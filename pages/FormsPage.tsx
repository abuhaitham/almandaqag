

import React from 'react';
// Fix: Corrected import paths to be relative.
import PageHeader from '../components/PageHeader';
import { FORMS_DATA, DocumentTextIcon } from '../constants';

const FormsPage: React.FC = () => {
  return (
    <>
      <PageHeader title="النماذج" breadcrumb="الحوكمة / النماذج" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                    نماذج الجمعية
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    نوفر لكم مجموعة من النماذج الهامة لتسهيل الإجراءات المتعلقة بالجمعية.
                </p>
            </div>
            <ul className="space-y-4">
              {FORMS_DATA.map((item, index) => (
                <li key={index} className="bg-white border-r-4 border-primary rounded-lg p-6 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                        <DocumentTextIcon className="w-8 h-8 text-primary ml-4" />
                        <span className="font-semibold text-xl text-gray-800">{item.title}</span>
                    </div>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-5 rounded-md text-sm transition-colors">
                    تحميل
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormsPage;
