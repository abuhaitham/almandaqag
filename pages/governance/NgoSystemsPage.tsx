

import React from 'react';
// Fix: Corrected import paths to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';
import { SYSTEMS_DATA } from '../../constants';

const NgoSystemsPage: React.FC = () => {
  const document = SYSTEMS_DATA.find(d => d.title.includes('نظام الجمعيات'));

  return (
    <>
      <PageHeader title="نظام الجمعيات والمؤسسات الأهلية" breadcrumb="الحوكمة / الأنظمة / نظام الجمعيات والمؤسسات الأهلية" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-extrabold text-primary mb-6 text-center">
              نظام الجمعيات والمؤسسات الأهلية
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              نلتزم في جمعيتنا بتطبيق نظام الجمعيات والمؤسسات الأهلية الصادر عن الجهات المختصة، والذي يهدف إلى تنظيم عمل القطاع غير الربحي وتعزيز دوره في التنمية.
            </p>
            {document && (
              <div className="text-center">
                <a href={document.href} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition-colors inline-block">
                  تحميل النظام
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default NgoSystemsPage;
