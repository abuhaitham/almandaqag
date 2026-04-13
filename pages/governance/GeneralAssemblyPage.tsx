

import React from 'react';
// Fix: Corrected import paths to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';
import { MEETING_MINUTES_DATA, GENERAL_ASSEMBLY_DOCUMENTS } from '../../constants';
import { DocumentTextIcon } from '../../constants';

const GeneralAssemblyPage: React.FC = () => {
  return (
    <>
      <PageHeader title="الجمعية العمومية" breadcrumb="الحوكمة / الجمعية العمومية" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* محاضر الاجتماعات */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                  محاضر اجتماعات الجمعية العمومية
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                  التزامًا بالشفافية، نتيح لكم الاطلاع على محاضر اجتماعات الجمعية العمومية للأعوام السابقة.
                </p>
              </div>
              <ul className="space-y-4">
                {MEETING_MINUTES_DATA.map((item, index) => (
                  <li key={index} className="bg-white border-r-4 border-primary rounded-lg p-6 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center flex-1">
                      <DocumentTextIcon className="w-8 h-8 text-primary ml-4 flex-shrink-0" />
                      <span className="font-semibold text-xl text-gray-800">{item.title}</span>
                    </div>
                    {item.href === '#' ? (
                      <span className="bg-gray-400 text-white font-bold py-2 px-5 rounded-md text-sm flex-shrink-0">قريبا</span>
                    ) : (
                      <a
                        href={item.href}
                        download
                        className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-5 rounded-md text-sm transition-colors flex-shrink-0"
                      >
                        تحميل
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* وثائق الجمعية العمومية */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                  وثائق الجمعية العمومية
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                  الوثائق والآليات المتعلقة بإدارة العضوية في الجمعية العمومية.
                </p>
              </div>
              <ul className="space-y-4">
                {GENERAL_ASSEMBLY_DOCUMENTS.map((item, index) => (
                  <li key={index} className="bg-white border-r-4 border-primary rounded-lg p-6 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center flex-1">
                      <DocumentTextIcon className="w-8 h-8 text-primary ml-4 flex-shrink-0" />
                      <span className="font-semibold text-xl text-gray-800">{item.title}</span>
                    </div>
                    {item.href === '#' ? (
                      <span className="bg-gray-400 text-white font-bold py-2 px-5 rounded-md text-sm flex-shrink-0">قريبا</span>
                    ) : (
                      <a
                        href={item.href}
                        download
                        className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-5 rounded-md text-sm transition-colors flex-shrink-0"
                      >
                        تحميل
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GeneralAssemblyPage;
