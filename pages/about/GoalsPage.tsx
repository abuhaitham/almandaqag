

import React from 'react';
// Fix: Corrected import path to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';

const GoalsPage: React.FC = () => {
    const goals = [
        "زيادة الإنتاج الزراعي والحيواني.",
        "توفير البذور ومدخلات الإنتاج الزراعي.",
        "الإرشاد الزراعي ومكافحة الحشرات.",
        "توفير الآلات الزراعية وأنظمة الري بالتنقيط.",
        "التبريد وتخزين الفائض من المنتجات الزراعية.",
        "تشجيع المزارعين باستيعاب المنتجات بأسعار مناسبة.",
        "إقامة المهرجانات للتعريف بالمنتجات الزراعية المحلية."
    ];

  return (
    <>
      <PageHeader title="أهدافنا" breadcrumb="عن الجمعية / أهدافنا" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-extrabold text-primary mb-6 text-center">أهدافنا الاستراتيجية</h2>
            <ul className="space-y-4">
                {goals.map((goal, index) => (
                     <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="text-lg text-gray-700">{goal}</span>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoalsPage;
