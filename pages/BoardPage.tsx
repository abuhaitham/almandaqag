import React from 'react';
import PageHeader from '../components/PageHeader';
import { DocumentTextIcon } from '../constants';

const BoardPage: React.FC = () => {
  const documents = [
    { title: 'أعضاء مجلس الإدارة', href: '/docs/مجلس-الإدارة-الجديد.pdf' },
    { title: 'توقيع مجلس الإدارة بالاطلاع على اللوائح والسياسات', href: '/docs/توقيع-مجلس-الادارة.pdf' },
  ];

  const boardMinutes = [
    // 2026
    { title: 'محضر اجتماع مجلس الإدارة الرابع 2026', href: '/docs/محضر-مجلس-الادارة-4-2026.pdf' },
    { title: 'محضر اجتماع مجلس الإدارة الثالث 2026', href: '/docs/محضر-مجلس-الادارة-3-2026.pdf' },
    { title: 'محضر اجتماع مجلس الإدارة الثاني 2026', href: '/docs/محضر-مجلس-الادارة-2-2026.pdf' },
    { title: 'محضر اجتماع مجلس الإدارة الأول 2026', href: '/docs/محضر-مجلس-الادارة-1-2026.pdf' },
    // 2025
    { title: 'محضر اجتماع مجلس الإدارة السادس 2025', href: '/docs/محضر-مجلس-الادارة-6-2025.pdf' },
    { title: 'محضر اجتماع مجلس الإدارة الخامس 2025', href: '/docs/محضر-مجلس-الادارة-5-2025.pdf' },
    { title: 'محضر اجتماع مجلس الإدارة الرابع 2025', href: '/docs/محضر-مجلس-الادارة-4-2025.pdf' },
    { title: 'محضر اجتماع مجلس الإدارة الثالث 2025', href: '/docs/محضر-مجلس-الادارة-3-2025.pdf' },
    { title: 'محضر اجتماع مجلس الإدارة الثاني 2025', href: '/docs/محضر-مجلس-الادارة-2-2025.pdf' },
    { title: 'محضر اجتماع مجلس الإدارة الأول 2025', href: '/docs/محضر-مجلس-الادارة-1-2025.pdf' },
    // 2024
    { title: 'محضر اجتماع مجلس الإدارة الأول 2024', href: '/docs/محضر-مجلس-الادارة-1-2024.pdf' },
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

            {/* محاضر مجلس الإدارة */}
            <div className="text-center mt-16 mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                محاضر مجلس الإدارة
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                محاضر اجتماعات مجلس الإدارة للأعوام السابقة.
              </p>
            </div>
            <ul className="space-y-4">
              {boardMinutes.map((item, index) => (
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
