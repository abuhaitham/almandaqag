import React from 'react';
import PageHeader from '../components/PageHeader';
import { DocumentTextIcon } from '../constants';

const BoardPage: React.FC = () => {
  const documents = [
    { title: 'أعضاء مجلس الإدارة', href: '/assets/docs/مجلس-الإدارة-الجديد.pdf' },
    { title: 'توقيع مجلس الإدارة بالاطلاع على اللوائح والسياسات', href: '/assets/docs/توقيع-مجلس-الادارة.pdf' },
  ];

  return (
    <>
      <PageHeader title="مجلس الإدارة" breadcrumb="عن الجمعية / مجلس الإدارة" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                مجلس الإدارة
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                وثائق مجلس الإدارة وقائمة الأعضاء.
              </p>
            </div>
            <ul className="space-y-4">
              {documents.map((item, index) => (
                <li key={index} className="bg-white border-r-4 border-primary rounded-lg p-6 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center flex-1">
                    <DocumentTextIcon className="w-8 h-8 text-primary ml-4 flex-shrink-0" />
                    <span className="font-semibold text-lg text-gray-800">{item.title}</span>
                  </div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-5 rounded-md text-sm transition-colors flex-shrink-0"
                  >
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

export default BoardPage;
