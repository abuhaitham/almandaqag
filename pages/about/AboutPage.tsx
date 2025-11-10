

import React from 'react';
// Fix: Corrected import paths to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';
import { BASIC_DATA } from '../../constants';

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader title="عن الجمعية" breadcrumb="عن الجمعية" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-extrabold text-primary mb-6 text-center">
              جمعية الباحة الخضراء
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              بناءً على نظام الجمعيات والمؤسسات الأهلية الصادر بالمرسوم الملكي رقم (م/8) وتاريخ 19/02/1437هـ فإن هذه الجمعية تم إنشاؤها وفق إجراءات مواءمة جمعية التنمية الاجتماعية الأهلية بالخطة المرخصة
برقم 4028 وتاريخ 22/08/1443هـ
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BASIC_DATA.map((item) => (
                <div key={item.label} className="bg-light p-4 rounded-lg">
                  <p className="font-semibold text-primary">{item.label}</p>
                  <p className="text-gray-800">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
