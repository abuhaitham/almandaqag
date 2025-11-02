

import React from 'react';
// Fix: Corrected import paths to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';
import { 
  GOVERNANCE_GUIDES, 
  FORMS_DATA, 
  REGULATIONS_DATA, 
  POLICIES_DATA, 
  GENERAL_ASSEMBLY_DOCUMENTS 
} from '../../constants';
import { DocumentTextIcon } from '../../constants';

const GovernanceGuidesPage: React.FC = () => {
  const sections = [
    {
      title: 'أدلة الحوكمة',
      description: 'توضح هذه الأدلة السياسات والمعايير التي نتبعها لضمان أعلى مستويات الحوكمة والشفافية.',
      data: GOVERNANCE_GUIDES
    },
    {
      title: 'النماذج',
      description: 'نوفر لكم مجموعة من النماذج الهامة لتسهيل الإجراءات المتعلقة بالجمعية.',
      data: FORMS_DATA
    },
    {
      title: 'اللوائح',
      description: 'مجموعة اللوائح الأساسية والتنفيذية التي تحكم عمل الجمعية وتوضح حقوق وواجبات جميع الأطراف.',
      data: REGULATIONS_DATA
    },
    {
      title: 'السياسات',
      description: 'مجموعة السياسات التي تنظم عمل الجمعية وتضمن التزامها بأعلى معايير الحوكمة والشفافية.',
      data: POLICIES_DATA
    },
    {
      title: 'الجمعية العمومية',
      description: 'الوثائق المتعلقة بالجمعية العمومية وإجراءات العضوية.',
      data: GENERAL_ASSEMBLY_DOCUMENTS
    }
  ];

  return (
    <>
      <PageHeader title="وثائق الحوكمة" breadcrumb="الحوكمة / وثائق الحوكمة" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                وثائق الحوكمة والشفافية
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                جميع الوثائق والمستندات المتعلقة بالحوكمة والشفافية في الجمعية متاحة للتحميل والاطلاع.
              </p>
            </div>

            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-16">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">{section.title}</h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>
                <ul className="space-y-4">
                  {section.data.map((item, index) => (
                    <li 
                      key={index} 
                      className="bg-white border-r-4 border-primary rounded-lg p-6 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center flex-1">
                        <DocumentTextIcon className="w-8 h-8 text-primary ml-4 flex-shrink-0" />
                        <span className="font-semibold text-lg text-gray-800">{item.title}</span>
                      </div>
                      <a 
                        href={item.href} 
                        download
                        className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-5 rounded-md text-sm transition-colors flex-shrink-0"
                      >
                        تحميل
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GovernanceGuidesPage;
